(function () {
  'use strict';

  var menuButton = document.querySelector('[data-site-menu-toggle]');
  var nav = document.querySelector('[data-site-nav]');

  function setOpen(nextOpen) {
    if (!menuButton || !nav) {
      return;
    }

    menuButton.setAttribute('aria-expanded', String(nextOpen));
    nav.setAttribute('data-open', String(nextOpen));
    if (nextOpen) {
      menuButton.setAttribute('aria-label', 'メニューを閉じる');
    } else {
      menuButton.setAttribute('aria-label', 'メニューを開く');
    }
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var isOpen = nav.getAttribute('data-open') === 'true';
      setOpen(!isOpen);
    });

    nav.addEventListener('click', function (event) {
      var target = event.target;
      if (target instanceof HTMLElement && target.closest('a')) {
        setOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 767) {
        setOpen(false);
      }
    });
  }

  var yearTargets = document.querySelectorAll('[data-current-year]');
  if (yearTargets.length) {
    var year = String(new Date().getFullYear());
    yearTargets.forEach(function (node) {
      node.textContent = year;
    });
  }
})();
