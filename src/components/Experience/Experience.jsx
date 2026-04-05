import { useState } from 'react'
import './Experience.css'

const TIMELINE = [
  {
    period:'2024 — Present',title:'Senior Full Stack Developer',company:'Freelance & Independent Projects',
    tag:'Current',color:'#1560f0',icon:'🚀',
    bullets:['Built production-grade full-stack applications with React frontend and Node.js backend.','Delivered robust REST APIs, real-time WebSocket features and secure JWT authentication systems.','Focused on performance, scalability and clean architecture across all client projects.','Maintained well-documented codebases following SOLID principles and Agile sprints.'],
    tech:['React','Node.js','MongoDB','JWT'],
  },
  {
    period:'2023 — 2024',title:'Full Stack Developer',company:'Personal & Academic Projects',
    tag:'Previous',color:'#7c3aed',icon:'⚡',
    bullets:['Developed multiple full-stack projects spanning React UIs and Node.js APIs.','Built real-time chat apps, e-commerce platforms, and admin dashboards from scratch.','Continuously adopted new technologies and best practices in system design.','Collaborated using Git workflows and applied Agile/Scrum methodology.'],
    tech:['React','Express.js','MySQL','Tailwind'],
  },
  {
    period:'2022 — 2023',title:'Frontend Developer',company:'Early Career Stage',
    tag:'Foundation',color:'#10b981',icon:'🎨',
    bullets:['Specialised in HTML5, CSS3, JavaScript and React component-based architecture.','Built responsive, animated UIs with deep focus on UX and accessibility.','Explored state management, animation libraries and performance optimisation.'],
    tech:['HTML5','CSS3','JavaScript','React'],
  },
  {
    period:'Ongoing',title:'Computer Science Student',company:'University — Algeria 🇩🇿',
    tag:'Academic',color:'#f0b429',icon:'📚',
    bullets:['Academic study strengthens theoretical knowledge of algorithms and data structures.','Directly applies computer science fundamentals in real-world full-stack projects.','Active contributor to the local developer community and open-source ecosystem.'],
    tech:['Algorithms','Data Structures','OS','Networks'],
  },
]

export default function Experience() {
  const [expanded,setExpanded]=useState(0)

  return(
    <section id="experience" className="experience">
      <div className="exp-wrap">
        <div className="sec-hdr rv">
          <div className="section-badge">Professional Journey</div>
          <h2 className="section-title">My <em>Experience</em></h2>
          <p className="section-sub">My evolving path through the world of software development — from first lines to full systems.</p>
        </div>

        <div className="exp-layout">
          {/* Left: clickable list */}
          <div className="exp-list">
            {TIMELINE.map((item,i)=>(
              <div
                key={i}
                className={`exp-item rv${expanded===i?' active':''}`}
                style={{'--i':i,'--c':item.color}}
                onClick={()=>setExpanded(i)}
              >
                <div className="exp-icon">{item.icon}</div>
                <div className="exp-meta">
                  <span className="exp-title">{item.title}</span>
                  <span className="exp-period">{item.period}</span>
                </div>
                <svg className="exp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="exp-detail">
            {TIMELINE.map((item,i)=>(
              <div key={i} className={`exp-panel${expanded===i?' visible':''}`} style={{'--c':item.color}}>
                <div className="ep-header">
                  <div>
                    <span className="ep-tag" style={{background:`${item.color}22`,color:item.color,borderColor:`${item.color}44`}}>{item.tag}</span>
                    <h3>{item.title}</h3>
                    <div className="ep-company">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="13" height="13"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                      {item.company}
                    </div>
                    <div className="ep-period">{item.period}</div>
                  </div>
                  <div className="ep-num">{String(i+1).padStart(2,'0')}</div>
                </div>

                <ul className="ep-bullets">
                  {item.bullets.map((b,j)=>(
                    <li key={j} style={{'--j':j}}>
                      <span className="ep-dot" style={{background:item.color}}/>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="ep-tech">
                  {item.tech.map(t=>(
                    <span key={t} className="ep-chip" style={{borderColor:`${item.color}44`,color:item.color}}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
