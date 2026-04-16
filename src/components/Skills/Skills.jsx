import { useState, useRef, useEffect } from 'react'
import svgHTML  from '../../assets/svg/html.svg'
import svgCSS   from '../../assets/svg/css.svg'
import svgJS    from '../../assets/svg/js.svg'
import svgReact from '../../assets/svg/react.svg'
import svgTW    from '../../assets/svg/tailwind.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgMongo from '../../assets/svg/mongodb.svg'
import svgMySQL from '../../assets/svg/mysql.svg'
import svgGit   from '../../assets/svg/git.svg'
import svgGH    from '../../assets/svg/github.svg'
import svgFigma from '../../assets/svg/figma.svg'
import svgAI    from '../../assets/svg/illustrator.svg'
import './Skills.css'

const CATS = [
  {
    id: 'fe', emoji: '🖥️', label: 'Frontend', sub: 'UI / Interfaces', color: '#1560f2',
    desc: 'Building pixel-perfect, responsive interfaces with modern frameworks and design systems.',
    skills: [
      { src: svgHTML,  name: 'HTML5',      tag: 'Markup'    },
      { src: svgCSS,   name: 'CSS3',       tag: 'Styling'   },
      { src: svgJS,    name: 'JavaScript', tag: 'Language'  },
      { src: svgReact, name: 'React.js',   tag: 'Framework' },
      { src: svgTW,    name: 'Tailwind',   tag: 'UI Kit'    },
    ],
  },
  {
    id: 'be', emoji: '⚙️', label: 'Backend', sub: 'APIs / Server', color: '#8b5cf6',
    desc: 'Designing scalable server-side systems, REST APIs, WebSockets, and authentication flows.',
    skills: [
      { src: svgNode, name: 'Node.js',    tag: 'Runtime'   },
      { src: null,    name: 'Express.js', tag: 'Framework' },
      { src: null,    name: 'REST APIs',  tag: 'Protocol'  },
      { src: null,    name: 'JWT / Auth', tag: 'Security'  },
    ],
  },
  {
    id: 'db', emoji: '🗄️', label: 'Database', sub: 'Storage / Data', color: '#10b981',
    desc: 'Managing data with SQL and NoSQL solutions, designing schemas and optimising queries.',
    skills: [
      { src: svgMongo, name: 'MongoDB',     tag: 'NoSQL'    },
      { src: svgMySQL, name: 'MySQL',       tag: 'SQL'      },
      { src: null,     name: 'Mongoose',    tag: 'ODM'      },
      { src: null,     name: 'SQL / NoSQL', tag: 'Paradigm' },
    ],
  },
  {
    id: 'tools', emoji: '🛠️', label: 'Tools', sub: 'Workflow / Design', color: '#f0b429',
    desc: 'End-to-end workflow tools from version control to UI design and project management.',
    skills: [
      { src: svgGit,   name: 'Git',         tag: 'VCS'      },
      { src: svgGH,    name: 'GitHub',      tag: 'Hosting'  },
      { src: svgFigma, name: 'Figma',       tag: 'Design'   },
      { src: svgAI,    name: 'Illustrator', tag: 'Creative' },
      { src: null,     name: 'Agile/Scrum', tag: 'Method'   },
    ],
  },
]

/* Single skill tile with 3D tilt */
function SkillTile({ skill, color, delay }) {
  const ref  = useRef()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [spot, setSpot] = useState({ x: 50, y: 50 })
  const [hov,  setHov]  = useState(false)

  const onMove = e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top)  / r.height
    setTilt({ x: (py - .5) * 16, y: (px - .5) * -16 })
    setSpot({ x: px * 100, y: py * 100 })
    setHov(true)
  }
  const onLeave = () => { setTilt({ x: 0, y: 0 }); setHov(false) }

  return (
    <div
      ref={ref}
      className="sk-tile"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        '--color': color,
        '--delay': delay,
        transform: `perspective(500px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hov ? 'transform .08s linear' : 'transform .5s var(--spring)',
      }}
    >
      {/* Radial glow following mouse */}
      <div
        className="sk-tile-glow"
        style={{
          background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, ${color}28 0%, transparent 65%)`,
          opacity: hov ? 1 : 0,
        }}
      />

      <div className="sk-tile-icon">
        {skill.src
          ? <img src={skill.src} alt={skill.name} />
          : <span className="sk-tile-code">&lt;/&gt;</span>}
      </div>
      <span className="sk-tile-name">{skill.name}</span>
      <span className="sk-tile-tag" style={{ color, background: `${color}16` }}>{skill.tag}</span>
    </div>
  )
}

