import { useState, useEffect } from 'react'
import './BackToTop.css'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  const [pct, setPct] = useState(0)
  const R = 20; const C = 2 * Math.PI * R

  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const p = total > 0 ? window.scrollY / total : 0
      setPct(p); setShow(window.scrollY > 400)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`btt${show ? ' show' : ''}`}
      onClick={scrollTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg className="btt-ring" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={R} className="btt-track"/>
        <circle
          cx="24" cy="24" r={R}
          className="btt-progress"
          strokeDasharray={C}
          strokeDashoffset={C - pct * C}
        />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" className="btt-arrow">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  )
}
