import { useState, useEffect } from 'react'
import './LoadingScreen.css'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const steps = [10, 30, 55, 75, 90, 100]
    const delays = [50, 150, 280, 450, 600, 800]
    steps.forEach((s, i) => setTimeout(() => setPct(s), delays[i]))
    setTimeout(() => setVisible(false), 1100)
  }, [])

  if (!visible) return null

  return (
    <div className={`loading-screen${pct >= 100 ? ' done' : ''}`}>
      <div className="ls-inner">
        {/* Logo */}
        <div className="ls-logo">
          <span className="ls-box">F</span>
          <span className="ls-name">adi<span className="ls-dot">.</span>dev</span>
        </div>

        {/* Progress bar */}
        <div className="ls-bar-wrap">
          <div className="ls-bar" style={{ width: pct + '%' }} />
        </div>
        <div className="ls-pct">{pct}%</div>

        {/* Orbs */}
        <div className="ls-orb ls-orb-1" />
        <div className="ls-orb ls-orb-2" />
      </div>
    </div>
  )
}
