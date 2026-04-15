import { useRef, useEffect, useState } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter.js'
import profileImg from '../../assets/profile.jpeg'
import svgReact from '../../assets/svg/react.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgHTML  from '../../assets/svg/html.svg'
import svgCSS   from '../../assets/svg/css.svg'
import svgJS    from '../../assets/svg/js.svg'
import svgTW    from '../../assets/svg/tailwind.svg'
import svgMongo from '../../assets/svg/mongodb.svg'
import svgGit   from '../../assets/svg/git.svg'
import './Hero.css'

const TICKER = [
  {src:svgHTML,name:'HTML5'},{src:svgCSS,name:'CSS3'},{src:svgJS,name:'JavaScript'},
  {src:svgReact,name:'React.js'},{src:svgTW,name:'Tailwind'},{src:svgNode,name:'Node.js'},
  {src:svgMongo,name:'MongoDB'},{src:svgGit,name:'Git'},
]
const ROLES = ['Full Stack Dev', 'React Engineer', 'UI Craftsman', 'Backend Builder']
const STACK = [svgReact, svgNode, svgJS, svgMongo, svgGit]

const TERM_LINES = [
  { t:0,    text: '$ whoami',                   color: '#6880a0' },
  { t: 650, text: 'Fadi Medkour',               color: '#5b9bff' },
  { t:1200, text: '$ cat role.txt',              color: '#6880a0' },
  { t:1800, text: 'Senior Full Stack Developer', color: '#10b981' },
  { t:2400, text: '$ npm run build-the-future',  color: '#6880a0' },
  { t:3000, text: '✓ Ready. Let\'s ship it.',    color: '#f0b429' },
]

function Counter({ end, label, suffix = '+' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(); const done = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        let v = 0; const step = end / 60
        const iv = setInterval(() => { v = Math.min(v + step, end); setVal(Math.floor(v)); if (v >= end) clearInterval(iv) }, 20)
      }
    }, { threshold: .5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end])
  return (
    <div className="h-stat" ref={ref}>
      <span className="hs-n">{val}{suffix}</span>
      <span className="hs-l">{label}</span>
    </div>
  )
}

function Terminal() {
  const [lines, setLines] = useState([])
  const [caret, setCaret] = useState(false)
  const done = useRef(false); const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        TERM_LINES.forEach(({ t, text, color }) =>
          setTimeout(() => setLines(l => [...l, { text, color }]), t)
        )
        setTimeout(() => setCaret(true), TERM_LINES[TERM_LINES.length - 1].t + 500)
      }
    }, { threshold: .4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div className="terminal" ref={ref}>
      <div className="term-bar">
        <span className="tb-dot r" /><span className="tb-dot y" /><span className="tb-dot g" />
        <span className="tb-title">terminal</span>
        <div className="tb-live"><span className="tb-pulse" />LIVE</div>
      </div>
      <div className="term-body">
        {lines.map((l, i) => (
          <div key={i} className="term-row">
            <span className="term-txt" style={{ color: l.color }}>{l.text}</span>
          </div>
        ))}
        {caret && <span className="term-caret" />}
      </div>
    </div>
  )
}

export default function Hero() {
  const role = useTypewriter(ROLES)
  const doubled = [...TICKER, ...TICKER]
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const heroRef = useRef()

  useEffect(() => {
    const fn = e => {
      if (!heroRef.current) return
      const r = heroRef.current.getBoundingClientRect()
      setMouse({ x: (e.clientX - r.left - r.width / 2) / r.width, y: (e.clientY - r.top - r.height / 2) / r.height })
    }
    const el = heroRef.current
    el?.addEventListener('mousemove', fn)
    return () => el?.removeEventListener('mousemove', fn)
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Backgrounds */}
      <div className="hero-grid" />
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="orb orb-mouse" style={{ transform: `translate(${mouse.x * 44}px,${mouse.y * 44}px)` }} />
      <div className="hero-spot" style={{ left: `${50 + mouse.x * 18}%`, top: `${50 + mouse.y * 18}%` }} />

      <div className="hero-inner">
        {/* ── LEFT ── */}
        <div className="hero-left">
          {/* Available badge */}
          <div className="avail-badge rv" style={{ '--i': 0 }}>
            <span className="ab-ring" />
            <span className="ab-dot" />
            Available for Freelance
            <span className="ab-sep">·</span>
            <span className="ab-loc">🇩🇿 Algiers</span>
          </div>

          {/* Heading */}
          <h1 className="hero-h1 rv" style={{ '--i': 1 }}>
            <span className="h1-hi">Hi, I&apos;m</span>
            <span className="h1-name">Fadi Medkour</span>
            <span className="h1-role">
              <span className="h1-typed">{role}</span>
              <span className="h1-cursor">_</span>
            </span>
          </h1>

          <p className="hero-p rv" style={{ '--i': 2 }}>
            Dedicated to building high-performance, user-centric web applications with modern tech.
          </p>

          {/* Stats */}
          <div className="hero-stats rv" style={{ '--i': 3 }}>
            <Counter end={3}  label="Years Exp." />
            <div className="hs-div" />
            <Counter end={20} label="Projects" />
            <div className="hs-div" />
            <Counter end={12} label="Technologies" />
          </div>

          {/* CTAs */}
          <div className="hero-btns rv" style={{ '--i': 4 }}>
            <a href="#contact" className="btn-primary">
              Let&apos;s Collaborate
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="15" height="15">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#projects" className="btn-ghost">View Work</a>
          </div>

          {/* Terminal */}
          <div className="rv" style={{ '--i': 5 }}>
            <Terminal />
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hero-right rv-right" style={{ '--i': 0 }}>
          {/* Photo */}
          <div className="photo-wrap"
            style={{ transform: `perspective(1100px) rotateY(${mouse.x * -6}deg) rotateX(${mouse.y * 5}deg)` }}>
            <div className="photo-border" />
            <div className="photo-frame">
              <img src={profileImg} alt="Fadi Medkour" className="photo-img" />
              <div className="photo-vignette" />
            </div>
            <span className="photo-c tl" /><span className="photo-c br" />
          </div>

          {/* Icon strip */}
          <div className="hero-icons">
            {STACK.map((s, i) => (
              <div className="hi-icon" key={i} style={{ '--i': i }}>
                <img src={s} alt="" />
              </div>
            ))}
            <span className="hi-txt">Stack</span>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="marquee-strip">
        <div className="ms-inner">
          {doubled.map((tk, i) => (
            <div className="ms-item" key={i}>
              <img src={tk.src} alt={tk.name} /><span>{tk.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="scroll-cue">
        <div className="sc-wheel"><div className="sc-ball" /></div>
        <span>scroll</span>
      </a>
    </section>
  )
}
