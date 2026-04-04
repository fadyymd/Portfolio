import { useState } from 'react'
import svgReact from '../../assets/svg/react-javascript-js-framework-facebook-svgrepo-com.svg'
import svgNode  from '../../assets/svg/node-js-svgrepo-com.svg'
import svgMongo from '../../assets/svg/mongodb-svgrepo-com.svg'
import svgMySQL from '../../assets/svg/mysql-svgrepo-com.svg'
import svgHTML  from '../../assets/svg/html-5-svgrepo-com.svg'
import svgCSS   from '../../assets/svg/css3-02-svgrepo-com.svg'
import svgJS    from '../../assets/svg/js-official-svgrepo-com.svg'
import svgTW    from '../../assets/svg/tailwind-svgrepo-com.svg'
import svgGH    from '../../assets/svg/github-svgrepo-com.svg'
import './Projects.css'

const TAG_ICONS = {
  'React.js':  svgReact,
  'Node.js':   svgNode,
  'MongoDB':   svgMongo,
  'MySQL':     svgMySQL,
  'HTML5':     svgHTML,
  'CSS3':      svgCSS,
  'JavaScript':svgJS,
  'Tailwind':  svgTW,
}

const PROJECTS = [
  {
    cat:     'fullstack',
    emoji:   '🛒',
    title:   'E-Commerce Platform',
    desc:    'Full-stack e-commerce with real-time inventory, payment gateway integration, and a powerful admin dashboard. Built for scale.',
    tags:    ['React.js','Node.js','MongoDB','Tailwind'],
    featured: true,
    live:    '#', source: '#',
    from:    'rgba(21,96,240,.25)', to: 'rgba(0,212,255,.08)',
  },
  {
    cat:     'frontend',
    emoji:   '📊',
    title:   'Admin Dashboard',
    desc:    'Comprehensive admin panel with interactive charts, user management, advanced filtering, and CSV report exports.',
    tags:    ['React.js','CSS3','JavaScript'],
    live:    '#', source: '#',
    from:    'rgba(124,58,237,.25)', to: 'rgba(21,96,240,.08)',
  },
  {
    cat:     'fullstack',
    emoji:   '💬',
    title:   'Real-Time Chat App',
    desc:    'Instant messaging platform using WebSockets supporting group/private chats with real-time typing indicators.',
    tags:    ['JavaScript','Node.js','MongoDB'],
    live:    '#', source: '#',
    from:    'rgba(16,185,129,.25)', to: 'rgba(0,212,255,.08)',
  },
  {
    cat:     'frontend',
    emoji:   '🎨',
    title:   'Brand Identity Site',
    desc:    'Startup website merging coding with Adobe Illustrator design — complete UI/UX and visual identity system.',
    tags:    ['HTML5','CSS3','JavaScript'],
    live:    '#', source: '#',
    from:    'rgba(245,158,11,.25)', to: 'rgba(239,68,68,.08)',
  },
  {
    cat:     'fullstack',
    emoji:   '✅',
    title:   'Task Manager App',
    desc:    'Full-featured task manager with Drag & Drop, priority levels, advanced filters and real-time sync.',
    tags:    ['React.js','Tailwind','Node.js'],
    live:    '#', source: '#',
    from:    'rgba(16,185,129,.22)', to: 'rgba(21,96,240,.08)',
  },
  {
    cat:     'backend',
    emoji:   '🔐',
    title:   'Auth System',
    desc:    'Complete auth & role-based authorization using JWT, bcrypt and MySQL with refresh tokens and high security standards.',
    tags:    ['Node.js','MySQL','JavaScript'],
    live:    '#', source: '#',
    from:    'rgba(239,68,68,.22)', to: 'rgba(124,58,237,.08)',
  },
]

const FILTERS = [
  { id: 'all',       label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack'   },
  { id: 'frontend',  label: 'Frontend'     },
  { id: 'backend',   label: 'Backend'      },
]

function ProjectCard({ p, i }) {
  return (
    <div className="proj-card rv" style={{ '--i': i }}>
      {p.featured && <div className="proj-badge">✦ Featured</div>}

      {/* Thumb */}
      <div className="proj-thumb">
        <div className="proj-thumb-bg" style={{ background: `linear-gradient(135deg,${p.from},${p.to})` }} />
        <div className="proj-grid-lines" />
        <span className="proj-emoji">{p.emoji}</span>

        {/* Hover overlay */}
        <div className="proj-overlay">
          <a href={p.live} className="proj-link-btn" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="15" height="15">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
          <a href={p.source} className="proj-link-btn proj-link-ghost" target="_blank" rel="noreferrer">
            <img src={svgGH} alt="GitHub" style={{ width:15, height:15, filter:'invert(1)' }} />
            Source
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="proj-body">
        <div className="proj-tags">
          {p.tags.map(t => (
            <span className="proj-tag" key={t}>
              {TAG_ICONS[t] && <img src={TAG_ICONS[t]} alt={t} />}
              {t}
            </span>
          ))}
        </div>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="proj-links">
          <a href={p.live} target="_blank" rel="noreferrer">
            Live Demo →
          </a>
          <a href={p.source} target="_blank" rel="noreferrer">
            GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter)

  return (
    <section id="projects" className="projects">
      <div className="proj-wrap">
        <div className="sec-hdr sec-hdr-center rv">
          <div className="section-badge">Projects Showcase</div>
          <h2 className="section-title">Featured <em>Creations</em></h2>
          <p className="section-sub">
            Selected high-impact digital solutions built with focus on scalability, performance, and exceptional user experience.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="proj-filters rv">
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={`proj-filter${filter === f.id ? ' active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
              {filter === f.id && <span className="filter-dot" />}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {visible.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>

        {/* Archive CTA */}
        <div className="proj-archive rv">
          <a href="https://github.com/fadi-medkour" className="btn-ghost" target="_blank" rel="noreferrer">
            <img src={svgGH} alt="GitHub" style={{ width:18, height:18, filter:'invert(.7)' }} />
            Explore Full Archive
          </a>
        </div>
      </div>
    </section>
  )
}
