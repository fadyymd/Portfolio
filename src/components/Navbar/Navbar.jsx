import { useState, useEffect, useRef } from 'react'
import ThemeToggle from '../UI/ThemeToggle.jsx'
import './Navbar.css'

const LINKS = [
  { href:'#about',      label:'About',      num:'01' },
  { href:'#experience', label:'Experience',  num:'02' },
  { href:'#skills',     label:'Skills',      num:'03' },
  { href:'#projects',   label:'Projects',    num:'04' },
  { href:'#contact',    label:'Contact',     num:'05' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('hero')
  const [open,     setOpen]     = useState(false)
  const [prog,     setProg]     = useState(0)
  const [hidden,   setHidden]   = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProg(total > 0 ? Math.round((window.scrollY / total) * 100) : 0)
      setScrolled(window.scrollY > 60)
      if (window.scrollY > lastY.current + 80 && window.scrollY > 300) setHidden(true)
      else if (window.scrollY < lastY.current - 10) setHidden(false)
      lastY.current = window.scrollY
      let cur = 'hero'
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 140) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <div className="nav-progress" style={{ width: prog + '%' }} />

      <nav className={`navbar${scrolled ? ' scrolled' : ''}${hidden ? ' hidden' : ''}`}>
        <a href="#hero" className="nav-logo" aria-label="Home">
          <div className="nlogo">
            <span className="nlogo-ring" />
            <span className="nlogo-core" />
          </div>
        </a>

        <ul className="nav-links">
          {LINKS.map(({ href, label, num }) => (
            <li key={href}>
              <a href={href} className={active === href.slice(1) ? 'active' : ''}>
                <span className="nl-num">{num}</span>
                <span className="nl-label">{label}</span>
                <span className="nl-underline" />
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-end">
          <ThemeToggle />
          <a href="#contact" className="nav-cta">
            <span className="ncta-ping" />
            Let&apos;s Talk
          </a>
          <button
            className={`nav-burger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile drawer */}
      <div className={`nav-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <button className="drawer-close" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <nav className="drawer-nav">
          {LINKS.map(({ href, label, num }, i) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{ '--j': i }}
               className={active === href.slice(1) ? 'active' : ''}>
              <span className="dn-num">{num}</span>
              <span className="dn-label">{label}</span>
              <svg className="dn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          ))}
        </nav>
        <div className="drawer-foot">
          <ThemeToggle />
          <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}>
            Let&apos;s Talk
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
