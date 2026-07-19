(function () {
  const sections = ['allgemein', 'beispiele', 'datenschutz', 'ueber', 'kontakt'];
  const container = document.getElementById('main-scroll-container');
  const navButtons = document.querySelectorAll('.nav-btn');
  const brandHeader = document.getElementById('brand-header-trigger');
  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');
  const navOverlay = document.getElementById('nav-overlay');

  if (!container) return;

  function isMobileNav() {
    return window.matchMedia('(max-width: 767.98px)').matches;
  }

  function setMenuOpen(open) {
    if (!siteNav || !menuToggle || !navOverlay) return;
    siteNav.classList.toggle('is-open', open);
    navOverlay.classList.toggle('is-open', open);
    navOverlay.hidden = !open;
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    document.body.classList.toggle('nav-open', open);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function setActive(id) {
    navButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.section === id);
    });
  }

  function setHash(id) {
    const next = '#' + id;
    if (location.hash !== next) {
      history.pushState(null, '', next);
    }
  }

  function scrollToSection(id, options) {
    const opts = options || {};
    const smooth = opts.smooth !== false;
    const updateHash = opts.updateHash !== false;
    const el = document.getElementById(id);
    if (!el || !sections.includes(id)) return;

    container.scrollTo({ top: Math.max(0, el.offsetTop - 40), behavior: smooth ? 'smooth' : 'auto' });
    setActive(id);
    if (updateHash) setHash(id);
    if (isMobileNav()) closeMenu();
  }

  function hashSectionId() {
    const id = decodeURIComponent((location.hash || '').replace(/^#/, ''));
    return sections.includes(id) ? id : null;
  }

  function applyHash(smooth) {
    const id = hashSectionId();
    if (id) {
      scrollToSection(id, { smooth: smooth, updateHash: false });
    } else {
      setActive('allgemein');
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!open);
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (!isMobileNav()) closeMenu();
  });

  navButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection(btn.dataset.section);
    });
  });

  document.querySelectorAll('[data-scroll]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection(el.dataset.scroll);
    });
  });

  if (brandHeader) {
    brandHeader.addEventListener('click', () => {
      scrollToSection('allgemein');
    });
  }

  window.addEventListener('scroll', () => {
    const scrollPos = container.scrollTop + 100;
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.offsetTop - 60;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        setActive(id);
        break;
      }
    }
  });

  window.addEventListener('hashchange', () => applyHash(true));
  window.addEventListener('popstate', () => applyHash(true));

  closeMenu();

  // Wait a frame so layout is ready, then jump without animation on first paint.
  requestAnimationFrame(() => {
    applyHash(false);
  });
})();
