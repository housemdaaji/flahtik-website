import { useState } from 'react'

const articles = [
  { cat: 'Spatial Technology', date: 'March 2025', read: '8 min', title: 'Hyperspectral Imaging and the Future of Precision Agriculture in Arid Regions', excerpt: 'New advances in hyperspectral satellite sensors are enabling crop stress detection at field scale across desert-edge agricultural zones.', featured: true, image: '/images/drone-spraying.png', imageAlt: 'Precision agriculture' },
  { cat: 'Water', date: 'Feb 2025', read: '6 min', title: 'Satellite-Based Flood Forecasting: 48-Hour Early Warning at Basin Scale', excerpt: 'How synthetic aperture radar combined with hydrological AI models is delivering actionable flood warnings days before traditional systems.', image: '/images/dam-spillway.png', imageAlt: 'Flood forecasting' },
  { cat: 'Agriculture', date: 'Jan 2025', read: '7 min', title: 'NDVI to Neural Nets: The Evolution of Crop Intelligence from Space', excerpt: 'A technical deep-dive into how vegetation indices gave way to deep learning classifiers for multi-crop, multi-season monitoring.', image: '/images/ndvi-crop.png', imageAlt: 'Crop intelligence' },
  { cat: 'Environment', date: 'Dec 2024', read: '5 min', title: 'Carbon Credit Integrity: Why Satellite Verification Changes Everything', excerpt: 'The voluntary carbon market is under scrutiny. Here is how continuous satellite monitoring is restoring trust in nature-based solutions.', image: '/images/forest-carbon.png', imageAlt: 'Carbon credit and environment' },
]

export default function Insights() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/xaqpqenq', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } catch {}
    setDone(true)
  }

  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <section id="insights" style={{ background: '#f0f6ff' }}>
      <div style={{ height: '1px', background: '#e2e8f0' }} />
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'end', marginBottom: '36px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ffffff', padding: '5px 14px', borderRadius: '100px', marginBottom: '20px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600 }}>Insights</span>
            </div>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#0a1628' }}>
              Intelligence<br />
              <span style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                from the Field
              </span>
            </h2>
          </div>
          <p style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: 400, lineHeight: 1.8 }}>
            Research, case studies, and perspectives from the Flahtik team on spatial technology,
            climate, and the future of Earth intelligence.
          </p>
        </div>

        {/* Featured */}
        <div style={{ display: 'grid', gridTemplateColumns: '440px 1fr', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '280px', height: '280px' }}>
            <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 'inherit' }}>
              <img
                src={featured.image}
                alt={featured.imageAlt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <span style={{ position: 'absolute', top: '16px', left: '16px', padding: '4px 12px', background: '#2563eb', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>
              Featured
            </span>
          </div>
          <div style={{ padding: '40px', background: '#ffffff', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600 }}>{featured.cat}</span>
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#e2e8f0', display: 'block' }} />
              <span style={{ fontSize: '0.8rem', color: '#475569' }}>{featured.date}</span>
              <span style={{ fontSize: '0.8rem', color: '#475569' }}>{featured.read} read</span>
            </div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#0a1628', lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '14px' }}>{featured.title}</h3>
            <p style={{ fontSize: '1rem', color: '#1e293b', lineHeight: 1.75, marginBottom: '28px', flex: 1, fontWeight: 400 }}>{featured.excerpt}</p>
            <a href="#" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Read Article →</a>
          </div>
        </div>

        {/* 3-card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#e2e8f0', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
          {rest.map((a) => (
            <div key={a.title} style={{ background: '#ffffff', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '120px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={a.image}
                  alt={a.imageAlt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600 }}>{a.cat}</span>
                  <span style={{ fontSize: '0.8rem', color: '#475569' }}>— {a.date}</span>
                </div>
                <h4 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '0.92rem', fontWeight: 600, color: '#0a1628', lineHeight: 1.4, marginBottom: '10px', flex: 1 }}>{a.title}</h4>
                <a href="#" style={{ fontSize: '0.7rem', fontWeight: 600, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Read more →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ padding: '48px', background: '#ffffff', border: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#0a1628', marginBottom: '10px' }}>Stay ahead of the field</h3>
            <p style={{ fontSize: '1rem', color: '#1e293b', lineHeight: 1.75, fontWeight: 400 }}>Monthly intelligence briefings — satellite insights, platform updates, and spatial tech perspectives. No noise.</p>
          </div>
          {done ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
              <span style={{ fontSize: '0.88rem', color: '#0a1628', fontWeight: 500 }}>You're on the list. Welcome aboard.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Work email address"
                  style={{ flex: 1, padding: '12px 16px', border: '1.5px solid #e2e8f0', borderRight: 'none', fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', color: '#0a1628', background: '#ffffff', outline: 'none' }} />
                <button type="submit" style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #2563eb, #06b6d4)', color: '#fff', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                  Subscribe
                </button>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.5 }}>By subscribing you agree to our Privacy Policy. We never share your data. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
