import { useState, useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import svgHTML from '../../assets/svg/html.svg'
import svgCSS  from '../../assets/svg/css.svg'
import svgJS   from '../../assets/svg/js.svg'
import svgReact from '../../assets/svg/react.svg'
import svgTW   from '../../assets/svg/tailwind.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgMongo from '../../assets/svg/mongodb.svg'
import svgMySQL from '../../assets/svg/mysql.svg'
import svgGit   from '../../assets/svg/git.svg'
import svgGH    from '../../assets/svg/github.svg'
import svgFigma from '../../assets/svg/figma.svg'
import svgAI    from '../../assets/svg/illustrator.svg'
import './Skills.css'

const CATS = [
  { id:'fe', emoji:'🖥️', color:'#1560f0',
    en:{ label:'Frontend', sub:'UI / Interfaces' },
    ar:{ label:'الواجهة الأمامية', sub:'واجهات المستخدم' },
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    skills:[{src:svgHTML,name:'HTML5',lvl:95},{src:svgCSS,name:'CSS3',lvl:90},{src:svgJS,name:'JavaScript',lvl:88},{src:svgReact,name:'React.js',lvl:85},{src:svgTW,name:'Tailwind CSS',lvl:82}] },
  { id:'be', emoji:'⚙️', color:'#7c3aed',
    en:{ label:'Backend', sub:'APIs / Server' },
    ar:{ label:'الخادم', sub:'APIs والسيرفر' },
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    skills:[{src:svgNode,name:'Node.js',lvl:83},{src:null,name:'Express.js',lvl:82},{src:null,name:'REST APIs',lvl:88},{src:null,name:'JWT / Auth',lvl:80}] },
  { id:'db', emoji:'🗄️', color:'#10b981',
    en:{ label:'Database', sub:'Storage / Data' },
    ar:{ label:'قاعدة البيانات', sub:'التخزين والبيانات' },
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    skills:[{src:svgMongo,name:'MongoDB',lvl:80},{src:svgMySQL,name:'MySQL',lvl:75},{src:null,name:'Mongoose ODM',lvl:78},{src:null,name:'SQL / NoSQL',lvl:77}] },
  { id:'tools', emoji:'🛠️', color:'#f0b429',
    en:{ label:'Tools', sub:'Workflow / Design' },
    ar:{ label:'الأدوات', sub:'سير العمل والتصميم' },
    icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
    skills:[{src:svgGit,name:'Git',lvl:85},{src:svgGH,name:'GitHub',lvl:85},{src:svgFigma,name:'Figma',lvl:75},{src:svgAI,name:'Illustrator',lvl:70},{src:null,name:'Agile/Scrum',lvl:80}] },
]

function Bar({ name, src, lvl, color, i, animate }) {
  return (
    <div className="bar-row" style={{'--i':i}}>
      <div className="bar-meta">
        {src ? <img src={src} alt={name} className="bar-icon"/>
              : <div className="bar-icon-ph" style={{background:`${color}18`}}><span style={{color,fontSize:'.6rem',fontWeight:700}}>{'</>'}</span></div>}
        <span className="bar-name">{name}</span>
        <span className="bar-pct" style={{color}}>{lvl}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{'--w':animate?lvl+'%':'0%','--c':color,'--delay':`${i*120}ms`}}/>
        <div className="bar-glow" style={{'--w':animate?lvl+'%':'0%','--c':color,'--delay':`${i*120}ms`}}/>
      </div>
    </div>
  )
}

export default function Skills() {
  const { t, lang } = useContext(LangCtx)
  const [active, setActive] = useState('fe')
  const [animate, setAnimate] = useState(true)
  const cat = CATS.find(c => c.id === active)
  const catLabel = cat[lang] || cat.en

  const switchCat = id => {
    if (id === active) return
    setAnimate(false)
    setTimeout(() => { setActive(id); setAnimate(true) }, 60)
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-wrap">
        <div className="sec-hdr rv">
          <div className="section-badge">{t.skills.badge}</div>
          <h2 className="section-title">{t.skills.title} <em>{t.skills.em}</em></h2>
          <p className="section-sub">{t.skills.sub}</p>
        </div>
        <div className="sk-tabs rv">
          {CATS.map(c => {
            const lbl = c[lang] || c.en
            return (
              <button key={c.id} className={`sk-tab${active===c.id?' active':''}`} style={{'--c':c.color}} onClick={()=>switchCat(c.id)}>
                <span className="sk-tab-emoji">{c.emoji}</span>
                <span>{lbl.label}</span>
                {active===c.id&&<span className="sk-tab-bar"/>}
              </button>
            )
          })}
        </div>
        <div className="sk-content">
          <div className="sk-icons rv-left">
            <div className="sk-icons-header">
              <span className="sk-icons-emoji">{cat.emoji}</span>
              <div><h3>{catLabel.label}</h3><p>{catLabel.sub}</p></div>
            </div>
            <div className="sk-icon-grid">
              {cat.skills.filter(s=>s.src).map((s,i)=>(
                <div className="sk-icon-card" key={s.name} style={{'--i':i,'--c':cat.color}}>
                  <img src={s.src} alt={s.name}/>
                  <span>{s.name}</span>
                  <div className="sk-icon-lvl" style={{background:`${cat.color}22`,color:cat.color}}>{s.lvl}%</div>
                </div>
              ))}
            </div>
            <div className="sk-text-skills">
              {cat.skills.filter(s=>!s.src).map(s=>(
                <span key={s.name} className="sk-text-chip" style={{borderColor:`${cat.color}33`,color:cat.color}}>
                  {s.name} <strong>{s.lvl}%</strong>
                </span>
              ))}
            </div>
          </div>
          <div className="sk-bars rv-right">
            <h4>{t.skills.prof}</h4>
            {cat.skills.map((s,i)=><Bar key={s.name} {...s} color={cat.color} i={i} animate={animate}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}
