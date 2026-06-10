const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const core = require('../public/js/core.js');

test('filterLogs filters by normalized status', function () {
  const logs = [
    { status: 'success' },
    { status: 'error' },
    { status: 'warning' },
    { status: 'Success' }
  ];

  const filtered = core.filterLogs(logs, 'success');
  assert.equal(filtered.length, 2);
  assert.equal(filtered[0].status, 'success');
  assert.equal(filtered[1].status, 'Success');
});

test('paginate clamps page bounds and returns item window', function () {
  const result = core.paginate([1, 2, 3, 4, 5], 9, 2);
  assert.equal(result.page, 3);
  assert.equal(result.totalPages, 3);
  assert.deepEqual(result.items, [5]);
});

test('calculateLogSummary returns counts and success rate', function () {
  const summary = core.calculateLogSummary([
    { status: 'success' },
    { status: 'error' },
    { status: 'success' }
  ]);

  assert.deepEqual(summary, {
    total: 3,
    successCount: 2,
    errorCount: 1,
    successRate: 66.7
  });
});

test('validateSupportRequest requires subject/category/details', function () {
  const validation = core.validateSupportRequest({
    subject: '  ',
    category: '',
    details: ''
  });

  assert.equal(validation.isValid, false);
  assert.equal(validation.errors.subject, '件名を入力してください。');
  assert.equal(validation.errors.category, 'カテゴリを選択してください。');
  assert.equal(validation.errors.details, '詳細を入力してください。');
});

test('makeTicket returns normalized ticket shape', function () {
  const fakeDate = new Date('2026-04-26T00:00:00.000Z');
  const ticket = core.makeTicket({ subject: ' Test ', category: 'error' }, fakeDate);

  assert.match(ticket.id, /^ticket-/);
  assert.equal(ticket.subject, 'Test');
  assert.equal(ticket.category, 'error');
  assert.equal(ticket.status, 'in_progress');
  assert.equal(ticket.createdAt, '2026-04-26T00:00:00.000Z');
});

test('escapeHtml escapes HTML-sensitive chars', function () {
  assert.equal(core.escapeHtml('<b>&"\''), '&lt;b&gt;&amp;&quot;&#39;');
});

test('normalizeStatus maps spreadsheet integration errors to error', function () {
  assert.equal(core.normalizeStatus('auth_error'), 'error');
  assert.equal(core.normalizeStatus('integration_error'), 'error');
  assert.equal(core.normalizeStatus('sync_error'), 'error');
  assert.equal(core.normalizeStatus('認証エラー'), 'error');
  assert.equal(core.normalizeStatus('連携エラー'), 'error');
});

test('calculateLogSummary counts integration errors as failures', function () {
  const summary = core.calculateLogSummary([
    { status: 'success' },
    { status: 'integration_error' },
    { status: 'auth_error' }
  ]);

  assert.deepEqual(summary, {
    total: 3,
    successCount: 1,
    errorCount: 2,
    successRate: 33.3
  });
});

test('public index routes root traffic to dashboard', function () {
  const indexPath = path.join(__dirname, '..', 'public', 'index.html');
  const html = fs.readFileSync(indexPath, 'utf8');

  assert.match(html, /url=\/dashboard\.html/);
  assert.match(html, /window\.location\.replace\('\/dashboard\.html'\)/);
});

test('normalizeEmail trims and lowercases value', function () {
  assert.equal(core.normalizeEmail('  Admin@Example.COM  '), 'admin@example.com');
});

test('normalizeUserRole normalizes whitespace and separators', function () {
  assert.equal(core.normalizeUserRole(' Super Admin '), 'super_admin');
  assert.equal(core.normalizeUserRole('workspace-admin'), 'workspace_admin');
});

test('isAdminRole accepts configured admin aliases only', function () {
  assert.equal(core.isAdminRole('admin'), true);
  assert.equal(core.isAdminRole('owner'), true);
  assert.equal(core.isAdminRole('super admin'), true);
  assert.equal(core.isAdminRole('viewer'), false);
});

test('canMutateFrSettingsEndpoint requires known endpoint and admin role', function () {
  assert.equal(core.canMutateFrSettingsEndpoint('fr01.template.update', { role: 'admin' }), true);
  assert.equal(core.canMutateFrSettingsEndpoint('fr02.recipients.add', { role: 'viewer' }), false);
  assert.equal(core.canMutateFrSettingsEndpoint('fr02.recipients.add', { role: '' }), false);
  assert.equal(core.canMutateFrSettingsEndpoint('fr99.unknown', { role: 'admin' }), false);
});

test('authorizeFrSettingsEndpoint returns consistent status/error format', function () {
  const allowed = core.authorizeFrSettingsEndpoint('fr01.template.update', { role: 'admin' });
  assert.deepEqual(allowed, {
    ok: true,
    status: 200,
    error: null
  });

  const forbidden = core.authorizeFrSettingsEndpoint('fr01.template.update', { role: 'viewer' });
  assert.equal(forbidden.ok, false);
  assert.equal(forbidden.status, 403);
  assert.equal(forbidden.error.code, 'admin_authorization_required');
  assert.equal(forbidden.error.message, 'この設定の変更には管理者権限が必要です。');

  const unknownEndpoint = core.authorizeFrSettingsEndpoint('fr99.unknown', { role: 'admin' });
  assert.equal(unknownEndpoint.ok, false);
  assert.equal(unknownEndpoint.status, 404);
  assert.equal(unknownEndpoint.error.code, 'fr_settings_endpoint_unknown');
  assert.equal(unknownEndpoint.error.message, '設定操作が見つかりません。画面を再読み込みしてから再度お試しください。');
});

