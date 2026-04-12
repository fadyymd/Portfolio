import { useState, useEffect } from 'react'
import './LoadingScreen.css'

export default function LoadingScreen() {
  const [pct, setPct]       = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const steps  = [8, 25, 48, 70, 88, 100]
    const delays = [60, 180, 320, 480, 640, 880]
    steps.forEach((s, i) => setTimeout(() => setPct(s), delays[i]))
    setTimeout(() => setVisible(false), 1150)
  }, [])

  if (!visible) return null

  return (
    <div className={`ls-root${pct >= 100 ? ' exit' : ''}`}>
      <div className="ls-orb ls-o1" />
      <div className="ls-orb ls-o2" />

      {/* Simple dot loader — no text logo */}
      <div className="ls-center">
        <div className="ls-dots">
          <span className="ls-d" style={{'--d':'0ms'}}/>
          <span className="ls-d" style={{'--d':'120ms'}}/>
          <span className="ls-d" style={{'--d':'240ms'}}/>
        </div>

        <div className="ls-track">
          <div className="ls-fill" style={{ width: pct + '%' }} />
        </div>
        <div className="ls-pct">{pct}%</div>
      </div>
    </div>
  )
}
