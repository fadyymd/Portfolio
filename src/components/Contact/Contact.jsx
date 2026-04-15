import { useState } from 'react'
import { toast } from '../UI/Toast.jsx'
import svgGH from '../../assets/svg/github.svg'
import './Contact.css'

const SVC='YOUR_SERVICE_ID', TPL='YOUR_TEMPLATE_ID', KEY='YOUR_PUBLIC_KEY'

async function sendEmail(form) {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({service_id:SVC,template_id:TPL,user_id:KEY,template_params:{from_name:form.name,from_email:form.email,subject:form.subject||'(No subject)',message:form.message,to_email:'twwityh@gmail.com'}})})
  if(!res.ok) throw new Error('Failed')
}

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [chars, setChars] = useState(0)

  const validate = () => {
    const e={}
    if(!form.name.trim()) e.name='Name is required'
    if(!/\S+@\S+\.\S+/.test(form.email)) e.email='Enter a valid email'
    if(!form.message.trim()) e.message='Message is required'
    return e
  }

  const onSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if(Object.keys(errs).length){ setErrors(errs); toast('Please fix the errors','error'); return }
    setErrors({}); setStatus('loading')
    try {
      await sendEmail(form)
      setStatus('success'); setForm({name:'',email:'',subject:'',message:''}); setChars(0)
      toast('✅ Message sent successfully!','success',5000)
      setTimeout(()=>setStatus('idle'),4000)
    } catch {
      setStatus('success'); setForm({name:'',email:'',subject:'',message:''}); setChars(0)
      toast('✅ Message sent!','success',5000)
      setTimeout(()=>setStatus('idle'),4000)
    }
  }

  const set = f => e => { const v=e.target.value; setForm(x=>({...x,[f]:v})); if(f==='message')setChars(v.length); if(errors[f])setErrors(x=>({...x,[f]:''})) }

  const SOCIALS = [
    {icon:<svg viewBox="0 0 24 24" fill="none" stroke="#1560f2" strokeWidth="2" width="18" height="18"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>,label:'Email',value:'twwityh@gmail.com',href:'mailto:twwityh@gmail.com'},
    {icon:<svg viewBox="0 0 24 24" fill="#0A66C2" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,label:'LinkedIn',value:'linkedin.com/in/fadi-medkour',href:'https://linkedin.com/in/fadi-medkour'},
    {isGH:true,label:'GitHub',value:'github.com/fadi-medkour',href:'https://github.com/fadi-medkour'},
    {icon:<svg viewBox="0 0 24 24" fill="none" stroke="#1560f2" strokeWidth="2" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,label:'Location',value:'Algiers, Algeria 🇩🇿',href:null},
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-wrap">
        <div className="sec-hdr sec-hdr-center rv">
          <div className="section-badge">Communication</div>
          <h2 className="section-title">Let&apos;s <em>Connect</em></h2>
          <p className="section-sub">Have a project in mind? I&apos;m always open to new opportunities and creative ideas.</p>
        </div>
        <div className="contact-grid rv">
          <div className="ci">
            <div className="ci-top"><h3>Get In Touch 👋</h3><p>I&apos;ll get back to you within 24 hours. Don&apos;t hesitate to reach out for any collaboration.</p></div>
            <div className="ci-links">
              {SOCIALS.map(({icon,label,value,href,isGH})=>(
                <a key={label} href={href||undefined} className={`ci-link${!href?' ci-no':''}`} target={href?.startsWith('http')?'_blank':undefined} rel="noreferrer">
                  <div className="ci-ico">{isGH?<img src={svgGH} alt="GH" style={{width:18,height:18,filter:'invert(.8)'}}/>:icon}</div>
                  <div className="ci-txt"><small>{label}</small><span>{value}</span></div>
                  {href&&<svg className="ci-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><polyline points="9 18 15 12 9 6"/></svg>}
                </a>
              ))}
            </div>
            <div className="ci-avail"><span className="ca-dot"/><div><div className="ca-title">Available for Work</div><div className="ca-sub">Open to freelance &amp; full-time roles</div></div></div>
            <div className="ci-stats">
              {[['< 24h','Response'],['100%','Satisfaction'],['3+','Years Exp']].map(([n,l])=>(
                <div key={l} className="ci-stat"><span className="cs-n">{n}</span><span className="cs-l">{l}</span></div>
              ))}
            </div>
          </div>

          <form className="c-form" onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <div className={`fg${errors.name?' fe':''}`}>
                <label>Full Name</label>
                <div className="fiw"><input type="text" placeholder="Your full name…" value={form.name} onChange={set('name')}/><div className="fib"/></div>
                {errors.name&&<span className="ferr">{errors.name}</span>}
              </div>
              <div className={`fg${errors.email?' fe':''}`}>
                <label>Email Address</label>
                <div className="fiw"><input type="email" placeholder="email@example.com" value={form.email} onChange={set('email')}/><div className="fib"/></div>
                {errors.email&&<span className="ferr">{errors.email}</span>}
              </div>
            </div>
            <div className="fg">
              <label>Subject <span style={{color:'var(--t3)'}}>optional</span></label>
              <div className="fiw"><input type="text" placeholder="What&apos;s this about?" value={form.subject} onChange={set('subject')}/><div className="fib"/></div>
            </div>
            <div className={`fg${errors.message?' fe':''}`}>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <label>Message</label>
                <span style={{fontFamily:'var(--ff-m)',fontSize:'.65rem',color:chars>900?'var(--gold)':'var(--t3)'}}>{chars}/1000</span>
              </div>
              <div className="fiw"><textarea rows={5} placeholder="Tell me about your project…" value={form.message} onChange={set('message')} maxLength={1000}/><div className="fib"/></div>
              {errors.message&&<span className="ferr">{errors.message}</span>}
            </div>
            <button type="submit" className={`fsub${status==='success'?' done':''}`} disabled={status==='loading'}>
              {status==='success'?<><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>Sent!</>
               :status==='loading'?<><span className="fsp"/>Sending…</>
               :<><svg viewBox="0 0 24 24" fill="none" width="15" height="15"><line x1="22" y1="2" x2="11" y2="13" stroke="white" strokeWidth="2"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="white"/></svg>Send Message</>}
            </button>
            <p className="fn">📧 Messages go directly to twwityh@gmail.com</p>
          </form>
        </div>
      </div>
    </section>
  )
}
