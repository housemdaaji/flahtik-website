const cols = [
  { title: 'Solutions', links: [['Spatial Technology', '#services'], ['Environmental Intel', '#services'], ['Precision Agriculture', '#services'], ['Water Management', '#services']] },
  { title: 'Platform', links: [['How It Works', '#platform'], ['Data Pipeline', '#platform'], ['AI Models', '#platform'], ['Request Demo', '#contact']] },
  { title: 'Sectors', links: [['Government', '#sectors'], ['Agribusiness', '#sectors'], ['Water Utilities', '#sectors'], ['Conservation', '#sectors']] },
  { title: 'Company', links: [['About', '#about'], ['Insights', '#insights'], ['Careers', 'mailto:hello@flahtik.com'], ['Contact', '#contact']] },
]

export default function Footer({ dark = false }) {
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
    <footer style={{ background: '#0a1628' }}>
      <div className="container" style={{ paddingTop: '56px', paddingBottom: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '48px', paddingBottom: '36px' }}>
          {/* Brand */}
          <div>
            <img src="/assets/flahtik-logo.png" alt="Flahtik"
              style={{ height: '28px', mixBlendMode: 'screen', marginBottom: '20px' }} />
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, fontWeight: 400, maxWidth: '240px', marginBottom: '28px' }}>
              Spatial intelligence for the living planet. Built in Riyadh. Deployed globally.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { href: 'https://github.com/housemdaaji', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
                { href: 'mailto:hello@flahtik.com', path: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: '34px', height: '34px', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontWeight: 600, marginBottom: '20px' }}>
                {col.title}
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', fontWeight: 400, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '20px 64px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>
            © 2025 Flahtik. All rights reserved. Founded in Riyadh, Saudi Arabia.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
