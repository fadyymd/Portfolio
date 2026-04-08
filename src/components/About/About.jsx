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

const SKILLS_EN = [
  { name:'React.js',    pct:85, color:'#00d8ff', src:svgReact },
  { name:'Node.js',     pct:83, color:'#339933', src:svgNode  },
  { name:'JavaScript',  pct:88, color:'#f5de19', src:svgJS    },
  { name:'MongoDB',     pct:80, color:'#58aa50', src:svgMongo },
  { name:'Tailwind',    pct:82, color:'#44a8b3', src:svgTW    },
]

export default function About() {
  const { t, lang } = useContext(LangCtx)
  const chips = lang === 'ar' ? CHIPS_AR : CHIPS_EN
  const { ref, style, onMouseMove, onMouseLeave } = useMouseTilt(5)

  const facts = [
    ['3+',   lang==='ar'?'سنوات خبرة':'Years Exp'],
    ['20+',  lang==='ar'?'مشروع':'Projects'],
    ['12+',  lang==='ar'?'تقنية':'Technologies'],
    ['100%', lang==='ar'?'تفانٍ':'Dedication'],
  ]

  return (
    <section id="about" className="about">
      <div className="about-wrap">

        {/* ── Left: photo — clean, no overlays ── */}
        <div className="about-photo rv-left">
          {/* Frame corners */}
          <div className="ab-frame-tl" />
          <div className="ab-frame-br" />

          {/* Clean photo with tilt */}
          <div
            ref={ref} style={style}
            className="ab-photo-box"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <img src={profileImg} alt="Fadi Medkour" className="ab-photo" />
          </div>

          {/* Facts grid — BELOW photo, not on it */}
          <div className="ab-facts">
            {facts.map(([num, label]) => (
              <div key={num+label} className="ab-fact">
                <span className="af-num">{num}</span>
                <span className="af-lbl">{label}</span>
              </div>
            ))}
          </div>

          {/* Skill bars — next to photo in column */}
          <div className="ab-mini-skills">
            {SKILLS_EN.map(({ name, pct, color, src }, i) => (
              <div key={name} className="ab-skill-row rv" style={{'--i':i}}>
                <img src={src} alt={name} className="abs-icon" />
                <div className="abs-bar-wrap">
                  <div className="abs-bar" style={{'--w':pct+'%','--c':color}} />
                </div>
                <span className="abs-pct" style={{color}}>{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: text ── */}
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
