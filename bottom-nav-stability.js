// Keep the menu aligned with the visible viewport when iOS Safari's toolbar
// changes its height. The menu lives directly under body, outside page cards.
(function () {
  let nav;
  let frame = 0;

  function positionNav() {
    frame = 0;
    nav = nav || document.querySelector('.se-bottom-nav');
    if (!nav || !document.body) return;
    if (nav.parentElement !== document.body) document.body.appendChild(nav);

    const viewport = window.visualViewport;
    const keyboardOpen = viewport && viewport.height < window.innerHeight * 0.7;
    nav.style.setProperty('visibility', keyboardOpen ? 'hidden' : 'visible', 'important');
    nav.style.setProperty('position', 'fixed', 'important');
    nav.style.setProperty('left', '0', 'important');
    nav.style.setProperty('right', '0', 'important');
    nav.style.setProperty('width', '100%', 'important');
    nav.style.setProperty('max-width', 'none', 'important');
    nav.style.setProperty('transform', 'none', 'important');
    nav.style.setProperty('translate', 'none', 'important');
    nav.style.setProperty('bottom', 'auto', 'important');
    const visibleBottom = viewport ? viewport.offsetTop + viewport.height : window.innerHeight;
    nav.style.setProperty('top', Math.round(visibleBottom - nav.offsetHeight) + 'px', 'important');
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(positionNav);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',schedule,{once:true});
  else schedule();
  window.addEventListener('pageshow',schedule);
  window.addEventListener('resize',schedule);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize',schedule);
    window.visualViewport.addEventListener('scroll',schedule);
  }
})();
