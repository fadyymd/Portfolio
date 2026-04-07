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
        done.current = true; let v = 0; const step = target / 50
        const iv = setInterval(() => { v = Math.min(v+step, target); setN(Math.floor(v)); if(v>=target)clearInterval(iv) }, 24)
      }
    }, { threshold: .6 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return (
    <div className="h-stat" ref={ref}>
      <span className="h-num">{n}+</span>
      <span className="h-lbl">{label}</span>
    </div>
  )
}

export default function Hero() {
  const { t, lang } = useContext(LangCtx)
  const roles = lang === 'ar' ? ROLES_AR : ROLES_EN
  const role = useTypewriter(roles)
  const doubled = [...TICKER, ...TICKER]
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const heroRef = useRef()

  useEffect(() => {
    const fn = e => {
      if (!heroRef.current) return
      const r = heroRef.current.getBoundingClientRect()
      setMouse({ x: (e.clientX - r.left - r.width/2) / r.width, y: (e.clientY - r.top - r.height/2) / r.height })
    }
    const el = heroRef.current
    if (el) { el.addEventListener('mousemove', fn); return () => el.removeEventListener('mousemove', fn) }
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-grid" />
      <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
      <div className="orb-mouse" style={{ transform:`translate(${mouse.x*28}px,${mouse.y*28}px)` }} />

      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-badge rv" style={{'--i':0}}>
            <span className="badge-pulse" /><span>{t.hero.badge}</span>
          </div>

          <h1 className="hero-title rv" style={{'--i':1}}>
            <span className="ht-sub">{t.hero.sub}</span>
            <span className="ht-main">{t.hero.main}</span>
          </h1>

          <p className="hero-desc rv" style={{'--i':2}}>
            {t.hero.desc}&nbsp;
            <span className="typed">{role}<span className="cursor">|</span></span>
            &nbsp;{t.hero.desc2}
          </p>

          <div className="hero-btns rv" style={{'--i':3}}>
            <a href="#contact" className="btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" width="16" height="16"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              {t.hero.cta1}
            </a>
            <a href="#" className="btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {t.hero.cta2}
            </a>
          </div>

          {/* Code card */}
          <div className="code-card rv" style={{'--i':4}}>
            <div className="cc-header">
              <span className="cc-dot r"/><span className="cc-dot y"/><span className="cc-dot g"/>
              <span className="cc-file">Portfolio.ts</span>
              <span className="cc-lang">TypeScript</span>
            </div>
            <div className="cc-body">
              <div className="cc-line"><span className="n">01</span><span className="kw">const</span><span className="var"> developer</span><span className="op"> = </span><span className="br">{'{'}</span></div>
              <div className="cc-line"><span className="n">02</span><span className="sp"/><span className="key">name</span><span className="op">:</span><span className="str"> 'Fadi Medkour'</span><span className="op">,</span></div>
              <div className="cc-line"><span className="n">03</span><span className="sp"/><span className="key">location</span><span className="op">:</span><span className="str"> 'Algiers 🇩🇿'</span><span className="op">,</span></div>
              <div className="cc-line"><span className="n">04</span><span className="sp"/><span className="key">skills</span><span className="op">:</span><span className="br"> [</span><span className="str">'React'</span><span className="op">, </span><span className="str">'Node'</span><span className="op">, </span><span className="str">'AI'</span><span className="br">]</span><span className="op">,</span></div>
              <div className="cc-line"><span className="n">05</span><span className="sp"/><span className="key">passionate</span><span className="op">:</span><span className="bool"> true</span><span className="op">,</span></div>
              <div className="cc-line"><span className="n">06</span><span className="sp"/><span className="key">motto</span><span className="op">:</span><span className="str"> "Build with Purpose"</span></div>
              <div className="cc-line"><span className="n">07</span><span className="br">{'}'}</span><span className="op">;</span></div>
              <div className="cc-line cc-call"><span className="n">08</span><span className="var">developer</span><span className="op">.</span><span className="fn">showcase</span><span className="op">();</span></div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right rv-right" style={{'--i':0}}>
          <div
            className="photo-wrap"
            style={{ transform:`perspective(900px) rotateY(${mouse.x*-7}deg) rotateX(${mouse.y*5}deg)` }}
          >
            <div className="photo-ring" />
            <div className="photo-frame">
              <img src={profileImg} alt="Fadi Medkour" />
              <div className="photo-shine" style={{ background:`radial-gradient(circle at ${50+mouse.x*30}% ${50+mouse.y*30}%, rgba(255,255,255,.1) 0%, transparent 55%)` }} />
              <div className="photo-fade" />
            </div>

            <div className="float-stats">
              <Counter target={3}  label={t.hero.stat1} />
              <div className="sep" />
              <Counter target={20} label={t.hero.stat2} />
              <div className="sep" />
              <Counter target={12} label={t.hero.stat3} />
            </div>

            <div className="float-react">
              <img src={svgReact} alt="React" className="fr-spin" />
              <div><div className="fr-name">React.js</div><div className="fr-sub">Expert</div></div>
            </div>

            <div className="float-passion"><span className="fp-dot" />{t.hero.passion}</div>

            <div className="float-node">
              <img src={svgNode} alt="Node.js" /><span>Node.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="tech-ticker">
        <div className="ticker-inner">
          {doubled.map((tk, i) => (
            <div className="t-item" key={i}>
              <img src={tk.src} alt={tk.name} /><span>{tk.name}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="scroll-hint">
        <div className="sh-mouse"><div className="sh-wheel" /></div>
        <span>scroll</span>
      </a>
    </section>
  )
}
