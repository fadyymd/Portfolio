import { useState, useRef } from 'react'
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
  { id:'fe', emoji:'🖥️', label:'Frontend', sub:'UI / Interfaces', color:'#1560f2',
    desc:'Building pixel-perfect, responsive interfaces with modern frameworks and design systems.',
    skills:[{src:svgHTML,name:'HTML5',tag:'Markup'},{src:svgCSS,name:'CSS3',tag:'Styling'},{src:svgJS,name:'JavaScript',tag:'Language'},{src:svgReact,name:'React.js',tag:'Framework'},{src:svgTW,name:'Tailwind',tag:'UI Kit'}] },
  { id:'be', emoji:'⚙️', label:'Backend', sub:'APIs / Server', color:'#8b5cf6',
    desc:'Designing scalable server-side systems, REST APIs, WebSockets, and authentication flows.',
    skills:[{src:svgNode,name:'Node.js',tag:'Runtime'},{src:null,name:'Express.js',tag:'Framework'},{src:null,name:'REST APIs',tag:'Protocol'},{src:null,name:'JWT / Auth',tag:'Security'}] },
  { id:'db', emoji:'🗄️', label:'Database', sub:'Storage / Data', color:'#10b981',
    desc:'Managing data with SQL and NoSQL solutions, designing schemas and optimising queries.',
    skills:[{src:svgMongo,name:'MongoDB',tag:'NoSQL'},{src:svgMySQL,name:'MySQL',tag:'SQL'},{src:null,name:'Mongoose',tag:'ODM'},{src:null,name:'SQL / NoSQL',tag:'Paradigm'}] },
  { id:'tools', emoji:'🛠️', label:'Tools', sub:'Workflow / Design', color:'#f0b429',
    desc:'End-to-end workflow tools from version control to UI design and project management.',
    skills:[{src:svgGit,name:'Git',tag:'VCS'},{src:svgGH,name:'GitHub',tag:'Hosting'},{src:svgFigma,name:'Figma',tag:'Design'},{src:svgAI,name:'Illustrator',tag:'Creative'},{src:null,name:'Agile/Scrum',tag:'Method'}] },
]

function SkillCard({ skill, color, idx }) {
  const ref = useRef()
  const [tilt, setTilt] = useState({ x:0, y:0 })
  const [glow, setGlow] = useState({ x:50, y:50 })
  const [on,   setOn]   = useState(false)
  const onMove = e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX-r.left)/r.width, y = (e.clientY-r.top)/r.height
    setTilt({ x:(y-.5)*14, y:(x-.5)*-14 }); setGlow({ x:x*100, y:y*100 }); setOn(true)
  }
  const onLeave = () => { setTilt({ x:0, y:0 }); setOn(false) }
  return (
    <div ref={ref} className={`sk-card${on?' on':''}`}
      style={{ '--c':color, '--i':idx, transform:`perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: on?'transform .1s linear':'transform .5s var(--spring)' }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="skc-glow" style={{ background:`radial-gradient(circle at ${glow.x}% ${glow.y}%,${color}20 0%,transparent 60%)`, opacity:on?1:0 }}/>
      <div className="skc-top">
        {skill.src ? <img src={skill.src} alt={skill.name} className="skc-img"/>
          : <div className="skc-ph" style={{ background:`${color}16`,color }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>}
        <span className="skc-tag" style={{ background:`${color}14`,color }}>{skill.tag}</span>
      </div>
      <span className="skc-name">{skill.name}</span>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('fe')
  const [fading, setFading] = useState(false)
  const cat = CATS.find(c => c.id === active)

  const switchCat = id => {
    if (id === active) return
    setFading(true)
    setTimeout(() => { setActive(id); setFading(false) }, 180)
  }

  return (
    <section id="skills" className="skills">
      <div className="sk-wrap">
        <div className="sec-hdr rv">
          <div className="section-badge">Inventory</div>
          <h2 className="section-title">The <em>Tech Stack</em></h2>
          <p className="section-sub">Tools and technologies I use to craft exceptional digital products.</p>
        </div>

        <div className="sk-tabs rv">
          {CATS.map(c => (
            <button key={c.id} className={`sk-tab${active===c.id?' active':''}`} style={{ '--c':c.color }} onClick={() => switchCat(c.id)}>
              <span className="skt-emoji">{c.emoji}</span>
              <span>{c.label}</span>
              <span className="skt-count">{c.skills.length}</span>
              {active===c.id && <span className="skt-bar"/>}
            </button>
          ))}
        </div>

        <div className={`sk-body${fading?' fading':''}`}>
          <div className="sk-left rv-left">
            <div className="sk-desc" style={{ '--c':cat.color }}>
              <div className="skd-icon">{cat.emoji}</div>
              <div>
                <h3>{cat.label} <span style={{color:cat.color}}>/ {cat.sub}</span></h3>
                <p>{cat.desc}</p>
              </div>
            </div>
            <div className="sk-grid">
              {cat.skills.map((sk, i) => <SkillCard key={sk.name} skill={sk} color={cat.color} idx={i} />)}
            </div>
          </div>

          <div className="sk-right rv-right">
            <h4 className="skr-title">Technologies</h4>
            {cat.skills.map((sk, i) => (
              <div key={sk.name} className="sk-row" style={{ '--i':i, '--c':cat.color }}>
                <div className="skr-left">
                  {sk.src ? <img src={sk.src} alt={sk.name} className="skr-ico"/>
                    : <div className="skr-ico-ph" style={{ background:`${cat.color}16`,color:cat.color }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="11" height="11"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>}
                  <div><span className="skr-name">{sk.name}</span><span className="skr-tag">{sk.tag}</span></div>
                </div>
                <div className="skr-line"><div className="skrl-fill"/></div>
                <div className="skr-check" style={{ color:cat.color }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
              </div>
            ))}
            <div className="sk-stat" style={{ '--c':cat.color }}>
              <span style={{ color:cat.color, fontFamily:'var(--ff-d)', fontSize:'2.6rem', fontWeight:800, lineHeight:1 }}>{cat.skills.length}</span>
              <span style={{ fontSize:'.85rem', color:'var(--t2)', lineHeight:1.5 }}>technologies in this category</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
