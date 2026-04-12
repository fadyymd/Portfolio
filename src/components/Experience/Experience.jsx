import { useState, useRef, useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import './Experience.css'

const TL_EN = [
  { period:'2024 — Present', title:'Senior Full Stack Developer', company:'Freelance & Independent Projects', tag:'Current', color:'#1463f3', icon:'🚀',
    bullets:['Built production-grade full-stack apps with React frontend and Node.js backend.','Delivered REST APIs, WebSocket real-time features and secure JWT authentication.','Focused on performance, scalability and clean SOLID-principle architecture.','Applied Agile sprints and maintained well-documented codebases.'],
    tech:['React','Node.js','MongoDB','JWT','REST API'] },
  { period:'2023 — 2024', title:'Full Stack Developer', company:'Personal & Academic Projects', tag:'Previous', color:'#8b5cf6', icon:'⚡',
    bullets:['Built real-time chat apps, e-commerce platforms and admin dashboards from scratch.','Adopted new technologies and best practices in system design and architecture.','Collaborated via Git workflows with Agile/Scrum methodology.'],
    tech:['React','Express.js','MySQL','Tailwind CSS'] },
  { period:'2022 — 2023', title:'Frontend Developer', company:'Early Career Stage', tag:'Foundation', color:'#10b981', icon:'🎨',
    bullets:['Specialised in HTML5, CSS3, JavaScript and React component architecture.','Built responsive, animated UIs with deep focus on UX and accessibility standards.','Explored state management libraries and animation ecosystems.'],
    tech:['HTML5','CSS3','JavaScript','React'] },
  { period:'Ongoing', title:'Computer Science Student', company:'University — Algeria 🇩🇿', tag:'Academic', color:'#f0b429', icon:'📚',
    bullets:['Deepening knowledge of algorithms, data structures and systems programming.','Applying computer science fundamentals directly in real-world full-stack projects.','Active in local developer community and contributing to open-source.'],
    tech:['Algorithms','Data Structures','OS','Networks'] },
]

const TL_AR = [
  { period:'2024 — حتى الآن', title:'مطوّر Full Stack أول', company:'مشاريع مستقلة وحرة', tag:'حالي', color:'#1463f3', icon:'🚀',
    bullets:['بناء تطبيقات متكاملة باستخدام React وNode.js.','تسليم APIs وWebSockets ومصادقة JWT آمنة.','التركيز على الأداء وقابلية التوسع والمعمارية النظيفة.','تطبيق Agile وصيانة قواعد كود موثقة.'],
    tech:['React','Node.js','MongoDB','JWT','REST API'] },
  { period:'2023 — 2024', title:'مطوّر Full Stack', company:'مشاريع شخصية وأكاديمية', tag:'سابق', color:'#8b5cf6', icon:'⚡',
    bullets:['بناء تطبيقات دردشة ومتاجر ولوحات تحكم من الصفر.','تبني تقنيات جديدة وأفضل الممارسات في تصميم الأنظمة.','التعاون باستخدام Git وAgile/Scrum.'],
    tech:['React','Express.js','MySQL','Tailwind CSS'] },
  { period:'2022 — 2023', title:'مطوّر واجهات أمامية', company:'بداية المسيرة', tag:'الأساس', color:'#10b981', icon:'🎨',
    bullets:['تخصص في HTML5 وCSS3 وJavaScript وReact.','بناء واجهات متجاوبة ومتحركة مع تركيز على UX وإمكانية الوصول.','استكشاف مكتبات إدارة الحالة والأنيميشن.'],
    tech:['HTML5','CSS3','JavaScript','React'] },
  { period:'مستمر', title:'طالب علوم حاسوب', company:'جامعة — الجزائر 🇩🇿', tag:'أكاديمي', color:'#f0b429', icon:'📚',
    bullets:['تعمّق في الخوارزميات وهياكل البيانات وبرمجة الأنظمة.','تطبيق أسس علوم الحاسوب في مشاريع حقيقية.','مساهم في مجتمع المطوّرين المحلي والمصادر المفتوحة.'],
    tech:['خوارزميات','هياكل بيانات','أنظمة تشغيل','شبكات'] },
]

/* Magnetic list item */
function ExpItem({ item, index, active, onClick }) {
  const ref = useRef()
  const [mag, setMag] = useState({ x:0, y:0 })

  const onMove = e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width  - .5) * 8
    const y = ((e.clientY - r.top)  / r.height - .5) * 6
    setMag({ x, y })
  }
  const onLeave = () => setMag({ x:0, y:0 })

  const isActive = active === index
  return (
    <div
      ref={ref}
      className={`exp-item rv${isActive ? ' active' : ''}`}
      style={{
        '--i': index,
        '--c': item.color,
        transform: `translate(${mag.x}px, ${mag.y}px)`,
        transition: mag.x === 0 ? 'transform .5s var(--spring), border-color .3s, box-shadow .3s' : 'transform .1s ease',
      }}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="exp-icon">{item.icon}</div>
      <div className="exp-meta">
        <span className="exp-title">{item.title}</span>
        <span className="exp-period">{item.period}</span>
      </div>
      <svg className="exp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </div>
  )
}

export default function Experience() {
  const { t, lang } = useContext(LangCtx)
  const [expanded, setExpanded] = useState(0)
  const TL = lang === 'ar' ? TL_AR : TL_EN

  return (
    <section id="experience" className="experience">
      <div className="exp-wrap">
        <div className="sec-hdr rv">
          <div className="section-badge">{t.exp.badge}</div>
          <h2 className="section-title">{t.exp.title} <em>{t.exp.em}</em></h2>
          <p className="section-sub">{t.exp.sub}</p>
        </div>

        <div className="exp-layout">
          {/* Magnetic list */}
          <div className="exp-list">
            {TL.map((item, i) => (
              <ExpItem
                key={i} item={item} index={i}
                active={expanded}
                onClick={() => setExpanded(i)}
              />
            ))}
          </div>

          {/* Detail panel */}
          <div className="exp-detail">
            {TL.map((item, i) => (
              <div
                key={i}
                className={`exp-panel${expanded === i ? ' visible' : ''}`}
                style={{ '--c': item.color }}
              >
                <div className="ep-header">
                  <div>
                    <span className="ep-tag" style={{ background:`${item.color}1a`, color:item.color, borderColor:`${item.color}44` }}>
                      {item.tag}
                    </span>
                    <h3>{item.title}</h3>
                    <div className="ep-company">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="13" height="13">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                      </svg>
                      {item.company}
                    </div>
                    <div className="ep-period">{item.period}</div>
                  </div>
                  <div className="ep-num">{String(i+1).padStart(2,'0')}</div>
                </div>

                <ul className="ep-bullets">
                  {item.bullets.map((b, j) => (
                    <li key={j} style={{ '--j': j }}>
                      <span className="ep-dot" style={{ background: item.color, boxShadow:`0 0 6px ${item.color}` }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="ep-tech">
                  {item.tech.map(tc => (
                    <span key={tc} className="ep-chip" style={{ borderColor:`${item.color}44`, color:item.color }}>
                      {tc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
