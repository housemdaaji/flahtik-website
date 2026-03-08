/**
 * Animated background — particles drifting over faint topographic contour lines.
 * Renders to a fixed full-viewport <canvas> behind all content.
 * Respects prefers-reduced-motion and pauses when tab is hidden.
 */

const Canvas = (() => {
  let cvs, ctx, raf;
  let width, height;
  let particles = [];
  let time = 0;
  let mouse = { x: -1000, y: -1000 };
  let frameCount = 0;
  let running = false;

  const PARTICLE_COUNT = 70;
  const LINE_COUNT = 10;
  const CONNECT_DIST = 120;

  function create() {
    cvs = document.createElement('canvas');
    cvs.className = 'bg-canvas';
    cvs.id = 'bgCanvas';
    cvs.setAttribute('aria-hidden', 'true');
    document.body.prepend(cvs);
    ctx = cvs.getContext('2d');

    resize();
    seedParticles();
    window.addEventListener('resize', resize);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      drawStaticBg();
      return;
    }

    document.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        pause();
      } else {
        resume();
      }
    });

    resume();
  }

  function resize() {
    width = cvs.width = window.innerWidth;
    height = cvs.height = window.innerHeight;
  }

  function drawStaticBg() {
    ctx.fillStyle = '#040d0a';
    ctx.fillRect(0, 0, width, height);
  }

  function seedParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.35 + 0.08,
    }));
  }

  function drawTopoLines() {
    ctx.lineWidth = 1;

    for (let i = 0; i < LINE_COUNT; i++) {
      ctx.beginPath();
      const opacity = 0.025 + (i % 3 === 0 ? 0.015 : 0);
      ctx.strokeStyle = `rgba(46, 204, 122, ${opacity})`;
      const yOff = (height / LINE_COUNT) * i + 60;
      for (let x = 0; x <= width; x += 3) {
        const y = yOff
          + Math.sin(x * 0.002 + time * 0.35 + i * 0.8) * 45
          + Math.sin(x * 0.006 + time * 0.15 + i * 1.5) * 22
          + Math.cos(x * 0.004 + time * 0.25 + i) * 15;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }

  function drawParticles() {
    const checkConnections = frameCount % 2 === 0;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(10, 245, 255, ${p.alpha})`;
      ctx.fill();

      if (checkConnections) {
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(46, 204, 122, ${0.06 * (1 - dist / CONNECT_DIST)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    time += 0.008;
    frameCount++;
    drawTopoLines();
    drawParticles();
    raf = requestAnimationFrame(loop);
  }

  function pause() {
    if (!running) return;
    running = false;
    cancelAnimationFrame(raf);
  }

  function resume() {
    if (running) return;
    running = true;
    raf = requestAnimationFrame(loop);
  }

  function destroy() {
    pause();
    window.removeEventListener('resize', resize);
    cvs?.remove();
  }

  return { init: create, destroy };
})();

export default Canvas;
