import { useState, useEffect, useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import './Navbar.css'

export default function Navbar() {
  const { t, lang, toggle } = useContext(LangCtx)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('hero')
  const [open, setOpen]         = useState(false)
  const [prog, setProg]         = useState(0)

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
      {/* Reading progress */}
      <div className="nav-progress">
        <div className="nav-progress-bar" style={{ width: prog + '%' }} />
      </div>

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* Empty logo area */}
        <a href="#hero" className="nav-logo" aria-label="Home">
          <span className="nav-logo-ring" />
          <span className="nav-logo-dot" />
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className={active === href.slice(1) ? 'active' : ''}
              style={{ '--idx': i }}
            >
              <span className="nl-num">0{i + 1}</span>
              <span className="nl-label">{label}</span>
              <span className="nl-line" />
            </a>
          ))}
        </div>

        <div className="nav-actions">
          {/* Language toggle */}
          <button className="lang-toggle" onClick={toggle} aria-label="Toggle language">
            <span className={lang === 'en' ? 'lt-active' : ''}>EN</span>
            <span className="lt-track">
              <span className="lt-thumb" style={{ transform: lang === 'ar' ? 'translateX(18px)' : 'none' }} />
            </span>
            <span className={lang === 'ar' ? 'lt-active' : ''}>AR</span>
          </button>

          <a href="#contact" className="nav-hire">
            <span className="nh-pulse" />
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

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? ' open' : ''}`}>
        <div className="drawer-inner">
          {LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className={active === href.slice(1) ? 'da-active' : ''}
              onClick={() => setOpen(false)}
              style={{ '--j': i }}
            >
              <span className="da-num">0{i + 1} —</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
        <div className="drawer-foot">
          <button className="lang-toggle lang-toggle-mob" onClick={toggle} aria-label="Toggle language">
            <span className={lang === 'en' ? 'lt-active' : ''}>EN</span>
            <span className="lt-track">
              <span className="lt-thumb" style={{ transform: lang === 'ar' ? 'translateX(18px)' : 'none' }} />
            </span>
            <span className={lang === 'ar' ? 'lt-active' : ''}>AR</span>
          </button>
          <a href="#contact" onClick={() => setOpen(false)} className="da-cta">{t.nav.cta} →</a>
        </div>
      </div>
    </>
  )
}