test('sanitizeMonthlyReportRecipients removes invalid/duplicate entries and applies cap', function () {
  const sanitized = core.sanitizeMonthlyReportRecipients([
    ' sales@example.com ',
    'invalid',
    'SALES@example.com',
    'ops@example.com',
    'owner@example.com'
  ], 2);

  assert.deepEqual(sanitized, ['sales@example.com', 'ops@example.com']);
});

test('resolveMonthlyReportRecipientCap normalizes configured and fallback values', function () {
  assert.equal(core.resolveMonthlyReportRecipientCap('10'), 10);
  assert.equal(core.resolveMonthlyReportRecipientCap(3.9), 3);
  assert.equal(core.resolveMonthlyReportRecipientCap('0'), 5);
  assert.equal(core.resolveMonthlyReportRecipientCap('invalid', 8), 8);
});

test('validateMonthlyReportRecipient enforces empty, format, duplicate, and cap constraints', function () {
  const duplicate = core.validateMonthlyReportRecipient({
    email: 'ops@example.com',
    currentRecipients: ['ops@example.com'],
    maxRecipients: 5
  });
  assert.equal(duplicate.isValid, false);
  assert.equal(duplicate.error, 'このメールアドレスはすでに登録されています。');

  const invalidFormat = core.validateMonthlyReportRecipient({
    email: 'ops-example.com',
    currentRecipients: [],
    maxRecipients: 5
  });
  assert.equal(invalidFormat.isValid, false);
  assert.equal(invalidFormat.error, 'メールアドレスの形式が正しくありません。');

  const overCap = core.validateMonthlyReportRecipient({
    email: 'new@example.com',
    currentRecipients: ['a@example.com'],
    maxRecipients: 1
  });
  assert.equal(overCap.isValid, false);
  assert.equal(overCap.error, '送信先は最大1件まで登録できます。');

  const valid = core.validateMonthlyReportRecipient({
    email: ' New@Example.com ',
    currentRecipients: ['ops@example.com'],
    maxRecipients: 5
  });
  assert.equal(valid.isValid, true);
  assert.equal(valid.normalizedEmail, 'new@example.com');
});

test('validateLineReplyTemplate rejects unknown placeholders', function () {
  const validation = core.validateLineReplyTemplate('こんにちは {{customer_name}} {{foo_bar}}');

  assert.equal(validation.isValid, false);
  assert.match(validation.errors[0], /未対応のプレースホルダー/);
});

test('interpolateLineReplyTemplate renders known placeholders', function () {
  const rendered = core.interpolateLineReplyTemplate(
    '{{customer_name}} 様 / {{reservation_date}} / {{inquiry_summary}}',
    {
      customer_name: '山田太郎',
      reservation_date: '2026/05/10',
      inquiry_summary: '配送状況の確認'
    }
  );

  assert.equal(rendered, '山田太郎 様 / 2026/05/10 / 配送状況の確認');
});

function createMemoryStorage() {
  const store = {};
  return {
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
    },
    setItem(key, value) {
      store[key] = String(value);
    },
    removeItem(key) {
      delete store[key];
    }
  };
}

test('trackAdoptionMetric writes counters and events', function () {
  const storage = createMemoryStorage();
  core.trackAdoptionMetric('fr01_template_updated', { templateLength: 120 }, { storage: storage, sink: function () {} });

  const snapshot = core.getAdoptionMetricsSnapshot({ storage: storage });
  assert.equal(snapshot.counters.fr01_template_updated, 1);
  assert.equal(snapshot.events.length, 1);
  assert.equal(snapshot.events[0].event, 'fr01_template_updated');
  assert.equal(snapshot.events[0].properties.templateLength, 120);
});

test('trackAdoptionMetric skips duplicate dedupe keys', function () {
  const storage = createMemoryStorage();
  const first = core.trackAdoptionMetric('fr02_monthly_report_dispatch_success_observed', {}, {
    storage: storage,
    dedupeKey: 'dispatch|2026-04-26|月次レポート生成',
    sink: function () {}
  });
  const second = core.trackAdoptionMetric('fr02_monthly_report_dispatch_success_observed', {}, {
    storage: storage,
    dedupeKey: 'dispatch|2026-04-26|月次レポート生成',
    sink: function () {}
  });

  const snapshot = core.getAdoptionMetricsSnapshot({ storage: storage });
  assert.equal(first.tracked, true);
  assert.equal(second.tracked, false);
  assert.equal(snapshot.counters.fr02_monthly_report_dispatch_success_observed, 1);
  assert.equal(snapshot.events.length, 1);
});

test('trackAdoptionMetric enforces max event retention', function () {
  const storage = createMemoryStorage();

  core.trackAdoptionMetric('metric_a', {}, { storage: storage, maxEvents: 2, now: new Date('2026-04-26T00:00:00.000Z'), sink: function () {} });
  core.trackAdoptionMetric('metric_b', {}, { storage: storage, maxEvents: 2, now: new Date('2026-04-26T00:01:00.000Z'), sink: function () {} });
  core.trackAdoptionMetric('metric_c', {}, { storage: storage, maxEvents: 2, now: new Date('2026-04-26T00:02:00.000Z'), sink: function () {} });

  const snapshot = core.getAdoptionMetricsSnapshot({ storage: storage });
  assert.equal(snapshot.events.length, 2);
  assert.deepEqual(snapshot.events.map(function (event) {
    return event.event;
  }), ['metric_b', 'metric_c']);
});
