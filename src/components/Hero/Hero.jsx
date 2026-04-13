import { useRef, useEffect, useState, useContext } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter.js'
import { LangCtx } from '../../App.jsx'
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
const ROLES_EN = ['Full Stack Dev','React Engineer','Backend Builder','UI Craftsman']
const ROLES_AR = ['مطوّر Full Stack','مهندس React','مطوّر خلفي','مصمم واجهات']

function Counter({ target, label }) {
  const [n, setN] = useState(0)
  const ref = useRef(); const done = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true; let v = 0; const step = target / 55
        const iv = setInterval(() => { v=Math.min(v+step,target); setN(Math.floor(v)); if(v>=target) clearInterval(iv) }, 22)
      }
    }, { threshold: .5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return (
    <div className="hero-stat" ref={ref}>
      <span className="hs-num">{n}+</span>
      <span className="hs-lbl">{label}</span>
    </div>
  )
}

/* Interactive terminal lines */
const LINES_EN = [
  { t:0,   text:'$ node --version',       color:'#6880a0' },
  { t:600, text:'v20.11.0',               color:'#10b981' },
  { t:1100,text:'$ npm run dev',           color:'#6880a0' },
  { t:1800,text:'✓ Ready on :5173',       color:'#5b9bff' },
  { t:2400,text:'> Building the future…', color:'#f0b429' },
]
const LINES_AR = [
  { t:0,   text:'$ node --version',       color:'#6880a0' },
  { t:600, text:'v20.11.0',               color:'#10b981' },
  { t:1100,text:'$ npm run dev',           color:'#6880a0' },
  { t:1800,text:'✓ جاهز على :5173',       color:'#5b9bff' },
  { t:2400,text:'> نبني المستقبل…',       color:'#f0b429' },
]

function Terminal({ lang }) {
  const lines = lang === 'ar' ? LINES_AR : LINES_EN
  const [visible, setVisible] = useState([])
  const [blink, setBlink] = useState(true)
  const done = useRef(false)
  const ref  = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        lines.forEach(({ t, text, color }) =>
          setTimeout(() => setVisible(v => [...v, { text, color }]), t)
        )
        const total = lines[lines.length-1].t + 600
        setTimeout(() => setBlink(true), total)
      }
    }, { threshold: .5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="terminal" ref={ref}>
      <div className="term-header">
        <span className="th-dot r"/><span className="th-dot y"/><span className="th-dot g"/>
        <span className="term-title">portfolio.sh</span>
        <div className="term-status"><span className="term-pulse"/>LIVE</div>
      </div>
      <div className="term-body">
        {visible.map((l, i) => (
          <div key={i} className="term-line" style={{ '--d': `${i * 40}ms` }}>
            <span className="term-prompt" style={{ color: l.color }}>{l.text}</span>
          </div>
        ))}
        {blink && <span className="term-caret">▋</span>}
      </div>
    </div>
  )
}

export default function Hero() {
  const { t, lang } = useContext(LangCtx)
  const roles = lang === 'ar' ? ROLES_AR : ROLES_EN
  const role  = useTypewriter(roles)
  const doubled = [...TICKER, ...TICKER]
  const [mouse, setMouse] = useState({ x:0, y:0 })
  const heroRef = useRef()

  useEffect(() => {
    const fn = e => {
      if (!heroRef.current) return
      const r = heroRef.current.getBoundingClientRect()
      setMouse({ x:(e.clientX-r.left-r.width/2)/r.width, y:(e.clientY-r.top-r.height/2)/r.height })
    }
    const el = heroRef.current
    if (el) { el.addEventListener('mousemove', fn); return () => el.removeEventListener('mousemove', fn) }
  }, [])

  const greeting = lang === 'ar' ? 'مرحباً، أنا' : "Hi, I'm"

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Animated grid */}
      <div className="hero-grid-bg" />
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb-follow" style={{ transform:`translate(${mouse.x*40}px,${mouse.y*40}px)` }} />
      {/* Radial spotlight */}
      <div className="hero-spotlight" style={{ left:`${50+mouse.x*20}%`, top:`${50+mouse.y*20}%` }} />

      <div className="hero-inner">
        {/* ── LEFT ── */}
        <div className="hero-left">
          <div className="hero-avail rv" style={{'--i':0}}>
            <span className="avail-ring"/>
            <span className="avail-dot"/>
            <span>{lang==='ar' ? 'متاح للعمل' : 'Available for Freelance'}</span>
            <span className="avail-sep">·</span>
            <span className="avail-loc">🇩🇿 Algiers</span>
          </div>

          <h1 className="hero-title rv" style={{'--i':1}}>
            <span className="ht-greeting">{greeting}</span>
            <span className="ht-name">Fadi Medkour</span>
            <span className="ht-role">
              <span className="typed-text">{role}</span>
              <span className="typed-cursor">_</span>
            </span>
          </h1>

          <p className="hero-desc rv" style={{'--i':2}}>{t.hero.desc2}</p>

          <div className="hero-stats-row rv" style={{'--i':3}}>
            <Counter target={3}  label={t.hero.stat1} />
            <div className="hs-sep" />
            <Counter target={20} label={t.hero.stat2} />
            <div className="hs-sep" />
            <Counter target={12} label={t.hero.stat3} />
          </div>

          <div className="hero-btns rv" style={{'--i':4}}>
            <a href="#contact" className="btn-primary">
              {t.hero.cta1}
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="15" height="15">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#projects" className="btn-ghost">
              {lang==='ar' ? 'المشاريع' : 'View Work'}
            </a>
          </div>

          {/* Interactive Terminal — replaces static code card */}
          <div className="rv" style={{'--i':5}}>
            <Terminal lang={lang} />
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hero-right rv-right" style={{'--i':0}}>
          <div
            className="photo-container"
            style={{ transform:`perspective(1100px) rotateY(${mouse.x*-6}deg) rotateX(${mouse.y*5}deg)` }}
          >
            {/* Animated gradient border */}
            <div className="photo-border-anim"/>
            <div className="photo-frame">
              <img src={profileImg} alt="Fadi Medkour" className="photo-img"/>
              <div className="photo-overlay-gradient"/>
            </div>

            {/* Corner decorations */}
            <div className="photo-corner pc-tl"/>
            <div className="photo-corner pc-br"/>
          </div>

          {/* Animated icon strip */}
          <div className="icon-strip">
            {[svgReact,svgNode,svgJS,svgMongo,svgGit].map((s,i)=>(
              <div className="is-icon" key={i} style={{'--i':i}}>
                <img src={s} alt=""/>
              </div>
            ))}
            <span className="is-label">Stack</span>
          </div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="hero-marquee">
        <div className="marquee-inner">
          {doubled.map((tk,i)=>(
            <div className="mq-item" key={i}>
              <img src={tk.src} alt={tk.name}/><span>{tk.name}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="scroll-hint">
        <div className="sh-wheel"><div className="sh-ball"/></div>
        <span>scroll</span>
      </a>
    </section>
  )
}
