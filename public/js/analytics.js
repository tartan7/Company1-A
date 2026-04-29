(function () {
  'use strict';

  var currentScript = document.currentScript || document.querySelector('script[data-analytics-endpoint]');
  if (!currentScript) {
    return;
  }

  var globalConfig = window.UNITECUBE_ANALYTICS || {};
  var endpoint = currentScript.getAttribute('data-analytics-endpoint') || globalConfig.endpoint || '';
  var ga4Id = currentScript.getAttribute('data-ga4-id') || globalConfig.ga4Id || '';
  var shouldTrack404 = currentScript.getAttribute('data-track-404') === 'true';
  var is404Page = window.location.pathname === '/404.html';
  var path = window.location.pathname + window.location.search;

  if (is404Page && !shouldTrack404) {
    return;
  }

  function sendBeaconPayload() {
    if (!endpoint) {
      return;
    }

    var payload = JSON.stringify({
      event: 'page_view',
      path: path,
      title: document.title,
      referrer: document.referrer || '',
      timestamp: new Date().toISOString()
    });

    try {
      if (navigator.sendBeacon) {
        var blob = new Blob([payload], { type: 'application/json' });
        navigator.sendBeacon(endpoint, blob);
        return;
      }
    } catch (error) {
      // Fall through to fetch if sendBeacon is not available.
    }

    if (typeof fetch === 'function') {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true
      }).catch(function () {
        // No-op to avoid breaking page UX on telemetry failure.
      });
    }
  }

  function sendGa4PageView() {
    if (!ga4Id || ga4Id === 'G-XXXXXXXXXX') {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = window.gtag || gtag;
    window.gtag('js', new Date());
    window.gtag('config', ga4Id, { page_path: path });

    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ga4Id);
    document.head.appendChild(gaScript);
  }

  sendBeaconPayload();
  sendGa4PageView();
})();
