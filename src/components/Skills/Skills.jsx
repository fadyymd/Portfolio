import { useState, useEffect, useContext, useRef } from 'react'
import { LangCtx } from '../../App.jsx'
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
    id:'fe', emoji:'🖥️', color:'#1463f3',
    en:{ label:'Frontend', sub:'UI / Interfaces', desc:'Building pixel-perfect, responsive interfaces with modern frameworks and design systems.' },
    ar:{ label:'الواجهة الأمامية', sub:'واجهات المستخدم', desc:'بناء واجهات دقيقة ومتجاوبة مع أحدث الأطر والأنظمة التصميمية.' },
    skills:[
      {src:svgHTML, name:'HTML5',       tag:'Markup'    },
      {src:svgCSS,  name:'CSS3',        tag:'Styling'   },
      {src:svgJS,   name:'JavaScript',  tag:'Language'  },
      {src:svgReact,name:'React.js',    tag:'Framework' },
      {src:svgTW,   name:'Tailwind CSS',tag:'UI Toolkit'},
    ],
  },
  {
    id:'be', emoji:'⚙️', color:'#8b5cf6',
    en:{ label:'Backend', sub:'APIs / Server', desc:'Designing and building scalable server-side systems, REST APIs, and authentication flows.' },
    ar:{ label:'الخادم', sub:'APIs والسيرفر', desc:'تصميم وبناء أنظمة خادم قابلة للتوسع وAPIs و تدفقات المصادقة.' },
    skills:[
      {src:svgNode, name:'Node.js',    tag:'Runtime' },
      {src:null,    name:'Express.js', tag:'Framework'},
      {src:null,    name:'REST APIs',  tag:'Protocol' },
      {src:null,    name:'JWT / Auth', tag:'Security' },
    ],
  },
  {
    id:'db', emoji:'🗄️', color:'#10b981',
    en:{ label:'Database', sub:'Storage / Data', desc:'Managing data with both SQL and NoSQL solutions, designing schemas and optimising queries.' },
    ar:{ label:'قاعدة البيانات', sub:'التخزين والبيانات', desc:'إدارة البيانات بحلول SQL وNoSQL وتصميم المخططات وتحسين الاستعلامات.' },
    skills:[
      {src:svgMongo,name:'MongoDB',      tag:'NoSQL'   },
      {src:svgMySQL,name:'MySQL',        tag:'SQL'     },
      {src:null,    name:'Mongoose ODM', tag:'ORM'     },
      {src:null,    name:'SQL / NoSQL',  tag:'Paradigm'},
    ],
  },
  {
    id:'tools', emoji:'🛠️', color:'#f0b429',
    en:{ label:'Tools', sub:'Workflow / Design', desc:'End-to-end workflow tools from version control to UI design and project management.' },
    ar:{ label:'الأدوات', sub:'سير العمل والتصميم', desc:'أدوات سير العمل الكاملة من التحكم بالإصدار إلى تصميم UI وإدارة المشاريع.' },
    skills:[
      {src:svgGit,  name:'Git',         tag:'VCS'     },
      {src:svgGH,   name:'GitHub',      tag:'Hosting' },
      {src:svgFigma,name:'Figma',       tag:'Design'  },
      {src:svgAI,   name:'Illustrator', tag:'Creative'},
      {src:null,    name:'Agile/Scrum', tag:'Method'  },
    ],
  },
]

