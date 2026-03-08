/**
 * Navigation — sticky scroll, active link tracking, mobile menu.
 */

const Nav = (() => {
  let nav, toggle, navLinks;
  const SCROLL_THRESHOLD = 80;

  function init() {
    nav = document.querySelector('.nav');
    toggle = document.querySelector('.nav__toggle');
    navLinks = document.querySelectorAll('.nav__link');

    if (!nav) return;

    window.addEventListener('scroll', onScroll, { passive: true });
    toggle?.addEventListener('click', toggleMenu);

    initMobileOverlay();
    initActiveLinkTracking();
  }

  function onScroll() {
    nav.classList.toggle('nav--scrolled', window.scrollY > SCROLL_THRESHOLD);
  }

  function initActiveLinkTracking() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              const href = link.getAttribute('href');
              link.classList.toggle('is-active', href === '#' + id);
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach(s => observer.observe(s));
  }

  function initMobileOverlay() {
    let overlay = document.querySelector('.nav-mobile-overlay');
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.className = 'nav-mobile-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    const links = [
      { text: 'Solutions', href: '#services' },
      { text: 'Platform', href: '#platform' },
      { text: 'Sectors', href: '#sectors' },
      { text: 'Insights', href: '#insights' },
      { text: 'About', href: '#about' },
      { text: 'Contact', href: '#contact' },
    ];

    const brand = document.createElement('div');
    brand.className = 'mobile-menu__brand';
    const motif = document.createElement('img');
    motif.src = 'assets/images/flahtik-motif.png';
    motif.alt = 'Flahtik';
    motif.className = 'mobile-menu__motif';
    brand.appendChild(motif);
    overlay.appendChild(brand);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'nav-mobile-close';
    closeBtn.setAttribute('aria-label', 'Close menu');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', closeMenu);
    overlay.appendChild(closeBtn);

    links.forEach(l => {
      const a = document.createElement('a');
      a.className = 'nav-mobile-link';
      a.href = l.href;
      a.textContent = l.text;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
        const target = document.querySelector(l.href);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
      overlay.appendChild(a);
    });

    document.body.appendChild(overlay);
  }

  function toggleMenu() {
    const isOpen = document.body.classList.contains('menu-open');
    if (isOpen) {
      closeMenu();
    } else {
      document.body.classList.add('menu-open');
      const overlay = document.querySelector('.nav-mobile-overlay');
      if (overlay) overlay.setAttribute('aria-hidden', 'false');
    }
  }

  function closeMenu() {
    document.body.classList.remove('menu-open');
    const overlay = document.querySelector('.nav-mobile-overlay');
    if (overlay) overlay.setAttribute('aria-hidden', 'true');
  }

  return { init };
})();

export default Nav;
