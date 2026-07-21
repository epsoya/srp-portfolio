/* ─────────────────────────────────────────
   MOBILE "OS" LAYER
   Separate from the desktop code in script.js.
   Only initializes under the 700px breakpoint.
   Reuses script.js's data + pure HTML-builder
   functions (homeHTML, projectsHTML, archiveHTML,
   aboutHTML, contactHTML, projectDetailHTML, etc.)
───────────────────────────────────────── */

const mobileState = {
  locked:      true,
  activeApp:   null,   // 'home' | 'projects' | 'about' | 'archive' | 'contact' | null (homescreen)
  sheetOpen:   false,
  aboutScreen: 0
};

const MOBILE_BREAKPOINT = '(max-width: 700px)';

/* ─────────────────────────────────────────
   SWIPE HELPER
───────────────────────────────────────── */
function onSwipe(el, { onUp, onDown, onLeft, onRight, threshold = 50 } = {}) {
  if (!el) return;
  let startX = 0, startY = 0, tracking = false;

  el.addEventListener('touchstart', e => {
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    tracking = true;
  }, { passive: true });

  el.addEventListener('touchend', e => {
    if (!tracking) return;
    tracking = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > threshold && onRight) onRight();
      else if (dx < -threshold && onLeft) onLeft();
    } else {
      if (dy > threshold && onDown) onDown();
      else if (dy < -threshold && onUp) onUp();
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────
   LOCKSCREEN
───────────────────────────────────────── */
function unlockScreen() {
  if (!mobileState.locked) return;
  mobileState.locked = false;

  const lock = document.getElementById('lockscreen');
  gsap.to(lock, {
    y: '-100%', opacity: 0, duration: 0.55, ease: 'power2.inOut',
    onComplete: () => { lock.style.display = 'none'; }
  });

  gsap.from('.app-tile', {
    y: 16, opacity: 0, duration: 0.4, ease: 'power2.out', stagger: 0.05, delay: 0.15
  });
}

/* ─────────────────────────────────────────
   DOCK
───────────────────────────────────────── */
function renderDock() {
  const hamburger  = document.getElementById('dock-hamburger');
  const contactBtn = document.getElementById('dock-contact');

  const app = mobileState.activeApp;
  const showHamburger = app === 'projects' || app === 'archive';
  const showContact   = !app;

  hamburger.hidden  = !showHamburger;
  contactBtn.hidden = !showContact;
}

/* ─────────────────────────────────────────
   HOME INDICATOR
───────────────────────────────────────── */
function showHomeIndicator() { document.getElementById('home-indicator').classList.add('visible'); }
function hideHomeIndicator() { document.getElementById('home-indicator').classList.remove('visible'); }

/* ─────────────────────────────────────────
   BOTTOM SHEET
───────────────────────────────────────── */
function renderSheetList() {
  const list = mobileState.activeApp === 'archive' ? archive : projects;
  const container = document.getElementById('sheet-list');

  if (!list.length) {
    container.innerHTML = `<p class="sheet-empty">Nothing here yet.</p>`;
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="sheet-item${item.id === state.activeSubtab ? ' active' : ''}" data-id="${item.id}">
      <span class="sheet-item-title">${item.title}</span>
      <span class="sheet-item-meta">${item.category}</span>
    </div>
  `).join('');

  container.querySelectorAll('.sheet-item').forEach(el => {
    el.addEventListener('click', () => {
      state.activeSubtab = el.dataset.id;
      renderAppScreenContent(mobileState.activeApp);
      closeSheet();
    });
  });
}

function toggleSheet() {
  if (mobileState.sheetOpen) closeSheet();
  else openSheet();
}

function openSheet() {
  mobileState.sheetOpen = true;
  renderSheetList();
  document.getElementById('dock-hamburger').classList.add('is-close');

  const sheet    = document.getElementById('bottom-sheet');
  const backdrop = document.getElementById('sheet-backdrop');

  gsap.set(sheet, { display: 'flex' });
  gsap.set(backdrop, { display: 'block' });
  gsap.fromTo(sheet,    { y: '100%' }, { y: '0%', duration: 0.4, ease: 'power2.inOut' });
  gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
}

function closeSheet() {
  mobileState.sheetOpen = false;
  document.getElementById('dock-hamburger').classList.remove('is-close');

  const sheet    = document.getElementById('bottom-sheet');
  const backdrop = document.getElementById('sheet-backdrop');

  gsap.to(sheet, {
    y: '100%', duration: 0.35, ease: 'power2.inOut',
    onComplete: () => gsap.set(sheet, { display: 'none' })
  });
  gsap.to(backdrop, {
    opacity: 0, duration: 0.25, ease: 'power2.in',
    onComplete: () => gsap.set(backdrop, { display: 'none' })
  });
}

function closeSheetImmediate() {
  mobileState.sheetOpen = false;
  document.getElementById('dock-hamburger').classList.remove('is-close');
  gsap.set('#bottom-sheet',    { y: '100%', display: 'none' });
  gsap.set('#sheet-backdrop',  { opacity: 0, display: 'none' });
}

/* ─────────────────────────────────────────
   ABOUT — swipeable screens
───────────────────────────────────────── */
function mAboutContentHTML() {
  const temp = document.createElement('div');
  temp.innerHTML = aboutHTML();
  const sections = Array.from(temp.querySelectorAll('.about-panel'));
  const dots  = sections.map((_, i) => `<span class="about-dot${i === 0 ? ' active' : ''}" data-idx="${i}"></span>`).join('');
  const track = sections.map(s => s.outerHTML).join('');

  return `
    <div class="about-mobile">
      <div class="about-dots">${dots}</div>
      <div class="about-swipe-wrap" id="about-swipe-wrap">
        <div class="about-swipe-track" id="about-swipe-track">${track}</div>
      </div>
    </div>
  `;
}

function goToAboutScreen(index) {
  const track = document.getElementById('about-swipe-track');
  if (!track) return;
  const sections = track.querySelectorAll('.about-panel').length;
  const clamped  = Math.max(0, Math.min(sections - 1, index));
  mobileState.aboutScreen = clamped;

  gsap.to(track, { x: `-${clamped * 100}vw`, duration: 0.45, ease: 'power2.inOut' });
  document.querySelectorAll('.about-dot').forEach((d, i) => d.classList.toggle('active', i === clamped));
}

function setupAboutSwipe() {
  const wrap = document.getElementById('about-swipe-wrap');
  if (!wrap) return;
  onSwipe(wrap, {
    onLeft:  () => goToAboutScreen(mobileState.aboutScreen + 1),
    onRight: () => goToAboutScreen(mobileState.aboutScreen - 1)
  });
  document.querySelectorAll('.about-dot').forEach(dot => {
    dot.addEventListener('click', () => goToAboutScreen(parseInt(dot.dataset.idx, 10)));
  });
}

/* ─────────────────────────────────────────
   APP CONTENT RENDER
───────────────────────────────────────── */
function renderAppScreenContent(appId) {
  const el = document.getElementById('app-screen-content');
  state.activeTab    = appId;
  state.detailItem   = null;
  state.detailSource = null;

  switch (appId) {
    case 'home':
      el.innerHTML = homeHTML();
      break;
    case 'projects':
      el.innerHTML = projectsHTML(projects, 'PROJECTS');
      wireProjectPreview();
      break;
    case 'archive':
      el.innerHTML = archiveHTML();
      wireGotoProjectsButton();
      break;
    case 'about':
      el.innerHTML = mAboutContentHTML();
      mobileState.aboutScreen = 0;
      setupAboutSwipe();
      animateSkillBars();
      break;
    case 'contact':
      el.innerHTML = contactHTML();
      break;
  }

  renderDock();
}

function wireProjectPreview() {
  const el  = document.getElementById('app-screen-content');
  const btn = el.querySelector('.btn-view-more');
  if (btn) btn.addEventListener('click', () => mOpenDetail(btn.dataset.id, btn.dataset.source));
}

function wireGotoProjectsButton() {
  const el  = document.getElementById('app-screen-content');
  const btn = el.querySelector('.btn-goto-projects');
  if (btn) btn.addEventListener('click', () => {
    mobileState.activeApp = 'projects';
    renderAppScreenContent('projects');
  });
}

function mOpenDetail(id, source) {
  const list = source === 'archive' ? archive : projects;
  const item = list.find(p => p.id === id);
  if (!item) return;

  state.detailItem   = item;
  state.detailSource = source;
  if (mobileState.sheetOpen) closeSheetImmediate();

  const el = document.getElementById('app-screen-content');
  gsap.to(el, {
    y: -8, opacity: 0, duration: 0.18, ease: 'power2.in',
    onComplete: () => {
      el.innerHTML = projectDetailHTML(item);
      gsap.set(el, { clearProps: 'y,opacity' });
      gsap.fromTo(el, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.22, ease: 'power2.out' });
      const backBtn = el.querySelector('.project-back-btn');
      if (backBtn) backBtn.addEventListener('click', mCloseDetail);
    }
  });
}

function mCloseDetail() {
  const source = state.detailSource;
  state.detailItem   = null;
  state.detailSource = null;

  const el = document.getElementById('app-screen-content');
  gsap.to(el, {
    y: -8, opacity: 0, duration: 0.18, ease: 'power2.in',
    onComplete: () => {
      renderAppScreenContent(mobileState.activeApp || source || 'projects');
      gsap.set(el, { clearProps: 'y,opacity' });
      gsap.fromTo(el, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.22, ease: 'power2.out' });
    }
  });
}

/* ─────────────────────────────────────────
   APP OPEN / CLOSE — FLIP transition
───────────────────────────────────────── */
function openApp(appId, tileEl) {
  if (mobileState.activeApp) return;
  const screen = document.getElementById('app-screen');
  const rect   = tileEl.getBoundingClientRect();

  mobileState.activeApp = appId;
  state.activeSubtab = null;

  gsap.killTweensOf(screen);
  gsap.set(screen, {
    display: 'block',
    top: rect.top, left: rect.left,
    width: rect.width, height: rect.height,
    borderRadius: 18,
    opacity: 1,
    overflow: 'hidden'
  });

  renderAppScreenContent(appId);

  gsap.to(screen, {
    top: 0, left: 0, width: '100vw', height: '100vh',
    borderRadius: 0,
    duration: 0.5, ease: 'power3.inOut',
    onComplete: () => {
      screen.classList.add('open');
      showHomeIndicator();
    }
  });
}

function closeApp() {
  const appId = mobileState.activeApp;
  if (!appId) return;
  if (mobileState.sheetOpen) closeSheetImmediate();

  const screen = document.getElementById('app-screen');
  const tileEl = document.querySelector(`.app-tile[data-app="${appId}"]`);
  const rect   = tileEl
    ? tileEl.getBoundingClientRect()
    : { top: window.innerHeight / 2, left: window.innerWidth / 2, width: 0, height: 0 };

  hideHomeIndicator();
  screen.classList.remove('open');

  gsap.killTweensOf(screen);
  gsap.to(screen, {
    top: rect.top, left: rect.left, width: rect.width, height: rect.height,
    borderRadius: 18, opacity: 0.3,
    duration: 0.42, ease: 'power3.inOut',
    onComplete: () => {
      gsap.set(screen, { display: 'none', clearProps: 'all' });
      document.getElementById('app-screen-content').innerHTML = '';
      mobileState.activeApp = null;
      state.detailItem   = null;
      state.detailSource = null;
      renderDock();
    }
  });
}

/* ─────────────────────────────────────────
   THEME NOTIFICATION
───────────────────────────────────────── */
function mToggleTheme() {
  toggleTheme();
  const label = state.theme === 'dark' ? 'Switched to Dark Mode' : 'Switched to Light Mode';
  showThemeNotification(label);
}

function showThemeNotification(text) {
  const banner = document.getElementById('theme-notification');
  banner.textContent = text;

  gsap.killTweensOf(banner);
  const tl = gsap.timeline();
  tl.set(banner, { display: 'block' })
    .fromTo(banner, { y: '-120%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.4, ease: 'power2.out' })
    .to(banner, { y: '0%', duration: 1.2 })
    .to(banner, { y: '-120%', opacity: 0, duration: 0.35, ease: 'power2.in' })
    .set(banner, { display: 'none' });
}

/* ─────────────────────────────────────────
   DEVICE ORIENTATION — wallpaper parallax
───────────────────────────────────────── */
let orientationHandler = null;

function handleOrientation(e) {
  const bg = document.querySelector('#homescreen .wallpaper');
  if (!bg || e.beta === null || e.gamma === null) return;
  const x = Math.max(-1, Math.min(1, e.gamma / 30));
  const y = Math.max(-1, Math.min(1, (e.beta - 40) / 30));
  gsap.to(bg, { x: x * -18, y: y * -18, duration: 1.2, ease: 'power2.out' });
}

function setupOrientationParallax() {
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    const btn = document.getElementById('tilt-enable');
    btn.hidden = false;
    btn.addEventListener('click', () => {
      DeviceOrientationEvent.requestPermission().then(res => {
        if (res === 'granted') {
          orientationHandler = handleOrientation;
          window.addEventListener('deviceorientation', orientationHandler);
          btn.hidden = true;
        }
      }).catch(() => {});
    });
  } else if (typeof DeviceOrientationEvent !== 'undefined') {
    orientationHandler = handleOrientation;
    window.addEventListener('deviceorientation', orientationHandler);
  }
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
function initMobileOS() {
  document.getElementById('lockscreen').querySelector('.lock-bg').innerHTML = HOME_BG_SVG('lock-bg-svg');
  document.querySelector('#homescreen .wallpaper').innerHTML = HOME_BG_SVG('wallpaper-svg');

  onSwipe(document.getElementById('lockscreen'), { onUp: unlockScreen });
  document.getElementById('lockscreen').addEventListener('click', unlockScreen);

  document.querySelectorAll('.app-tile').forEach(tile => {
    tile.addEventListener('click', () => openApp(tile.dataset.app, tile));
  });

  onSwipe(document.getElementById('home-indicator'), { onUp: closeApp });
  document.getElementById('home-indicator').addEventListener('click', closeApp);

  document.getElementById('dock-hamburger').addEventListener('click', toggleSheet);
  document.getElementById('dock-contact').addEventListener('click', () => {
    const tile = document.querySelector('.app-tile[data-app="contact"]');
    if (tile) openApp('contact', tile);
  });
  document.getElementById('dock-theme').addEventListener('click', mToggleTheme);

  onSwipe(document.getElementById('bottom-sheet'), { onDown: closeSheet });
  document.querySelector('.sheet-handle').addEventListener('click', closeSheet);
  document.getElementById('sheet-backdrop').addEventListener('click', closeSheet);

  renderDock();
  setupOrientationParallax();
}

document.addEventListener('DOMContentLoaded', () => {
  if (!window.matchMedia(MOBILE_BREAKPOINT).matches) return;
  initMobileOS();
});
