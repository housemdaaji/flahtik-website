import { useState } from 'react'

const articles = [
  { cat: 'Spatial Technology', date: 'March 2025', read: '8 min', title: 'Hyperspectral Imaging and the Future of Precision Agriculture in Arid Regions', excerpt: 'New advances in hyperspectral satellite sensors are enabling crop stress detection at field scale across desert-edge agricultural zones.', featured: true, image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80', imageAlt: 'Precision agriculture' },
  { cat: 'Water', date: 'Feb 2025', read: '6 min', title: 'Satellite-Based Flood Forecasting: 48-Hour Early Warning at Basin Scale', excerpt: 'How synthetic aperture radar combined with hydrological AI models is delivering actionable flood warnings days before traditional systems.', image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80', imageAlt: 'Flood forecasting' },
  { cat: 'Agriculture', date: 'Jan 2025', read: '7 min', title: 'NDVI to Neural Nets: The Evolution of Crop Intelligence from Space', excerpt: 'A technical deep-dive into how vegetation indices gave way to deep learning classifiers for multi-crop, multi-season monitoring.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', imageAlt: 'Crop intelligence' },
  { cat: 'Environment', date: 'Dec 2024', read: '5 min', title: 'Carbon Credit Integrity: Why Satellite Verification Changes Everything', excerpt: 'The voluntary carbon market is under scrutiny. Here is how continuous satellite monitoring is restoring trust in nature-based solutions.', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80', imageAlt: 'Carbon credit and environment' },
]

export default function Insights({ dark = false }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
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
    <section id="insights" style={{ background: t.bgAlt }}>
      <div style={{ height: '1px', background: t.divider }} />
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'end', marginBottom: '36px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: t.bgCard, padding: '5px 14px', borderRadius: '100px', marginBottom: '20px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.blue }} />
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: t.blue, fontWeight: 600 }}>Insights</span>
            </div>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: t.heading }}>
              Intelligence<br />
              <span style={{ background: t.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                from the Field
              </span>
            </h2>
          </div>
          <p style={{ fontSize: '1.05rem', color: t.body, fontWeight: 400, lineHeight: 1.8 }}>
            Research, case studies, and perspectives from the Flahtik team on spatial technology,
            climate, and the future of Earth intelligence.
          </p>
        </div>

        {/* Featured */}
        <div style={{ display: 'grid', gridTemplateColumns: '440px 1fr', border: `1px solid ${t.border}`, marginBottom: '16px' }}>
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '280px', height: '280px' }}>
            <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 'inherit' }}>
              <img
                src={featured.image}
                alt={featured.imageAlt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <span style={{ position: 'absolute', top: '16px', left: '16px', padding: '4px 12px', background: t.blue, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>
              Featured
            </span>
          </div>
          <div style={{ padding: '40px', background: t.bgCard, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: t.blue, fontWeight: 600 }}>{featured.cat}</span>
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: t.border, display: 'block' }} />
              <span style={{ fontSize: '0.8rem', color: t.muted }}>{featured.date}</span>
              <span style={{ fontSize: '0.8rem', color: t.muted }}>{featured.read} read</span>
            </div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: t.heading, lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '14px' }}>{featured.title}</h3>
            <p style={{ fontSize: '1rem', color: t.body, lineHeight: 1.75, marginBottom: '28px', flex: 1, fontWeight: 400 }}>{featured.excerpt}</p>
            <a href="#" style={{ fontSize: '0.75rem', fontWeight: 600, color: t.blue, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Read Article →</a>
          </div>
        </div>

        {/* 3-card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: t.divider, border: `1px solid ${t.border}`, marginBottom: '32px' }}>
          {rest.map((a) => (
            <div key={a.title} style={{ background: t.bgCard, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '120px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={a.image}
                  alt={a.imageAlt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: t.blue, fontWeight: 600 }}>{a.cat}</span>
                  <span style={{ fontSize: '0.8rem', color: t.muted }}>— {a.date}</span>
                </div>
                <h4 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '0.92rem', fontWeight: 600, color: t.heading, lineHeight: 1.4, marginBottom: '10px', flex: 1 }}>{a.title}</h4>
                <a href="#" style={{ fontSize: '0.7rem', fontWeight: 600, color: t.blue, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Read more →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ padding: '48px', background: t.bgCard, border: `1px solid ${t.border}`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: t.heading, marginBottom: '10px' }}>Stay ahead of the field</h3>
            <p style={{ fontSize: '1rem', color: t.body, lineHeight: 1.75, fontWeight: 400 }}>Monthly intelligence briefings — satellite insights, platform updates, and spatial tech perspectives. No noise.</p>
          </div>
          {done ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={t.blue} strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
              <span style={{ fontSize: '0.88rem', color: t.heading, fontWeight: 500 }}>You're on the list. Welcome aboard.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Work email address"
                  style={{ flex: 1, padding: '12px 16px', border: `1.5px solid ${t.border}`, borderRight: 'none', fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', color: t.heading, background: t.bgCard, outline: 'none' }} />
                <button type="submit" style={{ padding: '12px 24px', background: t.grad, color: '#fff', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                  Subscribe
                </button>
              </div>
              <p style={{ fontSize: '0.8rem', color: t.muted, lineHeight: 1.5 }}>By subscribing you agree to our Privacy Policy. We never share your data. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
