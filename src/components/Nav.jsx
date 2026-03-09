import { useState } from 'react'

const links = [
  { label: 'Solutions', href: '#services' },
  { label: 'Platform', href: '#platform' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
]

export default function Nav({ scrolled, dark = false, setDark = () => {} }) {
  const [open, setOpen] = useState(false)

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
    background: 'rgba(255,255,255,0.97)',
    backdropFilter: 'blur(20px)',
    borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
    boxShadow: scrolled ? '0 1px 24px rgba(37,99,235,0.06)' : 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  }

  const innerStyle = {
    maxWidth: '1280px', margin: '0 auto', padding: '0 64px',
    height: '180px', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', gap: '40px',
  }

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/flahtik-logo.png" alt="Flahtik"
            style={{ height: '160px', mixBlendMode: 'multiply' }} />
        </a>

        <ul style={{ display: 'flex', gap: '44px', listStyle: 'none' }}
          className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontSize: '1rem', color: '#0a1628', fontWeight: 600,
                transition: 'color 0.2s', letterSpacing: '0.02em',
              }}
                onMouseEnter={e => e.target.style.color = '#2563eb'}
                onMouseLeave={e => e.target.style.color = '#0a1628'}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => setDark(!dark)}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              border: `2px solid ${dark ? '#3b82f6' : '#e2e8f0'}`,
              borderRadius: '999px',
              background: dark ? 'rgba(59,130,246,0.15)' : '#f8fafc',
              cursor: 'pointer',
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#93c5fd" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#f59e0b" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: dark ? '#93c5fd' : '#475569',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              {dark ? 'Dark' : 'Light'}
            </span>
          </button>

          <a href="#contact" style={{
            padding: '9px 22px',
            background: 'linear-gradient(135deg,#2563eb,#06b6d4)',
            color: '#fff', fontSize: '0.75rem', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Get In Touch
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
