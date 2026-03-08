/**
 * Flahtik — entry point.
 * Initialises all modules once the DOM is ready.
 */

import Cursor from './cursor.js';
import Canvas from './canvas.js';
import Nav    from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
  Nav.init();
  Canvas.init();
  Cursor.init();
  document.body.classList.add('page-loading');
  initScrollAnimations();
  initSmoothScroll();
  initScrollProgress();
  initSectorsAccordion();
  initStatsCounters();
  initContactForm();
  initNewsletterForm();
});

// PAGE LOAD SEQUENCE
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  const nav = document.querySelector('.nav');

  setTimeout(() => {
    if (loader) loader.classList.add('is-hidden');

    setTimeout(() => {
      document.body.classList.remove('page-loading');
      document.body.classList.add('page-ready');
      if (nav) nav.classList.add('nav-visible');

      setTimeout(() => initHeroAnimations(), 200);
    }, 500);
  }, 800);
});

function initHeroAnimations() {
  const heroEls = document.querySelectorAll('.hero .animate-fade-up');
  heroEls.forEach(el => {
    const delay = parseFloat(el.style.transitionDelay) || 0;
    setTimeout(() => el.classList.add('in-view'), delay * 1000);
  });
}

function initScrollAnimations() {
  const animTargets = document.querySelectorAll(
    '.animate-fade-up:not(.hero .animate-fade-up), .animate-fade-in, .animate-stagger'
  );

  const sectionTargets = document.querySelectorAll('[data-observe-section]');

  const all = [...animTargets, ...sectionTargets];
  if (!all.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  all.forEach(el => observer.observe(el));
}

// SMOOTH SCROLL
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// SCROLL PROGRESS
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  function update() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const pct = (scrollY / (docHeight - winHeight)) * 100;
    bar.style.width = pct + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// SECTORS ACCORDION
function initSectorsAccordion() {
  const bands = document.querySelectorAll('.sect__band');
  if (!bands.length) return;

  bands.forEach(band => {
    const btn = band.querySelector('.sect__band-header');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isActive = band.classList.contains('is-active');
      bands.forEach(b => {
        b.classList.remove('is-active');
        const toggle = b.querySelector('.sect__band-header');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        band.classList.add('is-active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const section = document.getElementById('sectors');
  if (!section) return;

  const openFirst = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const first = bands[0];
            if (!first.classList.contains('is-active')) {
              first.classList.add('is-active');
              const btn = first.querySelector('.sect__band-header');
              if (btn) btn.setAttribute('aria-expanded', 'true');
            }
          }, 500);
          openFirst.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  openFirst.observe(section);
}

// STATS COUNTERS
function initStatsCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  const DURATION = 1500;

  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimal, 10) || 0;
    const start = performance.now();

    function tick(now) {
      const elapsed = Math.min((now - start) / DURATION, 1);
      const progress = easeOutExpo(elapsed);
      const value = progress * target;
      el.textContent = decimals > 0 ? value.toFixed(decimals) : Math.round(value);
      if (elapsed < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = decimals > 0 ? target.toFixed(decimals) : target;
        const card = el.closest('.impact__counter');
        if (card) card.classList.add('count-done');
      }
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('.stat-counter');
          els.forEach((el, i) => {
            setTimeout(() => animateCounter(el), i * 150);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const section = document.querySelector('.impact__counters');
  if (section) observer.observe(section);
}

// CONTACT FORM
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const successState = form.parentElement.querySelector('.cta__success');

  const inquiryInput = document.getElementById('inquiryType');
  document.querySelectorAll('.cta__option').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.cta__option').forEach(o => o.classList.remove('is-active'));
      card.classList.add('is-active');
      const title = card.querySelector('.cta__option-title');
      if (inquiryInput && title) {
        inquiryInput.value = title.textContent.trim();
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    form.querySelectorAll('.field-error').forEach(el => el.remove());
    form.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));

    const required = form.querySelectorAll('input[required], textarea[required]');
    let valid = true;

    required.forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.classList.add('has-error');
        const err = document.createElement('span');
        err.className = 'field-error';
        err.textContent = 'This field is required';
        field.parentNode.appendChild(err);
      }
    });

    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value && !emailField.classList.contains('has-error')) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        valid = false;
        emailField.classList.add('has-error');
        const err = document.createElement('span');
        err.className = 'field-error';
        err.textContent = 'Please enter a valid email';
        emailField.parentNode.appendChild(err);
      }
    }

    if (!valid) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        if (successState) successState.style.display = 'flex';
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err) {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      let formErr = form.querySelector('.form-error');
      if (!formErr) {
        formErr = document.createElement('p');
        formErr.className = 'form-error';
        form.appendChild(formErr);
      }
      formErr.textContent = 'Something went wrong. Please try again or email us at hello@flahtik.com';
    }
  });
}

// NEWSLETTER FORM
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  const successState = document.querySelector('.ins__newsletter-success');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailField = form.querySelector('input[type="email"]');
    form.querySelectorAll('.field-error').forEach(el => el.remove());
    emailField.classList.remove('has-error');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.classList.add('has-error');
      const err = document.createElement('span');
      err.className = 'field-error';
      err.textContent = 'Please enter a valid email';
      emailField.parentNode.appendChild(err);
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        if (successState) successState.style.display = 'block';
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      emailField.classList.add('has-error');
      const err2 = document.createElement('span');
      err2.className = 'field-error';
      err2.textContent = 'Could not subscribe. Try again shortly.';
      emailField.parentNode.appendChild(err2);
    }
  });
}
