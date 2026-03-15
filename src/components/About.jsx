const values = [
  { title: 'Ground Truth', body: 'Every insight we deliver is anchored in verifiable, satellite-observed reality. We never confuse models for facts.' },
  { title: 'Systems Thinking', body: 'We see land, water, climate, and food as one interconnected system — and we build tools that reflect that complexity.' },
  { title: 'Planetary Stewardship', body: 'We measure success not just in contracts closed, but in ecosystems protected and resources preserved.' },
  { title: 'Decision Velocity', body: 'The value of intelligence is measured by the speed and confidence with which it enables action. We optimise for both.' },
]

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.75,
        }}
      >
        <source src="/assets/videos/Built%20for%20planet.mp4" type="video/mp4" />
      </video>
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        background: 'linear-gradient(to right, rgba(255,255,255,0.82) 40%, rgba(255,255,255,0.1) 100%)',
        zIndex: 0,
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ height: '1px', background: '#e2e8f0' }} />
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0f6ff', padding: '5px 14px', borderRadius: '100px', marginBottom: '20px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600 }}>Who We Are</span>
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#0a1628', maxWidth: '560px' }}>
            Built in the Region.<br />
            <span style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Built for the Planet.
            </span>
          </h2>
        </div>

        {/* Story */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '1.05rem', color: '#1e293b', lineHeight: 1.9, marginBottom: '20px', fontWeight: 400 }}>
            Flahtik was founded in 2019 with a single conviction — that the gap between
            what the Earth is telling us and what decisions get made is a problem worth solving.
            We started in the Middle East because the region's challenges are the world's challenges:
            water scarcity, desertification, food security, and the pressure to grow sustainably
            in an arid environment.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#1e293b', lineHeight: 1.9, fontWeight: 400 }}>
            Today we operate across four domains and six continents, delivering spatial intelligence
            to governments, agribusinesses, water utilities, and environmental organisations. Every
            model we build, every map we produce, every alert we send is rooted in one purpose —
            helping people make better decisions about the living planet.
          </p>
        </div>

        {/* Values */}
        <div style={{ marginBottom: '32px' }}>
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600, display: 'block', marginBottom: '32px' }}>
            Our Values
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#e2e8f0', border: '1px solid #e2e8f0' }}>
            {values.map((v, i) => (
              <div key={v.title} style={{
                background: '#ffffff',
                padding: '36px 28px',
                borderLeft: `3px solid ${['#2563eb', '#16a34a', '#ea580c', '#2563eb'][i % 4]}`,
              }}>
                <div style={{ width: '40px', height: '40px', background: '#f0f6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: '#0a1628', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#1e293b', lineHeight: 1.7, fontWeight: 400 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '32px', padding: '44px 48px', background: '#f0f6ff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.2rem', fontWeight: 600, color: '#0a1628', marginBottom: '6px' }}>
              Join the team building spatial intelligence for the planet
            </h3>
            <p style={{ fontSize: '1rem', color: '#1e293b', fontWeight: 400 }}>We are always looking for exceptional people in geospatial science, AI, and climate tech.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="mailto:hello@flahtik.com" style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #2563eb, #06b6d4)', color: '#fff', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              View Open Roles →
            </a>
            <a href="mailto:hello@flahtik.com" style={{ padding: '12px 20px', border: '1.5px solid #e2e8f0', color: '#1e293b', fontSize: '0.88rem', fontWeight: 500 }}>
              hello@flahtik.com
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
