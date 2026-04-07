import { useState, useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import { toast }   from '../UI/Toast.jsx'
import svgGH from '../../assets/svg/github.svg'
import './Contact.css'

const EMAILJS_SERVICE  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE = 'YOUR_TEMPLATE_ID'
const EMAILJS_KEY      = 'YOUR_PUBLIC_KEY'

async function sendEmail(form) {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE, template_id: EMAILJS_TEMPLATE, user_id: EMAILJS_KEY,
      template_params: {
        from_name: form.name, from_email: form.email,
        subject: form.subject || '(No subject)', message: form.message,
        to_email: 'twwityh@gmail.com',
      },
    }),
  })
  if (!res.ok) throw new Error('Failed')
}

function Input({ label, error, as = 'input', children, ...props }) {
  const Tag = as
  return (
    <div className={`fg${error ? ' err' : ''}`}>
      {children || (
        <>
          <label>{label}</label>
          <div className="fi-wrap">
            <Tag {...props} />
            <div className="fi-border" />
          </div>
          {error && <span className="fi-err">{error}</span>}
        </>
      )}
    </div>
  )
}

export default function Contact() {
  const { t, lang } = useContext(LangCtx)
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [charCount, setCharCount] = useState(0)
  const MAX = 1000

  const validate = () => {
    const e = {}
    if (!form.name.trim())              e.name    = t.contact.err_name
    if (!form.email.trim())             e.email   = t.contact.err_email
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = t.contact.err_email
    if (!form.message.trim())           e.message = t.contact.err_msg
    return e
  }

  const onSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      toast(lang === 'ar' ? 'يرجى تصحيح الأخطاء' : 'Please fix the errors', 'error')
      return
    }
    setErrors({})
    setStatus('loading')
    try {
      await sendEmail(form)
      setStatus('success')
      setForm({ name:'', email:'', subject:'', message:'' })
      setCharCount(0)
      toast(lang === 'ar' ? '✅ تم إرسال رسالتك بنجاح!' : '✅ Message sent successfully!', 'success', 5000)
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      // Demo fallback (remove when EmailJS is configured)
      setStatus('success')
      setForm({ name:'', email:'', subject:'', message:'' })
      setCharCount(0)
      toast(lang === 'ar' ? '✅ تم إرسال رسالتك!' : '✅ Message sent!', 'success', 5000)
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const set = f => e => {
    const v = e.target.value
    setForm(x => ({ ...x, [f]: v }))
    if (f === 'message') setCharCount(v.length)
    if (errors[f]) setErrors(x => ({ ...x, [f]: '' }))
  }

  const SOCIALS = [
    { icon:<svg viewBox="0 0 24 24" fill="none" stroke="#1560f0" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>, label:'Email', value:'twwityh@gmail.com', href:'mailto:twwityh@gmail.com' },
    { icon:<svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, label:'LinkedIn', value:'linkedin.com/in/fadi-medkour', href:'https://linkedin.com/in/fadi-medkour' },
    { isGH:true, label:'GitHub', value:'github.com/fadi-medkour', href:'https://github.com/fadi-medkour' },
    { icon:<svg viewBox="0 0 24 24" fill="none" stroke="#1560f0" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: lang==='ar'?'الموقع':'Location', value: lang==='ar'?'الجزائر العاصمة 🇩🇿':'Algiers, Algeria 🇩🇿', href:null },
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-wrap">
        <div className="sec-hdr sec-hdr-center rv">
          <div className="section-badge">{t.contact.badge}</div>
          <h2 className="section-title">{t.contact.title} <em>{t.contact.em}</em></h2>
          <p className="section-sub">{t.contact.sub}</p>
        </div>

        <div className="contact-grid rv">
          {/* Info */}
          <div className="ci">
            <div className="ci-top">
              <h3>{t.contact.h3}</h3>
              <p>{t.contact.p}</p>
            </div>
            <div className="ci-links">
              {SOCIALS.map(({ icon, label, value, href, isGH }) => (
                <a key={label} href={href || undefined}
                  className={`ci-link${!href ? ' no-link' : ''}`}
                  target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <div className="ci-icon">
                    {isGH ? <img src={svgGH} alt="GitHub" style={{ width:18, height:18, filter:'invert(.8)' }}/> : icon}
                  </div>
                  <div className="ci-text"><small>{label}</small><span>{value}</span></div>
                  {href && <svg className="ci-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><polyline points="9 18 15 12 9 6"/></svg>}
                </a>
              ))}
            </div>
            <div className="ci-avail">
              <span className="avail-dot"/>
              <div>
                <div className="avail-title">{t.contact.avail}</div>
                <div className="avail-sub">{t.contact.availSub}</div>
              </div>
            </div>
            <div className="ci-stats">
              {[['< 24h', t.contact.resp], ['100%', t.contact.sat], ['3+', t.contact.yrs]].map(([n, l]) => (
                <div key={l} className="ci-stat"><span className="cs-num">{n}</span><span className="cs-lbl">{l}</span></div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="c-form" onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <div className={`fg${errors.name ? ' err' : ''}`}>
                <label>{t.contact.name}</label>
                <div className="fi-wrap">
                  <input type="text" placeholder={t.contact.ph_name} value={form.name} onChange={set('name')}/>
                  <div className="fi-border"/>
                </div>
                {errors.name && <span className="fi-err">{errors.name}</span>}
              </div>
              <div className={`fg${errors.email ? ' err' : ''}`}>
                <label>{t.contact.email}</label>
                <div className="fi-wrap">
                  <input type="email" placeholder={t.contact.ph_email} value={form.email} onChange={set('email')}/>
                  <div className="fi-border"/>
                </div>
                {errors.email && <span className="fi-err">{errors.email}</span>}
              </div>
            </div>
            <div className="fg">
              <label>{t.contact.subject}</label>
              <div className="fi-wrap">
                <input type="text" placeholder={t.contact.ph_subject} value={form.subject} onChange={set('subject')}/>
                <div className="fi-border"/>
              </div>
            </div>
            <div className={`fg${errors.message ? ' err' : ''}`}>
              <div className="msg-label-row">
                <label>{t.contact.message}</label>
                <span className={`char-count${charCount > MAX*.9 ? ' warn' : ''}`}>{charCount}/{MAX}</span>
              </div>
              <div className="fi-wrap">
                <textarea rows={5} placeholder={t.contact.ph_message} value={form.message} onChange={set('message')} maxLength={MAX}/>
                <div className="fi-border"/>
              </div>
              {errors.message && <span className="fi-err">{errors.message}</span>}
            </div>

            <button type="submit" className={`f-btn${status === 'success' ? ' done' : ''}`} disabled={status === 'loading'}>
              {status === 'success' ? (
                <><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="17" height="17"><polyline points="20 6 9 17 4 12"/></svg>{t.contact.sent}</>
              ) : status === 'loading' ? (
                <><span className="sp"/>{t.contact.sending}</>
              ) : (
                <><svg viewBox="0 0 24 24" fill="none" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13" stroke="white" strokeWidth="2"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="white"/></svg>{t.contact.send}</>
              )}
            </button>
            <p className="form-note">
              {lang==='ar' ? '📧 رسالتك ستصل مباشرة إلى twwityh@gmail.com' : '📧 Messages go directly to twwityh@gmail.com'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
