import { useState, useRef } from 'react'
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
  {cat:'fullstack',emoji:'🛒',title:'E-Commerce Platform',desc:'Full-stack store with real-time inventory, payment gateway, and powerful admin dashboard built for massive scale.',tags:['React.js','Node.js','MongoDB','Tailwind'],featured:true,live:'#',src:'#',gradient:'linear-gradient(135deg,#1560f2,#00c8f5)',year:'2024'},
  {cat:'frontend', emoji:'📊',title:'Admin Dashboard',   desc:'Comprehensive real-time admin panel with interactive charts, user management, and CSV exports.',tags:['React.js','CSS3','JavaScript'],live:'#',src:'#',gradient:'linear-gradient(135deg,#8b5cf6,#1560f2)',year:'2024'},
  {cat:'fullstack',emoji:'💬',title:'Real-Time Chat App', desc:'Instant messaging with WebSockets, group/private chats, typing indicators and presence detection.',tags:['JavaScript','Node.js','MongoDB'],live:'#',src:'#',gradient:'linear-gradient(135deg,#10b981,#00c8f5)',year:'2023'},
  {cat:'frontend', emoji:'🎨',title:'Brand Identity Site', desc:'Startup website combining coding and Illustrator design for a complete visual identity system.',tags:['HTML5','CSS3','JavaScript'],live:'#',src:'#',gradient:'linear-gradient(135deg,#f0b429,#ef4444)',year:'2023'},
  {cat:'fullstack',emoji:'✅',title:'Task Manager App',   desc:'Drag & Drop task manager with priority levels, advanced filters and real-time sync.',tags:['React.js','Tailwind','Node.js'],live:'#',src:'#',gradient:'linear-gradient(135deg,#10b981,#1560f2)',year:'2024'},
  {cat:'backend',  emoji:'🔐',title:'Auth System',        desc:'Complete authentication & RBAC using JWT, bcrypt, MySQL and refresh tokens.',tags:['Node.js','MySQL','JavaScript'],live:'#',src:'#',gradient:'linear-gradient(135deg,#ef4444,#8b5cf6)',year:'2023'},
]
const FILTERS = [{id:'all',label:'All'},{id:'fullstack',label:'Full Stack'},{id:'frontend',label:'Frontend'},{id:'backend',label:'Backend'}]

function ProjCard({ p }) {
  const ref = useRef()
  const [tilt, setTilt] = useState({ x:0, y:0 })
  const [glow, setGlow] = useState({ x:50, y:50 })
  const [ripples, setRipples] = useState([])
  const on = useRef(false)

  const onMove = e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height
    setTilt({ x:(y-.5)*10, y:(x-.5)*-10 }); setGlow({ x:x*100, y:y*100 }); on.current=true
  }
  const onLeave = () => { setTilt({ x:0, y:0 }); on.current=false }
  const onClick = e => {
    const r = e.currentTarget.getBoundingClientRect()
    const id = Date.now()
    setRipples(rs => [...rs,{id,x:e.clientX-r.left,y:e.clientY-r.top}])
    setTimeout(()=>setRipples(rs=>rs.filter(r=>r.id!==id)),600)
  }

  return (
    <div ref={ref} className="pc" onClick={onClick} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transform:`perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: on.current?'transform .1s linear':'transform .55s var(--spring), box-shadow .35s, border-color .35s' }}>
      <div className="pc-glow" style={{ background:`radial-gradient(circle at ${glow.x}% ${glow.y}%,rgba(21,96,242,.18) 0%,transparent 60%)`, opacity: on.current?1:0 }}/>
      {ripples.map(r=><span key={r.id} className="pc-ripple" style={{left:r.x,top:r.y}}/>)}
      {p.featured && <div className="pc-feat">✦ Featured</div>}
      <div className="pc-year">{p.year}</div>
      <div className="pc-thumb">
        <div className="pct-bg" style={{background:p.gradient}}/>
        <div className="pct-noise"/>
        <div className="pct-grid"/>
        <span className="pct-emoji">{p.emoji}</span>
        <div className="pct-hover">
          <a href={p.live} className="pctb" target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="13" height="13"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>Demo
          </a>
          <a href={p.src} className="pctb pctb-g" target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>
            <img src={svgGH} alt="" style={{width:13,height:13,filter:'invert(1)'}}/>Code
          </a>
        </div>
      </div>
      <div className="pc-body">
        <div className="pc-tags">{p.tags.map(t=><span key={t} className="pc-tag">{ICONS[t]&&<img src={ICONS[t]} alt={t}/>}{t}</span>)}</div>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="pc-links">
          <a href={p.live} target="_blank" rel="noreferrer">Live Demo →</a>
          <a href={p.src} target="_blank" rel="noreferrer"><img src={svgGH} alt="" style={{width:13,height:13,filter:'invert(.5)'}}/>Source</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = filter==='all' ? PROJECTS : PROJECTS.filter(p=>p.cat===filter)
  return (
    <section id="projects" className="projects">
      <div className="proj-wrap">
        <div className="sec-hdr sec-hdr-center rv">
          <div className="section-badge">Showcase</div>
          <h2 className="section-title">Featured <em>Creations</em></h2>
          <p className="section-sub">Selected high-impact digital solutions built for scalability and performance.</p>
        </div>
        <div className="proj-filters rv">
          {FILTERS.map(f=>(
            <button key={f.id} className={`pf${filter===f.id?' on':''}`} onClick={()=>setFilter(f.id)}>
              {f.label}
              <span className="pf-n">{f.id==='all'?PROJECTS.length:PROJECTS.filter(p=>p.cat===f.id).length}</span>
            </button>
          ))}
        </div>
        <div className="proj-grid">{visible.map((p,i)=><ProjCard key={p.title} p={p} i={i}/>)}</div>
        <div className="proj-more rv">
          <a href="https://github.com/fadi-medkour" className="btn-ghost" target="_blank" rel="noreferrer">
            <img src={svgGH} alt="" style={{width:17,height:17,filter:'invert(.7)'}}/>
            Explore Full Archive on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
