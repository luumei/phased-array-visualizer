(function(){
  // Override quality: still cheap while dragging, but better final quality on phones/tablets.
  window.getRenderQuality = function getRenderQuality() {
    const coarse = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    const phone = window.innerWidth <= 640 || (coarse && Math.min(window.innerWidth, window.innerHeight) <= 520);
    const tablet = !phone && (window.innerWidth <= 1024 || coarse);

    // Radar motion must behave like a continuous drag preview: never skip frames,
    // but reduce only render cost (DPR + far-field/hemisphere mesh density).
    // The 3D target/range sphere/path keep moving every animation frame, so motion stays smooth.
    const radarMoving = (typeof isRadarMotionActive === 'function' && isRadarMotionActive());
    if (radarMoving) {
      if (phone) return { phi: 12, theta: 6, dpr: 0.75, polarStep: 12, topStep: 28, frameSkip: 1, motion: true };
      if (tablet) return { phi: 18, theta: 9, dpr: 0.90, polarStep: 8, topStep: 20, frameSkip: 1, motion: true };
      return { phi: 24, theta: 12, dpr: Math.min(window.devicePixelRatio || 1, 1.0), polarStep: 5, topStep: 14, frameSkip: 1, motion: true };
    }

    if (window.isProgressiveInteracting || (typeof isProgressiveInteracting !== 'undefined' && isProgressiveInteracting)) {
      if (phone) return { phi: 20, theta: 10, dpr: 0.9, polarStep: 8, topStep: 20, frameSkip: 3 };
      if (tablet) return { phi: 30, theta: 15, dpr: 1.05, polarStep: 5, topStep: 14, frameSkip: 2 };
      return { phi: 40, theta: 20, dpr: Math.min(window.devicePixelRatio || 1, 1.3), polarStep: 3, topStep: 10, frameSkip: 1 };
    }
    if (phone) return { phi: 52, theta: 26, dpr: Math.min(window.devicePixelRatio || 1, 1.55), polarStep: 2.5, topStep: 8, frameSkip: 1 };
    if (tablet) return { phi: 64, theta: 32, dpr: Math.min(window.devicePixelRatio || 1, 1.65), polarStep: 2, topStep: 6, frameSkip: 1 };
    return { phi: 80, theta: 40, dpr: Math.min(window.devicePixelRatio || 1, 2), polarStep: 1, topStep: 5, frameSkip: 1 };
  };

  function touchStackLayout() {
    const coarse = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    return coarse && window.innerWidth <= 1024 && window.matchMedia('(orientation: portrait)').matches;
  }
  function refreshVisuals() {
    requestAnimationFrame(function(){
      try { onWindowResize(); } catch(e) {}
      try { updateFieldSlice(); } catch(e) {}
      try { rebuildSlicePanelCache(); } catch(e) {}
      try { renderer && renderer.setPixelRatio && renderer.setPixelRatio(getRenderQuality().dpr); } catch(e) {}
    });
  }
  function setBigMode(expanded) {
    const ws = document.getElementById('visual-workspace');
    const btn = document.getElementById('workspace-fullscreen');
    if (!ws) return;
    ws.classList.toggle('mobile-expanded', expanded);
    document.body.classList.toggle('mobile-big-preview', expanded);
    if (btn) btn.textContent = expanded ? 'Sticky view' : 'Big view';
    refreshVisuals();
    if (expanded) ws.scrollIntoView({ block:'start', behavior:'smooth' });
  }

  document.addEventListener('DOMContentLoaded', function(){
    const ws = document.getElementById('visual-workspace');
    const toggle2d = document.getElementById('toggle-2d-panel');
    const big = document.getElementById('workspace-fullscreen');
    const heightHandle = document.getElementById('workspace-height-resizer');
    if (!ws) return;

    // Ensure old hidden states do not trap the 2D button.
    ws.classList.remove('slice-panel-hidden','two-d-collapsed','three-d-collapsed');

    if (toggle2d) {
      toggle2d.addEventListener('click', function(ev){
        ev.preventDefault();
        ev.stopImmediatePropagation();
        const collapsed = ws.classList.toggle('slice-2d-collapsed');
        toggle2d.textContent = collapsed ? 'Show 2D' : 'Hide 2D';
        refreshVisuals();
      }, true);
      toggle2d.textContent = ws.classList.contains('slice-2d-collapsed') ? 'Show 2D' : 'Hide 2D';
    }

    if (big) {
      big.addEventListener('click', function(ev){
        // On phone and tablet portrait: don't use browser fullscreen; use sticky/expanded switch.
        if (touchStackLayout() || window.innerWidth <= 640) {
          ev.preventDefault();
          ev.stopImmediatePropagation();
          setBigMode(!ws.classList.contains('mobile-expanded'));
        } else if (document.fullscreenElement === ws) {
          ev.preventDefault();
          ev.stopImmediatePropagation();
          document.exitFullscreen();
        }
      }, true);
      document.addEventListener('fullscreenchange', function(){
        if (document.fullscreenElement === ws) big.textContent = 'Exit big view';
        else if (ws.classList.contains('mobile-expanded')) big.textContent = 'Sticky view';
        else big.textContent = 'Big view';
        refreshVisuals();
      });
    }

    window.addEventListener('resize', function(){
      if (!touchStackLayout() && window.innerWidth > 640) setBigMode(false);
      if (big && !document.fullscreenElement && !ws.classList.contains('mobile-expanded')) big.textContent = 'Big view';
    });

    // Height drag is allowed also on phone/tablet. Dragging down makes bigger, up makes smaller.
    if (heightHandle) {
      let dragging = false;
      const clamp = (v,min,max)=>Math.max(min, Math.min(max, v));
      heightHandle.addEventListener('pointerdown', function(e){
        dragging = true;
        heightHandle.setPointerCapture && heightHandle.setPointerCapture(e.pointerId);
        document.body.style.userSelect = 'none';
        e.preventDefault();
      });
      window.addEventListener('pointermove', function(e){
        if (!dragging) return;
        const rect = ws.getBoundingClientRect();
        const minH = window.innerWidth <= 640 ? 280 : 340;
        const maxH = Math.max(minH + 40, Math.min(window.innerHeight * 0.88, 900));
        const h = clamp(e.clientY - rect.top, minH, maxH);
        ws.classList.remove('workspace-compact-height');
        ws.style.setProperty('--workspace-height', Math.round(h) + 'px');
        try { localStorage.setItem('phasor_workspace_height', Math.round(h) + 'px'); } catch(e) {}
        refreshVisuals();
      });
      window.addEventListener('pointerup', function(){
        if (!dragging) return;
        dragging = false;
        document.body.style.userSelect = '';
        refreshVisuals();
      });
    }

    // Make sure the full-quality pass happens after touch/mouse release too.
    ['pointerup','touchend','mouseup','change'].forEach(function(evt){
      document.addEventListener(evt, function(){
        try {
          clearTimeout(progressiveIdleTimer);
          progressiveIdleTimer = setTimeout(function(){
            isProgressiveInteracting = false;
            ws.classList.remove('progressive-low');
            updateAllVisuals();
          }, window.innerWidth <= 640 ? 260 : 170);
        } catch(e) {}
      }, {passive:true});
    });
  });
})();
