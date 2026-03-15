import { useState } from 'react'

const types = [
  { id: 'demo', label: 'Platform Demo', sub: '30-min walkthrough with our team' },
  { id: 'pilot', label: 'Enterprise Pilot', sub: 'Custom scoped project for your organisation' },
  { id: 'general', label: 'General Inquiry', sub: 'Any other question or collaboration idea' },
]

export default function Contact() {
  const [type, setType] = useState('demo')
  const [form, setForm] = useState({ full_name: '', organization: '', job_title: '', country: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

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
    <section id="contact" style={{ background: '#ffffff' }}>
      <div style={{ height: '1px', background: '#e2e8f0' }} />
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0f6ff', padding: '5px 14px', borderRadius: '100px', marginBottom: '20px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2563eb', fontWeight: 600 }}>Get In Touch</span>
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#0a1628', maxWidth: '560px' }}>
            Let's Build Something<br />
            <span style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              That Matters
            </span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: 400, lineHeight: 1.8, maxWidth: '480px', marginTop: '16px' }}>
            Whether you need a platform demo, want to explore an enterprise partnership, or just have
            a question — our team responds within one business day.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', border: '1px solid #e2e8f0', marginBottom: '32px', background: '#ffffff' }}>
          {/* Selectors */}
          <div style={{ background: '#0a1628', display: 'flex', flexDirection: 'column' }}>
            {types.map(typeItem => (
              <button key={typeItem.id} onClick={() => setType(typeItem.id)} style={{
                padding: '28px', display: 'flex', alignItems: 'flex-start', gap: '14px',
                textAlign: 'left', background: type === typeItem.id ? 'rgba(37,99,235,0.15)' : 'none',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                borderLeft: type === typeItem.id ? '3px solid #2563eb' : '3px solid transparent',
                transition: 'all 0.2s',
              }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: type === typeItem.id ? '#fff' : 'rgba(255,255,255,0.7)', fontFamily: "'Bricolage Grotesque', sans-serif", marginBottom: '4px' }}>{typeItem.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{typeItem.sub}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Form */}
          <div style={{ padding: '40px 44px' }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '32px 0' }}>
                <div style={{ width: '56px', height: '56px', background: '#f0f6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#0a1628' }}>Message received.</h3>
                <p style={{ fontSize: '1rem', color: '#1e293b', fontWeight: 400, lineHeight: 1.75 }}>Thank you for reaching out. A member of the Flahtik team will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  {[{ key: 'full_name', label: 'Full Name', required: true }, { key: 'organization', label: 'Organisation', required: true }].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0a1628', letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        {f.label} {f.required && <span style={{ color: '#2563eb' }}>*</span>}
                      </label>
                      <input required={f.required} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #e2e8f0', fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: '#0a1628', background: '#ffffff', outline: 'none' }} />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  {[{ key: 'job_title', label: 'Job Title', required: false }, { key: 'country', label: 'Country', required: true }].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0a1628', letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        {f.label} {f.required && <span style={{ color: '#2563eb' }}>*</span>}
                      </label>
                      <input required={f.required} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #e2e8f0', fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: '#0a1628', background: '#ffffff', outline: 'none' }} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0a1628', letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    Work Email <span style={{ color: '#2563eb' }}>*</span>
                  </label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #e2e8f0', fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: '#0a1628', background: '#ffffff', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '28px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0a1628', letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                    Message <span style={{ color: '#2563eb' }}>*</span>
                  </label>
                  <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #e2e8f0', fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: '#0a1628', background: '#ffffff', outline: 'none', resize: 'vertical' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', paddingTop: '24px', borderTop: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
                  <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.5, maxWidth: '280px' }}>
                    By submitting you agree to our Privacy Policy. We will respond within one business day.
                  </p>
                  <button type="submit" disabled={sending} style={{
                    padding: '13px 32px', background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#e2e8f0', border: '1px solid #e2e8f0' }}>
          {[
            { label: 'Headquarters', value: 'Tunis, Tunisia' },
            { label: 'Email', value: 'hello@flahtik.com', href: 'mailto:hello@flahtik.com' },
            { label: 'Response Time', value: 'Within 1 business day' },
          ].map(d => (
            <div key={d.label} style={{ background: '#ffffff', padding: '28px 24px' }}>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#475569', fontWeight: 600, marginBottom: '6px' }}>{d.label}</div>
              {d.href
                ? <a href={d.href} style={{ fontSize: '0.88rem', color: '#2563eb', fontWeight: 500 }}>{d.value}</a>
                : <div style={{ fontSize: '0.88rem', color: '#0a1628', fontWeight: 500 }}>{d.value}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
