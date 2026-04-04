import { useState, useEffect } from 'react'
import './Navbar.css'

const LINKS = [
  { href:'#about',      label:'About'      },
  { href:'#experience', label:'Experience' },
  { href:'#skills',     label:'Skills'     },
  { href:'#projects',   label:'Projects'   },
  { href:'#contact',    label:'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('hero')
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50)
      let cur = 'hero'
      document.querySelectorAll('section[id]').forEach(s => { if(window.scrollY >= s.offsetTop-120) cur=s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled?' scrolled':''}`}>
        <a href="#hero" className="nav-logo">
          <span className="logo-f">F</span>adi<span className="logo-dot">.</span>dev
        </a>

        <div className="nav-links">
          {LINKS.map(({href,label}) => (
            <a key={href} href={href} className={active===href.slice(1)?'active':''}>
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">Let's Talk</a>

        <button
          className={`hamburger${open?' open':''}`}
          onClick={() => setOpen(o=>!o)}
          aria-label="Menu"
        >
          <span/><span/><span/>
        </button>
      </nav>

      <div className={`mob-menu${open?' open':''}`}>
        {LINKS.map(({href,label}) => (
          <a key={href} href={href} onClick={close}>{label}</a>
        ))}
        <a href="#contact" onClick={close} className="mob-cta">Let's Talk →</a>
      </div>
    </>
  )
}
