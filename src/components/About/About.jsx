import { useState, useRef } from 'react'
import { useMouseTilt } from '../../hooks/useMouseTilt.js'
import profileImg from '../../assets/profile.jpeg'
import svgReact from '../../assets/svg/react.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgJS    from '../../assets/svg/js.svg'
import svgMongo from '../../assets/svg/mongodb.svg'
import svgTW    from '../../assets/svg/tailwind.svg'
import './About.css'

const STACK   = [{src:svgReact,name:'React.js',color:'#00d8ff'},{src:svgNode,name:'Node.js',color:'#339933'},{src:svgJS,name:'JavaScript',color:'#f5de19'},{src:svgMongo,name:'MongoDB',color:'#58aa50'},{src:svgTW,name:'Tailwind',color:'#44a8b3'}]
const CHIPS   = ['🎓 CS Student','🎨 Illustrator','⚡ Agile / Git','💡 Clean Code','🇩🇿 Algeria']
const FACTS   = [['3+','Yrs Exp'],['20+','Projects'],['12+','Tech']]
const TIMELINE= [{year:'2022',event:'Started coding journey',icon:'🚀'},{year:'2023',event:'First full-stack app shipped',icon:'⚡'},{year:'2024',event:'Senior freelance developer',icon:'🏆'},{year:'2025',event:'20+ projects completed',icon:'✨'}]
const VALUES  = [{icon:'🎯',title:'Precision',desc:'Every pixel and every line of code matters.'},{icon:'🚀',title:'Performance',desc:'Fast, scalable, production-ready solutions.'},{icon:'🤝',title:'Reliability',desc:'Clear communication and on-time delivery.'}]

export default function About() {
  const [tab, setTab] = useState('story')
  const { ref, style, onMouseMove, onMouseLeave } = useMouseTilt(4)

  return (
    <section id="about" className="about">
      <div className="about-wrap">
        {/* LEFT */}
        <div className="about-left rv-left">
          <div className="ab-photo-wrap">
            <div ref={ref} style={style} className="ab-photo-card" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
              <div className="ab-border"/>
              <div className="ab-inner">
                <img src={profileImg} alt="Fadi Medkour" className="ab-img"/>
                <div className="ab-vignette"/>
              </div>
              <span className="abc tl"/><span className="abc br"/>
            </div>
            <div className="ab-status">
              <span className="abs-dot"/>
              <div><div className="abs-sub">Status</div><div className="abs-val">Open to work</div></div>
            </div>
          </div>

          <div className="ab-facts">
            {FACTS.map(([n,l]) => (
              <div key={l} className="ab-fact">
                <span className="af-n">{n}</span><span className="af-l">{l}</span>
              </div>
            ))}
          </div>

          <div className="ab-stack">
            <span className="abs-label">Tech Stack</span>
            <div className="abs-row">
              {STACK.map(({src,name,color},i) => (
                <div key={name} className="abi" style={{'--i':i,'--c':color}} title={name}>
                  <img src={src} alt={name}/>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="section-badge rv" style={{'--i':0}}>Discovery</div>
          <h2 className="section-title rv" style={{'--i':1}}>About The <em>Architect</em></h2>

          <div className="ab-tabs rv" style={{'--i':2}}>
            {['story','journey','values'].map(t => (
              <button key={t} className={`abt${tab===t?' on':''}`} onClick={() => setTab(t)}>
                {t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>

          <div className="ab-panel">
            {tab === 'story' && (
              <div className="ab-story rv" style={{'--i':0}}>
                <p>I&apos;m Fadi Medkour, a dedicated Full-Stack Developer specialising in building responsive, user-centric interfaces with React and scalable back-end systems with Node.js &amp; Express.</p>
                <p>Passionate about continuous learning, I stay at the forefront of emerging technologies. Beyond coding, I bring a creative edge through Adobe Illustrator — merging technical precision with visual design.</p>
                <p>I work using Agile methodologies and Git, always writing clean, testable code that scales.</p>
              </div>
            )}
            {tab === 'journey' && (
              <div className="ab-timeline rv" style={{'--i':0}}>
                {TIMELINE.map((item,i) => (
                  <div key={i} className="abt-row" style={{'--j':i}}>
                    <div className="abtr-icon">{item.icon}</div>
                    <span className="abtr-year">{item.year}</span>
                    <div className="abtr-line"/>
                    <span className="abtr-event">{item.event}</span>
                  </div>
                ))}
              </div>
            )}
            {tab === 'values' && (
              <div className="ab-values rv" style={{'--i':0}}>
                {VALUES.map((v,i) => (
                  <div key={i} className="abv-card" style={{'--j':i}}>
                    <span className="abvc-icon">{v.icon}</span>
                    <div><div className="abvc-title">{v.title}</div><div className="abvc-desc">{v.desc}</div></div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="ab-chips rv" style={{'--i':3}}>
            {CHIPS.map(c => <span key={c} className="ab-chip">{c}</span>)}
          </div>

          <div className="ab-actions rv" style={{'--i':4}}>
            <a href="#contact" className="btn-primary">Work With Me</a>
            <a href="#projects" className="btn-ghost">See Projects</a>
          </div>
        </div>
      </div>
    </section>
  )
}