/* Animated tech row for right panel */
function TechRow({ skill, color, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className="sk-row"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ '--color': color, '--delay': delay }}
    >
      <div className="sk-row-left">
        <div className="sk-row-icon" style={{ background: `${color}14`, borderColor: `${color}28` }}>
          {skill.src
            ? <img src={skill.src} alt={skill.name} />
            : <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" width="14" height="14">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>}
        </div>
        <div>
          <span className="sk-row-name">{skill.name}</span>
          <span className="sk-row-tag">{skill.tag}</span>
        </div>
      </div>

      {/* Animated fill bar */}
      <div className="sk-row-track">
        <div
          className="sk-row-fill"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 8px ${color}66`,
            width: hov ? '100%' : '0%',
          }}
        />
      </div>

      {/* Check icon */}
      <div className="sk-row-check" style={{ color, opacity: hov ? 1 : 0 }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  )
}

export default function Skills() {
  const [active,  setActive]  = useState('fe')
  const [visible, setVisible] = useState(true)
  const cat = CATS.find(c => c.id === active)

  const switchCat = id => {
    if (id === active) return
    setVisible(false)
    setTimeout(() => { setActive(id); setVisible(true) }, 200)
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-wrap">

        {/* Header */}
        <div className="sec-hdr rv">
          <div className="section-badge">Inventory</div>
          <h2 className="section-title">The <em>Tech Stack</em></h2>
          <p className="section-sub">Tools and technologies I use to craft exceptional digital products.</p>
        </div>

        {/* Category tabs */}
        <div className="sk-tabs rv">
          {CATS.map(c => (
            <button
              key={c.id}
              className={`sk-tab${active === c.id ? ' active' : ''}`}
              style={{ '--color': c.color }}
              onClick={() => switchCat(c.id)}
            >
              <span className="sk-tab-e">{c.emoji}</span>
              <span className="sk-tab-l">{c.label}</span>
              <span className="sk-tab-n">{c.skills.length}</span>
              {active === c.id && <span className="sk-tab-bar" style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }} />}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className={`sk-content${visible ? ' sk-in' : ' sk-out'}`}>

          {/* LEFT: desc + icon tiles */}
          <div className="sk-left rv-left">
            {/* Category description */}
            <div className="sk-desc" style={{ '--color': cat.color }}>
              <div className="sk-desc-icon">{cat.emoji}</div>
              <div>
                <h3 className="sk-desc-title">
                  {cat.label}
                  <span style={{ color: cat.color, fontWeight: 400, fontSize: '.9em' }}> / {cat.sub}</span>
                </h3>
                <p className="sk-desc-text">{cat.desc}</p>
              </div>
            </div>

            {/* 3D icon tiles grid — FIXED SIZE */}
            <div className="sk-tiles">
              {cat.skills.map((sk, i) => (
                <SkillTile
                  key={sk.name}
                  skill={sk}
                  color={cat.color}
                  delay={`${i * 55}ms`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: animated tech rows */}
          <div className="sk-right rv-right">
            <div className="sk-right-header">
              <h4>Technologies</h4>
              <span className="sk-right-count" style={{ color: cat.color }}>
                {cat.skills.length} items
              </span>
            </div>

            <div className="sk-rows">
              {cat.skills.map((sk, i) => (
                <TechRow
                  key={sk.name}
                  skill={sk}
                  color={cat.color}
                  delay={`${i * 60}ms`}
                />
              ))}
            </div>

            {/* Category stat card */}
            <div className="sk-stat" style={{ '--color': cat.color }}>
              <div className="sk-stat-num" style={{ color: cat.color }}>{cat.skills.length}</div>
              <div className="sk-stat-text">
                <span>Technologies</span>
                <span>in {cat.label}</span>
              </div>
              <div className="sk-stat-emoji">{cat.emoji}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
