(function () {
  const sections = ['allgemein', 'beispiele', 'datenschutz', 'ueber'];
  const container = document.getElementById('main-scroll-container');
  const navButtons = document.querySelectorAll('.nav-btn');
  const brandHeader = document.getElementById('brand-header-trigger');

  if (!container) return;

  function setActive(id) {
    navButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.section === id);
    });
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    container.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' });
    setActive(id);
  }

  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => scrollToSection(btn.dataset.section));
  });

  document.querySelectorAll('[data-scroll]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection(el.dataset.scroll);
    });
  });

  if (brandHeader) {
    brandHeader.addEventListener('click', () => {
      container.scrollTo({ top: 0, behavior: 'smooth' });
      setActive('allgemein');
    });
  }

  container.addEventListener('scroll', () => {
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

  setActive('allgemein');
})();
