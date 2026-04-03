import { useRef, useEffect, useState } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter.js'
import profileImg from '../../assets/profile.jpeg'
import './Hero.css'

/* ── Animated counter ── */
function StatCounter({ target, label }) {
  const [count, setCount] = useState(0)
  const ref  = useRef()
  const done = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        let v = 0
        const step = target / 44
        const iv = setInterval(() => {
          v = Math.min(v + step, target)
          setCount(Math.floor(v))
          if (v >= target) clearInterval(iv)
        }, 28)
      }
    }, { threshold: 0.6 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return (
    <div className="h-stat" ref={ref}>
      <span className="h-stat-num">{count}+</span>
      <span className="h-stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const role = useTypewriter(['Full Stack Dev', 'React Engineer', 'Backend Builder', 'UI Craftsman'])

  return (
    <section id="hero" className="hero">
      {/* Background grid */}
      <div className="hero-grid" />
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="hero-inner">
        {/* ── Left side ── */}
        <div className="hero-left">
          {/* Welcome badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            WELCOME TO MY UNIVERSE
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            <span className="title-sub">Crafting Digital</span>
            <span className="title-main">Masterpieces</span>
          </h1>

          <p className="hero-desc">
            I'm <strong>Fadi Medkour</strong>, a professional{' '}
            <span className="typed-role">{role}<span className="type-cursor">|</span></span>{' '}
            dedicated to building high-performance, user-centric web applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Let's Collaborate
            </a>
            <a href="#" className="btn-secondary">
              Get Resume
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          {/* Code card */}
          <div className="hero-code-card">
            <div className="code-card-header">
              <span className="cc-dot cc-red" /><span className="cc-dot cc-yellow" /><span className="cc-dot cc-green" />
              <span className="cc-file">Portfolio.ts</span>
            </div>
            <div className="code-card-body">
              <div className="cc-line"><span className="cc-num">01</span><span className="cc-kw">const</span> developer = {'{'}</div>
              <div className="cc-line"><span className="cc-num">02</span>&nbsp;&nbsp;<span className="cc-key">name</span>: <span className="cc-str">'Fadi Medkour'</span>,</div>
              <div className="cc-line"><span className="cc-num">03</span>&nbsp;&nbsp;<span className="cc-key">focus</span>: <span className="cc-str">'Fullstack Mastery'</span>,</div>
              <div className="cc-line"><span className="cc-num">04</span>&nbsp;&nbsp;<span className="cc-key">skills</span>: [<span className="cc-str">'React'</span>, <span className="cc-str">'Node'</span>, <span className="cc-str">'AI'</span>],</div>
              <div className="cc-line"><span className="cc-num">05</span>&nbsp;&nbsp;<span className="cc-key">passionate</span>: <span className="cc-bool">true</span>,</div>
              <div className="cc-line"><span className="cc-num">06</span>&nbsp;&nbsp;<span className="cc-key">motto</span>: <span className="cc-str">"Build with Purpose"</span></div>
              <div className="cc-line"><span className="cc-num">07</span>{'};'}</div>
              <div className="cc-line cc-call"><span className="cc-num">08</span>developer<span className="cc-punc">.</span><span className="cc-fn">showcase</span>();</div>
            </div>
          </div>
        </div>

        {/* ── Right side — photo ── */}
        <div className="hero-right">
          <div className="photo-wrap">
            <div className="photo-glow-ring" />
            <div className="photo-inner">
              <img src={profileImg} alt="Fadi Medkour" />
              <div className="photo-overlay" />
            </div>

            {/* Floating stats */}
            <div className="float-stats">
              <StatCounter target={3}  label="Years Experience" />
              <div className="stat-sep" />
              <StatCounter target={20} label="Global Projects"  />
              <div className="stat-sep" />
              <StatCounter target={12} label="Tech Mastered"    />
            </div>

            {/* Badge */}
            <div className="float-badge">
              <span className="fb-dot" />
              Built with Passion
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-ind">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        <span>scroll</span>
      </a>
    </section>
  )
}
