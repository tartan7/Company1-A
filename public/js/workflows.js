(function () {
  const core = window.UniteCubeCore;
  const WORKFLOW_STORAGE_KEY = 'unitecube_workflows_v1';
  const LINE_REPLY_STORAGE_KEY = 'unitecube_line_reply_template_v1';
  const MONTHLY_REPORT_RECIPIENT_STORAGE_KEY = 'unitecube_monthly_report_recipients_v1';
  const WORKFLOW_SELECTOR = '.workflow-card';
  const LINE_REPLY_PREVIEW_PARAMS = {
    customer_name: '山田 太郎',
    reservation_date: '2026/05/10',
    inquiry_summary: '配送状況の確認'
  };
  const MONTHLY_REPORT_RECIPIENTS_DEFAULT = [
    'ops@sample-shoji.jp',
    'sales-lead@sample-shoji.jp'
  ];
  const MONTHLY_REPORT_RECIPIENT_CAP = core.resolveMonthlyReportRecipientCap(
    document.body && document.body.dataset
      ? document.body.dataset.monthlyRecipientCap
      : null
  );
  const METRIC_FR01_TEMPLATE_UPDATED = 'fr01_template_updated';
  const METRIC_FR01_TEMPLATE_SAVE_VALIDATION_FAILED = 'fr01_template_save_validation_failed';
  const METRIC_FR01_TEMPLATE_EDITOR_OPENED = 'fr01_template_editor_opened';
  const METRIC_FR02_RECIPIENT_ADDED = 'fr02_recipient_added';
  const METRIC_FR02_RECIPIENT_REMOVED = 'fr02_recipient_removed';
  const METRIC_FR02_RECIPIENT_VALIDATION_FAILED = 'fr02_recipient_add_validation_failed';
  const METRIC_FR_SETTINGS_ADMIN_AUTH_DENIED = 'fr_settings_admin_auth_denied';
  const METRIC_FEEDBACK_FEATURES_WORKFLOW_PAGE_VIEWED = 'feedback_features_workflows_page_viewed';
  const USER_ROLE_STORAGE_KEY = 'unitecube_user_role_v1';
  const FR_SETTINGS_ENDPOINTS = {
    lineReplyTemplateUpdate: 'fr01.template.update',
    monthlyRecipientsAdd: 'fr02.recipients.add',
    monthlyRecipientsRemove: 'fr02.recipients.remove'
  };

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const mainContent = document.querySelector('.main-content');
  const appLayout = document.querySelector('.app-layout');
  const workflowGrid = document.getElementById('workflowGrid');
  const logoutButton = document.querySelector('[data-action="logout"]');
  const lineReplyEditBtn = document.getElementById('lineReplyEditBtn');
  const lineReplyCurrent = document.getElementById('lineReplyCurrent');
  const lineReplyEditor = document.getElementById('lineReplyEditor');
  const lineReplyTemplateInput = document.getElementById('lineReplyTemplateInput');
  const lineReplyTemplateError = document.getElementById('lineReplyTemplateError');
  const lineReplyTemplateCounter = document.getElementById('lineReplyTemplateCounter');
  const lineReplyPreview = document.getElementById('lineReplyPreview');
  const lineReplySaveBtn = document.getElementById('lineReplySaveBtn');
  const lineReplyCancelBtn = document.getElementById('lineReplyCancelBtn');
  const monthlyRecipientForm = document.getElementById('monthlyRecipientForm');
  const monthlyRecipientInput = document.getElementById('monthlyRecipientInput');
  const monthlyRecipientAddBtn = document.getElementById('monthlyRecipientAddBtn');
  const monthlyRecipientError = document.getElementById('monthlyRecipientError');
  const monthlyRecipientHint = document.getElementById('monthlyRecipientHint');
  const monthlyRecipientCount = document.getElementById('monthlyRecipientCount');
  const monthlyRecipientList = document.getElementById('monthlyRecipientList');

  let currentAction = null;
  let currentWorkflowId = null;
  let currentTriggerBtn = null;
  let sidebarLastFocused = null;
  const currentUserRole = resolveCurrentUserRole();
  const frSettingsAdminAuthorized = core.isAdminRole(currentUserRole);

  const confirmModal = document.getElementById('confirmModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalCancel = document.getElementById('modalCancel');
  const modalConfirm = document.getElementById('modalConfirm');
  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const sidebarFocusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const mobileSidebarQuery = window.matchMedia('(max-width: 767px)');

  function trackMetric(eventName, properties, options) {
    if (!core || typeof core.trackAdoptionMetric !== 'function') {
      return;
    }
    core.trackAdoptionMetric(eventName, properties, options);
  }

  function resolveCurrentUserRole() {
    const bodyRole = document.body && document.body.dataset
      ? document.body.dataset.currentUserRole
      : '';
    if (bodyRole) {
      return core.normalizeUserRole(bodyRole);
    }

    try {
      const storedRole = localStorage.getItem(USER_ROLE_STORAGE_KEY);
      return core.normalizeUserRole(storedRole);
    } catch (_error) {
      return '';
    }
  }

  function showAdminPermissionDeniedToast(message) {
    showToast('warning', '権限がありません', message || 'この設定を変更できるのは管理者のみです。');
  }

  function canMutateFrSettings(endpoint) {
    const authorization = core.authorizeFrSettingsEndpoint(endpoint, {
      role: currentUserRole
    });

    if (authorization.ok) {
      return true;
    }

    trackMetric(METRIC_FR_SETTINGS_ADMIN_AUTH_DENIED, {
      endpoint: endpoint || 'unknown',
      role: currentUserRole || 'unknown',
      status: authorization.status,
      errorCode: authorization.error && authorization.error.code ? authorization.error.code : 'unknown'
    });
    showAdminPermissionDeniedToast(
      authorization.error && authorization.error.message
        ? authorization.error.message
        : 'この設定は管理者のみ変更できます。'
    );
    return false;
  }

  function readWorkflowState() {
    try {
      const raw = localStorage.getItem(WORKFLOW_STORAGE_KEY);
      if (!raw) {
        return null;
      }
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : null;
    } catch (_error) {
      return null;
    }
  }

  function writeWorkflowState(workflows) {
    localStorage.setItem(WORKFLOW_STORAGE_KEY, JSON.stringify(workflows));
  }

  function readLineReplyTemplateState() {
    try {
      const raw = localStorage.getItem(LINE_REPLY_STORAGE_KEY);
      if (!raw) {
        return null;
      }
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed.template === 'string' ? parsed : null;
    } catch (_error) {
      return null;
    }
  }

  function writeLineReplyTemplateState(template) {
    localStorage.setItem(LINE_REPLY_STORAGE_KEY, JSON.stringify({
      template: template,
      updatedAt: new Date().toISOString()
    }));
  }

  function readMonthlyReportRecipientState() {
    try {
      const raw = localStorage.getItem(MONTHLY_REPORT_RECIPIENT_STORAGE_KEY);
      if (!raw) {
        return null;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.recipients)) {
        return null;
      }
      return parsed;
    } catch (_error) {
      return null;
    }
  }

  function writeMonthlyReportRecipientState(recipients) {
    localStorage.setItem(MONTHLY_REPORT_RECIPIENT_STORAGE_KEY, JSON.stringify({
      recipients: recipients,
      updatedAt: new Date().toISOString()
    }));
  }

  function getMonthlyReportRecipients() {
    const saved = readMonthlyReportRecipientState();
    const source = saved && Array.isArray(saved.recipients)
      ? saved.recipients
      : MONTHLY_REPORT_RECIPIENTS_DEFAULT;

    return core.sanitizeMonthlyReportRecipients(source, MONTHLY_REPORT_RECIPIENT_CAP);
  }

  function setMonthlyRecipientError(message) {
    if (!monthlyRecipientError || !monthlyRecipientInput) {
      return;
    }

    if (!message) {
      monthlyRecipientError.textContent = '';
      monthlyRecipientError.classList.add('hidden');
      monthlyRecipientInput.classList.remove('error');
      return;
    }

    monthlyRecipientError.textContent = message;
    monthlyRecipientError.classList.remove('hidden');
    monthlyRecipientInput.classList.add('error');
  }

  function renderMonthlyReportRecipients(recipients) {
    if (!monthlyRecipientList || !monthlyRecipientCount) {
      return;
    }

    monthlyRecipientList.innerHTML = recipients.map(function (email) {
      const removeButtonHtml = frSettingsAdminAuthorized
        ? '<button type="button" class="recipient-list-remove" data-recipient-email="' + core.escapeHtml(email) + '" aria-label="' + core.escapeHtml(email) + ' を削除">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<line x1="18" y1="6" x2="6" y2="18"/>' +
              '<line x1="6" y1="6" x2="18" y2="18"/>' +
            '</svg>' +
          '</button>'
        : '';

      return (
        '<li class="recipient-list-item">' +
        '<span class="recipient-list-email">' + core.escapeHtml(email) + '</span>' +
        removeButtonHtml +
        '</li>'
      );
    }).join('');

    monthlyRecipientCount.textContent = recipients.length + ' / ' + MONTHLY_REPORT_RECIPIENT_CAP + ' 件';
    if (monthlyRecipientAddBtn) {
      monthlyRecipientAddBtn.disabled = !frSettingsAdminAuthorized || recipients.length >= MONTHLY_REPORT_RECIPIENT_CAP;
    }
  }

  function addMonthlyReportRecipient() {
    if (!canMutateFrSettings(FR_SETTINGS_ENDPOINTS.monthlyRecipientsAdd)) {
      return;
    }

    const recipients = getMonthlyReportRecipients();
    const validation = core.validateMonthlyReportRecipient({
      email: monthlyRecipientInput.value,
      currentRecipients: recipients,
      maxRecipients: MONTHLY_REPORT_RECIPIENT_CAP
    });

    if (!validation.isValid) {
      setMonthlyRecipientError(validation.error);
      trackMetric(METRIC_FR02_RECIPIENT_VALIDATION_FAILED, {
        reason: validation.error,
        currentRecipientCount: recipients.length
      });
      return;
    }

    const updated = recipients.concat(validation.normalizedEmail);
    writeMonthlyReportRecipientState(updated);
    renderMonthlyReportRecipients(updated);
    setMonthlyRecipientError('');
    monthlyRecipientInput.value = '';
    monthlyRecipientInput.focus();
    trackMetric(METRIC_FR02_RECIPIENT_ADDED, {
      recipientCount: updated.length
    });
    showToast('success', '送信先を追加しました', validation.normalizedEmail + ' をレポート送信先に追加しました。');
  }

  function removeMonthlyReportRecipient(email) {
    if (!canMutateFrSettings(FR_SETTINGS_ENDPOINTS.monthlyRecipientsRemove)) {
      return;
    }

    const target = core.normalizeEmail(email);
    if (!target) {
      return;
    }

    const recipients = getMonthlyReportRecipients();
    const updated = recipients.filter(function (recipient) {
      return recipient !== target;
    });

    if (updated.length === recipients.length) {
      return;
    }

    writeMonthlyReportRecipientState(updated);
    renderMonthlyReportRecipients(updated);
    setMonthlyRecipientError('');
    trackMetric(METRIC_FR02_RECIPIENT_REMOVED, {
      recipientCount: updated.length
    });
    showToast('warning', '送信先を削除しました', target + ' をレポート送信先から削除しました。');
  }

  function hydrateMonthlyReportRecipients() {
    if (!monthlyRecipientForm || !monthlyRecipientInput || !monthlyRecipientList || !monthlyRecipientCount) {
      return;
    }
    if (monthlyRecipientHint) {
      monthlyRecipientHint.textContent = '同一メールは重複登録できません。最大' + MONTHLY_REPORT_RECIPIENT_CAP + '件まで登録できます。';
    }

    const recipients = getMonthlyReportRecipients();
    renderMonthlyReportRecipients(recipients);
    writeMonthlyReportRecipientState(recipients);
    setMonthlyRecipientError('');

    if (!frSettingsAdminAuthorized) {
      monthlyRecipientInput.disabled = true;
      monthlyRecipientInput.setAttribute('aria-disabled', 'true');
      monthlyRecipientInput.setAttribute('readonly', 'true');
      monthlyRecipientInput.value = '';
      monthlyRecipientForm.setAttribute('aria-disabled', 'true');
      setMonthlyRecipientError('この設定を変更するには管理者権限が必要です。');
    }

    monthlyRecipientForm.addEventListener('submit', function (event) {
      event.preventDefault();
      addMonthlyReportRecipient();
    });

    monthlyRecipientInput.addEventListener('input', function () {
      setMonthlyRecipientError('');
    });

    monthlyRecipientList.addEventListener('click', function (event) {
      const button = event.target.closest('button[data-recipient-email]');
      if (!button) {
        return;
      }
      removeMonthlyReportRecipient(button.dataset.recipientEmail);
    });
  }

  function getActiveLineReplyTemplate() {
    const saved = readLineReplyTemplateState();
    const candidate = saved ? saved.template : core.lineReplyTemplateDefault;
    const validation = core.validateLineReplyTemplate(candidate);

    if (validation.isValid) {
      return validation.normalizedTemplate;
    }

    return core.lineReplyTemplateDefault;
  }

  function setLineReplyError(message) {
    if (!lineReplyTemplateError) {
      return;
    }

    if (!message) {
      lineReplyTemplateError.classList.add('hidden');
      lineReplyTemplateError.textContent = '';
      lineReplyTemplateInput.classList.remove('error');
      return;
    }

    lineReplyTemplateError.textContent = message;
    lineReplyTemplateError.classList.remove('hidden');
    lineReplyTemplateInput.classList.add('error');
  }

  function renderLineReplyCurrent(template) {
    if (!lineReplyCurrent) {
      return;
    }
    lineReplyCurrent.textContent = template;
  }

  function renderLineReplyPreview(template) {
    if (!lineReplyPreview) {
      return;
    }
    const previewText = core.interpolateLineReplyTemplate(template, LINE_REPLY_PREVIEW_PARAMS);
    lineReplyPreview.innerHTML = '<strong>送信プレビュー</strong>\n' + core.escapeHtml(previewText);
  }

  function updateLineReplyEditor(template) {
    const maxLength = core.validateLineReplyTemplate('').maxLength;
    const currentLength = String(template || '').trim().length;

    lineReplyTemplateCounter.textContent = currentLength + ' / ' + maxLength;
    lineReplyTemplateCounter.style.color = currentLength > maxLength * 0.9 ? 'var(--color-warning)' : '';
    renderLineReplyPreview(template);
  }

  function openLineReplyEditor() {
    const template = getActiveLineReplyTemplate();
    lineReplyEditor.classList.remove('hidden');
    lineReplyEditBtn.setAttribute('aria-expanded', 'true');
    lineReplyTemplateInput.value = template;
    setLineReplyError('');
    updateLineReplyEditor(template);
    trackMetric(METRIC_FR01_TEMPLATE_EDITOR_OPENED, {
      templateLength: template.length
    });
    lineReplyTemplateInput.focus();
  }

  function closeLineReplyEditor() {
    lineReplyEditor.classList.add('hidden');
    lineReplyEditBtn.setAttribute('aria-expanded', 'false');
    setLineReplyError('');
    lineReplyEditBtn.focus();
  }

  function handleLineReplyTemplateInput() {
    const validation = core.validateLineReplyTemplate(lineReplyTemplateInput.value);
    setLineReplyError(validation.isValid ? '' : validation.errors[0]);
    updateLineReplyEditor(lineReplyTemplateInput.value);
  }

  function saveLineReplyTemplate() {
    if (!canMutateFrSettings(FR_SETTINGS_ENDPOINTS.lineReplyTemplateUpdate)) {
      return;
    }

    const validation = core.validateLineReplyTemplate(lineReplyTemplateInput.value);
    if (!validation.isValid) {
      setLineReplyError(validation.errors[0]);
      updateLineReplyEditor(lineReplyTemplateInput.value);
      trackMetric(METRIC_FR01_TEMPLATE_SAVE_VALIDATION_FAILED, {
        reason: validation.errors[0] || 'invalid_template'
      });
      return;
    }

    const placeholderCount = (validation.normalizedTemplate.match(/{{\s*([a-z_]+)\s*}}/g) || []).length;
    writeLineReplyTemplateState(validation.normalizedTemplate);
    renderLineReplyCurrent(validation.normalizedTemplate);
    trackMetric(METRIC_FR01_TEMPLATE_UPDATED, {
      templateLength: validation.normalizedTemplate.length,
      placeholderCount: placeholderCount
    });
    closeLineReplyEditor();
    showToast('success', 'LINE返信テンプレートを更新しました', '更新内容はこの後に送信される返信から適用されます。');
  }

  function hydrateLineReplyTemplate() {
    if (!lineReplyEditBtn ||
        !lineReplyCurrent ||
        !lineReplyEditor ||
        !lineReplyTemplateInput ||
        !lineReplyTemplateError ||
        !lineReplyTemplateCounter ||
        !lineReplyPreview ||
        !lineReplySaveBtn ||
        !lineReplyCancelBtn) {
      return;
    }

    const template = getActiveLineReplyTemplate();
    renderLineReplyCurrent(template);

    if (!frSettingsAdminAuthorized) {
      lineReplyEditBtn.disabled = true;
      lineReplyEditBtn.setAttribute('aria-disabled', 'true');
      lineReplyEditBtn.title = 'この設定を変更するには管理者権限が必要です。';
    }

    lineReplyEditBtn.addEventListener('click', function () {
      if (!frSettingsAdminAuthorized) {
        showAdminPermissionDeniedToast();
        return;
      }
      if (lineReplyEditor.classList.contains('hidden')) {
        openLineReplyEditor();
        return;
      }
      closeLineReplyEditor();
    });

    lineReplyTemplateInput.addEventListener('input', handleLineReplyTemplateInput);
    lineReplySaveBtn.addEventListener('click', saveLineReplyTemplate);
    lineReplyCancelBtn.addEventListener('click', closeLineReplyEditor);
  }

  function collectWorkflowsFromDom() {
    return Array.from(document.querySelectorAll(WORKFLOW_SELECTOR)).map(function (card) {
      const btn = card.querySelector('button[data-workflow-id]');
      const badge = card.querySelector('.badge');
      return {
        id: btn.dataset.workflowId,
        name: btn.dataset.workflowName,
        status: core.normalizeStatus(btn.dataset.action) === 'pause' ? 'active' : 'paused'
      };
    });
  }

  function applyWorkflowStateToCard(card, status) {
    const btn = card.querySelector('button[data-workflow-id]');
    const badge = card.querySelector('.badge');
    const icon = card.querySelector('.workflow-card-header > svg');

    if (status === 'paused') {
      badge.className = 'badge badge-paused';
      badge.textContent = '停止中';
      badge.setAttribute('aria-label', 'ステータス：停止中');
      icon.setAttribute('stroke', 'var(--color-paused)');

      btn.className = 'btn btn-success btn-md';
      btn.dataset.action = 'resume';
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<circle cx="12" cy="12" r="10"/>' +
        '<polygon points="10 8 16 12 10 16 10 8"/>' +
        '</svg>再開';
      return;
    }

    badge.className = 'badge badge-success';
    badge.textContent = '稼働中';
    badge.setAttribute('aria-label', 'ステータス：稼働中');
    icon.setAttribute('stroke', 'var(--color-success)');

    btn.className = 'btn btn-warning btn-md';
    btn.dataset.action = 'pause';
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="10" y1="15" x2="10" y2="9"/>' +
      '<line x1="14" y1="15" x2="14" y2="9"/>' +
      '</svg>一時停止';
  }

  function hydrateWorkflows() {
    const saved = readWorkflowState();
    const fallback = collectWorkflowsFromDom();
    const source = saved || fallback;
    const byId = source.reduce(function (acc, item) {
      acc[item.id] = item;
      return acc;
    }, {});

    Array.from(document.querySelectorAll(WORKFLOW_SELECTOR)).forEach(function (card) {
      const btn = card.querySelector('button[data-workflow-id]');
      const current = byId[btn.dataset.workflowId];
      if (!current) {
        return;
      }
      applyWorkflowStateToCard(card, current.status);
    });

    if (!saved) {
      writeWorkflowState(fallback);
    }
  }

  function isMobileSidebar() {
    return mobileSidebarQuery.matches;
  }

  function setMainContentInert(isInert) {
    if (typeof mainContent.inert !== 'undefined') {
      mainContent.inert = isInert;
    }
    mainContent.setAttribute('aria-hidden', isInert ? 'true' : 'false');
  }

  function setAppLayoutInert(isInert) {
    if (typeof appLayout.inert !== 'undefined') {
      appLayout.inert = isInert;
    }
    appLayout.setAttribute('aria-hidden', isInert ? 'true' : 'false');
  }

  function openSidebar() {
    if (!isMobileSidebar()) {
      return;
    }
    sidebarLastFocused = document.activeElement;
    sidebar.classList.add('open');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    setMainContentInert(true);

    const firstFocusable = sidebar.querySelector('.nav-item.active, .nav-item, .sidebar-logo, .sidebar-user-logout');
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }

  function closeSidebar(restoreFocus) {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    setMainContentInert(false);

    if (!restoreFocus || !isMobileSidebar()) {
      return;
    }

    if (sidebarLastFocused && typeof sidebarLastFocused.focus === 'function') {
      sidebarLastFocused.focus();
      return;
    }

    hamburgerBtn.focus();
  }

  hamburgerBtn.addEventListener('click', function () {
    if (sidebar.classList.contains('open')) {
      closeSidebar(true);
      return;
    }
    openSidebar();
  });

  overlay.addEventListener('click', function () {
    closeSidebar(false);
  });

  mobileSidebarQuery.addEventListener('change', function (event) {
    if (!event.matches) {
      closeSidebar(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isMobileSidebar() && sidebar.classList.contains('open')) {
      closeSidebar(true);
    }
  });

  sidebar.addEventListener('keydown', function (event) {
    if (!isMobileSidebar() || !sidebar.classList.contains('open') || event.key !== 'Tab') {
      return;
    }

    const focusable = Array.from(sidebar.querySelectorAll(sidebarFocusableSelectors));
    if (!focusable.length) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  if (logoutButton) {
    logoutButton.addEventListener('click', function () {
      window.location.assign('index.html');
    });
  }

  function openModal(triggerBtn) {
    const action = triggerBtn.dataset.action;
    const name = triggerBtn.dataset.workflowName;

    currentAction = action;
    currentWorkflowId = triggerBtn.dataset.workflowId;
    currentTriggerBtn = triggerBtn;

    if (action === 'pause') {
      modalTitle.textContent = 'このワークフローを一時停止しますか？';
      modalBody.textContent = '「' + name + '」を一時停止します。停止中は対象業務の自動処理が実行されません。';
      modalConfirm.className = 'btn btn-warning btn-md';
      modalConfirm.textContent = '一時停止する';
    } else {
      modalTitle.textContent = 'このワークフローを再開しますか？';
      modalBody.textContent = '「' + name + '」を再開します。設定済みの条件で自動処理を再開します。';
      modalConfirm.className = 'btn btn-success btn-md';
      modalConfirm.textContent = '再開する';
    }

    confirmModal.hidden = false;
    confirmModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setAppLayoutInert(true);

    const focusable = confirmModal.querySelectorAll(focusableSelectors);
    if (focusable.length) {
      focusable[0].focus();
    }
  }

  function closeModal() {
    confirmModal.hidden = true;
    confirmModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setAppLayoutInert(false);
    if (currentTriggerBtn) {
      currentTriggerBtn.focus();
    }
  }

  function confirmAction() {
    const targetButton = document.querySelector('[data-workflow-id="' + currentWorkflowId + '"]');
    const card = targetButton.closest('.workflow-card');
    const newStatus = currentAction === 'pause' ? 'paused' : 'active';

    applyWorkflowStateToCard(card, newStatus);

    const workflows = collectWorkflowsFromDom();
    writeWorkflowState(workflows);

    closeModal();

    if (newStatus === 'paused') {
      showToast('warning', 'ワークフローを一時停止しました', '「' + targetButton.dataset.workflowName + '」の自動実行を停止しました。');
      return;
    }

    showToast('success', 'ワークフローを再開しました', '「' + targetButton.dataset.workflowName + '」の自動実行を再開しました。');
  }

  function removeToast(toast) {
    toast.style.transition = 'opacity 200ms ease, transform 200ms ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(function () {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 200);
  }

  function showToast(type, title, text) {
    const container = document.getElementById('toastContainer');
    const icons = {
      success: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      warning: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
    };

    const existing = container.querySelectorAll('.toast');
    if (existing.length >= 3) {
      existing[0].remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.setAttribute('role', 'alert');
    toast.innerHTML =
      (icons[type] || '') +
      '<div class="toast-body"><div class="toast-title">' + core.escapeHtml(title) + '</div>' +
      (text ? '<div class="toast-text">' + core.escapeHtml(text) + '</div>' : '') +
      '</div>' +
      '<button class="toast-close" aria-label="通知を閉じる"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>';

    toast.querySelector('.toast-close').addEventListener('click', function () {
      removeToast(toast);
    });
    container.appendChild(toast);

    const duration = type === 'error' ? 6000 : 3000;
    setTimeout(function () {
      removeToast(toast);
    }, duration);
  }

  workflowGrid.addEventListener('click', function (event) {
    const triggerButton = event.target.closest('button[data-workflow-id]');
    if (!triggerButton) {
      return;
    }
    openModal(triggerButton);
  });

  modalCancel.addEventListener('click', closeModal);
  modalConfirm.addEventListener('click', confirmAction);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !confirmModal.hidden) {
      closeModal();
    }
  });

  confirmModal.addEventListener('click', function (event) {
    if (event.target === confirmModal) {
      closeModal();
    }
  });

  confirmModal.addEventListener('keydown', function (event) {
    if (event.key !== 'Tab') {
      return;
    }

    const focusable = Array.from(confirmModal.querySelectorAll(focusableSelectors));
    if (!focusable.length) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  hydrateWorkflows();
  hydrateLineReplyTemplate();
  hydrateMonthlyReportRecipients();
  trackMetric(METRIC_FEEDBACK_FEATURES_WORKFLOW_PAGE_VIEWED, {
    page: 'workflows'
  }, {
    dedupeKey: METRIC_FEEDBACK_FEATURES_WORKFLOW_PAGE_VIEWED + ':' + new Date().toISOString().slice(0, 10)
  });
})();
