import { useState } from 'react'

const links = [
  { label: 'Solutions', href: '#services' },
  { label: 'Platform', href: '#platform' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
]

export default function Nav({ scrolled }) {
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

        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }}
          className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontSize: '0.8rem', color: '#475569', fontWeight: 400,
                transition: 'color 0.2s', letterSpacing: '0.02em',
              }}
                onMouseEnter={e => e.target.style.color = '#0a1628'}
                onMouseLeave={e => e.target.style.color = '#475569'}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

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

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
