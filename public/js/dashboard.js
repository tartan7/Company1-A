(function () {
  const core = window.UniteCubeCore;
  const PAGE_SIZE = 5;
  const WORKFLOW_STORAGE_KEY = 'unitecube_workflows_v1';
  const METRIC_FEEDBACK_FEATURES_DASHBOARD_PAGE_VIEWED = 'feedback_features_dashboard_page_viewed';
  const METRIC_FR02_MONTHLY_REPORT_DISPATCH_SUCCESS_OBSERVED = 'fr02_monthly_report_dispatch_success_observed';

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const mainContent = document.querySelector('.main-content');
  const logoutButton = document.querySelector('[data-action="logout"]');
  const statusFilter = document.getElementById('statusFilter');
  const refreshBtn = document.getElementById('refreshBtn');
  const tableBody = document.getElementById('logTableBody');
  const pagination = document.getElementById('logPagination');
  const sidebarFocusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const mobileSidebarQuery = window.matchMedia('(max-width: 767px)');
  let sidebarLastFocused = null;

  const totalValueEl = document.getElementById('summary-total');
  const totalSubEl = document.getElementById('summary-total-sub');
  const successRateEl = document.getElementById('summary-success-rate');
  const successSubEl = document.getElementById('summary-success-sub');
  const errorCountEl = document.getElementById('summary-error-count');
  const errorSubEl = document.getElementById('summary-error-sub');
  const workflowStatusEl = document.getElementById('summary-workflow-status');
  const workflowSubEl = document.getElementById('summary-workflow-sub');

  let allLogs = [];
  let selectedStatus = '';
  let currentPage = 1;

  function trackMetric(eventName, properties, options) {
    if (!core || typeof core.trackAdoptionMetric !== 'function') {
      return;
    }
    core.trackAdoptionMetric(eventName, properties, options);
  }

  function observeMonthlyReportDispatches(logs, source) {
    logs.forEach(function (log) {
      if (core.normalizeStatus(log.status) !== 'success') {
        return;
      }
      if (!String(log.workflow || '').includes('月次レポート')) {
        return;
      }

      const dedupeKey = [
        'dispatch',
        log.datetime || '',
        log.workflow || '',
        log.duration || ''
      ].join('|');

      trackMetric(METRIC_FR02_MONTHLY_REPORT_DISPATCH_SUCCESS_OBSERVED, {
        source: source,
        workflowName: log.workflow,
        datetime: log.datetime,
        duration: log.duration
      }, {
        dedupeKey: dedupeKey
      });
    });
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

  function parseLogsFromDom() {
    return Array.from(tableBody.querySelectorAll('tr')).map(function (row) {
      const badge = row.querySelector('.badge');
      const detail = row.querySelector('.detail-link');
      return {
        datetime: (row.querySelector('.col-datetime') || {}).textContent || '',
        workflow: (row.querySelector('.col-workflow') || {}).textContent || '',
        status: (badge || {}).className.replace('badge', '').trim().split(' ').find(function (name) {
          return /^badge-/.test(name);
        })?.replace('badge-', '') || 'success',
        duration: (row.querySelector('.col-duration') || {}).textContent || '—',
        hasDetail: Boolean(detail)
      };
    });
  }

  function getWorkflowStateSummary() {
    const fromStorage = localStorage.getItem(WORKFLOW_STORAGE_KEY);
    if (!fromStorage) {
      return { active: 3, total: 4 };
    }

    try {
      const workflows = JSON.parse(fromStorage);
      const active = workflows.filter(function (item) {
        return item.status === 'active';
      }).length;
      return { active: active, total: workflows.length || 4 };
    } catch (_error) {
      return { active: 3, total: 4 };
    }
  }

  function updateSummary(filteredLogs) {
    const summary = core.calculateLogSummary(filteredLogs);
    const workflowSummary = getWorkflowStateSummary();

    totalValueEl.textContent = String(summary.total);
    totalSubEl.textContent = selectedStatus ? 'ステータス絞り込み結果' : '直近表示データの件数';

    successRateEl.textContent = summary.total === 0 ? '0%' : summary.successRate + '%';
    successSubEl.textContent = summary.successCount + '件成功 / ' + summary.errorCount + '件失敗';

    errorCountEl.textContent = String(summary.errorCount);
    errorSubEl.textContent = '失敗ログ件数';

    workflowStatusEl.textContent = workflowSummary.active === 0 ? '停止中' : '稼働中';
    workflowSubEl.textContent = workflowSummary.active + ' / ' + workflowSummary.total + 'ワークフロー 有効';
  }

  function renderTableRows(rows) {
    if (!rows.length) {
      tableBody.innerHTML = '<tr><td colspan="5" style="padding:24px;text-align:center;color:var(--color-neutral-500);">該当する実行履歴はありません。</td></tr>';
      return;
    }

    tableBody.innerHTML = rows.map(function (log) {
      const statusLabel = core.getStatusLabel(log.status);
      const detailHtml = log.hasDetail
        ? '<button type="button" class="detail-link" aria-label="実行ログ詳細を表示">詳細<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></button>'
        : '';

      return (
        '<tr>' +
        '<td class="col-datetime">' + core.escapeHtml(log.datetime) + '</td>' +
        '<td class="col-workflow">' + core.escapeHtml(log.workflow) + '</td>' +
        '<td><span class="badge badge-' + core.escapeHtml(log.status) + '" aria-label="ステータス：' + core.escapeHtml(statusLabel) + '">' + core.escapeHtml(statusLabel) + '</span></td>' +
        '<td class="col-duration">' + core.escapeHtml(log.duration) + '</td>' +
        '<td>' + detailHtml + '</td>' +
        '</tr>'
      );
    }).join('');
  }

  function renderPagination(totalPages, page) {
    if (totalPages <= 1) {
      pagination.innerHTML = '';
      return;
    }

    const prevDisabled = page <= 1;
    const nextDisabled = page >= totalPages;
    let pageButtons = '';

    for (let i = 1; i <= totalPages; i += 1) {
      pageButtons += '<button class="pagination-btn' + (i === page ? ' active' : '') + '" data-page="' + i + '" aria-label="' + i + 'ページ目' + (i === page ? '（現在のページ）' : '') + '"' + (i === page ? ' aria-current="page"' : '') + '>' + i + '</button>';
    }

    pagination.innerHTML =
      '<button class="pagination-btn" data-role="prev" aria-label="前のページ" ' + (prevDisabled ? 'disabled aria-disabled="true"' : '') + '>' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>' +
      '</button>' +
      pageButtons +
      '<button class="pagination-btn" data-role="next" aria-label="次のページ" ' + (nextDisabled ? 'disabled aria-disabled="true"' : '') + '>' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>' +
      '</button>';
  }

  function render() {
    const filtered = core.filterLogs(allLogs, selectedStatus);
    updateSummary(filtered);

    const paginated = core.paginate(filtered, currentPage, PAGE_SIZE);
    currentPage = paginated.page;

    renderTableRows(paginated.items);
    renderPagination(paginated.totalPages, paginated.page);
  }

  pagination.addEventListener('click', function (event) {
    const button = event.target.closest('button');
    if (!button || button.disabled) {
      return;
    }

    if (button.dataset.role === 'prev') {
      currentPage -= 1;
      render();
      return;
    }

    if (button.dataset.role === 'next') {
      currentPage += 1;
      render();
      return;
    }

    if (button.dataset.page) {
      currentPage = Number(button.dataset.page);
      render();
    }
  });

  tableBody.addEventListener('click', function (event) {
    const detailButton = event.target.closest('.detail-link');
    if (!detailButton) {
      return;
    }
    showToast('success', '詳細ビューは準備中です', '実行ログ詳細画面は次の更新で追加予定です。');
  });

  statusFilter.addEventListener('change', function () {
    selectedStatus = core.normalizeStatus(statusFilter.value);
    currentPage = 1;
    render();
  });

  refreshBtn.addEventListener('click', function () {
    render();
    document.getElementById('lastUpdated').textContent = '最終更新: たった今';
    observeMonthlyReportDispatches(allLogs, 'dashboard_refresh');
    showToast('success', 'データを更新しました', '実行ログが最新の状態になりました');
  });

  function showToast(type, title, text) {
    const container = document.getElementById('toastContainer');
    const icons = {
      success: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      error: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>'
    };

    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.setAttribute('role', 'alert');
    toast.innerHTML =
      (icons[type] || '') +
      '<div class="toast-body"><div class="toast-title">' + core.escapeHtml(title) + '</div>' +
      (text ? '<div class="toast-text">' + core.escapeHtml(text) + '</div>' : '') +
      '</div>' +
      '<button class="toast-close" aria-label="通知を閉じる"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>';

    const closeButton = toast.querySelector('.toast-close');
    closeButton.addEventListener('click', function () {
      removeToast(toast);
    });

    container.appendChild(toast);
    setTimeout(function () {
      removeToast(toast);
    }, 3000);
  }

  function removeToast(toast) {
    if (!toast || !toast.parentNode) {
      return;
    }
    toast.style.transition = 'opacity 200ms ease, transform 200ms ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(function () {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 200);
  }

  allLogs = parseLogsFromDom();
  trackMetric(METRIC_FEEDBACK_FEATURES_DASHBOARD_PAGE_VIEWED, {
    page: 'dashboard'
  }, {
    dedupeKey: METRIC_FEEDBACK_FEATURES_DASHBOARD_PAGE_VIEWED + ':' + new Date().toISOString().slice(0, 10)
  });
  observeMonthlyReportDispatches(allLogs, 'dashboard_initial_load');
  render();
})();
