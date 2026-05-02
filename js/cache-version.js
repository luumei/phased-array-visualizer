  // App version marker: when this value changes, normal browsers reload once and store the new version.
  const APP_VERSION = "2026-05-02-progressive-render-v5-fixed";
  try {
    const storedVersion = localStorage.getItem('phased_array_app_version');
    if (storedVersion && storedVersion !== APP_VERSION) {
      localStorage.setItem('phased_array_app_version', APP_VERSION);
      location.reload();
    } else if (!storedVersion) {
      localStorage.setItem('phased_array_app_version', APP_VERSION);
    }
  } catch (e) {
    console.warn('Version check skipped:', e);
  }
