(function () {
  const core = window.UniteCubeCore;
  const TICKET_STORAGE_KEY = 'unitecube_tickets_v1';

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const mainContent = document.querySelector('.main-content');
  const logoutButton = document.querySelector('[data-action="logout"]');
  const sidebarFocusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const mobileSidebarQuery = window.matchMedia('(max-width: 767px)');
  let sidebarLastFocused = null;

  const supportForm = document.getElementById('supportForm');
  const ticketList = document.getElementById('ticketList');
  const ticketCount = document.getElementById('ticket-count');
  const emptyTickets = document.getElementById('emptyTickets');
  const successMessage = document.getElementById('successMessage');

  const subjectInput = document.getElementById('subject');
  const categoryInput = document.getElementById('category');
  const detailsInput = document.getElementById('details');
  const attachmentInput = document.getElementById('attachment');

  function readTickets() {
    try {
      const raw = localStorage.getItem(TICKET_STORAGE_KEY);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_error) {
      return [];
    }
  }

  function writeTickets(tickets) {
    localStorage.setItem(TICKET_STORAGE_KEY, JSON.stringify(tickets));
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

  function setupCharCounter(inputId, counterId, max) {
    const input = document.getElementById(inputId);
    const counter = document.getElementById(counterId);

    input.addEventListener('input', function () {
      const len = input.value.length;
      counter.textContent = len + ' / ' + max;
      counter.style.color = len > max * 0.9 ? 'var(--color-warning)' : '';
    });
  }

  setupCharCounter('subject', 'subject-counter', 100);
  setupCharCounter('details', 'details-counter', 1000);

  attachmentInput.addEventListener('change', function () {
    const file = attachmentInput.files[0];
    const label = document.getElementById('file-label-text');
    const errorEl = document.getElementById('attachment-error');

    if (!file) {
      label.innerHTML = '<strong>クリックしてファイルを選択</strong>、またはここにドラッグ＆ドロップ';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      errorEl.textContent = 'ファイルサイズが5MBを超えています。';
      errorEl.classList.remove('hidden');
      attachmentInput.value = '';
      return;
    }

    errorEl.classList.add('hidden');
    label.innerHTML = '<strong>' + core.escapeHtml(file.name) + '</strong>（' + (file.size / 1024).toFixed(0) + ' KB）';
  });

  function setFieldError(inputEl, errorElId, message) {
    const errorEl = document.getElementById(errorElId);
    if (message) {
      inputEl.classList.add('error');
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
      return;
    }

    inputEl.classList.remove('error');
    errorEl.classList.add('hidden');
  }

  function renderTicketItem(ticket, prepend) {
    const category = ticket.category || 'other';
    const categoryStyles = {
      change: 'background-color:var(--color-neutral-100);color:var(--color-neutral-700);',
      error: 'background-color:var(--color-error-bg);color:var(--color-error);',
      other: 'background-color:var(--color-neutral-100);color:var(--color-neutral-700);'
    };

    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'ticket-item';
    item.setAttribute('aria-label', 'チケット詳細を開く: ' + ticket.subject);
    item.dataset.ticketSubject = ticket.subject;
    item.innerHTML =
      '<div class="ticket-item-header">' +
      '<span class="ticket-item-subject">' + core.escapeHtml(ticket.subject) + '</span>' +
      '<span class="badge badge-warning" aria-label="ステータス：対応中">対応中</span>' +
      '</div>' +
      '<div style="display:flex;align-items:center;justify-content:space-between;">' +
      '<span style="font-size:var(--font-size-xs);padding:2px 6px;border-radius:var(--radius-sm);' + (categoryStyles[category] || categoryStyles.other) + '">' + core.getCategoryLabel(category) + '</span>' +
      '<span class="ticket-item-meta">' + core.formatDateSlash(ticket.createdAt) + '</span>' +
      '</div>';

    if (prepend) {
      ticketList.insertBefore(item, ticketList.firstChild);
      return;
    }

    ticketList.appendChild(item);
  }

  function renderStoredTickets() {
    const tickets = readTickets();
    if (!tickets.length) {
      updateTicketCounter();
      return;
    }

    const markerClass = 'ticket-item-persisted';
    Array.from(ticketList.querySelectorAll('.' + markerClass)).forEach(function (el) {
      el.remove();
    });

    tickets.slice().reverse().forEach(function (ticket) {
      renderTicketItem(ticket, true);
      ticketList.firstChild.classList.add(markerClass);
    });

    updateTicketCounter();
    emptyTickets.classList.add('hidden');
  }

  function updateTicketCounter() {
    const current = ticketList.querySelectorAll('.ticket-item').length;
    ticketCount.textContent = current + '件';

    if (current === 0) {
      emptyTickets.classList.remove('hidden');
      ticketList.classList.add('hidden');
      return;
    }

    emptyTickets.classList.add('hidden');
    ticketList.classList.remove('hidden');
  }

  supportForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const validation = core.validateSupportRequest({
      subject: subjectInput.value,
      category: categoryInput.value,
      details: detailsInput.value
    });

    setFieldError(subjectInput, 'subject-error', validation.errors.subject);
    setFieldError(categoryInput, 'category-error', validation.errors.category);
    setFieldError(detailsInput, 'details-error', validation.errors.details);

    if (!validation.isValid) {
      return;
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = '送信中...';

    setTimeout(function () {
      const ticket = core.makeTicket({
        subject: subjectInput.value,
        category: categoryInput.value
      }, new Date());

      const tickets = readTickets();
      tickets.unshift(ticket);
      writeTickets(tickets);

      renderTicketItem(ticket, true);
      updateTicketCounter();

      successMessage.classList.remove('hidden');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>送信する';

      supportForm.reset();
      document.getElementById('subject-counter').textContent = '0 / 100';
      document.getElementById('details-counter').textContent = '0 / 1000';
      document.getElementById('file-label-text').innerHTML = '<strong>クリックしてファイルを選択</strong>、またはここにドラッグ＆ドロップ';

      setTimeout(function () {
        successMessage.classList.add('hidden');
      }, 6000);
    }, 800);
  });

  ticketList.addEventListener('click', function (event) {
    const ticketButton = event.target.closest('.ticket-item');
    if (!ticketButton) {
      return;
    }
    const subject = ticketButton.dataset.ticketSubject || 'このチケット';
    showToast('success', 'チケット詳細ビューは準備中です', '「' + subject + '」の詳細画面は次の更新で追加予定です。');
  });

  function showToast(type, title, text) {
    const container = document.getElementById('toastContainer');
    const icons = {
      success: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
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
    }, 3500);
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

  renderStoredTickets();
})();
