import { useState, useRef, useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import svgGH    from '../../assets/svg/github.svg'
import svgReact from '../../assets/svg/react.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgMongo from '../../assets/svg/mongodb.svg'
import svgMySQL from '../../assets/svg/mysql.svg'
import svgHTML  from '../../assets/svg/html.svg'
import svgCSS   from '../../assets/svg/css.svg'
import svgJS    from '../../assets/svg/js.svg'
import svgTW    from '../../assets/svg/tailwind.svg'
import './Projects.css'

const ICONS = {'React.js':svgReact,'Node.js':svgNode,'MongoDB':svgMongo,'MySQL':svgMySQL,'HTML5':svgHTML,'CSS3':svgCSS,'JavaScript':svgJS,'Tailwind':svgTW}

const PROJECTS = [
  { cat:'fullstack',emoji:'🛒',en:{title:'E-Commerce Platform',desc:'Full-stack e-commerce with real-time inventory, payment gateway, and powerful admin dashboard. Built for massive scale.'},ar:{title:'منصة تجارة إلكترونية',desc:'متجر إلكتروني متكامل مع إدارة مخزون فورية وبوابة دفع ولوحة تحكم للمشرفين.'},tags:['React.js','Node.js','MongoDB','Tailwind'],featured:true,live:'#',source:'#',gradient:'linear-gradient(135deg,#1463f3,#00c8f8)',year:'2024' },
  { cat:'frontend',emoji:'📊',en:{title:'Admin Dashboard',desc:'Comprehensive real-time admin panel with interactive charts, user management, advanced filtering and CSV exports.'},ar:{title:'لوحة تحكم إدارية',desc:'لوحة إدارة شاملة مع رسوم بيانية تفاعلية وإدارة المستخدمين وتصدير CSV.'},tags:['React.js','CSS3','JavaScript'],live:'#',source:'#',gradient:'linear-gradient(135deg,#8b5cf6,#1463f3)',year:'2024' },
  { cat:'fullstack',emoji:'💬',en:{title:'Real-Time Chat App',desc:'Instant messaging with WebSockets, group/private chats, typing indicators and presence detection.'},ar:{title:'تطبيق دردشة فوري',desc:'مراسلة فورية مع WebSockets ودردشة جماعية وخاصة ومؤشرات الكتابة.'},tags:['JavaScript','Node.js','MongoDB'],live:'#',source:'#',gradient:'linear-gradient(135deg,#10b981,#00c8f8)',year:'2023' },
  { cat:'frontend',emoji:'🎨',en:{title:'Brand Identity Site',desc:'Startup website combining coding with Illustrator design for a complete visual identity system.'},ar:{title:'موقع الهوية البصرية',desc:'موقع ناشئة يجمع البرمجة وتصميم Illustrator لهوية بصرية متكاملة.'},tags:['HTML5','CSS3','JavaScript'],live:'#',source:'#',gradient:'linear-gradient(135deg,#f0b429,#ef4444)',year:'2023' },
  { cat:'fullstack',emoji:'✅',en:{title:'Task Manager App',desc:'Drag & Drop task manager with priority levels, labels, advanced filters and real-time sync.'},ar:{title:'مدير المهام',desc:'مدير مهام بسحب وإفلات ومستويات أولوية وفلاتر متقدمة ومزامنة فورية.'},tags:['React.js','Tailwind','Node.js'],live:'#',source:'#',gradient:'linear-gradient(135deg,#10b981,#1463f3)',year:'2024' },
  { cat:'backend',emoji:'🔐',en:{title:'Auth System',desc:'Complete authentication & role-based access control using JWT, bcrypt, MySQL and refresh tokens.'},ar:{title:'نظام المصادقة',desc:'مصادقة كاملة وصلاحيات مع JWT وbcrypt وMySQL ورموز تحديث.'},tags:['Node.js','MySQL','JavaScript'],live:'#',source:'#',gradient:'linear-gradient(135deg,#ef4444,#8b5cf6)',year:'2023' },
]

function Ripple({ x, y }) {
  return <span className="ripple" style={{ left:x, top:y }}/>
}

/* 3D tilt card */
function ProjCard({ p, i }) {
  const { t, lang } = useContext(LangCtx)
  const ref = useRef()
  const [tilt, setTilt]   = useState({ x:0, y:0 })
  const [glow, setGlow]   = useState({ x:50, y:50 })
  const [ripples, setRipples] = useState([])
  const info = p[lang] || p.en

  const onMove = e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top)  / r.height
    setTilt({ x: (y-.5)*12, y: (x-.5)*-12 })
    setGlow({ x: x*100, y: y*100 })
  }
  const onLeave = () => setTilt({ x:0, y:0 })

  const onClick = e => {
    const r = e.currentTarget.getBoundingClientRect()
    const id = Date.now()
    setRipples(rs => [...rs, { id, x:e.clientX-r.left, y:e.clientY-r.top }])
    setTimeout(() => setRipples(rs => rs.filter(r => r.id !== id)), 600)
  }

  const isMoving = tilt.x !== 0 || tilt.y !== 0

  return (
    <div
      ref={ref}
      className="proj-card rv"
      style={{
        '--i': i % 3,
        transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isMoving ? 'transform .1s linear' : 'transform .6s var(--spring), box-shadow .35s, border-color .35s',
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Dynamic glow */}
      <div className="pc-glow" style={{
        background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(20,99,243,.18) 0%, transparent 60%)`,
        opacity: isMoving ? 1 : 0,
        transition: 'opacity .25s',
      }}/>

      {ripples.map(r => <Ripple key={r.id} x={r.x} y={r.y}/>)}
      {p.featured && <div className="proj-featured">✦ Featured</div>}
      <div className="proj-year">{p.year}</div>

      {/* Thumbnail */}
      <div className="proj-thumb">
        <div className="proj-gradient" style={{ background: p.gradient }}/>
        <div className="proj-noise"/>
        <div className="proj-lines"/>
        <span className="proj-emoji">{p.emoji}</span>
        <div className="proj-overlay">
          <a href={p.live} className="po-btn" target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {t.projects.live}
          </a>
          <a href={p.source} className="po-btn po-ghost" target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>
            <img src={svgGH} alt="" style={{width:14,height:14,filter:'invert(1)'}}/>
            {t.projects.source}
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="proj-body">
        <div className="proj-tags">
          {p.tags.map(tg => (
            <span key={tg} className="proj-tag">
              {ICONS[tg] && <img src={ICONS[tg]} alt={tg}/>}{tg}
            </span>
          ))}
        </div>
        <h3>{info.title}</h3>
        <p>{info.desc}</p>
        <div className="proj-links">
          <a href={p.live} target="_blank" rel="noreferrer">{t.projects.live} →</a>
          <a href={p.source} target="_blank" rel="noreferrer">
            <img src={svgGH} alt="" style={{width:13,height:13,filter:'invert(.5)'}}/>{t.projects.source}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useContext(LangCtx)
  const [filter, setFilter] = useState('all')
  const FILTERS = [
    {id:'all',       label:t.projects.all},
    {id:'fullstack', label:t.projects.fs },
    {id:'frontend',  label:t.projects.fe },
    {id:'backend',   label:t.projects.be },
  ]
  const visible = filter==='all' ? PROJECTS : PROJECTS.filter(p=>p.cat===filter)

  return (
    <section id="projects" className="projects">
      <div className="proj-wrap">
        <div className="sec-hdr sec-hdr-center rv">
          <div className="section-badge">{t.projects.badge}</div>
          <h2 className="section-title">{t.projects.title} <em>{t.projects.em}</em></h2>
          <p className="section-sub">{t.projects.sub}</p>
        </div>

        <div className="proj-filters rv">
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={`pf-btn${filter===f.id?' active':''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
              <span className="pf-count">{f.id==='all'?PROJECTS.length:PROJECTS.filter(p=>p.cat===f.id).length}</span>
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {visible.map((p,i) => <ProjCard key={p.en.title} p={p} i={i}/>)}
        </div>

        <div className="proj-archive rv">
          <a href="https://github.com/fadi-medkour" className="btn-ghost" target="_blank" rel="noreferrer">
            <img src={svgGH} alt="" style={{width:17,height:17,filter:'invert(.7)'}}/>
            {t.projects.archive}
          </a>
        </div>
      </div>
    </section>
  )
}
