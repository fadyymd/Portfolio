import { useState, useEffect } from 'react'
import './ReadingProgress.css'

export default function ReadingProgress() {
  const [pct, setPct] = useState(0)
  const [section, setSection] = useState('Hero')

  const SECTIONS = ['Hero','About','Experience','Skills','Projects','Contact']

  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setPct(total > 0 ? Math.round((window.scrollY / total) * 100) : 0)
      let cur = 'Hero'
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 150) {
          cur = s.id.charAt(0).toUpperCase() + s.id.slice(1)
        }
      })
      setSection(cur)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className="rp-bar">
      <div className="rp-fill" style={{ width: pct + '%' }} />
      <div className="rp-label">
        <span className="rp-section">{section}</span>
        <span className="rp-pct">{pct}%</span>
      </div>
    </div>
  )
}
