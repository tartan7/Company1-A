(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
    return;
  }
  root.UniteCubeCore = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const STATUS_LABELS = {
    success: '成功',
    error: '失敗',
    warning: '警告',
    running: '実行中',
    paused: '停止中',
    active: '稼働中'
  };

  const CATEGORY_LABELS = {
    change: '変更依頼',
    error: 'エラー報告',
    other: 'その他'
  };

  const DEFAULT_MONTHLY_REPORT_RECIPIENT_CAP = 5;
  const ADMIN_ROLE_ALIASES = {
    admin: true,
    owner: true,
    super_admin: true,
    workspace_admin: true
  };
  const FR_SETTINGS_ENDPOINT_POLICIES = {
    'fr01.template.update': ['admin', 'owner', 'super_admin', 'workspace_admin'],
    'fr02.recipients.add': ['admin', 'owner', 'super_admin', 'workspace_admin'],
    'fr02.recipients.remove': ['admin', 'owner', 'super_admin', 'workspace_admin']
  };

  const LINE_REPLY_TEMPLATE_DEFAULT =
    '{{customer_name}} 様\n' +
    'お問い合わせありがとうございます。\n' +
    'ご予約日 {{reservation_date}} の件は担当者が確認し、順次ご案内します。\n' +
    'ご用件: {{inquiry_summary}}';

  const LINE_REPLY_ALLOWED_PLACEHOLDERS = {
    customer_name: '顧客名',
    reservation_date: '予約日',
    inquiry_summary: '問い合わせ内容'
  };
  const ADOPTION_METRICS_STORAGE_KEY = 'unitecube_adoption_metrics_v1';
  const ADOPTION_METRICS_MAX_EVENTS = 300;
  const ADOPTION_METRICS_MAX_DEDUPE_KEYS = 500;

  function escapeHtml(value) {
    return String(value).replace(/[<>&"']/g, function (char) {
      return {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;'
      }[char];
    });
  }

  function normalizeStatus(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (!normalized) {
      return '';
    }

    const aliases = {
      success: 'success',
      ok: 'success',
      error: 'error',
      failed: 'error',
      auth_error: 'error',
      authentication_error: 'error',
      integration_error: 'error',
      sync_error: 'error',
      linkage_error: 'error',
      '認証エラー': 'error',
      '連携エラー': 'error',
      warning: 'warning',
      warn: 'warning',
      running: 'running',
      paused: 'paused',
      active: 'active'
    };

    return aliases[normalized] || normalized;
  }

  function filterLogs(logs, status) {
    const normalizedStatus = normalizeStatus(status);
    if (!normalizedStatus) {
      return logs.slice();
    }
    return logs.filter(function (log) {
      return normalizeStatus(log.status) === normalizedStatus;
    });
  }

  function paginate(items, page, pageSize) {
    const safePageSize = Math.max(1, Number(pageSize) || 1);
    const totalPages = Math.max(1, Math.ceil(items.length / safePageSize));
    const currentPage = Math.min(Math.max(1, Number(page) || 1), totalPages);
    const start = (currentPage - 1) * safePageSize;

    return {
      page: currentPage,
      pageSize: safePageSize,
      totalPages: totalPages,
      totalItems: items.length,
      items: items.slice(start, start + safePageSize)
    };
  }

  function calculateLogSummary(logs) {
    const total = logs.length;
    const successCount = logs.filter(function (log) {
      return normalizeStatus(log.status) === 'success';
    }).length;
    const errorCount = logs.filter(function (log) {
      return normalizeStatus(log.status) === 'error';
    }).length;

    return {
      total: total,
      successCount: successCount,
      errorCount: errorCount,
      successRate: total === 0 ? 0 : Number(((successCount / total) * 100).toFixed(1))
    };
  }

  function validateSupportRequest(input) {
    const errors = {};
    const subject = String(input.subject || '').trim();
    const category = String(input.category || '').trim();
    const details = String(input.details || '').trim();

    if (!subject) {
      errors.subject = '件名を入力してください。';
    }
    if (!category) {
      errors.category = 'カテゴリを選択してください。';
    }
    if (!details) {
      errors.details = '詳細を入力してください。';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors: errors
    };
  }

  function makeTicket(input, now) {
    const createdAt = now instanceof Date ? now : new Date(now || Date.now());

    return {
      id: 'ticket-' + createdAt.getTime() + '-' + Math.random().toString(36).slice(2, 8),
      subject: String(input.subject || '').trim(),
      category: String(input.category || '').trim() || 'other',
      status: 'in_progress',
      createdAt: createdAt.toISOString()
    };
  }

  function formatDateSlash(dateValue) {
    const date = dateValue instanceof Date ? dateValue : new Date(dateValue);
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0')
    ].join('/');
  }

  function getStatusLabel(status) {
    return STATUS_LABELS[normalizeStatus(status)] || status;
  }

  function getCategoryLabel(category) {
    return CATEGORY_LABELS[category] || CATEGORY_LABELS.other;
  }

  function normalizeEmail(value) {
    return String(value || '').trim().toLowerCase();
  }

  function normalizeUserRole(value) {
    return String(value || '')
      .trim()
      .toLowerCase()
      .replace(/[\s-]+/g, '_');
  }

  function isAdminRole(role) {
    const normalizedRole = normalizeUserRole(role);
    return Boolean(ADMIN_ROLE_ALIASES[normalizedRole]);
  }

  function canMutateFrSettingsEndpoint(endpoint, actor) {
    const endpointName = String(endpoint || '').trim().toLowerCase();
    if (!endpointName || !Object.prototype.hasOwnProperty.call(FR_SETTINGS_ENDPOINT_POLICIES, endpointName)) {
      return false;
    }

    const normalizedRole = normalizeUserRole(actor && actor.role);
    if (!normalizedRole) {
      return false;
    }

    if (!isAdminRole(normalizedRole)) {
      return false;
    }

    return FR_SETTINGS_ENDPOINT_POLICIES[endpointName].includes(normalizedRole);
  }

  function authorizeFrSettingsEndpoint(endpoint, actor) {
    const endpointName = String(endpoint || '').trim().toLowerCase();
    if (!endpointName || !Object.prototype.hasOwnProperty.call(FR_SETTINGS_ENDPOINT_POLICIES, endpointName)) {
      return {
        ok: false,
        status: 404,
        error: {
          code: 'fr_settings_endpoint_unknown',
          message: '設定操作が見つかりません。画面を再読み込みしてから再度お試しください。'
        }
      };
    }

    if (!canMutateFrSettingsEndpoint(endpointName, actor)) {
      return {
        ok: false,
        status: 403,
        error: {
          code: 'admin_authorization_required',
          message: 'この設定の変更には管理者権限が必要です。'
        }
      };
    }

    return {
      ok: true,
      status: 200,
      error: null
    };
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(email));
  }

  function resolveMonthlyReportRecipientCap(value, fallbackCap) {
    const fallback = Math.max(1, Number(fallbackCap) || DEFAULT_MONTHLY_REPORT_RECIPIENT_CAP);
    const normalized = Math.floor(Number(value));

    if (!Number.isFinite(normalized) || normalized < 1) {
      return fallback;
    }

    return normalized;
  }

  function sanitizeMonthlyReportRecipients(recipients, maxRecipients) {
    const limit = resolveMonthlyReportRecipientCap(maxRecipients);
    const source = Array.isArray(recipients) ? recipients : [];
    const unique = {};
    const normalized = [];

    source.forEach(function (entry) {
      const email = normalizeEmail(entry);
      if (!isValidEmail(email) || unique[email] || normalized.length >= limit) {
        return;
      }
      unique[email] = true;
      normalized.push(email);
    });

    return normalized;
  }

  function validateMonthlyReportRecipient(input) {
    const source = input || {};
    const maxRecipients = resolveMonthlyReportRecipientCap(source.maxRecipients);
    const currentRecipients = sanitizeMonthlyReportRecipients(source.currentRecipients, maxRecipients);
    const email = normalizeEmail(source.email);

    if (!email) {
      return {
        isValid: false,
        normalizedEmail: '',
        error: 'メールアドレスを入力してください。'
      };
    }

    if (!isValidEmail(email)) {
      return {
        isValid: false,
        normalizedEmail: email,
        error: 'メールアドレスの形式が正しくありません。'
      };
    }

    if (currentRecipients.includes(email)) {
      return {
        isValid: false,
        normalizedEmail: email,
        error: 'このメールアドレスはすでに登録されています。'
      };
    }

    if (currentRecipients.length >= maxRecipients) {
      return {
        isValid: false,
        normalizedEmail: email,
        error: '送信先は最大' + maxRecipients + '件まで登録できます。'
      };
    }

    return {
      isValid: true,
      normalizedEmail: email,
      error: ''
    };
  }

  function extractTemplatePlaceholders(template) {
    const source = String(template || '');
    const matches = source.match(/{{\s*([a-z_]+)\s*}}/g) || [];
    const names = matches.map(function (placeholder) {
      return placeholder.replace(/[{}\s]/g, '');
    });
    return Array.from(new Set(names));
  }

  function validateLineReplyTemplate(template) {
    const value = String(template || '').trim();
    const maxLength = 500;
    const errors = [];

    if (!value) {
      errors.push('自動返信文を入力してください。');
    }

    if (value.length > maxLength) {
      errors.push('自動返信文は500文字以内で入力してください。');
    }

    const placeholders = extractTemplatePlaceholders(value);
    const unknownPlaceholders = placeholders.filter(function (name) {
      return !Object.prototype.hasOwnProperty.call(LINE_REPLY_ALLOWED_PLACEHOLDERS, name);
    });

    if (unknownPlaceholders.length > 0) {
      errors.push('未対応のプレースホルダーがあります: ' + unknownPlaceholders.join(', '));
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
      normalizedTemplate: value,
      maxLength: maxLength
    };
  }

  function interpolateLineReplyTemplate(template, values) {
    const input = String(template || '');
    const params = values || {};
    return input.replace(/{{\s*([a-z_]+)\s*}}/g, function (_match, key) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        return String(params[key]);
      }
      return '{{' + key + '}}';
    });
  }

  function resolveStorage(storage) {
    if (storage) {
      return storage;
    }
    if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
      return globalThis.localStorage;
    }
    return null;
  }

  function readAdoptionMetricsState(storage) {
    const targetStorage = resolveStorage(storage);
    const baseState = {
      counters: {},
      events: [],
      dedupeKeys: {}
    };

    if (!targetStorage || typeof targetStorage.getItem !== 'function') {
      return baseState;
    }

    try {
      const raw = targetStorage.getItem(ADOPTION_METRICS_STORAGE_KEY);
      if (!raw) {
        return baseState;
      }

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') {
        return baseState;
      }

      return {
        counters: parsed.counters && typeof parsed.counters === 'object' ? parsed.counters : {},
        events: Array.isArray(parsed.events) ? parsed.events : [],
        dedupeKeys: parsed.dedupeKeys && typeof parsed.dedupeKeys === 'object' ? parsed.dedupeKeys : {}
      };
    } catch (_error) {
      return baseState;
    }
  }

  function sanitizeDedupeKeys(dedupeKeys, maxKeys) {
    const entries = Object.entries(dedupeKeys || {}).filter(function (entry) {
      return typeof entry[0] === 'string' && typeof entry[1] === 'string';
    }).sort(function (a, b) {
      return String(a[1]).localeCompare(String(b[1]));
    });

    const keptEntries = entries.slice(Math.max(0, entries.length - maxKeys));
    return keptEntries.reduce(function (acc, entry) {
      acc[entry[0]] = entry[1];
      return acc;
    }, {});
  }

  function writeAdoptionMetricsState(state, storage) {
    const targetStorage = resolveStorage(storage);
    if (!targetStorage || typeof targetStorage.setItem !== 'function') {
      return;
    }

    targetStorage.setItem(ADOPTION_METRICS_STORAGE_KEY, JSON.stringify(state));
  }

  function trackAdoptionMetric(eventName, properties, options) {
    const opts = options || {};
    const event = String(eventName || '').trim();
    if (!event) {
      return {
        tracked: false,
        reason: 'event_name_required'
      };
    }

    const now = opts.now instanceof Date ? opts.now : new Date();
    const dedupeKey = String(opts.dedupeKey || '').trim();
    const maxEvents = Math.max(1, Number(opts.maxEvents) || ADOPTION_METRICS_MAX_EVENTS);
    const maxDedupeKeys = Math.max(1, Number(opts.maxDedupeKeys) || ADOPTION_METRICS_MAX_DEDUPE_KEYS);
    const state = readAdoptionMetricsState(opts.storage);
    const dedupeKeys = Object.assign({}, state.dedupeKeys);

    if (dedupeKey && dedupeKeys[dedupeKey]) {
      return {
        tracked: false,
        reason: 'duplicate',
        dedupeKey: dedupeKey
      };
    }

    const payload = {
      event: event,
      timestamp: now.toISOString(),
      properties: properties && typeof properties === 'object' ? properties : {}
    };

    const counters = Object.assign({}, state.counters);
    counters[event] = (Number(counters[event]) || 0) + 1;

    const events = state.events.slice();
    events.push(payload);
    const keptEvents = events.slice(Math.max(0, events.length - maxEvents));

    if (dedupeKey) {
      dedupeKeys[dedupeKey] = payload.timestamp;
    }

    const nextState = {
      counters: counters,
      events: keptEvents,
      dedupeKeys: sanitizeDedupeKeys(dedupeKeys, maxDedupeKeys)
    };
    writeAdoptionMetricsState(nextState, opts.storage);

    if (typeof opts.sink === 'function') {
      opts.sink(payload);
    } else if (typeof globalThis !== 'undefined' && globalThis.console && typeof globalThis.console.info === 'function') {
      globalThis.console.info('[UniteCube Metrics]', payload.event, payload.properties);
    }

    return {
      tracked: true,
      payload: payload,
      counter: counters[event]
    };
  }

  function getAdoptionMetricsSnapshot(options) {
    const state = readAdoptionMetricsState(options && options.storage);
    return {
      counters: Object.assign({}, state.counters),
      events: state.events.slice(),
      dedupeKeys: Object.assign({}, state.dedupeKeys)
    };
  }

  function resetAdoptionMetrics(options) {
    const targetStorage = resolveStorage(options && options.storage);
    if (targetStorage && typeof targetStorage.removeItem === 'function') {
      targetStorage.removeItem(ADOPTION_METRICS_STORAGE_KEY);
    }
  }

  return {
    escapeHtml: escapeHtml,
    normalizeStatus: normalizeStatus,
    filterLogs: filterLogs,
    paginate: paginate,
    calculateLogSummary: calculateLogSummary,
    validateSupportRequest: validateSupportRequest,
    makeTicket: makeTicket,
    formatDateSlash: formatDateSlash,
    getStatusLabel: getStatusLabel,
    getCategoryLabel: getCategoryLabel,
    normalizeUserRole: normalizeUserRole,
    isAdminRole: isAdminRole,
    canMutateFrSettingsEndpoint: canMutateFrSettingsEndpoint,
    authorizeFrSettingsEndpoint: authorizeFrSettingsEndpoint,
    normalizeEmail: normalizeEmail,
    isValidEmail: isValidEmail,
    resolveMonthlyReportRecipientCap: resolveMonthlyReportRecipientCap,
    sanitizeMonthlyReportRecipients: sanitizeMonthlyReportRecipients,
    validateMonthlyReportRecipient: validateMonthlyReportRecipient,
    monthlyReportRecipientCapDefault: DEFAULT_MONTHLY_REPORT_RECIPIENT_CAP,
    lineReplyTemplateDefault: LINE_REPLY_TEMPLATE_DEFAULT,
    lineReplyAllowedPlaceholders: LINE_REPLY_ALLOWED_PLACEHOLDERS,
    validateLineReplyTemplate: validateLineReplyTemplate,
    interpolateLineReplyTemplate: interpolateLineReplyTemplate,
    adoptionMetricsStorageKey: ADOPTION_METRICS_STORAGE_KEY,
    trackAdoptionMetric: trackAdoptionMetric,
    getAdoptionMetricsSnapshot: getAdoptionMetricsSnapshot,
    resetAdoptionMetrics: resetAdoptionMetrics
  };
});
