const values = [
  { title: 'Ground Truth', body: 'Every insight we deliver is anchored in verifiable, satellite-observed reality. We never confuse models for facts.' },
  { title: 'Systems Thinking', body: 'We see land, water, climate, and food as one interconnected system — and we build tools that reflect that complexity.' },
  { title: 'Planetary Stewardship', body: 'We measure success not just in contracts closed, but in ecosystems protected and resources preserved.' },
  { title: 'Decision Velocity', body: 'The value of intelligence is measured by the speed and confidence with which it enables action. We optimise for both.' },
]

export default function About({ dark = false }) {
  const t = {
    bg:       dark ? '#080f1e'  : '#ffffff',
    bgAlt:    dark ? '#0d1626'  : '#f0f6ff',
    bgCard:   dark ? '#111827'  : '#ffffff',
    border:   dark ? '#1e2d45'  : '#e2e8f0',
    heading:  dark ? '#f0f6ff'  : '#0a1628',
    body:     dark ? '#cbd5e1'  : '#1e293b',
    muted:    dark ? '#94a3b8'  : '#475569',
    faint:    dark ? '#64748b'  : '#94a3b8',
    blue:     dark ? '#3b82f6'  : '#2563eb',
    cyan:     dark ? '#22d3ee'  : '#06b6d4',
    green:    dark ? '#22c55e'  : '#16a34a',
    orange:   dark ? '#f97316'  : '#ea580c',
    grad:     'linear-gradient(135deg, ' + (dark ? '#3b82f6' : '#2563eb') + ', ' + (dark ? '#22d3ee' : '#06b6d4') + ')',
    divider:  dark ? '#1e2d45'  : '#e2e8f0',
  }
  return (
    <section id="about" style={{ background: t.bg }}>
      <div style={{ height: '1px', background: t.divider }} />
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: t.bgAlt, padding: '5px 14px', borderRadius: '100px', marginBottom: '20px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.blue }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: t.blue, fontWeight: 600 }}>Who We Are</span>
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: t.heading, maxWidth: '560px' }}>
            Built in the Region.<br />
            <span style={{ background: t.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Built for the Planet.
            </span>
          </h2>
        </div>

        {/* Story */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'start', marginBottom: '48px' }}>
          <div>
            <p style={{ fontSize: '1.05rem', color: t.body, lineHeight: 1.9, marginBottom: '20px', fontWeight: 400 }}>
              Flahtik was founded in 2019 with a single conviction — that the gap between
              what the Earth is telling us and what decisions get made is a problem worth solving.
              We started in the Middle East because the region's challenges are the world's challenges:
              water scarcity, desertification, food security, and the pressure to grow sustainably
              in an arid environment.
            </p>
            <p style={{ fontSize: '1.05rem', color: t.body, lineHeight: 1.9, fontWeight: 400 }}>
              Today we operate across four domains and six continents, delivering spatial intelligence
              to governments, agribusinesses, water utilities, and environmental organisations. Every
              model we build, every map we produce, every alert we send is rooted in one purpose —
              helping people make better decisions about the living planet.
            </p>
          </div>

          {/* Image placeholder */}
          <div style={{
            backgroundImage: 'url(/images/hands-earth.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '4/3',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,22,40,0.5), rgba(10,22,40,0.75))' }} />
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(37,99,235,0.4)" strokeWidth="0.8">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
              </svg>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
                Tunis HQ — Est. 2019
              </span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: '32px' }}>
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: t.blue, fontWeight: 600, display: 'block', marginBottom: '32px' }}>
            Our Values
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: t.divider, border: `1px solid ${t.border}` }}>
            {values.map((v, i) => (
              <div key={v.title} style={{
                background: t.bgCard,
                padding: '36px 28px',
                borderLeft: `3px solid ${[t.blue, t.green, t.orange, t.blue][i % 4]}`,
              }}>
                <div style={{ width: '40px', height: '40px', background: t.bgAlt, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={t.blue} strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: t.heading, marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem', color: t.body, lineHeight: 1.7, fontWeight: 400 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '32px', padding: '44px 48px', background: t.bgAlt, border: `1px solid ${t.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.2rem', fontWeight: 600, color: t.heading, marginBottom: '6px' }}>
              Join the team building spatial intelligence for the planet
            </h3>
            <p style={{ fontSize: '1rem', color: t.body, fontWeight: 400 }}>We are always looking for exceptional people in geospatial science, AI, and climate tech.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="mailto:hello@flahtik.com" style={{ padding: '12px 24px', background: t.grad, color: '#fff', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              View Open Roles →
            </a>
            <a href="mailto:hello@flahtik.com" style={{ padding: '12px 20px', border: `1.5px solid ${t.border}`, color: t.body, fontSize: '0.88rem', fontWeight: 500 }}>
              hello@flahtik.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
