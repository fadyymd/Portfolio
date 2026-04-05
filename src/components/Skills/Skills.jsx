import { useState, useRef, useEffect } from 'react'
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
  { id:'fe', label:'Frontend', color:'#1560f0', emoji:'🖥️', sub:'UI / Interfaces',
    skills:[{src:svgHTML,name:'HTML5',lvl:95},{src:svgCSS,name:'CSS3',lvl:90},{src:svgJS,name:'JavaScript',lvl:88},{src:svgReact,name:'React.js',lvl:85},{src:svgTW,name:'Tailwind CSS',lvl:82}] },
  { id:'be', label:'Backend', color:'#7c3aed', emoji:'⚙️', sub:'APIs / Server',
    skills:[{src:svgNode,name:'Node.js',lvl:83},{src:null,name:'Express.js',lvl:82},{src:null,name:'REST APIs',lvl:88},{src:null,name:'JWT / Auth',lvl:80}] },
  { id:'db', label:'Database', color:'#10b981', emoji:'🗄️', sub:'Storage / Data',
    skills:[{src:svgMongo,name:'MongoDB',lvl:80},{src:svgMySQL,name:'MySQL',lvl:75},{src:null,name:'Mongoose ODM',lvl:78},{src:null,name:'SQL / NoSQL',lvl:77}] },
  { id:'tools', label:'Tools', color:'#f0b429', emoji:'🛠️', sub:'Workflow / Design',
    skills:[{src:svgGit,name:'Git',lvl:85},{src:svgGH,name:'GitHub',lvl:85},{src:svgFigma,name:'Figma',lvl:75},{src:svgAI,name:'Illustrator',lvl:70},{src:null,name:'Agile/Scrum',lvl:80}] },
]

function Bar({name,src,lvl,color,i,animate}) {
  return(
    <div className="bar-row" style={{'--i':i}}>
      <div className="bar-meta">
        {src ? <img src={src} alt={name} className="bar-icon"/>
              : <div className="bar-icon-ph" style={{background:`${color}18`}}><span style={{color}}>{'</>'}</span></div>}
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
  const [active,setActive]=useState('fe')
  const [animate,setAnimate]=useState(true)
  const cat=CATS.find(c=>c.id===active)

  const switchCat=id=>{
    if(id===active)return
    setAnimate(false)
    setTimeout(()=>{ setActive(id); setAnimate(true) },50)
  }

  return(
    <section id="skills" className="skills">
      <div className="skills-wrap">
        <div className="sec-hdr rv">
          <div className="section-badge">Inventory</div>
          <h2 className="section-title">The <em>Tech Stack</em></h2>
          <p className="section-sub">Tools and technologies I use to craft exceptional digital products — from concept to production deployment.</p>
        </div>

        {/* Tab bar */}
        <div className="sk-tabs rv">
          {CATS.map(c=>(
            <button key={c.id} className={`sk-tab${active===c.id?' active':''}`} style={{'--c':c.color}} onClick={()=>switchCat(c.id)}>
              <span className="sk-tab-emoji">{c.emoji}</span>
              <span>{c.label}</span>
              {active===c.id&&<span className="sk-tab-bar"/>}
            </button>
          ))}
        </div>

        <div className="sk-content">
          {/* Icon cloud */}
          <div className="sk-icons rv-left">
            <div className="sk-icons-header">
              <span className="sk-icons-emoji">{cat.emoji}</span>
              <div>
                <h3>{cat.label}</h3>
                <p>{cat.sub}</p>
              </div>
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
            {/* Also show text-only skills */}
            <div className="sk-text-skills">
              {cat.skills.filter(s=>!s.src).map(s=>(
                <span key={s.name} className="sk-text-chip" style={{borderColor:`${cat.color}33`,color:cat.color}}>
                  {s.name} <strong>{s.lvl}%</strong>
                </span>
              ))}
            </div>
          </div>

          {/* Progress bars */}
          <div className="sk-bars rv-right">
            <h4>Proficiency Levels</h4>
            {cat.skills.map((s,i)=>(
              <Bar key={s.name} {...s} color={cat.color} i={i} animate={animate}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
