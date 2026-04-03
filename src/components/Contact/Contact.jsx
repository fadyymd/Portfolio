import { useState } from 'react'
import './Contact.css'

const LINKS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1563ff" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>,
    label: 'Email',
    value: 'fadi.medkour@email.com',
    href:  'mailto:fadi.medkour@email.com',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    label: 'LinkedIn',
    value: 'linkedin.com/in/fadi-medkour',
    href:  'https://linkedin.com/in/fadi-medkour',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
    label: 'GitHub',
    value: 'github.com/fadi-medkour',
    href:  'https://github.com/fadi-medkour',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1563ff" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    label: 'Location',
    value: 'Algiers, Algeria 🇩🇿',
    href:  null,
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      e.target.reset()
      setTimeout(() => setStatus('idle'), 3500)
    }, 900)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-wrap">
        <div className="sec-hdr sec-hdr-center rv">
          <div className="section-label">Communication</div>
          <h2 className="section-title">Let's <em>Connect</em></h2>
          <p className="section-sub">
            Have a project in mind or just want to say hi? I'm always open to discussing
            new opportunities and creative ideas.
          </p>
        </div>

        <div className="contact-grid rv">
          {/* Left — info */}
          <div className="contact-info">
            <h3>Send a Message</h3>
            <p>I'll get back to you within 24 hours.</p>

            <div className="c-links">
              {LINKS.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href || undefined}
                  className={`c-link${!href ? ' no-link' : ''}`}
                  target={href && href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <div className="c-link-icon">{icon}</div>
                  <div>
                    <small>{label}</small>
                    <span>{value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form className="c-form" onSubmit={handleSubmit}>
            <div className="fg">
              <label>Your Name</label>
              <input type="text" placeholder="Full name..." required />
            </div>
            <div className="fg">
              <label>Your Email</label>
              <input type="email" placeholder="email@example.com" required />
            </div>
            <div className="fg">
              <label>Your Message</label>
              <textarea placeholder="Tell me about your project or idea..." required rows={5} />
            </div>
            <button
              type="submit"
              className={`f-submit${status === 'success' ? ' success' : ''}`}
              disabled={status === 'loading'}
            >
              {status === 'success' ? (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="16" height="16">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Message Sent!
                </>
              ) : status === 'loading' ? (
                <>
                  <span className="spinner" />
                  Sending...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                    <line x1="22" y1="2" x2="11" y2="13" stroke="white" strokeWidth="2" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" fill="white" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
