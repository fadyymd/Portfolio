import { useRef, useEffect, useState } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter.js'
import profileImg from '../../assets/profile.jpeg'

/* SVG imports */
import svgHTML     from '../../assets/svg/html-5-svgrepo-com.svg'
import svgCSS      from '../../assets/svg/css3-02-svgrepo-com.svg'
import svgJS       from '../../assets/svg/js-official-svgrepo-com.svg'
import svgReact    from '../../assets/svg/react-javascript-js-framework-facebook-svgrepo-com.svg'
import svgTailwind from '../../assets/svg/tailwind-svgrepo-com.svg'
import svgNode     from '../../assets/svg/node-js-svgrepo-com.svg'
import svgMongo    from '../../assets/svg/mongodb-svgrepo-com.svg'
import svgGit      from '../../assets/svg/git-svgrepo-com.svg'

import './Hero.css'

const TECH_TICKER = [
  { src: svgHTML,     name: 'HTML5'      },
  { src: svgCSS,      name: 'CSS3'       },
  { src: svgJS,       name: 'JavaScript' },
  { src: svgReact,    name: 'React.js'   },
  { src: svgTailwind, name: 'Tailwind'   },
  { src: svgNode,     name: 'Node.js'    },
  { src: svgMongo,    name: 'MongoDB'    },
  { src: svgGit,      name: 'Git'        },
]

function StatCounter({ target, label, prefix = '', suffix = '+' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(); const done = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        let v = 0; const step = target / 44
        const iv = setInterval(() => { v = Math.min(v+step, target); setCount(Math.floor(v)); if(v>=target) clearInterval(iv) }, 28)
      }
    }, { threshold: 0.6 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return (
    <div className="h-stat" ref={ref}>
      <span className="h-stat-num">{prefix}{count}{suffix}</span>
      <span className="h-stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const role = useTypewriter(['Full Stack Dev','React Engineer','Backend Builder','UI Craftsman'])
  const doubled = [...TECH_TICKER, ...TECH_TICKER]

  return (
    <section id="hero" className="hero">
      {/* Background grid */}
      <div className="hero-grid" />
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="hero-inner">
        {/* ── LEFT ── */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>WELCOME TO MY UNIVERSE</span>
          </div>

          <h1 className="hero-title">
            <span className="ht-line1">Crafting Digital</span>
            <span className="ht-main">Masterpieces</span>
          </h1>

          <p className="hero-desc">
            I'm <strong>Fadi Medkour</strong>, a professional&nbsp;
            <span className="typed-role">{role}<span className="type-cursor">|</span></span>
            &nbsp;dedicated to building high-performance, user-centric web applications.
          </p>

          <div className="hero-btns">
            <a href="#contact" className="btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" width="16" height="16"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              Let's Collaborate
            </a>
            <a href="#" className="btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Get Resume
            </a>
          </div>

          {/* Code card */}
          <div className="hero-code">
            <div className="code-header">
              <span className="cd r"/><span className="cd y"/><span className="cd g"/>
              <span className="code-title">Portfolio.ts</span>
            </div>
            <div className="code-body">
              <div className="cl"><span className="ln">01</span><span className="kw">const</span> developer = {'{'}</div>
              <div className="cl"><span className="ln">02</span>&nbsp;&nbsp;<span className="ky">name</span>: <span className="st">'Fadi Medkour'</span>,</div>
              <div className="cl"><span className="ln">03</span>&nbsp;&nbsp;<span className="ky">focus</span>: <span className="st">'Fullstack Mastery'</span>,</div>
              <div className="cl"><span className="ln">04</span>&nbsp;&nbsp;<span className="ky">skills</span>: [<span className="st">'React'</span>, <span className="st">'Node'</span>, <span className="st">'AI'</span>],</div>
              <div className="cl"><span className="ln">05</span>&nbsp;&nbsp;<span className="ky">passionate</span>: <span className="bo">true</span>,</div>
              <div className="cl"><span className="ln">06</span>&nbsp;&nbsp;<span className="ky">motto</span>: <span className="st">"Build with Purpose"</span></div>
              <div className="cl"><span className="ln">07</span>{'}'}<span className="pn">;</span></div>
              <div className="cl mt"><span className="ln">08</span>developer<span className="pn">.</span><span className="fn">showcase</span><span className="pn">()</span><span className="pn">;</span></div>
            </div>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hero-right">
          <div className="photo-wrap">
            <div className="photo-ring" />
            <div className="photo-inner">
              <img src={profileImg} alt="Fadi Medkour" />
              <div className="photo-fade" />
            </div>

            {/* Floating stats */}
            <div className="float-stats">
              <StatCounter target={3}  label="Years Exp."   />
              <div className="stat-sep" />
              <StatCounter target={20} label="Projects"     />
              <div className="stat-sep" />
              <StatCounter target={12} label="Technologies" />
            </div>

            {/* Floating badge */}
            <div className="float-badge">
              <span className="fb-dot" />
              Built with Passion
            </div>

            {/* React floating icon */}
            <div className="float-react">
              <img src={svgReact} alt="React" className="fr-icon" />
              <div>
                <div className="fr-name">React.js</div>
                <div className="fr-sub">Component Expert</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Ticker */}
      <div className="tech-ticker">
        <div className="ticker-track">
          {doubled.map((t, i) => (
            <div className="ticker-item" key={i}>
              <img src={t.src} alt={t.name} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="scroll-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
        <span>scroll</span>
      </a>
    </section>
  )
}
