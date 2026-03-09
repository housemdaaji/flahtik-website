const values = [
  { title: 'Ground Truth', body: 'Every insight we deliver is anchored in verifiable, satellite-observed reality. We never confuse models for facts.' },
  { title: 'Systems Thinking', body: 'We see land, water, climate, and food as one interconnected system — and we build tools that reflect that complexity.' },
  { title: 'Planetary Stewardship', body: 'We measure success not just in contracts closed, but in ecosystems protected and resources preserved.' },
  { title: 'Decision Velocity', body: 'The value of intelligence is measured by the speed and confidence with which it enables action. We optimise for both.' },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#fff' }}>
      <div style={{ height: '1px', background: '#e2e8f0' }} />
      <div className="container" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#eff6ff', padding: '5px 14px', borderRadius: '100px', marginBottom: '20px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600 }}>Who We Are</span>
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#0a1628', maxWidth: '560px' }}>
            Built in the Region.<br />
            <span style={{ background: 'linear-gradient(135deg,#2563eb,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Built for the Planet.
            </span>
          </h2>
        </div>

        {/* Story */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'start', marginBottom: '72px' }}>
          <div>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.9, marginBottom: '20px', fontWeight: 300 }}>
              Flahtik was founded in Riyadh in 2019 with a single conviction — that the gap between
              what the Earth is telling us and what decisions get made is a problem worth solving.
              We started in the Middle East because the region's challenges are the world's challenges:
              water scarcity, desertification, food security, and the pressure to grow sustainably
              in an arid environment.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.9, fontWeight: 300 }}>
              Today we operate across four domains and six continents, delivering spatial intelligence
              to governments, agribusinesses, water utilities, and environmental organisations. Every
              model we build, every map we produce, every alert we send is rooted in one purpose —
              helping people make better decisions about the living planet.
            </p>
          </div>

          {/* Image placeholder */}
          <div style={{ background: '#0a1628', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(37,99,235,0.4)" strokeWidth="0.8">
              <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
            </svg>
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
              Riyadh HQ — Est. 2019
            </span>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600, display: 'block', marginBottom: '32px' }}>
            Our Values
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#e2e8f0', border: '1px solid #e2e8f0' }}>
            {values.map(v => (
              <div key={v.title} style={{ background: '#fff', padding: '36px 28px' }}>
                <div style={{ width: '40px', height: '40px', background: '#f0f6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: '#0a1628', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.7, fontWeight: 300 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '48px', padding: '44px 48px', background: '#f0f6ff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.2rem', fontWeight: 600, color: '#0a1628', marginBottom: '6px' }}>
              Join the team building spatial intelligence for the planet
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 300 }}>We are always looking for exceptional people in geospatial science, AI, and climate tech.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="mailto:hello@flahtik.com" style={{ padding: '12px 24px', background: 'linear-gradient(135deg,#2563eb,#06b6d4)', color: '#fff', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              View Open Roles →
            </a>
            <a href="mailto:hello@flahtik.com" style={{ padding: '12px 20px', border: '1.5px solid #e2e8f0', color: '#64748b', fontSize: '0.78rem', fontWeight: 500 }}>
              hello@flahtik.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
