import { useState } from 'react'
import './Experience.css'

const TIMELINE = [
  {
    period:  '2024 — Present',
    title:   'Senior Full Stack Developer',
    company: 'Freelance & Independent Projects',
    tag:     'Current',
    color:   '#1560f0',
    bullets: [
      'Built production-grade full-stack applications with React on the frontend and Node.js on the backend.',
      'Delivered robust REST APIs, real-time WebSocket features and secure JWT authentication systems.',
      'Focused on performance, scalability and clean architecture across all client projects.',
      'Maintained well-documented codebases following SOLID principles and Agile sprints.',
    ],
  },
  {
    period:  '2023 — 2024',
    title:   'Full Stack Developer',
    company: 'Personal & Academic Projects',
    tag:     'Previous',
    color:   '#7c3aed',
    bullets: [
      'Developed multiple full-stack projects spanning frontend React UIs and backend Node.js APIs.',
      'Built real-time chat apps, e-commerce platforms, and admin dashboards from scratch.',
      'Continuously adopted new technologies and best practices in system design.',
      'Collaborated using Git workflows and applied Agile/Scrum methodology.',
    ],
  },
  {
    period:  '2022 — 2023',
    title:   'Frontend Developer',
    company: 'Early Career Stage',
    tag:     'Foundation',
    color:   '#10b981',
    bullets: [
      'Specialised in HTML5, CSS3, JavaScript and React component-based architecture.',
      'Built responsive, animated UIs with deep focus on UX and accessibility.',
      'Explored state management, animation libraries and performance optimisation.',
    ],
  },
  {
    period:  'Ongoing',
    title:   'Computer Science Student',
    company: 'University — Algeria 🇩🇿',
    tag:     'Academic',
    color:   '#f0b429',
    bullets: [
      'Academic study strengthens theoretical knowledge of algorithms and data structures.',
      'Directly applies computer science fundamentals in real-world full-stack projects.',
      'Active contributor to the local developer community and open-source ecosystem.',
    ],
  },
]

export default function Experience() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="experience" className="experience">
      <div className="exp-wrap">
        <div className="sec-hdr rv">
          <div className="section-badge">Professional Journey</div>
          <h2 className="section-title">My <em>Experience</em></h2>
          <p className="section-sub">My evolving path through the world of software development — from first lines to full systems.</p>
        </div>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div
              className={`tl-item rv${expanded === i ? ' expanded' : ''}`}
              style={{ '--i': i, '--c': item.color }}
              key={i}
            >
              {/* Connector */}
              <div className="tl-connector">
                <div className="tl-dot">
                  <div className="tl-dot-core" />
                </div>
                {i < TIMELINE.length - 1 && <div className="tl-line" />}
              </div>

              {/* Card */}
              <div className="tl-card" onClick={() => setExpanded(expanded === i ? null : i)}>
                {/* Top row */}
                <div className="tl-card-top">
                  <div className="tl-left-meta">
                    <span className="tl-tag" style={{ background: `${item.color}22`, color: item.color, borderColor: `${item.color}44` }}>
                      {item.tag}
                    </span>
                    <span className="tl-period">{item.period}</span>
                  </div>
                  <div className="tl-toggle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16"
                      style={{ transform: expanded === i ? 'rotate(180deg)' : 'none', transition: 'transform .3s' }}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </div>

                <h3 className="tl-title">{item.title}</h3>
                <div className="tl-company">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  {item.company}
                </div>

                {/* Expandable bullets */}
                <div className="tl-bullets-wrap">
                  <ul className="tl-bullets">
                    {item.bullets.map((b, j) => (
                      <li key={j}>
                        <span className="tl-bullet-dot" style={{ background: item.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
