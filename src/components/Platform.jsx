const steps = [
  { num: '01', title: 'Data Acquisition', body: 'Satellite constellations, IoT ground sensors, drone surveys, and open-source datasets ingested in real time.', tags: ['Sentinel-2', 'Landsat', 'IoT Sensors'] },
  { num: '02', title: 'Geospatial Processing', body: 'Radiometric correction, cloud masking, orthorectification, and fusion across multi-source datasets at planetary scale.', tags: ['QGIS', 'PostGIS', 'Google Earth Engine'] },
  { num: '03', title: 'AI Analysis', body: 'Deep learning models trained on domain-specific datasets detect anomalies, classify land cover, and forecast outcomes.', tags: ['TensorFlow', 'PyTorch', 'AWS SageMaker'] },
  { num: '04', title: 'Insight Generation', body: 'Processed intelligence surfaces as interactive dashboards, automated alerts, and structured reports tied to KPIs.', tags: ['Live Dashboards', 'API Feeds', 'Auto Reports'] },
  { num: '05', title: 'Client Delivery', body: 'Secure web portal, REST API, or embedded integration — decisions reached faster, with full audit trail and traceability.', tags: ['REST API', 'Web Portal', 'White-label'] },
]

const stack = ['Google Earth Engine', 'AWS SageMaker', 'QGIS', 'Sentinel-2', 'TensorFlow', 'PostGIS', 'Copernicus', 'Planet Labs']

export default function Platform({ dark = false }) {
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
    <section id="platform" style={{ background: t.bg }}>
      <div style={{ height: '1px', background: t.divider }} />
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Header */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '48px', alignItems: 'end', marginBottom: '48px',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: t.bgAlt, padding: '5px 14px', borderRadius: '100px',
              marginBottom: '20px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.blue }} />
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: t.blue, fontWeight: 600 }}>
                How It Works
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700,
              lineHeight: 1.1, letterSpacing: '-0.025em', color: t.heading,
            }}>
              Raw Signal to<br />
              <span style={{
                background: t.grad,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Clear Decision</span>
            </h2>
          </div>
          <p style={{ fontSize: '1.05rem', color: t.body, fontWeight: 400, lineHeight: 1.8 }}>
            A five-stage pipeline transforms raw Earth observation data into
            actionable intelligence — fully automated, fully auditable.
          </p>
        </div>

        {/* Pipeline */}
        <div style={{ borderLeft: `1px solid ${t.border}`, marginLeft: '20px', marginBottom: '40px' }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{
              display: 'grid', gridTemplateColumns: '48px 40px 1fr',
              gap: '24px', alignItems: 'start',
              paddingBottom: i < steps.length - 1 ? '48px' : '0',
            }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: t.muted, letterSpacing: '0.15em', paddingTop: '4px', textAlign: 'right' }}>
                {s.num}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '-21px' }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: i === steps.length - 1 ? t.cyan : t.blue,
                  border: '2px solid #fff',
                  boxShadow: i === steps.length - 1 ? `0 0 0 2px ${t.cyan}, 0 0 16px rgba(6,182,212,0.4)` : `0 0 0 2px ${t.blue}`,
                  marginTop: '4px', flexShrink: 0,
                }} />
                {i < steps.length - 1 && (
                  <div style={{ width: '1px', flex: 1, minHeight: '40px', marginTop: '6px', background: `linear-gradient(to bottom, ${t.blue}, ${t.border})` }} />
                )}
              </div>
              <div>
                <div style={{
                  width: '40px', height: '40px',
                  background: i === steps.length - 1 ? '#0a1628' : t.bgAlt,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '14px',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke={i === steps.length - 1 ? t.cyan : t.blue} strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.05rem', fontWeight: 600, color: t.heading, marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ fontSize: '1rem', color: t.body, lineHeight: 1.7, marginBottom: '14px', fontWeight: 400 }}>{s.body}</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '3px 10px', background: t.bgAlt, border: `1px solid ${t.border}`,
                      fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: t.blue, fontWeight: 600,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div style={{
          padding: '28px 0', borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}`,
          display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '32px',
        }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: t.muted, fontWeight: 600, whiteSpace: 'nowrap' }}>
            Powered by
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', flex: 1 }}>
            {stack.map(tech => (
              <span key={tech} style={{ padding: '5px 16px', border: `1px solid ${t.border}`, fontSize: '0.8rem', color: t.body }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <div style={{
          padding: '48px', background: '#0a1628',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.4rem', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>
              See the platform in action
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', fontWeight: 400 }}>
              Book a 30-minute walkthrough with our solutions team. No commitment required.
            </p>
          </div>
          <a href="#contact" style={{
            padding: '14px 32px', background: t.grad,
            color: '#fff', fontSize: '0.8rem', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap',
          }}>
            Request a Demo →
          </a>
        </div>
      </div>
    </section>
  )
}
