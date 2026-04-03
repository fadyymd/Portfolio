import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('hero')
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      let cur = 'hero'
      document.querySelectorAll('section[id]').forEach((s) => {
        if (window.scrollY >= s.offsetTop - 110) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">
          fadi<span className="logo-dot">.</span>dev
        </a>

        <div className="nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={active === href.slice(1) ? 'active' : ''}
            >
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">Let's Talk</a>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-menu${open ? ' open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={close}>{label}</a>
        ))}
        <a href="#contact" onClick={close} className="mob-cta">Let's Talk →</a>
      </div>
    </>
  )
}
