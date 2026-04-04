import { useState } from 'react'
import svgHTML  from '../../assets/svg/html-5-svgrepo-com.svg'
import svgCSS   from '../../assets/svg/css3-02-svgrepo-com.svg'
import svgJS    from '../../assets/svg/js-official-svgrepo-com.svg'
import svgReact from '../../assets/svg/react-javascript-js-framework-facebook-svgrepo-com.svg'
import svgTW    from '../../assets/svg/tailwind-svgrepo-com.svg'
import svgNode  from '../../assets/svg/node-js-svgrepo-com.svg'
import svgMongo from '../../assets/svg/mongodb-svgrepo-com.svg'
import svgMySQL from '../../assets/svg/mysql-svgrepo-com.svg'
import svgGit   from '../../assets/svg/git-svgrepo-com.svg'
import svgGH    from '../../assets/svg/github-svgrepo-com.svg'
import svgFigma from '../../assets/svg/figma-svgrepo-com.svg'
import svgAI    from '../../assets/svg/adobe-illustrator-svgrepo-com.svg'
import './Skills.css'

const CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#1560f0',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    sub: 'UI / Interfaces',
    skills: [
      { src: svgHTML,  name: 'HTML5',      level: 95 },
      { src: svgCSS,   name: 'CSS3',       level: 90 },
      { src: svgJS,    name: 'JavaScript', level: 88 },
      { src: svgReact, name: 'React.js',   level: 85 },
      { src: svgTW,    name: 'Tailwind',   level: 82 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#7c3aed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="8" rx="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    sub: 'APIs / Server',
    skills: [
      { src: svgNode,  name: 'Node.js',    level: 83 },
      { src: null,     name: 'Express.js', level: 82 },
      { src: null,     name: 'REST APIs',  level: 88 },
      { src: null,     name: 'JWT / Auth', level: 80 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    color: '#10b981',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    sub: 'Storage / Data',
    skills: [
      { src: svgMongo, name: 'MongoDB',      level: 80 },
      { src: svgMySQL, name: 'MySQL',        level: 75 },
      { src: null,     name: 'Mongoose ODM', level: 78 },
      { src: null,     name: 'SQL / NoSQL',  level: 77 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Design',
    color: '#f0b429',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    sub: 'Workflow / Creative',
    skills: [
      { src: svgGit,   name: 'Git',          level: 85 },
      { src: svgGH,    name: 'GitHub',       level: 85 },
      { src: svgFigma, name: 'Figma',        level: 75 },
      { src: svgAI,    name: 'Illustrator',  level: 70 },
      { src: null,     name: 'Agile/Scrum',  level: 80 },
    ],
  },
]

function SkillBar({ name, src, level, color, i }) {
  return (
    <div className="sk-bar-row rv" style={{ '--i': i }}>
      <div className="sk-bar-meta">
        {src
          ? <img src={src} alt={name} className="sk-bar-icon" />
          : <div className="sk-bar-icon-placeholder" style={{ background: `${color}22` }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" width="14" height="14">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
        }
        <span className="sk-bar-name">{name}</span>
        <span className="sk-bar-pct" style={{ color }}>{level}%</span>
      </div>
      <div className="sk-bar-track">
        <div
          className="sk-bar-fill"
          style={{ '--w': level + '%', '--c': color }}
        />
      </div>
    </div>
  )
}

function SkillCard({ cat, active, onClick, i }) {
  const isActive = active === cat.id
  return (
    <div
      className={`sk-cat rv${isActive ? ' active' : ''}`}
      style={{ '--i': i, '--c': cat.color }}
      onClick={onClick}
    >
      <div className="sk-cat-icon" style={{ color: cat.color }}>{cat.icon}</div>
      <div className="sk-cat-info">
        <span className="sk-cat-label">{cat.label}</span>
        <span className="sk-cat-sub">{cat.sub}</span>
      </div>
      <div className="sk-cat-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('frontend')
  const activeCat = CATEGORIES.find(c => c.id === active)

  return (
    <section id="skills" className="skills">
      <div className="skills-wrap">
        <div className="sec-hdr rv">
          <div className="section-badge">Inventory</div>
          <h2 className="section-title">The <em>Tech Stack</em></h2>
          <p className="section-sub">
            Tools and technologies I use to build exceptional digital products — from concept to production deployment.
          </p>
        </div>

        <div className="skills-layout">
          {/* Left: category list */}
          <div className="skills-cats">
            {CATEGORIES.map((cat, i) => (
              <SkillCard
                key={cat.id} cat={cat} i={i}
                active={active}
                onClick={() => setActive(cat.id)}
              />
            ))}
          </div>

          {/* Right: bars */}
          <div className="skills-detail">
            <div className="sk-detail-header">
              <div className="sk-detail-icon" style={{ color: activeCat.color }}>
                {activeCat.icon}
              </div>
              <div>
                <h3>{activeCat.label}</h3>
                <p>{activeCat.sub}</p>
              </div>
            </div>
            <div className="sk-bars">
              {activeCat.skills.map((s, i) => (
                <SkillBar key={s.name} {...s} color={activeCat.color} i={i} />
              ))}
            </div>

            {/* Icon grid */}
            <div className="sk-icons-row">
              {activeCat.skills.filter(s => s.src).map(s => (
                <div className="sk-icon-chip" key={s.name} title={s.name}>
                  <img src={s.src} alt={s.name} />
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
