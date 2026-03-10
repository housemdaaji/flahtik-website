export default function Hero({ dark = false }) {
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
    <section style={{
      minHeight: '85vh', paddingTop: '180px',
      position: 'relative', overflow: 'hidden',
      background: t.bg, display: 'flex',
      alignItems: 'center',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, #c7d9f8 1px, transparent 1px)',
        backgroundSize: '32px 32px', opacity: 0.5, pointerEvents: 'none',
      }} />

      {/* Blue orb */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-60px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Cyan orb */}
      <div style={{
        position: 'absolute', bottom: '0', left: '8%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '24px', paddingBottom: '56px' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: t.bgAlt, padding: '5px 14px', borderRadius: '100px',
          marginBottom: '32px',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.blue }} />
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: t.blue, fontWeight: 600 }}>
            Spatial Intelligence Platform
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: 700, lineHeight: 1.06,
          letterSpacing: '-0.035em', color: t.heading,
          maxWidth: '800px', marginBottom: '28px',
        }}>
          Where Earth Data<br />
          Meets{' '}
          <span style={{
            background: t.grad,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Human Decision</span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '1.05rem', color: t.body, fontWeight: 400,
          lineHeight: 1.8, maxWidth: '560px', marginBottom: '40px',
        }}>
          Flahtik integrates satellite imagery, IoT sensors, and AI into a
          unified platform — built for governments, agribusinesses, and water
          utilities across the planet.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <a href="#platform" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 32px',
            background: t.grad,
            color: '#fff', fontSize: '0.8rem', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            Explore Platform →
          </a>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px', border: `1.5px solid ${t.border}`,
            color: t.body, fontSize: '0.8rem', fontWeight: 500,
          }}>
            Request Demo
          </a>
        </div>

        {/* Domain tags */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['Spatial Technology', 'Precision Agriculture', 'Water Management', 'Environmental Intel'].map(tag => (
            <span key={tag} style={{
              padding: '5px 16px', border: `1px solid ${t.border}`,
              fontSize: '0.68rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: t.muted, fontWeight: 500,
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.4,
      }}>
        <div style={{
          width: '1px', height: '40px',
          background: `linear-gradient(to bottom, ${t.blue}, transparent)`,
        }} />
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
      </div>
    </section>
  )
}
