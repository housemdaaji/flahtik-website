export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', paddingTop: '68px',
      position: 'relative', overflow: 'hidden',
      background: '#ffffff', display: 'flex',
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

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '80px' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: '#eff6ff', padding: '5px 14px', borderRadius: '100px',
          marginBottom: '32px',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600 }}>
            Spatial Intelligence Platform
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: 700, lineHeight: 1.06,
          letterSpacing: '-0.035em', color: '#0a1628',
          maxWidth: '800px', marginBottom: '28px',
        }}>
          Where Earth Data<br />
          Meets{' '}
          <span style={{
            background: 'linear-gradient(135deg,#2563eb,#06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Human Decision</span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '1.05rem', color: '#64748b', fontWeight: 300,
          lineHeight: 1.8, maxWidth: '560px', marginBottom: '44px',
        }}>
          Flahtik integrates satellite imagery, IoT sensors, and AI into a
          unified platform — built for governments, agribusinesses, and water
          utilities across the planet.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
          <a href="#platform" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 32px',
            background: 'linear-gradient(135deg,#2563eb,#06b6d4)',
            color: '#fff', fontSize: '0.8rem', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            Explore Platform →
          </a>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px', border: '1.5px solid #e2e8f0',
            color: '#64748b', fontSize: '0.8rem', fontWeight: 500,
          }}>
            Request Demo
          </a>
        </div>

        {/* Domain tags */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['Spatial Technology', 'Precision Agriculture', 'Water Management', 'Environmental Intel'].map(tag => (
            <span key={tag} style={{
              padding: '5px 16px', border: '1px solid #e2e8f0',
              fontSize: '0.68rem', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#94a3b8', fontWeight: 500,
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
          background: 'linear-gradient(to bottom, #2563eb, transparent)',
        }} />
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
      </div>
    </section>
  )
}
