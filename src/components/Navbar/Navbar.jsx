import { useState, useEffect, useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import ThemeToggle from '../UI/ThemeToggle.jsx'
import './Navbar.css'

export default function Navbar() {
  const { t, lang, toggle } = useContext(LangCtx)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('hero')
  const [open,     setOpen]     = useState(false)
  const [prog,     setProg]     = useState(0)
  const [hidden,   setHidden]   = useState(false)
  const lastY = { current: 0 }

  const LINKS = [
    { href:'#about',      label: t.nav.about      },
    { href:'#experience', label: t.nav.experience  },
    { href:'#skills',     label: t.nav.skills      },
    { href:'#projects',   label: t.nav.projects    },
    { href:'#contact',    label: t.nav.contact     },
  ]

  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProg(total > 0 ? Math.round((window.scrollY / total) * 100) : 0)
      setScrolled(window.scrollY > 50)

      // Auto-hide on scroll down, show on scroll up
      if (window.scrollY > lastY.current + 60 && window.scrollY > 200) {
        setHidden(true)
      } else if (window.scrollY < lastY.current - 10) {
        setHidden(false)
      }
      lastY.current = window.scrollY

      let cur = 'hero'
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 130) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <div className="nav-progress">
        <div className="npb" style={{ width: prog + '%' }} />
      </div>

      <nav className={`navbar${scrolled ? ' scrolled' : ''}${hidden ? ' hidden' : ''}`}>
        {/* Empty logo */}
        <a href="#hero" className="nav-logo" aria-label="Home">
          <span className="nlogo-ring" />
          <span className="nlogo-dot" />
        </a>

        {/* Center links */}
        <div className="nav-links">
          {LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className={active === href.slice(1) ? 'active' : ''}
              style={{ '--idx': i }}
            >
              <span className="nl-num">{'0'+(i+1)}</span>
              <span className="nl-text">{label}</span>
              <span className="nl-bar" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-end">
          <ThemeToggle />

          <button className="lang-pill" onClick={toggle} aria-label="Toggle language">
            <span className={lang === 'en' ? 'lp-on' : ''}>EN</span>
            <span className="lp-div">|</span>
            <span className={lang === 'ar' ? 'lp-on' : ''}>AR</span>
          </button>

          <a href="#contact" className="nav-hire">
            <span className="nh-dot" />
            {t.nav.cta}
          </a>

          <button
            className={`nav-burger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div className={`nav-drawer${open ? ' open' : ''}`}>
        <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="drawer-links">
          {LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className={active === href.slice(1) ? 'dl-active' : ''}
              onClick={() => setOpen(false)}
              style={{ '--j': i }}
            >
              <span className="dl-num">{'0'+(i+1)}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
        <div className="drawer-foot">
          <div className="df-row">
            <ThemeToggle />
            <button className="lang-pill lang-pill-lg" onClick={toggle}>
              <span className={lang === 'en' ? 'lp-on' : ''}>EN</span>
              <span className="lp-div">|</span>
              <span className={lang === 'ar' ? 'lp-on' : ''}>AR</span>
            </button>
          </div>
          <a href="#contact" onClick={() => setOpen(false)} className="df-cta btn-primary">
            {t.nav.cta}
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
