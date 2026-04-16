import { useState, useEffect } from 'react'
import './FloatCTA.css'

export default function FloatCTA() {
  const [show, setShow] = useState(false)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })

    // Pulse every 4s
    const iv = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 1000)
    }, 4000)

    return () => { window.removeEventListener('scroll', fn); clearInterval(iv) }
  }, [])

  if (!show) return null

  return (
    <a href="#contact" className={`float-cta${pulse ? ' pulse' : ''}`} aria-label="Contact me">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
      <span className="fcta-label">Let&apos;s Talk</span>
      <span className="fcta-ring" />
    </a>
  )
}
