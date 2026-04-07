import { useState, useEffect, useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import './Navbar.css'

export default function Navbar() {
  const { t, lang, toggle } = useContext(LangCtx)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)
  const [prog, setProg] = useState(0)

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

  const close = () => setOpen(false)

  return (
    <>
      <div className="scroll-progress" style={{ width: prog + '%' }} />

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">
          <span className="logo-box">F</span>adi<span className="logo-dot">.</span>dev
        </a>

        <div className="nav-links">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={active === href.slice(1) ? 'active' : ''}>
              {label}
              {active === href.slice(1) && <span className="nav-active-dot" />}
            </a>
          ))}
        </div>

        <div className="nav-right">
          {/* Language Toggle */}
          <button className="lang-btn" onClick={toggle} title="Switch language" aria-label="Toggle language">
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'ar' ? 'lang-active' : ''}>AR</span>
          </button>

          <a href="#contact" className="nav-cta">
            <span className="cta-dot" />{t.nav.cta}
          </a>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mob-menu${open ? ' open' : ''}`}>
        {LINKS.map(({ href, label }, i) => (
          <a key={href} href={href} onClick={close} className={active === href.slice(1) ? 'mob-active' : ''}>
            <span className="mob-num">{String(i + 1).padStart(2, '0')}</span>
            {label}
          </a>
        ))}
        <div className="mob-bottom">
          <button className="lang-btn lang-btn-mob" onClick={toggle}>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'ar' ? 'lang-active' : ''}>AR</span>
          </button>
          <a href="#contact" onClick={close} className="mob-cta-link">{t.nav.cta} →</a>
        </div>
      </div>
    </>
  )
}
