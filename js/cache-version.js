// Cache-busting/version guard. When APP_VERSION changes, the page reloads once and all local assets use ?v=2026-05-02-desktop-vscode-dragbar-cachebust-v2.
(function () {
  const APP_VERSION = "2026-05-02-desktop-vscode-dragbar-cachebust-v2";
  const VERSION_KEY = 'phased_array_app_version';
  const RELOAD_KEY = 'phased_array_reloaded_for_' + APP_VERSION;
  try {
    window.PHASOR_APP_VERSION = APP_VERSION;
    const storedVersion = localStorage.getItem(VERSION_KEY);
    if (storedVersion !== APP_VERSION) {
      localStorage.setItem(VERSION_KEY, APP_VERSION);
      if (!sessionStorage.getItem(RELOAD_KEY)) {
        sessionStorage.setItem(RELOAD_KEY, '1');
        const url = new URL(window.location.href);
        url.searchParams.set('v', APP_VERSION);
        window.location.replace(url.toString());
      }
    }
  } catch (e) {
    console.warn('Version check skipped:', e);
  }
})();
