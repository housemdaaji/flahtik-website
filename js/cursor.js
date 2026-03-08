/**
 * Custom cursor — 8px cyan dot (mix-blend-mode: difference) + 40px trailing ring.
 * Expands ring to 60px on interactive elements. Hidden on touch devices.
 */

const Cursor = (() => {
  let dot, ring;
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let raf;

  function create() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    document.body.classList.add('custom-cursor');

    dot = document.createElement('div');
    dot.className = 'cursor-dot';
    ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', () => ring.classList.add('cursor-ring--click'));
    document.addEventListener('mouseup', () => ring.classList.remove('cursor-ring--click'));

    bindHoverTargets();
    loop();
  }

  function bindHoverTargets() {
    document.querySelectorAll('a, button, .btn, [data-cursor="pointer"]').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('cursor-ring--hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('cursor-ring--hover'));
    });
  }

  function onMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  }

  function loop() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    raf = requestAnimationFrame(loop);
  }

  function destroy() {
    cancelAnimationFrame(raf);
    dot?.remove();
    ring?.remove();
    document.body.classList.remove('custom-cursor');
  }

  return { init: create, destroy };
})();

export default Cursor;
