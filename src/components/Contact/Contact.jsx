import { useState } from 'react'
import svgGH from '../../assets/svg/github-svgrepo-com.svg'
import './Contact.css'

const SOCIALS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1560f0" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>,
    label: 'Email', value: 'fadi.medkour@email.com',
    href: 'mailto:fadi.medkour@email.com',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    label: 'LinkedIn', value: 'linkedin.com/in/fadi-medkour',
    href: 'https://linkedin.com/in/fadi-medkour',
  },
  {
    icon: null, /* GitHub SVG as img */
    label: 'GitHub', value: 'github.com/fadi-medkour',
    href: 'https://github.com/fadi-medkour', isGH: true,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1560f0" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    label: 'Location', value: 'Algiers, Algeria 🇩🇿',
    href: null,
  },
]

function FormField({ label, error, children }) {
  return (
    <div className={`fg${error ? ' has-error' : ''}`}>
      <label>{label}</label>
      {children}
      {error && <span className="fg-error">{error}</span>}
    </div>
  )
}

export default function Contact() {
  const [form,   setForm]   = useState({ name:'', email:'', subject:'', message:'' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!form.name.trim())          e.name    = 'Name is required'
    if (!form.email.trim())         e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim())       e.message = 'Message is required'
    return e
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setForm({ name:'', email:'', subject:'', message:'' })
      setTimeout(() => setStatus('idle'), 3800)
    }, 950)
  }

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <section id="contact" className="contact">
      <div className="contact-wrap">
        <div className="sec-hdr sec-hdr-center rv">
          <div className="section-badge">Communication</div>
          <h2 className="section-title">Let's <em>Connect</em></h2>
          <p className="section-sub">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        <div className="contact-grid rv">
          {/* Info */}
          <div className="contact-info">
            <div className="ci-header">
              <h3>Get In Touch 👋</h3>
              <p>I'll get back to you within 24 hours. Don't hesitate to reach out for any collaboration or opportunity.</p>
            </div>

            <div className="ci-links">
              {SOCIALS.map(({ icon, label, value, href, isGH }) => (
                <a
                  key={label}
                  href={href || undefined}
                  className={`ci-link${!href ? ' no-link' : ''}`}
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <div className="ci-icon">
                    {isGH
                      ? <img src={svgGH} alt="GitHub" style={{ width:18, height:18, filter:'invert(.8)' }} />
                      : icon
                    }
                  </div>
                  <div>
                    <small>{label}</small>
                    <span>{value}</span>
                  </div>
                  {href && (
                    <svg className="ci-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="ci-avail">
              <span className="ci-avail-dot" />
              <div>
                <div className="ci-avail-title">Available for Work</div>
                <div className="ci-avail-sub">Open to freelance &amp; full-time roles</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="c-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <FormField label="Full Name" error={errors.name}>
                <input
                  type="text" placeholder="Your full name…"
                  value={form.name} onChange={set('name')}
                />
              </FormField>
              <FormField label="Email Address" error={errors.email}>
                <input
                  type="email" placeholder="email@example.com"
                  value={form.email} onChange={set('email')}
                />
              </FormField>
            </div>
            <FormField label="Subject">
              <input
                type="text" placeholder="What's this about?"
                value={form.subject} onChange={set('subject')}
              />
            </FormField>
            <FormField label="Message" error={errors.message}>
              <textarea
                rows={5} placeholder="Tell me about your project or idea…"
                value={form.message} onChange={set('message')}
              />
            </FormField>

            <button
              type="submit"
              className={`f-submit${status === 'success' ? ' success' : ''}`}
              disabled={status === 'loading'}
            >
              {status === 'success' ? (
                <><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="17" height="17"><polyline points="20 6 9 17 4 12"/></svg>Message Sent!</>
              ) : status === 'loading' ? (
                <><span className="spinner" />Sending…</>
              ) : (
                <><svg viewBox="0 0 24 24" fill="none" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13" stroke="white" strokeWidth="2"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="white"/></svg>Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
