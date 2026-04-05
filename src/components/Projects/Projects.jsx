import { useState } from 'react'
import svgGH   from '../../assets/svg/github.svg'
import svgReact from '../../assets/svg/react.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgMongo from '../../assets/svg/mongodb.svg'
import svgMySQL from '../../assets/svg/mysql.svg'
import svgHTML  from '../../assets/svg/html.svg'
import svgCSS   from '../../assets/svg/css.svg'
import svgJS    from '../../assets/svg/js.svg'
import svgTW    from '../../assets/svg/tailwind.svg'
import './Projects.css'

const ICONS={'React.js':svgReact,'Node.js':svgNode,'MongoDB':svgMongo,'MySQL':svgMySQL,'HTML5':svgHTML,'CSS3':svgCSS,'JavaScript':svgJS,'Tailwind':svgTW}

const PROJECTS=[
  {cat:'fullstack',emoji:'🛒',title:'E-Commerce Platform',desc:'Full-stack e-commerce with real-time inventory, payment gateway integration, and a powerful admin dashboard. Built for scale.',tags:['React.js','Node.js','MongoDB','Tailwind'],featured:true,live:'#',source:'#',from:'rgba(21,96,240,.28)',to:'rgba(0,212,255,.08)',year:'2024'},
  {cat:'frontend',emoji:'📊',title:'Admin Dashboard',desc:'Comprehensive admin panel with interactive charts, user management, advanced filtering, and CSV report exports.',tags:['React.js','CSS3','JavaScript'],live:'#',source:'#',from:'rgba(124,58,237,.28)',to:'rgba(21,96,240,.08)',year:'2024'},
  {cat:'fullstack',emoji:'💬',title:'Real-Time Chat App',desc:'Instant messaging platform using WebSockets supporting group & private chats with real-time typing indicators and presence.',tags:['JavaScript','Node.js','MongoDB'],live:'#',source:'#',from:'rgba(16,185,129,.28)',to:'rgba(0,212,255,.08)',year:'2023'},
  {cat:'frontend',emoji:'🎨',title:'Brand Identity Site',desc:'Startup website merging coding with Adobe Illustrator design — complete UI/UX and visual identity system.',tags:['HTML5','CSS3','JavaScript'],live:'#',source:'#',from:'rgba(245,158,11,.28)',to:'rgba(239,68,68,.08)',year:'2023'},
  {cat:'fullstack',emoji:'✅',title:'Task Manager App',desc:'Full-featured task manager with Drag & Drop, priority levels, advanced filters, labels, and real-time sync.',tags:['React.js','Tailwind','Node.js'],live:'#',source:'#',from:'rgba(16,185,129,.22)',to:'rgba(21,96,240,.08)',year:'2024'},
  {cat:'backend',emoji:'🔐',title:'Auth System',desc:'Complete auth & role-based authorization using JWT, bcrypt and MySQL with refresh tokens and high security standards.',tags:['Node.js','MySQL','JavaScript'],live:'#',source:'#',from:'rgba(239,68,68,.22)',to:'rgba(124,58,237,.08)',year:'2023'},
]

const FILTERS=[{id:'all',label:'All'},{id:'fullstack',label:'Full Stack'},{id:'frontend',label:'Frontend'},{id:'backend',label:'Backend'}]

function Ripple({x,y}) {
  return <span className="ripple" style={{left:x,top:y}}/>
}

function ProjCard({p,i}) {
  const [ripples,setRipples]=useState([])
  const addRipple=e=>{
    const r=e.currentTarget.getBoundingClientRect()
    const id=Date.now()
    setRipples(rs=>[...rs,{id,x:e.clientX-r.left,y:e.clientY-r.top}])
    setTimeout(()=>setRipples(rs=>rs.filter(r=>r.id!==id)),600)
  }

  return(
    <div className="proj-card rv" style={{'--i':i}} onClick={addRipple}>
      {p.featured&&<div className="proj-featured">✦ Featured</div>}
      <div className="proj-year">{p.year}</div>
      {ripples.map(r=><Ripple key={r.id} x={r.x} y={r.y}/>)}

      <div className="proj-thumb">
        <div className="proj-bg" style={{background:`linear-gradient(135deg,${p.from},${p.to})`}}/>
        <div className="proj-dots"/>
        <span className="proj-emoji">{p.emoji}</span>
        <div className="proj-hover">
          <a href={p.live} className="ph-btn" target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
          <a href={p.source} className="ph-btn ph-ghost" target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>
            <img src={svgGH} alt="GitHub" style={{width:14,height:14,filter:'invert(1)'}}/>
            Source
          </a>
        </div>
      </div>

      <div className="proj-body">
        <div className="proj-tags">
          {p.tags.map(t=>(
            <span key={t} className="proj-tag">
              {ICONS[t]&&<img src={ICONS[t]} alt={t}/>}{t}
            </span>
          ))}
        </div>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="proj-footer-links">
          <a href={p.live} target="_blank" rel="noreferrer">Live Demo →</a>
          <a href={p.source} target="_blank" rel="noreferrer">
            <img src={svgGH} alt="GitHub" style={{width:14,height:14,filter:'invert(.6)'}}/>
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter,setFilter]=useState('all')
  const visible=filter==='all'?PROJECTS:PROJECTS.filter(p=>p.cat===filter)

  return(
    <section id="projects" className="projects">
      <div className="proj-wrap">
        <div className="sec-hdr sec-hdr-center rv">
          <div className="section-badge">Projects Showcase</div>
          <h2 className="section-title">Featured <em>Creations</em></h2>
          <p className="section-sub">Selected high-impact digital solutions built for scalability, performance, and exceptional user experience.</p>
        </div>

        <div className="proj-filters rv">
          {FILTERS.map(f=>(
            <button key={f.id} className={`pf-btn${filter===f.id?' active':''}`} onClick={()=>setFilter(f.id)}>
              {f.label}
              <span className="pf-count">{f.id==='all'?PROJECTS.length:PROJECTS.filter(p=>p.cat===f.id).length}</span>
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {visible.map((p,i)=><ProjCard key={p.title} p={p} i={i%3}/>)}
        </div>

        <div className="proj-archive rv">
          <a href="https://github.com/fadi-medkour" className="btn-ghost" target="_blank" rel="noreferrer">
            <img src={svgGH} alt="GitHub" style={{width:18,height:18,filter:'invert(.7)'}}/>
            Explore Full Archive on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
