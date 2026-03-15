import { useState } from 'react'

const sectors = [
  { id: 'gov', num: '01', color: '#2563eb', name: 'Government & Public Sector', body: 'Ministries, municipalities, and national agencies rely on Flahtik for land use planning, infrastructure monitoring, disaster response, and environmental compliance.', items: ['Land use & urban planning', 'Disaster risk reduction', 'National environmental reporting', 'Border & coastline monitoring'], tags: ['Land Planning', 'Disaster Response', 'Compliance'] },
  { id: 'agri', num: '02', color: '#ea580c', name: 'Agribusiness', body: 'From smallholder cooperatives to multinational agribusinesses, Flahtik delivers field-level crop intelligence that reduces input costs and improves yield forecasting.', items: ['Crop health & stress monitoring', 'Yield forecasting & harvest planning', 'Sustainable sourcing verification', 'Insurance & risk assessment'], tags: ['Crop Analytics', 'Yield AI', 'Insurance'] },
  { id: 'water', num: '03', color: '#2563eb', name: 'Water Utilities', body: 'Water authorities and utilities use Flahtik to monitor reservoir levels, track watershed health, model flood risk, and manage water stress across entire basin systems.', items: ['Reservoir & dam monitoring', 'Flood risk modelling & early warning', 'Water quality remote sensing', 'Groundwater & aquifer tracking'], tags: ['Watersheds', 'Flood Risk', 'Aquifers'] },
  { id: 'env', num: '04', color: '#16a34a', name: 'Environmental & Conservation', body: 'Conservation organisations and development banks leverage Flahtik for biodiversity mapping, deforestation alerts, carbon stock assessment, and nature-based solutions monitoring.', items: ['Deforestation & land degradation alerts', 'Biodiversity & habitat corridors', 'Carbon stock & sequestration', 'Nature-based solutions monitoring'], tags: ['Carbon', 'Biodiversity', 'Deforestation'] },
  { id: 'energy', num: '05', color: '#ea580c', name: 'Energy & Infrastructure', body: 'Energy developers and infrastructure operators use Flahtik for site feasibility, environmental impact monitoring, and pipeline and grid corridor surveillance.', items: ['Solar & wind site feasibility', 'Pipeline & grid corridor monitoring', 'Environmental impact assessment', 'Asset change detection'], tags: ['Solar Siting', 'Pipelines', 'Grid Monitoring'] },
]

const sectorImages = {
  gov: '/images/satellite-earth.png',
  agri: '/images/agribusiness.png',
  env: '/images/env-conservation.png',
  energy: '/images/energy-infrastructure.png',
  water: '/images/water-utilities.png',
}

export default function Sectors({ dark = false }) {
  const [open, setOpen] = useState('gov')
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

  const active = sectors.find(s => s.id === open)

  return (
    <section id="sectors" style={{ position: 'relative', overflow: 'hidden', background: t.bgAlt }}>
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
          opacity: 0.08,
        }}
      >
        <source src="/assets/videos/20606524-uhd_3840_2160_24fps.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ height: '1px', background: t.divider }} />
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: t.bgCard, padding: '5px 14px', borderRadius: '100px', marginBottom: '20px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.blue }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: t.blue, fontWeight: 600 }}>Who We Serve</span>
          </div>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700,
            lineHeight: 1.1, letterSpacing: '-0.025em', color: t.heading, maxWidth: '560px',
          }}>
            Built for the Sectors<br />
            <span style={{ background: t.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              That Shape the Planet
            </span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '64px', alignItems: 'start' }}>
          {/* Accordion */}
          <div>
            {sectors.map(s => (
              <div key={s.id} style={{ borderBottom: `1px solid ${t.border}` }}>
                <button onClick={() => setOpen(s.id === open ? null : s.id)} style={{
                  width: '100%', padding: '22px 0',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  cursor: 'pointer', background: 'none', textAlign: 'left',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', color: t.muted, fontWeight: 600, minWidth: '24px' }}>{s.num}</span>
                    <span style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: '1rem', fontWeight: 600,
                      color: open === s.id ? s.color : t.heading,
                      transition: 'color 0.2s',
                    }}>{s.name}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={open === s.id ? s.color : t.muted} strokeWidth="1.5"
                    style={{ transform: open === s.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0 }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {open === s.id && (
                  <div style={{ paddingLeft: '44px', paddingBottom: '24px' }}>
                    <p style={{ fontSize: '1rem', color: t.body, lineHeight: 1.75, marginBottom: '16px', fontWeight: 400 }}>{s.body}</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                      {s.items.map(item => (
                        <li key={item} style={{ fontSize: '0.88rem', color: t.body, paddingLeft: '14px', position: 'relative' }}>
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

          {/* Visual card */}
          {active && (
            <div
              className="relative overflow-hidden rounded-xl"
              style={{
                position: 'sticky',
                top: '88px',
                overflow: 'hidden',
                borderRadius: '0.75rem',
                backgroundImage: `url(${sectorImages[active.id]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderLeft: `3px solid ${active.color}`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                }}
              />
              <div style={{ position: 'relative', zIndex: 10, padding: '48px 40px' }}>
                <div style={{
                  width: '56px', height: '56px', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px',
                }}>
                  {active.id === 'gov' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M6.3 6.3a8 8 0 0 0 0 11.4"/><path d="M17.7 6.3a8 8 0 0 1 0 11.4"/><path d="M3.5 3.5a14 14 0 0 0 0 17"/><path d="M20.5 3.5a14 14 0 0 1 0 17"/></svg>
                  )}
                  {active.id === 'agri' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5"><path d="M12 22V12"/><path d="M12 12C12 7 7 4 3 6c0 4 3 7 9 6"/><path d="M12 12c0-5 5-8 9-6c0 4-3 7-9 6"/></svg>
                  )}
                  {active.id === 'water' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5"><path d="M12 2C6 8 4 12 4 15a8 8 0 0 0 16 0c0-3-2-7-8-13z"/></svg>
                  )}
                  {active.id === 'env' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                  )}
                  {active.id === 'energy' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  )}
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '24px', lineHeight: 1.3 }}>
                  {active.name}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {active.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '5px 12px', border: '1px solid rgba(255,255,255,0.12)',
                      fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.55)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </section>
  )
}
