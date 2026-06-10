/**
 * Growth outreach send action.
 *
 * Callable entry-point for ESC-823 (Growth execute email outreach).
 * Wraps sendEmail with outreach-specific defaults and idempotency.
 *
 * References: ESC-828, ESC-826, ESC-823
 */

import { sendEmail } from './emailService.js';
import { createHash } from 'node:crypto';

/**
 * Send a Growth outreach email to a single recipient.
 *
 * @param {object} opts
 * @param {string} opts.to               Recipient email
 * @param {string} opts.recipientName    Display name used in body
 * @param {string} opts.subject          Email subject
 * @param {string} opts.bodyHtml         HTML email body
 * @param {string} [opts.bodyText]       Plain-text fallback
 * @param {string} [opts.campaignId]     Campaign identifier used to scope idempotency key
 * @returns {Promise<{sent: boolean, messageId?: string, provider?: string, reason?: string}>}
 */
export async function sendOutreachEmail({ to, recipientName, subject, bodyHtml, bodyText, campaignId }) {
  // Idempotency key scoped to campaign + recipient — prevents duplicate sends on retries.
  const idempotencyKey = createHash('sha256')
    .update(`outreach:${campaignId ?? 'default'}:${to}`)
    .digest('hex')
    .slice(0, 32);

  return sendEmail({
    to,
    subject,
    html: bodyHtml,
    text: bodyText,
    idempotencyKey,
  });
}

/**
 * Send outreach to a list of recipients.
 * Sends sequentially to respect provider rate limits; returns per-recipient results.
 *
 * @param {Array<{to: string, recipientName: string, subject: string, bodyHtml: string, bodyText?: string}>} recipients
 * @param {string} [campaignId]
 * @returns {Promise<Array<{to: string, result: object, error?: string}>>}
 */
export async function sendOutreachBatch(recipients, campaignId) {
  const results = [];
  for (const recipient of recipients) {
    try {
      const result = await sendOutreachEmail({ ...recipient, campaignId });
      results.push({ to: recipient.to, result });
    } catch (err) {
      results.push({ to: recipient.to, result: null, error: err.message });
    }
  }
  return results;
}
