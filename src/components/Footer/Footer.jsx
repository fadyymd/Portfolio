import { useState } from 'react'
import svgGH    from '../../assets/svg/github.svg'
import svgReact from '../../assets/svg/react.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgJS    from '../../assets/svg/js.svg'
import svgHTML  from '../../assets/svg/html.svg'
import svgCSS   from '../../assets/svg/css.svg'
import './Footer.css'

const BUILT=[{src:svgReact,n:'React'},{src:svgNode,n:'Node'},{src:svgJS,n:'JS'},{src:svgHTML,n:'HTML'},{src:svgCSS,n:'CSS'}]
const NAV=[['About','#about'],['Experience','#experience'],['Skills','#skills'],['Projects','#projects'],['Contact','#contact']]
const year=new Date().getFullYear()

export default function Footer() {
  const [email,setEmail]=useState('')
  const [done,setDone]=useState(false)
  const onSub=e=>{e.preventDefault();if(!email.includes('@'))return;setDone(true);setEmail('');setTimeout(()=>setDone(false),4000)}
  return (
    <footer className="footer">
      <div className="ftr-wave"><svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="var(--bg)"/></svg></div>

      <div className="ftr-cta">
        <div className="fca-inner">
          <div className="fca-orb"/>
          <div><h3>Have a project in mind?</h3><p>Let&apos;s talk and build something amazing together.</p></div>
          <a href="#contact" className="btn-primary">Start Now <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        </div>
      </div>

      <div className="ftr-inner">
        <div className="ftr-top">
          <div className="fb">
            <div className="fb-mark"><div className="fbm-ring"/><div className="fbm-dot"/></div>
            <p>Professional Full Stack Developer crafting high-performance digital experiences with cutting-edge technology.</p>
            <div className="fb-built"><span>Built with</span><div className="fbi">{BUILT.map(({src,n})=><img key={n} src={src} alt={n} title={n}/>)}</div></div>
            <form className="ftr-nl" onSubmit={onSub}>
              <div className="fnl-label">Stay updated</div>
              {done
                ? <div className="fnl-ok"><svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" width="15" height="15"><polyline points="20 6 9 17 4 12"/></svg>Subscribed!</div>
                : <div className="fnl-row"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required/><button type="submit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button></div>}
            </form>
          </div>
          <div className="fc"><h4>Navigation</h4><ul>{NAV.map(([l,h])=><li key={l}><a href={h}>{l}</a></li>)}</ul></div>
          <div className="fc">
            <h4>Connect</h4>
            <a href="mailto:twwityh@gmail.com">twwityh@gmail.com</a>
            <a href="https://linkedin.com/in/fadi-medkour" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/fadi-medkour" target="_blank" rel="noreferrer">GitHub</a>
            <span className="fc-loc">🇩🇿 Algiers, Algeria</span>
          </div>
        </div>
        <div className="ftr-bot">
          <p>© {year} Fadi Medkour. All rights reserved. Made with ❤️ in Algeria</p>
          <div className="fbs-row">
            {[
              {href:'https://github.com/fadi-medkour',img:true},
              {href:'https://linkedin.com/in/fadi-medkour',icon:<svg viewBox="0 0 24 24" fill="#0A66C2" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>},
              {href:'mailto:twwityh@gmail.com',icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>},
              {href:'#hero',icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M12 19V5M5 12l7-7 7 7"/></svg>},
            ].map(({href,img,icon},i)=>(
              <a key={i} href={href} className="fbs" target={href.startsWith('http')?'_blank':undefined} rel="noreferrer">
                {img?<img src={svgGH} alt="GH" style={{width:14,height:14,filter:'invert(.7)'}}/>:icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
