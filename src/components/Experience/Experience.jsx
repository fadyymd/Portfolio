import { useState, useRef } from 'react'
import './Experience.css'

const TIMELINE = [
  { period:'2024 — Present', title:'Senior Full Stack Developer', company:'Freelance & Independent Projects', tag:'Current', color:'#1560f2', icon:'🚀',
    desc:'Building production-grade full-stack applications with React & Node.js, delivering REST APIs, WebSocket features, and secure JWT authentication. Focused on clean architecture and Agile methodology.',
    tech:['React','Node.js','MongoDB','JWT','REST API'] },
  { period:'2023 — 2024', title:'Full Stack Developer', company:'Personal & Academic Projects', tag:'Previous', color:'#8b5cf6', icon:'⚡',
    desc:'Built real-time chat apps, e-commerce platforms and admin dashboards from scratch. Adopted best practices in system design and collaborated via Git / Agile workflows.',
    tech:['React','Express.js','MySQL','Tailwind CSS'] },
  { period:'2022 — 2023', title:'Frontend Developer', company:'Early Career Stage', tag:'Foundation', color:'#10b981', icon:'🎨',
    desc:'Specialised in HTML5, CSS3, JavaScript and React component architecture. Built responsive, animated UIs with focus on UX and accessibility.',
    tech:['HTML5','CSS3','JavaScript','React'] },
  { period:'Ongoing', title:'Computer Science Student', company:'University — Algeria 🇩🇿', tag:'Academic', color:'#f0b429', icon:'📚',
    desc:'Deepening knowledge of algorithms, data structures and systems programming. Applying CS fundamentals in real-world full-stack projects and contributing to open-source.',
    tech:['Algorithms','Data Structures','OS','Networks'] },
]

function MagneticItem({ item, index, active, onClick }) {
  const ref = useRef()
  const [mag, setMag] = useState({ x:0, y:0 })
  const onMove = e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    setMag({ x:((e.clientX-r.left)/r.width-.5)*8, y:((e.clientY-r.top)/r.height-.5)*6 })
  }
  const onLeave = () => setMag({ x:0, y:0 })
  const isActive = active === index
  return (
    <div
      ref={ref}
      className={`exp-item rv${isActive?' active':''}`}
      style={{ '--i':index, '--c':item.color, transform:`translate(${mag.x}px,${mag.y}px)`, transition: mag.x===0?'transform .5s var(--spring),border-color .3s,box-shadow .3s':'transform .1s linear' }}
      onClick={onClick} onMouseMove={onMove} onMouseLeave={onLeave}
    >
      <div className="ei-icon">{item.icon}</div>
      <div className="ei-meta">
        <span className="ei-title">{item.title}</span>
        <span className="ei-period">{item.period}</span>
      </div>
      <svg className="ei-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </div>
  )
}

export default function Experience() {
  const [active, setActive] = useState(0)
  const item = TIMELINE[active]

  return (
    <section id="experience" className="experience">
      <div className="exp-wrap">
        <div className="sec-hdr rv">
          <div className="section-badge">Professional Journey</div>
          <h2 className="section-title">My <em>Experience</em></h2>
          <p className="section-sub">My evolving path through the world of software development.</p>
        </div>
        <div className="exp-layout">
          <div className="exp-list">
            {TIMELINE.map((it, i) => (
              <MagneticItem key={i} item={it} index={i} active={active} onClick={() => setActive(i)} />
            ))}
          </div>
          <div className="exp-panel glass-card rv-right" style={{ '--c': item.color }}>
            <div className="ep-top">
              <div>
                <span className="ep-tag" style={{ background:`${item.color}18`, color:item.color, borderColor:`${item.color}44` }}>{item.tag}</span>
                <h3>{item.title}</h3>
                <div className="ep-co">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="13" height="13"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  {item.company}
                </div>
                <div className="ep-period">{item.period}</div>
              </div>
              <div className="ep-num">{String(active+1).padStart(2,'0')}</div>
            </div>
            <p className="ep-desc">{item.desc}</p>
            <div className="ep-tech">
              {item.tech.map(tc => (
                <span key={tc} className="ep-chip" style={{ borderColor:`${item.color}44`, color:item.color }}>{tc}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
