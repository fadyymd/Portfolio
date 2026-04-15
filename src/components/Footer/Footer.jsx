import { useState, useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import svgGH    from '../../assets/svg/github.svg'
import svgReact from '../../assets/svg/react.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgJS    from '../../assets/svg/js.svg'
import svgHTML  from '../../assets/svg/html.svg'
import svgCSS   from '../../assets/svg/css.svg'
import './Footer.css'

const BUILT = [{src:svgReact,n:'React'},{src:svgNode,n:'Node'},{src:svgJS,n:'JS'},{src:svgHTML,n:'HTML'},{src:svgCSS,n:'CSS'}]
const year  = new Date().getFullYear()

export default function Footer() {
  const { t, lang } = useContext(LangCtx)
  const [email, setEmail] = useState('')
  const [sub, setSub]     = useState('idle') // idle | done

  const handleSub = e => {
    e.preventDefault()
    if (!email.includes('@')) return
    setSub('done')
    setEmail('')
    setTimeout(() => setSub('idle'), 4000)
  }

  const NAV = lang === 'ar'
    ? [['عني','#about'],['التجربة','#experience'],['المهارات','#skills'],['المشاريع','#projects'],['تواصل','#contact']]
    : [['About','#about'],['Experience','#experience'],['Skills','#skills'],['Projects','#projects'],['Contact','#contact']]

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="var(--bg)" />
        </svg>
      </div>

      {/* CTA Banner */}
      <div className="footer-cta-banner">
        <div className="fcb-inner">
          <div className="fcb-orb" />
          <div className="fcb-text">
            <h3>{lang==='ar' ? 'هل لديك مشروع؟' : 'Have a project in mind?'}</h3>
            <p>{lang==='ar' ? 'لنتحدث ونبني شيئاً رائعاً معاً.' : "Let's talk and build something amazing together."}</p>
          </div>
          <a href="#contact" className="btn-primary fcb-btn">
            {lang==='ar' ? 'ابدأ الآن' : 'Start Now'}
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="fb">
            <div className="fb-mark">
              <div className="fbm-ring" />
              <div className="fbm-dot" />
            </div>
            <p>{lang==='ar'
              ? 'مطوّر Full Stack محترف متخصص في بناء تجارب رقمية عالية الأداء.'
              : 'Professional Full Stack Developer crafting high-performance digital experiences.'
            }</p>
            <div className="fb-built">
              <span>{t.footer.built}</span>
              <div className="fbi-row">
                {BUILT.map(({ src, n }) => (
                  <img key={n} src={src} alt={n} title={n} />
                ))}
              </div>
            </div>

            {/* Newsletter micro-form */}
            <form className="fb-newsletter" onSubmit={handleSub}>
              <div className="fbn-label">{lang==='ar' ? 'ابقَ على اطّلاع' : 'Stay updated'}</div>
              {sub === 'done'
                ? <div className="fbn-success">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                    {lang==='ar' ? 'تم الاشتراك!' : 'Subscribed!'}
                  </div>
                : <div className="fbn-row">
                    <input
                      type="email" value={email} onChange={e=>setEmail(e.target.value)}
                      placeholder={lang==='ar' ? 'بريدك الإلكتروني' : 'your@email.com'}
                      required
                    />
                    <button type="submit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
              }
            </form>
          </div>

          {/* Nav */}
          <div className="fc">
            <h4>{t.footer.nav}</h4>
            <ul>{NAV.map(([l,h]) => <li key={l}><a href={h}>{l}</a></li>)}</ul>
          </div>

          {/* Contact */}
          <div className="fc">
            <h4>{t.footer.connect}</h4>
            <a href="mailto:twwityh@gmail.com">twwityh@gmail.com</a>
            <a href="https://linkedin.com/in/fadi-medkour" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/fadi-medkour" target="_blank" rel="noreferrer">GitHub</a>
            <span className="fc-loc">🇩🇿 {lang==='ar' ? 'الجزائر العاصمة' : 'Algiers, Algeria'}</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {year} Fadi Medkour · {t.footer.rights}</p>
          <div className="fb-socials">
            {[
              { href:'https://github.com/fadi-medkour',  title:'GitHub',   img:true  },
              { href:'https://linkedin.com/in/fadi-medkour', title:'LinkedIn',
                icon:<svg viewBox="0 0 24 24" fill="#0A66C2" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href:'mailto:twwityh@gmail.com', title:'Email',
                icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg> },
              { href:'#hero', title:'Top',
                icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M12 19V5M5 12l7-7 7 7"/></svg> },
            ].map(({ href, title, img, icon }) => (
              <a key={title} href={href} className="fbs" title={title}
                 target={href.startsWith('http')?'_blank':undefined} rel="noreferrer">
                {img ? <img src={svgGH} alt="GitHub" style={{width:14,height:14,filter:'invert(.7)'}} /> : icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
