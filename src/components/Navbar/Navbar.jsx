import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const LINKS = [
  { href:'#about',label:'About' },{ href:'#experience',label:'Experience' },
  { href:'#skills',label:'Skills' },{ href:'#projects',label:'Projects' },
  { href:'#contact',label:'Contact' },
]

export default function Navbar() {
  const [scrolled,setScrolled]=useState(false)
  const [active,setActive]=useState('hero')
  const [open,setOpen]=useState(false)
  const [prog,setProg]=useState(0)
  const indicRef=useRef()

  useEffect(()=>{
    const fn=()=>{
      const total=document.documentElement.scrollHeight-window.innerHeight
      setProg(Math.round((window.scrollY/total)*100))
      setScrolled(window.scrollY>50)
      let cur='hero'
      document.querySelectorAll('section[id]').forEach(s=>{ if(window.scrollY>=s.offsetTop-130) cur=s.id })
      setActive(cur)
    }
    window.addEventListener('scroll',fn,{passive:true})
    return ()=>window.removeEventListener('scroll',fn)
  },[])

  const close=()=>setOpen(false)

  return(
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{width:prog+'%'}}/>

      <nav className={`navbar${scrolled?' scrolled':''}`}>
        <a href="#hero" className="nav-logo">
          <span className="logo-box">F</span>adi<span className="logo-dot">.</span>dev
        </a>

        <div className="nav-links">
          {LINKS.map(({href,label})=>(
            <a key={href} href={href} className={active===href.slice(1)?'active':''}>
              {label}
              {active===href.slice(1)&&<span className="nav-active-dot"/>}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a href="#contact" className="nav-cta">
            <span className="cta-dot"/>Let's Talk
          </a>
          <button className={`hamburger${open?' open':''}`} onClick={()=>setOpen(o=>!o)} aria-label="Menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      <div className={`mob-menu${open?' open':''}`}>
        {LINKS.map(({href,label})=>(
          <a key={href} href={href} onClick={close} className={active===href.slice(1)?'mob-active':''}>
            <span className="mob-num">{LINKS.findIndex(l=>l.href===href)+1 < 10 ? '0'+(LINKS.findIndex(l=>l.href===href)+1) : LINKS.findIndex(l=>l.href===href)+1}</span>
            {label}
          </a>
        ))}
        <a href="#contact" onClick={close} className="mob-cta-link">Let's Talk →</a>
      </div>
    </>
  )
}
