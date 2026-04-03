import './Projects.css'

const PROJECTS = [
  {
    title:   'E-Commerce Platform',
    desc:    'Full-stack e-commerce with real-time inventory management, payment gateway integration and admin dashboard. Built for scale with React, Node.js, and MongoDB.',
    tags:    ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Tailwind'],
    emoji:   '🛒',
    featured: true,
    live:    '#',
    source:  '#',
    from:    'rgba(21,99,255,.22)',
    to:      'rgba(0,212,255,.08)',
  },
  {
    title:   'Admin Dashboard',
    desc:    'Comprehensive admin panel with interactive charts, user management, advanced filtering and CSV report exports.',
    tags:    ['React.js', 'REST API', 'CSS3', 'Chart.js'],
    emoji:   '📊',
    live:    '#',
    source:  '#',
    from:    'rgba(108,58,237,.22)',
    to:      'rgba(21,99,255,.08)',
  },
  {
    title:   'Real-Time Chat App',
    desc:    'Instant messaging platform using WebSockets supporting group and private chats with real-time notifications and online presence.',
    tags:    ['JavaScript', 'WebSocket', 'Node.js', 'Express'],
    emoji:   '💬',
    live:    '#',
    source:  '#',
    from:    'rgba(5,150,105,.22)',
    to:      'rgba(0,212,255,.08)',
  },
  {
    title:   'Brand Identity Site',
    desc:    'Startup website merging coding and Adobe Illustrator design skills — complete UI/UX and visual identity system.',
    tags:    ['HTML5', 'CSS3', 'JavaScript', 'Illustrator'],
    emoji:   '🎨',
    live:    '#',
    source:  '#',
    from:    'rgba(245,158,11,.22)',
    to:      'rgba(239,68,68,.08)',
  },
  {
    title:   'Task Manager App',
    desc:    'Full-featured task manager with Drag & Drop, advanced filters, priority levels and real-time data synchronization.',
    tags:    ['React.js', 'Tailwind', 'Node.js', 'API'],
    emoji:   '✅',
    live:    '#',
    source:  '#',
    from:    'rgba(16,185,129,.22)',
    to:      'rgba(21,99,255,.08)',
  },
  {
    title:   'Auth System',
    desc:    'Complete authentication & role-based authorization using JWT, bcrypt and MySQL with high security standards and refresh tokens.',
    tags:    ['Node.js', 'JWT', 'MySQL', 'bcrypt'],
    emoji:   '🔐',
    live:    '#',
    source:  '#',
    from:    'rgba(239,68,68,.22)',
    to:      'rgba(108,58,237,.08)',
  },
]

function ProjectCard({ p, i }) {
  return (
    <div className="proj-card rv" style={{ '--i': i }}>
      {p.featured && <div className="proj-featured">✦ Featured</div>}

      {/* Thumbnail */}
      <div className="proj-thumb">
        <div className="proj-thumb-bg" style={{ background: `linear-gradient(135deg,${p.from},${p.to})` }} />
        <div className="proj-thumb-grid" />
        <span className="proj-emoji">{p.emoji}</span>
        <div className="proj-actions">
          <a href={p.live} className="proj-btn" title="Live Demo" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" width="16" height="16">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
          <a href={p.source} className="proj-btn proj-btn-ghost" title="Source Code" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            Source
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="proj-body">
        <div className="proj-tags">
          {p.tags.map((t) => <span className="proj-tag" key={t}>{t}</span>)}
        </div>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="proj-wrap">
        <div className="sec-hdr rv">
          <div className="section-label">Projects Showcase</div>
          <h2 className="section-title">Featured <em>Creations</em></h2>
          <p className="section-sub">
            A selection of high-impact digital solutions, built with focus on scalability,
            performance, and exceptional user experience.
          </p>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>

        <div className="proj-footer rv">
          <a href="https://github.com/fadi-medkour" className="btn-secondary" target="_blank" rel="noreferrer">
            Explore Full Archive →
          </a>
        </div>
      </div>
    </section>
  )
}
