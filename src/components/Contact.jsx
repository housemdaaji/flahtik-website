import { useState } from 'react'

const types = [
  { id: 'demo', label: 'Platform Demo', sub: '30-min walkthrough with our team' },
  { id: 'pilot', label: 'Enterprise Pilot', sub: 'Custom scoped project for your organisation' },
  { id: 'general', label: 'General Inquiry', sub: 'Any other question or collaboration idea' },
]

export default function Contact({ dark = false }) {
  const [type, setType] = useState('demo')
  const [form, setForm] = useState({ full_name: '', organization: '', job_title: '', country: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
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
    setSending(true)
    try {
      await fetch('https://formspree.io/f/mjgagykv', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, inquiry_type: type }),
      })
    } catch {}
    setSending(false)
    setSent(true)
  }

  return (
    <section id="contact" style={{ background: t.bg }}>
      <div style={{ height: '1px', background: t.divider }} />
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: t.bgAlt, padding: '5px 14px', borderRadius: '100px', marginBottom: '20px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.blue }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: t.blue, fontWeight: 600 }}>Get In Touch</span>
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: t.heading, maxWidth: '560px' }}>
            Let's Build Something<br />
            <span style={{ background: t.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              That Matters
            </span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: t.body, fontWeight: 400, lineHeight: 1.8, maxWidth: '480px', marginTop: '16px' }}>
            Whether you need a platform demo, want to explore an enterprise partnership, or just have
            a question — our team responds within one business day.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', border: `1px solid ${t.border}`, marginBottom: '32px', background: t.bgCard }}>
          {/* Selectors */}
          <div style={{ background: '#0a1628', display: 'flex', flexDirection: 'column' }}>
            {types.map(t => (
              <button key={t.id} onClick={() => setType(t.id)} style={{
                padding: '28px', display: 'flex', alignItems: 'flex-start', gap: '14px',
                textAlign: 'left', background: type === t.id ? 'rgba(37,99,235,0.15)' : 'none',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                borderLeft: type === t.id ? `3px solid ${t.blue}` : '3px solid transparent',
                transition: 'all 0.2s',
              }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: type === t.id ? '#fff' : 'rgba(255,255,255,0.7)', fontFamily: "'Bricolage Grotesque', sans-serif", marginBottom: '4px' }}>{t.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{t.sub}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Form */}
          <div style={{ padding: '40px 44px' }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '32px 0' }}>
                <div style={{ width: '56px', height: '56px', background: t.bgAlt, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={t.blue} strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: t.heading }}>Message received.</h3>
                <p style={{ fontSize: '1rem', color: t.body, fontWeight: 400, lineHeight: 1.75 }}>Thank you for reaching out. A member of the Flahtik team will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  {[{ key: 'full_name', label: 'Full Name', required: true }, { key: 'organization', label: 'Organisation', required: true }].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: t.heading, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        {f.label} {f.required && <span style={{ color: t.blue }}>*</span>}
                      </label>
                      <input required={f.required} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${t.border}`, fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: t.heading, background: t.bgCard, outline: 'none' }} />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  {[{ key: 'job_title', label: 'Job Title', required: false }, { key: 'country', label: 'Country', required: true }].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: t.heading, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        {f.label} {f.required && <span style={{ color: t.blue }}>*</span>}
                      </label>
                      <input required={f.required} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${t.border}`, fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: t.heading, background: t.bgCard, outline: 'none' }} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: t.heading, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    Work Email <span style={{ color: t.blue }}>*</span>
                  </label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${t.border}`, fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: t.heading, background: t.bgCard, outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '28px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: t.heading, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    Message <span style={{ color: t.blue }}>*</span>
                  </label>
                  <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${t.border}`, fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: t.heading, background: t.bgCard, outline: 'none', resize: 'vertical' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', paddingTop: '24px', borderTop: `1px solid ${t.border}`, flexWrap: 'wrap' }}>
                  <p style={{ fontSize: '0.8rem', color: t.muted, lineHeight: 1.5, maxWidth: '280px' }}>
                    By submitting you agree to our Privacy Policy. We will respond within one business day.
                  </p>
                  <button type="submit" disabled={sending} style={{
                    padding: '13px 32px', background: t.grad,
                    color: '#fff', fontSize: '0.8rem', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '0.1em', opacity: sending ? 0.7 : 1,
                  }}>
                    {sending ? 'Sending…' : 'Send Message →'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Details strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: t.divider, border: `1px solid ${t.border}` }}>
          {[
            { label: 'Headquarters', value: 'Tunis, Tunisia' },
            { label: 'Email', value: 'hello@flahtik.com', href: 'mailto:hello@flahtik.com' },
            { label: 'Response Time', value: 'Within 1 business day' },
          ].map(d => (
            <div key={d.label} style={{ background: t.bgCard, padding: '28px 24px' }}>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: t.muted, fontWeight: 600, marginBottom: '6px' }}>{d.label}</div>
              {d.href
                ? <a href={d.href} style={{ fontSize: '0.88rem', color: t.blue, fontWeight: 500 }}>{d.value}</a>
                : <div style={{ fontSize: '0.88rem', color: t.heading, fontWeight: 500 }}>{d.value}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
