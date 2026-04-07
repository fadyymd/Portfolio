import { useState, useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import { useMouseTilt } from '../../hooks/useMouseTilt.js'
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

const ICONS = { 'React.js':svgReact,'Node.js':svgNode,'MongoDB':svgMongo,'MySQL':svgMySQL,'HTML5':svgHTML,'CSS3':svgCSS,'JavaScript':svgJS,'Tailwind':svgTW }

const PROJECTS = [
  { cat:'fullstack',emoji:'🛒',en:{title:'E-Commerce Platform',desc:'Full-stack e-commerce with real-time inventory, payment gateway, and admin dashboard.'},ar:{title:'منصة تجارة إلكترونية',desc:'متجر إلكتروني متكامل مع إدارة مخزون فورية وبوابة دفع ولوحة تحكم.'},tags:['React.js','Node.js','MongoDB','Tailwind'],featured:true,live:'#',source:'#',from:'rgba(21,96,240,.28)',to:'rgba(0,212,255,.08)',year:'2024' },
  { cat:'frontend',emoji:'📊',en:{title:'Admin Dashboard',desc:'Comprehensive admin panel with interactive charts, user management, and CSV exports.'},ar:{title:'لوحة تحكم إدارية',desc:'لوحة إدارة شاملة مع رسوم بيانية تفاعلية وإدارة مستخدمين وتصدير CSV.'},tags:['React.js','CSS3','JavaScript'],live:'#',source:'#',from:'rgba(124,58,237,.28)',to:'rgba(21,96,240,.08)',year:'2024' },
  { cat:'fullstack',emoji:'💬',en:{title:'Real-Time Chat App',desc:'Instant messaging with WebSockets, group & private chats, and typing indicators.'},ar:{title:'تطبيق دردشة فوري',desc:'مراسلة فورية مع WebSockets، دردشة جماعية وخاصة، ومؤشرات الكتابة.'},tags:['JavaScript','Node.js','MongoDB'],live:'#',source:'#',from:'rgba(16,185,129,.28)',to:'rgba(0,212,255,.08)',year:'2023' },
  { cat:'frontend',emoji:'🎨',en:{title:'Brand Identity Site',desc:'Startup website combining coding and Illustrator design for complete visual identity.'},ar:{title:'موقع الهوية البصرية',desc:'موقع ناشئة يجمع البرمجة وتصميم Illustrator لهوية بصرية متكاملة.'},tags:['HTML5','CSS3','JavaScript'],live:'#',source:'#',from:'rgba(245,158,11,.28)',to:'rgba(239,68,68,.08)',year:'2023' },
  { cat:'fullstack',emoji:'✅',en:{title:'Task Manager App',desc:'Task manager with Drag & Drop, priority levels, advanced filters, real-time sync.'},ar:{title:'مدير المهام',desc:'مدير مهام مع سحب وإفلات ومستويات أولوية وفلاتر متقدمة ومزامنة فورية.'},tags:['React.js','Tailwind','Node.js'],live:'#',source:'#',from:'rgba(16,185,129,.22)',to:'rgba(21,96,240,.08)',year:'2024' },
  { cat:'backend',emoji:'🔐',en:{title:'Auth System',desc:'Full auth & RBAC with JWT, bcrypt, MySQL, refresh tokens, and high security standards.'},ar:{title:'نظام المصادقة',desc:'مصادقة كاملة وصلاحيات مع JWT وbcrypt وMySQL ورموز تحديث وأمان عالي.'},tags:['Node.js','MySQL','JavaScript'],live:'#',source:'#',from:'rgba(239,68,68,.22)',to:'rgba(124,58,237,.08)',year:'2023' },
]

function Ripple({ x, y }) {
  return <span className="ripple" style={{ left:x, top:y }}/>
}

function ProjCard({ p, i }) {
  const { t, lang } = useContext(LangCtx)
  const [ripples, setRipples] = useState([])
  const { ref, style, onMouseMove, onMouseLeave } = useMouseTilt(6)
  const info = p[lang] || p.en

  const addRipple = e => {
    const r = e.currentTarget.getBoundingClientRect()
    const id = Date.now()
    setRipples(rs => [...rs, { id, x: e.clientX-r.left, y: e.clientY-r.top }])
    setTimeout(() => setRipples(rs => rs.filter(x => x.id !== id)), 600)
  }

  return (
    <div
      ref={ref} style={style}
      className="proj-card rv" data-i={i}
      onClick={addRipple}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {p.featured && <div className="proj-featured">✦ {lang==='ar'?'مميز':'Featured'}</div>}
      <div className="proj-year">{p.year}</div>
      {ripples.map(r => <Ripple key={r.id} x={r.x} y={r.y}/>)}

      <div className="proj-thumb">
        <div className="proj-bg" style={{ background:`linear-gradient(135deg,${p.from},${p.to})` }}/>
        <div className="proj-dots"/>
        <span className="proj-emoji">{p.emoji}</span>
        <div className="proj-hover">
          <a href={p.live} className="ph-btn" target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            {t.projects.live}
          </a>
          <a href={p.source} className="ph-btn ph-ghost" target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>
            <img src={svgGH} alt="GitHub" style={{width:14,height:14,filter:'invert(1)'}}/>{t.projects.source}
          </a>
        </div>
      </div>

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
        <div className="proj-footer-links">
          <a href={p.live} target="_blank" rel="noreferrer">{t.projects.live} →</a>
          <a href={p.source} target="_blank" rel="noreferrer">
            <img src={svgGH} alt="GitHub" style={{width:14,height:14,filter:'invert(.6)'}}/>{t.projects.source}
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
    { id:'all',       label: t.projects.all },
    { id:'fullstack', label: t.projects.fs  },
    { id:'frontend',  label: t.projects.fe  },
    { id:'backend',   label: t.projects.be  },
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
            <button key={f.id} className={`pf-btn${filter===f.id?' active':''}`} onClick={()=>setFilter(f.id)}>
              {f.label}
              <span className="pf-count">{f.id==='all'?PROJECTS.length:PROJECTS.filter(p=>p.cat===f.id).length}</span>
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {visible.map((p, i) => <ProjCard key={p.en.title} p={p} i={i % 3}/>)}
        </div>

        <div className="proj-archive rv">
          <a href="https://github.com/fadi-medkour" className="btn-ghost" target="_blank" rel="noreferrer">
            <img src={svgGH} alt="GitHub" style={{width:18,height:18,filter:'invert(.7)'}}/>
            {t.projects.archive}
          </a>
        </div>
      </div>
    </section>
  )
}
