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
const STACK_ICONS = [svgReact,svgNode,svgJS,svgMongo,svgGit]

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

export default function Hero() {
  const { t, lang } = useContext(LangCtx)
  const roles = lang === 'ar' ? ROLES_AR : ROLES_EN
  const role = useTypewriter(roles)
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
      <div className="hero-mesh" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb-mouse" style={{ transform:`translate(${mouse.x*35}px,${mouse.y*35}px)` }} />

      <div className="hero-inner">
        {/* ── LEFT ── */}
        <div className="hero-left">
          {/* Availability badge */}
          <div className="hero-avail rv" style={{'--i':0}}>
            <span className="avail-ring" />
            <span className="avail-dot" />
            <span>{lang==='ar' ? 'متاح للعمل الحر' : 'Available for Freelance'}</span>
            <span className="avail-sep">·</span>
            <span className="avail-loc">🇩🇿 Algiers</span>
          </div>

          {/* Title */}
          <h1 className="hero-title rv" style={{'--i':1}}>
            <span className="ht-greeting">{greeting}</span>
            <span className="ht-name">Fadi Medkour</span>
            <span className="ht-role">
              <span className="typed-text">{role}</span>
              <span className="typed-cursor">_</span>
            </span>
          </h1>

          <p className="hero-desc rv" style={{'--i':2}}>
            {t.hero.desc2}
          </p>

          {/* Inline stats */}
          <div className="hero-stats-row rv" style={{'--i':3}}>
            <Counter target={3}  label={t.hero.stat1} />
            <div className="hs-sep" />
            <Counter target={20} label={t.hero.stat2} />
            <div className="hs-sep" />
            <Counter target={12} label={t.hero.stat3} />
          </div>

          {/* CTAs */}
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

          {/* Code card */}
          <div className="hero-code rv" style={{'--i':5}}>
            <div className="hc-header">
              <span className="hcd r"/><span className="hcd y"/><span className="hcd g"/>
              <span className="hc-title">portfolio.ts</span>
              <div className="hc-cursor-blink"/>
            </div>
            <div className="hc-body">
              <div className="hcl"><span className="hcn">1</span><span className="hck">const</span><span className="hcv"> dev</span><span className="hco"> = {'{'}</span></div>
              <div className="hcl"><span className="hcn">2</span><span className="hcs">  </span><span className="hckey">name</span><span className="hco">:</span><span className="hcstr"> &apos;Fadi Medkour&apos;</span><span className="hco">,</span></div>
              <div className="hcl"><span className="hcn">3</span><span className="hcs">  </span><span className="hckey">stack</span><span className="hco">:</span><span className="hcstr"> &apos;Full Stack&apos;</span><span className="hco">,</span></div>
              <div className="hcl"><span className="hcn">4</span><span className="hcs">  </span><span className="hckey">open</span><span className="hco">:</span><span className="hcbool"> true</span></div>
              <div className="hcl"><span className="hcn">5</span><span className="hco">{'}'}</span></div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: clean photo ── */}
        <div className="hero-right rv-right" style={{'--i':0}}>
          <div
            className="photo-container"
            style={{ transform:`perspective(1000px) rotateY(${mouse.x*-5}deg) rotateX(${mouse.y*4}deg)` }}
          >
            <div className="photo-glow-border"/>
            <div className="photo-img-wrap">
              <img src={profileImg} alt="Fadi Medkour" className="photo-img"/>
              <div className="photo-scanline"/>
            </div>
          </div>

          {/* Stack icons row — BELOW photo */}
          <div className="photo-stack-row">
            {STACK_ICONS.map((s, i) => (
              <div className="psr-icon" key={i} style={{'--i':i}}>
                <img src={s} alt=""/>
              </div>
            ))}
            <span className="psr-label">Tech Stack</span>
          </div>
        </div>
      </div>

      {/* Tech strip */}
      <div className="tech-strip">
        <div className="ts-inner">
          {doubled.map((tk, i) => (
            <div className="ts-item" key={i}>
              <img src={tk.src} alt={tk.name}/><span>{tk.name}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="scroll-ind">
        <div className="si-mouse"><div className="si-wheel"/></div>
        <span>scroll</span>
      </a>
    </section>
  )
}
