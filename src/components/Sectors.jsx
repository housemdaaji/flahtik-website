import { useState } from 'react'

const sectors = [
  { id: 'gov', num: '01', color: '#2563eb', name: 'Government & Public Sector', body: 'Ministries, municipalities, and national agencies rely on Flahtik for land use planning, infrastructure monitoring, disaster response, and environmental compliance.', items: ['Land use & urban planning', 'Disaster risk reduction', 'National environmental reporting', 'Border & coastline monitoring'], tags: ['Land Planning', 'Disaster Response', 'Compliance'] },
  { id: 'agri', num: '02', color: '#ea580c', name: 'Agribusiness', body: 'From smallholder cooperatives to multinational agribusinesses, Flahtik delivers field-level crop intelligence that reduces input costs and improves yield forecasting.', items: ['Crop health & stress monitoring', 'Yield forecasting & harvest planning', 'Sustainable sourcing verification', 'Insurance & risk assessment'], tags: ['Crop Analytics', 'Yield AI', 'Insurance'] },
  { id: 'water', num: '03', color: '#2563eb', name: 'Water Utilities', body: 'Water authorities and utilities use Flahtik to monitor reservoir levels, track watershed health, model flood risk, and manage water stress across entire basin systems.', items: ['Reservoir & dam monitoring', 'Flood risk modelling & early warning', 'Water quality remote sensing', 'Groundwater & aquifer tracking'], tags: ['Watersheds', 'Flood Risk', 'Aquifers'] },
  { id: 'env', num: '04', color: '#16a34a', name: 'Environmental & Conservation', body: 'Conservation organisations and development banks leverage Flahtik for biodiversity mapping, deforestation alerts, carbon stock assessment, and nature-based solutions monitoring.', items: ['Deforestation & land degradation alerts', 'Biodiversity & habitat corridors', 'Carbon stock & sequestration', 'Nature-based solutions monitoring'], tags: ['Carbon', 'Biodiversity', 'Deforestation'] },
  { id: 'energy', num: '05', color: '#ea580c', name: 'Energy & Infrastructure', body: 'Energy developers and infrastructure operators use Flahtik for site feasibility, environmental impact monitoring, and pipeline and grid corridor surveillance.', items: ['Solar & wind site feasibility', 'Pipeline & grid corridor monitoring', 'Environmental impact assessment', 'Asset change detection'], tags: ['Solar Siting', 'Pipelines', 'Grid Monitoring'] },
]

const sectorVideos = [
  '/assets/videos/goverment%20and%20public%20sector.mp4',
  '/assets/videos/agribusiness.mp4',
  '/assets/videos/water%20utilities.mp4',
  '/assets/videos/environmental%20and%20conservation.mp4',
  '/assets/videos/energy%20and%20infra.mp4',
]

export default function Sectors() {
  const [open, setOpen] = useState('gov')

  const activeIndex = open !== null ? sectors.findIndex(s => s.id === open) : 0

  return (
    <section id="sectors" style={{ position: 'relative', overflow: 'hidden', background: '#f0f6ff' }}>
      <video
        key={activeIndex}
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
        <source src={sectorVideos[activeIndex]} type="video/mp4" />
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
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#ffffff', padding: '5px 14px', borderRadius: '100px', marginBottom: '20px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600 }}>Who We Serve</span>
            </div>
            <h2 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700,
              lineHeight: 1.1, letterSpacing: '-0.025em', color: '#0a1628', maxWidth: '560px',
            }}>
              Built for the Sectors<br />
              <span style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                That Shape the Planet
              </span>
            </h2>
          </div>

          {/* Accordion - full width */}
          <div>
            {sectors.map(s => (
              <div key={s.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <button onClick={() => setOpen(s.id === open ? null : s.id)} style={{
                  width: '100%', padding: '22px 0',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  cursor: 'pointer', background: 'none', textAlign: 'left',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: '#475569', fontWeight: 600, minWidth: '24px' }}>{s.num}</span>
                    <span style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: '1rem', fontWeight: 600,
                      color: open === s.id ? s.color : '#0a1628',
                      transition: 'color 0.2s',
                    }}>{s.name}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={open === s.id ? s.color : '#475569'} strokeWidth="1.5"
                    style={{ transform: open === s.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {open === s.id && (
                  <div style={{ paddingLeft: '44px', paddingBottom: '24px' }}>
                    <p style={{ fontSize: '1rem', color: '#1e293b', lineHeight: 1.75, marginBottom: '16px', fontWeight: 400 }}>{s.body}</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                      {s.items.map(item => (
                        <li key={item} style={{ fontSize: '0.88rem', color: '#1e293b', paddingLeft: '14px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '4px', height: '4px', borderRadius: '50%', background: s.color, display: 'block' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" style={{ fontSize: '0.8rem', fontWeight: 600, color: s.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Explore solutions →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
