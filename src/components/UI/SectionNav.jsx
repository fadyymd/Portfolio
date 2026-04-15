import { useState, useEffect } from 'react'
import './SectionNav.css'

const SECTIONS = [
  { id:'hero',       label:'Home'       },
  { id:'about',      label:'About'      },
  { id:'experience', label:'Experience' },
  { id:'skills',     label:'Skills'     },
  { id:'projects',   label:'Projects'   },
  { id:'contact',    label:'Contact'    },
]

export default function SectionNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id)
      })
    }, { threshold: .5 })
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="section-nav" aria-label="Section navigation">
      {SECTIONS.map(s => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`sn-item${active === s.id ? ' active' : ''}`}
          aria-label={s.label}
        >
          <span className="sn-dot" />
          <span className="sn-label">{s.label}</span>
        </a>
      ))}
    </nav>
  )
}