/* Tilt card */
function SkillCard({ skill, color, idx }) {
  const ref = useRef()
  const [tilt, setTilt] = useState({ x:0, y:0 })
  const [glow, setGlow] = useState({ x:50, y:50 })
  const [hovered, setHovered] = useState(false)

  const onMove = e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top)  / r.height
    setTilt({ x: (y - .5) * 14, y: (x - .5) * -14 })
    setGlow({ x: x * 100, y: y * 100 })
    setHovered(true)
  }
  const onLeave = () => { setTilt({ x:0, y:0 }); setHovered(false) }

  return (
    <div
      ref={ref}
      className={`sk-card${hovered ? ' hovered' : ''}`}
      style={{
        '--c': color,
        '--i': idx,
        transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? 'transform .1s linear' : 'transform .5s cubic-bezier(.22,1,.36,1)',
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Glow spot */}
      <div
        className="sk-card-glow"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, ${color}20 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      <div className="sk-card-top">
        {skill.src
          ? <img src={skill.src} alt={skill.name} className="sk-card-img" />
          : <div className="sk-card-fallback" style={{ background:`${color}18`, color }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
        }
        <span className="sk-card-tag" style={{ background:`${color}16`, color }}>{skill.tag}</span>
      </div>
      <div className="sk-card-name">{skill.name}</div>
    </div>
  )
}

export default function Skills() {
  const { t, lang } = useContext(LangCtx)
  const [active, setActive] = useState('fe')
  const [entering, setEntering] = useState(false)
  const cat = CATS.find(c => c.id === active)
  const catInfo = cat[lang] || cat.en

  const switchCat = id => {
    if (id === active) return
    setEntering(true)
    setTimeout(() => { setActive(id); setEntering(false) }, 220)
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-wrap">
        <div className="sec-hdr rv">
          <div className="section-badge">{t.skills.badge}</div>
          <h2 className="section-title">{t.skills.title} <em>{t.skills.em}</em></h2>
          <p className="section-sub">{t.skills.sub}</p>
        </div>

        {/* Tab row */}
        <div className="sk-tabs rv">
          {CATS.map(c => {
            const lbl = c[lang] || c.en
            const isActive = active === c.id
            return (
              <button
                key={c.id}
                className={`sk-tab${isActive ? ' active' : ''}`}
                style={{ '--c': c.color }}
                onClick={() => switchCat(c.id)}
              >
                <span className="sk-tab-emoji">{c.emoji}</span>
                <span className="sk-tab-label">{lbl.label}</span>
                <span className="sk-tab-count">{c.skills.length}</span>
                {isActive && <span className="sk-tab-indicator" />}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className={`sk-body${entering ? ' sk-exit' : ' sk-enter'}`}>
          {/* Left: description + cards */}
          <div className="sk-left rv-left">
            <div className="sk-desc-box" style={{ '--c': cat.color }}>
              <div className="sk-desc-icon">{cat.emoji}</div>
              <div>
                <h3>{catInfo.label}</h3>
                <p>{catInfo.desc}</p>
              </div>
            </div>

            <div className="sk-card-grid">
              {cat.skills.map((sk, i) => (
                <SkillCard key={sk.name} skill={sk} color={cat.color} idx={i} />
              ))}
            </div>
          </div>

          {/* Right: tech list with animated lines */}
          <div className="sk-right rv-right">
            <h4 className="sk-right-title">{lang === 'ar' ? 'التقنيات' : 'Technologies'}</h4>
            <div className="sk-tech-list">
              {cat.skills.map((sk, i) => (
                <div
                  key={sk.name}
                  className="sk-tech-row"
                  style={{ '--i': i, '--c': cat.color }}
                >
                  <div className="str-left">
                    {sk.src
                      ? <img src={sk.src} alt={sk.name} className="str-icon" />
                      : <div className="str-icon-ph" style={{ background:`${cat.color}18`, color:cat.color }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12">
                            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                          </svg>
                        </div>
                    }
                    <div>
                      <span className="str-name">{sk.name}</span>
                      <span className="str-tag">{sk.tag}</span>
                    </div>
                  </div>
                  <div className="str-line">
                    <div className="str-line-fill" />
                  </div>
                  <div className="str-check" style={{ color: cat.color }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Category stat */}
            <div className="sk-stat-card" style={{ '--c': cat.color }}>
              <div className="sk-stat-num" style={{ color: cat.color }}>{cat.skills.length}</div>
              <div className="sk-stat-lbl">{lang === 'ar' ? 'تقنية في هذه الفئة' : 'technologies in this category'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
