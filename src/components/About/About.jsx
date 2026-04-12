import { useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import { useMouseTilt } from '../../hooks/useMouseTilt.js'
import profileImg from '../../assets/profile.jpeg'
import svgReact from '../../assets/svg/react.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgJS    from '../../assets/svg/js.svg'
import svgMongo from '../../assets/svg/mongodb.svg'
import svgTW    from '../../assets/svg/tailwind.svg'
import './About.css'

const CHIPS_EN = [{e:'🎓',l:'CS Student'},{e:'🎨',l:'Illustrator'},{e:'⚡',l:'Agile / Git'},{e:'💡',l:'Clean Code'},{e:'🇩🇿',l:'Algeria'}]
const CHIPS_AR = [{e:'🎓',l:'طالب جامعي'},{e:'🎨',l:'إلستريتور'},{e:'⚡',l:'Agile / Git'},{e:'💡',l:'كود نظيف'},{e:'🇩🇿',l:'الجزائر'}]

/* Tech stack with no percentages — just name + icon */
const STACK = [
  { src: svgReact, name: 'React.js',   color: '#00d8ff' },
  { src: svgNode,  name: 'Node.js',    color: '#339933' },
  { src: svgJS,    name: 'JavaScript', color: '#f5de19' },
  { src: svgMongo, name: 'MongoDB',    color: '#58aa50' },
  { src: svgTW,    name: 'Tailwind',   color: '#44a8b3' },
]

export default function About() {
  const { t, lang } = useContext(LangCtx)
  const chips = lang === 'ar' ? CHIPS_AR : CHIPS_EN
  const { ref, style, onMouseMove, onMouseLeave } = useMouseTilt(5)

  const facts = [
    ['3+',   lang==='ar' ? 'سنوات خبرة' : 'Yrs Exp'],
    ['20+',  lang==='ar' ? 'مشروع'      : 'Projects'],
    ['12+',  lang==='ar' ? 'تقنية'      : 'Tech'],
    ['100%', lang==='ar' ? 'تفانٍ'      : 'Dedication'],
  ]

  return (
    <section id="about" className="about">
      <div className="about-wrap">

        {/* ── Photo column ── */}
        <div className="about-photo rv-left">
          <div className="ab-frame-tl" /><div className="ab-frame-br" />

          {/* Clean 3D tilt photo */}
          <div
            ref={ref} style={style}
            className="ab-photo-box"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <img src={profileImg} alt="Fadi Medkour" className="ab-photo" />
          </div>

          {/* Facts grid — clean, no percentages */}
          <div className="ab-facts">
            {facts.map(([num, label]) => (
              <div key={num+label} className="ab-fact">
                <span className="af-num">{num}</span>
                <span className="af-lbl">{label}</span>
              </div>
            ))}
          </div>

          {/* Tech stack — icon + name only, NO percentages */}
          <div className="ab-stack">
            <div className="ab-stack-label">{lang === 'ar' ? 'حزمة التقنيات' : 'Tech Stack'}</div>
            <div className="ab-stack-icons">
              {STACK.map(({ src, name, color }, i) => (
                <div className="ab-si" key={name} style={{ '--i': i, '--c': color }} title={name}>
                  <img src={src} alt={name} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Text column ── */}
        <div className="about-text">
          <div className="section-badge rv" style={{'--i':0}}>{t.about.badge}</div>
          <h2 className="section-title rv" style={{'--i':1}}>
            {t.about.title} <em>{t.about.em}</em>
          </h2>

          <p className="ab-para rv" style={{'--i':2}}>{t.about.p1}</p>
          <p className="ab-para rv" style={{'--i':3}}>{t.about.p2}</p>
          <p className="ab-para rv" style={{'--i':4}}>{t.about.p3}</p>

          <div className="ab-chips rv" style={{'--i':5}}>
            {chips.map(({ e, l }) => (
              <span className="ab-chip" key={l}><span>{e}</span>{l}</span>
            ))}
          </div>

          <div className="ab-actions rv" style={{'--i':6}}>
            <a href="#contact" className="btn-primary">{t.about.cta1}</a>
            <a href="#projects" className="btn-ghost">{t.about.cta2}</a>
          </div>
        </div>

      </div>
    </section>
  )
}
