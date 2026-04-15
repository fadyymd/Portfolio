import { useState } from 'react'
import { useMouseTilt } from '../../hooks/useMouseTilt.js'
import profileImg from '../../assets/profile.jpeg'
import svgReact from '../../assets/svg/react.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgJS    from '../../assets/svg/js.svg'
import svgMongo from '../../assets/svg/mongodb.svg'
import svgTW    from '../../assets/svg/tailwind.svg'
import './About.css'

const STACK    = [
  {src:svgReact, name:'React.js',   color:'#00d8ff'},
  {src:svgNode,  name:'Node.js',    color:'#339933'},
  {src:svgJS,    name:'JavaScript', color:'#f5de19'},
  {src:svgMongo, name:'MongoDB',    color:'#58aa50'},
  {src:svgTW,    name:'Tailwind',   color:'#44a8b3'},
]
const FACTS    = [['3+','Yrs Exp'],['20+','Projects'],['12+','Tech']]
const CHIPS    = ['🎓 CS Student','🎨 Illustrator','⚡ Agile','💡 Clean Code','🇩🇿 Algeria']
const TIMELINE = [
  {year:'2022',event:'Started coding journey',icon:'🚀'},
  {year:'2023',event:'First full-stack app shipped',icon:'⚡'},
  {year:'2024',event:'Senior freelance developer',icon:'🏆'},
  {year:'2025',event:'20+ projects completed',icon:'✨'},
]
const VALUES = [
  {icon:'🎯',title:'Precision',   desc:'Every pixel and every line of code matters.'},
  {icon:'🚀',title:'Performance', desc:'Fast, scalable, production-ready solutions.'},
  {icon:'🤝',title:'Reliability', desc:'Clear communication and on-time delivery.'},
]

export default function About() {
  const [tab, setTab] = useState('story')
  const { ref, style, onMouseMove, onMouseLeave } = useMouseTilt(4)

  return (
    <section id="about" className="about">
      <div className="about-wrap">

        {/* ── LEFT: Photo Column ── */}
        <div className="about-left rv-left">
          <div className="about-photo-wrap">
            {/* 3D tilt photo card */}
            <div
              ref={ref}
              style={style}
              className="apc"
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
            >
              <div className="apc-border" />
              <div className="apc-frame">
                <img src={profileImg} alt="Fadi Medkour" className="apc-img" />
                <div className="apc-vignette" />
              </div>
              <span className="apc-corner tl" />
              <span className="apc-corner br" />
            </div>

            {/* Status badge */}
            <div className="about-status">
              <span className="as-dot" />
              <div>
                <div className="as-sub">Status</div>
                <div className="as-val">Open to work</div>
              </div>
            </div>
          </div>

          {/* Fact pills */}
          <div className="about-facts">
            {FACTS.map(([n,l]) => (
              <div key={l} className="af-pill">
                <span className="afp-n">{n}</span>
                <span className="afp-l">{l}</span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="about-stack">
            <span className="ast-label">Tech Stack</span>
            <div className="ast-icons">
              {STACK.map(({src,name,color},i) => (
                <div key={name} className="ast-icon" style={{'--i':i,'--c':color}} title={name}>
                  <img src={src} alt={name} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Text Column ── */}
        <div className="about-right">
          <div className="section-badge rv" style={{'--i':0}}>Discovery</div>
          <h2 className="section-title rv" style={{'--i':1}}>
            About The <em>Architect</em>
          </h2>

          {/* Tabs */}
          <div className="about-tabs rv" style={{'--i':2}}>
            {['story','journey','values'].map(t => (
              <button
                key={t}
                className={`at-btn${tab===t?' active':''}`}
                onClick={() => setTab(t)}
              >
                {t === 'story' ? 'My Story' : t === 'journey' ? 'Journey' : 'Values'}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <div className="about-panel">
            {tab === 'story' && (
              <div key="story" className="ap-story rv" style={{'--i':0}}>
                <p>I&apos;m Fadi Medkour, a dedicated Full-Stack Developer specialising in building responsive, user-centric interfaces with React and scalable back-end systems with Node.js &amp; Express.</p>
                <p style={{marginTop:'1rem'}}>Passionate about continuous learning, I stay at the forefront of emerging technologies. Beyond coding, I bring a creative edge through Adobe Illustrator — merging technical precision with visual design.</p>
                <p style={{marginTop:'1rem'}}>I work using Agile methodologies and Git, always writing clean, testable code that scales.</p>
              </div>
            )}
            {tab === 'journey' && (
              <div key="journey" className="ap-journey rv" style={{'--i':0}}>
                {TIMELINE.map((item,i) => (
                  <div key={i} className="apj-row" style={{'--j':i}}>
                    <div className="apjr-icon">{item.icon}</div>
                    <span className="apjr-year">{item.year}</span>
                    <div className="apjr-line" />
                    <span className="apjr-event">{item.event}</span>
                  </div>
                ))}
              </div>
            )}
            {tab === 'values' && (
              <div key="values" className="ap-values rv" style={{'--i':0}}>
                {VALUES.map((v,i) => (
                  <div key={i} className="apv-card" style={{'--j':i}}>
                    <span className="apvc-icon">{v.icon}</span>
                    <div>
                      <div className="apvc-title">{v.title}</div>
                      <div className="apvc-desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chips */}
          <div className="about-chips rv" style={{'--i':3}}>
            {CHIPS.map(c => <span key={c} className="ach">{c}</span>)}
          </div>

          <div className="about-actions rv" style={{'--i':4}}>
            <a href="#contact" className="btn-primary">Work With Me</a>
            <a href="#projects" className="btn-ghost">See Projects</a>
          </div>
        </div>

      </div>
    </section>
  )
}
