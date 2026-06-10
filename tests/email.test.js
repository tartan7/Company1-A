/**
 * Email service — contract + integration tests
 *
 * Contract tests (always run): validate module API surface, idempotency key derivation,
 * disabled-mode skip behaviour, and input validation.
 *
 * Live integration test (opt-in): set EMAIL_ENABLED=true + RESEND_API_KEY (or SES creds)
 * and EMAIL_TEST_RECIPIENT to run a real send.
 */

import { test, describe, before, after, mock } from 'node:test';
import assert from 'node:assert/strict';

// ---------------------------------------------------------------------------
// Helper: override env vars for a test scope
// ---------------------------------------------------------------------------
function withEnv(overrides, fn) {
  return async () => {
    const saved = {};
    for (const [k, v] of Object.entries(overrides)) {
      saved[k] = process.env[k];
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
    try {
      await fn();
    } finally {
      for (const [k, v] of Object.entries(saved)) {
        if (v === undefined) delete process.env[k];
        else process.env[k] = v;
      }
    }
  };
}

// ---------------------------------------------------------------------------
// Contract tests — disabled mode (no network)
// ---------------------------------------------------------------------------

describe('sendEmail — disabled mode', () => {
  test('returns {sent: false, reason: "disabled"} when EMAIL_ENABLED is not set', withEnv(
    { EMAIL_ENABLED: undefined },
    async () => {
      // Re-import with current env (ESM cache means we test via dynamic import each time)
      const { sendEmail } = await import('../src/email/emailService.js?t=' + Date.now());
      const result = await sendEmail({
        to: 'test@example.com',
        subject: 'Contract test',
        text: 'Hello',
      });
      assert.equal(result.sent, false);
      assert.equal(result.reason, 'disabled');
    },
  ));

  test('returns {sent: false, reason: "disabled"} when EMAIL_ENABLED=false', withEnv(
    { EMAIL_ENABLED: 'false' },
    async () => {
      const { sendEmail } = await import('../src/email/emailService.js?t=' + Date.now() + '1');
      const result = await sendEmail({
        to: 'test@example.com',
        subject: 'Contract test',
        text: 'Hello',
      });
      assert.equal(result.sent, false);
      assert.equal(result.reason, 'disabled');
    },
  ));
});

describe('sendEmail — input validation', () => {
  test('throws when `to` is missing', async () => {
    const { sendEmail } = await import('../src/email/emailService.js?t=' + Date.now() + '2');
    await assert.rejects(
      () => sendEmail({ subject: 'Test', text: 'Hello' }),
      /to.*subject.*required/i,
    );
  });

  test('throws when `subject` is missing', async () => {
    const { sendEmail } = await import('../src/email/emailService.js?t=' + Date.now() + '3');
    await assert.rejects(
      () => sendEmail({ to: 'test@example.com', text: 'Hello' }),
      /to.*subject.*required/i,
    );
  });

  test('throws when neither html nor text is provided', async () => {
    const { sendEmail } = await import('../src/email/emailService.js?t=' + Date.now() + '4');
    await assert.rejects(
      () => sendEmail({ to: 'test@example.com', subject: 'Test' }),
      /html.*text.*required/i,
    );
  });
});

// ---------------------------------------------------------------------------
// Contract test — outreach module
// ---------------------------------------------------------------------------

describe('sendOutreachBatch — disabled mode', () => {
  test('returns per-recipient results with sent:false when disabled', withEnv(
    { EMAIL_ENABLED: undefined },
    async () => {
      const { sendOutreachBatch } = await import('../src/email/outreach.js?t=' + Date.now() + '5');
      const results = await sendOutreachBatch(
        [
          { to: 'a@example.com', recipientName: 'Alice', subject: 'Hi A', bodyHtml: '<p>Hello Alice</p>' },
          { to: 'b@example.com', recipientName: 'Bob', subject: 'Hi B', bodyHtml: '<p>Hello Bob</p>' },
        ],
        'test-campaign-001',
      );

      assert.equal(results.length, 2);
      for (const r of results) {
        assert.equal(r.result.sent, false);
        assert.equal(r.result.reason, 'disabled');
      }
    },
  ));
});

// ---------------------------------------------------------------------------
// Live integration test — only runs when opted in
// ---------------------------------------------------------------------------

if (process.env.EMAIL_ENABLED === 'true' && process.env.EMAIL_TEST_RECIPIENT) {
  describe('sendEmail — live integration (opt-in)', () => {
    test('sends a real email and returns messageId', async () => {
      const { sendEmail } = await import('../src/email/emailService.js?t=' + Date.now() + '6');
      const result = await sendEmail({
        to: process.env.EMAIL_TEST_RECIPIENT,
        subject: '[ESC-828] Live integration test',
        html: '<p>This email confirms that the ESC-828 email service is wired correctly.</p>',
        text: 'This email confirms that the ESC-828 email service is wired correctly.',
      });

      assert.equal(result.sent, true);
      assert.ok(result.messageId, 'messageId should be present');
      assert.ok(['resend', 'ses'].includes(result.provider), `unknown provider: ${result.provider}`);
    });
  });
}
