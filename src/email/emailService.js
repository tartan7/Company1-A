/**
 * Outbound email service — transactional provider integration.
 *
 * Provider: Resend (https://resend.com) by default.
 * Swap to AWS SES by setting EMAIL_PROVIDER=ses and the SES env vars.
 *
 * Required env vars:
 *   EMAIL_ENABLED         "true" to enable sends in non-dev environments
 *   EMAIL_PROVIDER        "resend" (default) | "ses"
 *   RESEND_API_KEY        Resend API key (when EMAIL_PROVIDER=resend)
 *   EMAIL_FROM            Verified sender address  e.g. outreach@unitecube.jp
 *   AWS_REGION            AWS region (when EMAIL_PROVIDER=ses)
 *   AWS_ACCESS_KEY_ID     AWS creds (when EMAIL_PROVIDER=ses)
 *   AWS_SECRET_ACCESS_KEY AWS creds (when EMAIL_PROVIDER=ses)
 */

import { createHash } from 'node:crypto';

const ENABLED = process.env.EMAIL_ENABLED === 'true';
const PROVIDER = process.env.EMAIL_PROVIDER ?? 'resend';
const FROM = process.env.EMAIL_FROM ?? 'outreach@unitecube.jp';

// ---------------------------------------------------------------------------
// Provider adapters
// ---------------------------------------------------------------------------

async function sendViaResend({ to, subject, html, text, idempotencyKey }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is not set');

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    ...(idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : {}),
  };

  const body = JSON.stringify({ from: FROM, to: [to], subject, html, text });
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers,
    body,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw Object.assign(
      new Error(`Resend API error ${res.status}: ${data.message ?? 'unknown'}`),
      { statusCode: res.status, provider: 'resend', raw: data },
    );
  }
  return { messageId: data.id, provider: 'resend' };
}

async function sendViaSes({ to, subject, html, text }) {
  // Lazy-load the AWS SDK so the service doesn't hard-require it when using Resend.
  const { SESClient, SendEmailCommand } = await import('@aws-sdk/client-ses').catch(() => {
    throw new Error('@aws-sdk/client-ses is not installed — add it to package.json or use EMAIL_PROVIDER=resend');
  });

  const client = new SESClient({ region: process.env.AWS_REGION ?? 'ap-northeast-1' });
  const cmd = new SendEmailCommand({
    Source: FROM,
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: subject },
      Body: {
        ...(html ? { Html: { Data: html } } : {}),
        ...(text ? { Text: { Data: text } } : {}),
      },
    },
  });

  const out = await client.send(cmd);
  return { messageId: out.MessageId, provider: 'ses' };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Send an outbound email.
 *
 * @param {object} opts
 * @param {string} opts.to           Recipient email address
 * @param {string} opts.subject      Email subject line
 * @param {string} [opts.html]       HTML body (at least one of html/text required)
 * @param {string} [opts.text]       Plain-text body
 * @param {string} [opts.idempotencyKey]  Caller-supplied key; auto-derived from to+subject if omitted
 * @returns {Promise<{sent: boolean, messageId?: string, provider?: string, reason?: string}>}
 */
export async function sendEmail({ to, subject, html, text, idempotencyKey }) {
  if (!to || !subject) throw new Error('sendEmail: `to` and `subject` are required');
  if (!html && !text) throw new Error('sendEmail: at least one of `html` or `text` is required');

  // Derive idempotency key from content when not provided by caller.
  const iKey =
    idempotencyKey ??
    createHash('sha256').update(`${to}:${subject}:${html ?? text}`).digest('hex').slice(0, 32);

  if (!ENABLED) {
    console.log(JSON.stringify({
      level: 'info',
      event: 'email_skipped',
      reason: 'EMAIL_ENABLED is not true',
      to,
      subject,
      idempotencyKey: iKey,
    }));
    return { sent: false, reason: 'disabled' };
  }

  console.log(JSON.stringify({
    level: 'info',
    event: 'email_send_attempt',
    provider: PROVIDER,
    to,
    subject,
    idempotencyKey: iKey,
  }));

  try {
    const result =
      PROVIDER === 'ses'
        ? await sendViaSes({ to, subject, html, text })
        : await sendViaResend({ to, subject, html, text, idempotencyKey: iKey });

    console.log(JSON.stringify({
      level: 'info',
      event: 'email_send_success',
      provider: result.provider,
      messageId: result.messageId,
      to,
      subject,
      idempotencyKey: iKey,
    }));

    return { sent: true, ...result };
  } catch (err) {
    console.error(JSON.stringify({
      level: 'error',
      event: 'email_send_failure',
      provider: PROVIDER,
      to,
      subject,
      idempotencyKey: iKey,
      error: err.message,
      statusCode: err.statusCode ?? null,
    }));
    throw err;
  }
}
