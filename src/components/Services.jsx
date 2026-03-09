const services = [
  {
    num: '01', tag: 'Remote Sensing',
    title: 'Spatial Technology',
    body: 'High-resolution satellite imagery, LiDAR point clouds, and real-time GIS processing — delivering precise spatial context at any scale.',
    items: ['Remote sensing & imagery analysis', 'GIS mapping & spatial modelling', 'Change detection & monitoring'],
    accent: false,
  },
  {
    num: '02', tag: 'ESG & Carbon',
    title: 'Environmental Intelligence',
    body: 'Carbon stock assessment, biodiversity mapping, and ESG reporting frameworks grounded in satellite-verified ground truth data.',
    items: ['Carbon monitoring & verification', 'Biodiversity & habitat mapping', 'ESG compliance reporting'],
    accent: true,
  },
  {
    num: '03', tag: 'Crop Analytics',
    title: 'Precision Agriculture',
    body: 'AI-powered crop health monitoring, yield prediction, and irrigation optimisation — turning field data into season-defining decisions.',
    items: ['Multispectral crop analytics', 'Yield forecasting & risk modelling', 'Irrigation & resource optimisation'],
    accent: false,
  },
  {
    num: '04', tag: 'Hydrology',
    title: 'Water Management',
    body: 'Watershed intelligence, flood risk modelling, and aquifer monitoring at basin scale — built for utilities and infrastructure planners.',
    items: ['Watershed & basin monitoring', 'Flood risk prediction & mapping', 'Aquifer & groundwater analysis'],
    accent: false,
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: '#f0f6ff', padding: '0' }}>
      <div style={{ height: '1px', background: '#e2e8f0' }} />
      <div className="container" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        {/* Header */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '48px', alignItems: 'end', marginBottom: '56px',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#eff6ff', padding: '5px 14px', borderRadius: '100px',
              marginBottom: '20px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600 }}>
                What We Do
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700,
              lineHeight: 1.1, letterSpacing: '-0.025em', color: '#0a1628',
            }}>
              Four Domains.<br />
              <span style={{
                background: 'linear-gradient(135deg,#2563eb,#06b6d4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>One Platform.</span>
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: 300, lineHeight: 1.8, maxWidth: '400px' }}>
            Flahtik brings together the most complex environmental data streams
            into a single, decision-ready intelligence layer.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px', background: '#e2e8f0', border: '1px solid #e2e8f0',
        }}>
          {services.map(s => (
            <div key={s.num} style={{
              background: s.accent ? '#0a1628' : '#fff',
              padding: '44px 40px',
              display: 'flex', flexDirection: 'column',
              transition: 'box-shadow 0.3s',
            }}>
              <span style={{
                fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase',
                color: s.accent ? '#06b6d4' : '#94a3b8', fontWeight: 600, marginBottom: '8px',
              }}>
                {s.num} — {s.tag}
              </span>
              <h3 style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.3,
                color: s.accent ? '#fff' : '#0a1628', marginBottom: '14px',
              }}>{s.title}</h3>
              <p style={{
                fontSize: '0.88rem', color: s.accent ? 'rgba(255,255,255,0.55)' : '#64748b',
                lineHeight: 1.75, marginBottom: '24px', flex: 1, fontWeight: 300,
              }}>{s.body}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
                {s.items.map(item => (
                  <li key={item} style={{
                    fontSize: '0.78rem', paddingLeft: '14px', position: 'relative',
                    color: s.accent ? 'rgba(255,255,255,0.6)' : '#64748b',
                  }}>
                    <span style={{
                      position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                      width: '4px', height: '4px', borderRadius: '50%',
                      background: s.accent ? '#06b6d4' : '#2563eb', display: 'block',
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase',
                letterSpacing: '0.08em', color: s.accent ? '#06b6d4' : '#2563eb',
              }}>
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{
          marginTop: '48px', padding: '28px 40px',
          background: '#fff', border: '1px solid #e2e8f0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap',
        }}>
          <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 300 }}>
            Not sure which solution fits your challenge?
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '11px 24px', border: '1.5px solid #2563eb',
            color: '#2563eb', fontSize: '0.75rem', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            Talk to Our Team →
          </a>
        </div>
      </div>
    </section>
  )
}
