// -- SCROLL PROGRESS --
window.addEventListener('scroll', () => {
  const p = (window.scrollY /
    (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('scrollProgress').style.width = p + '%';
});

// === PAGE LOADER ===
(function() {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  
  function hideLoader() {
    loader.classList.add('hidden');
  }
  
  // Hide after max 1.5s no matter what
  const fallback = setTimeout(hideLoader, 1500);
  
  if (document.readyState === 'complete') {
    clearTimeout(fallback);
    setTimeout(hideLoader, 400);
  } else {
    window.addEventListener('load', function() {
      clearTimeout(fallback);
      setTimeout(hideLoader, 400);
    });
  }
})();

// Reveal on scroll
const revealEls = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // Stagger siblings within same parent
      const siblings = [...e.target.parentElement
        .querySelectorAll('[data-reveal]')];
      const idx = siblings.indexOf(e.target);
      setTimeout(() => {
        e.target.classList.add('revealed');
      }, idx * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// Nav scroll state
const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Active nav link via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav__link[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));

// Mobile burger
const burger = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__mobile');
burger.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  mobileMenu.setAttribute('aria-hidden', !open);
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden', true);
  });
});

// Sectors accordion
const sectorItems = document.querySelectorAll('.sectors__item');
const visCards = document.querySelectorAll('.sectors__vis');
const visMap = ['gov', 'agri', 'water', 'env', 'energy'];

sectorItems.forEach((item, i) => {
  const btn = item.querySelector('.sectors__trigger');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('sectors__item--open');
    sectorItems.forEach(s => {
      s.classList.remove('sectors__item--open');
      s.querySelector('.sectors__trigger').setAttribute('aria-expanded', false);
    });
    if (!isOpen) {
      item.classList.add('sectors__item--open');
      btn.setAttribute('aria-expanded', true);
      visCards.forEach(v => v.classList.remove('active'));
      const target = document.querySelector(`.sectors__vis--${visMap[i]}`);
      if (target) target.classList.add('active');
    }
  });
});

// Stats counters
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function animateCounter(el) {
  const target  = parseFloat(el.dataset.target);
  const decimal = parseInt(el.dataset.decimal || 0);
  const dur     = 1800;
  const start   = performance.now();

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / dur, 1);
    const eased    = easeOutExpo(progress);
    const value    = target * eased;
    el.textContent = decimal > 0
      ? value.toFixed(decimal)
      : Math.floor(value).toString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = decimal > 0
      ? target.toFixed(decimal) : target.toString();
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stats__count').forEach(animateCounter);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats__counters');
if (statsSection) counterObserver.observe(statsSection);

// Inquiry type selector
const selectors = document.querySelectorAll('.contact__selector');
const inquiryInput = document.getElementById('inquiryType');
selectors.forEach(sel => {
  sel.addEventListener('click', () => {
    selectors.forEach(s => s.classList.remove('contact__selector--active'));
    sel.classList.add('contact__selector--active');
    if (inquiryInput) {
      const map = { demo: 'Platform Demo', pilot: 'Enterprise Pilot', general: 'General Inquiry' };
      inquiryInput.value = map[sel.dataset.type] || 'General Inquiry';
    }
  });
});

// Contact form submission
function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.querySelector('.contact__success');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const err = field.nextElementSibling;
      if (!field.value.trim()) {
        field.classList.add('has-error');
        if (err) err.textContent = 'This field is required.';
        valid = false;
      } else {
        field.classList.remove('has-error');
        if (err) err.textContent = '';
      }
    });
    if (!valid) return;
    const btn = form.querySelector('.contact__submit');
    btn.disabled = true;
    btn.querySelector('.contact__submit-text').textContent = 'Sending...';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        if (success) success.style.display = 'flex';
      } else {
        throw new Error();
      }
    } catch {
      btn.disabled = false;
      btn.querySelector('.contact__submit-text').textContent = 'Send Message';
      alert('Something went wrong. Please email us directly at hello@flahtik.com');
    }
  });
}

// Newsletter form submission
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  const success = document.querySelector('.ins__newsletter-success');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Subscribing...';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        if (success) success.style.display = 'flex';
      } else {
        throw new Error();
      }
    } catch {
      btn.disabled = false;
      btn.textContent = 'Subscribe';
      alert('Something went wrong. Please try again.');
    }
  });
}

initContactForm();
initNewsletterForm();

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top
      + window.scrollY - 68;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    // Close mobile menu if open
    const burger = document.querySelector('.nav__burger');
    const mobile = document.querySelector('.nav__mobile');
    if (burger && burger.classList.contains('open')) {
      burger.classList.remove('open');
      mobile.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    }
  });
});

// Pause animations when tab not visible
document.addEventListener('visibilitychange', () => {
  document.body.classList.toggle('tab-hidden',
    document.hidden);
});
