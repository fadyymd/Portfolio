import { useState, useContext } from 'react'
import { LangCtx } from '../../App.jsx'
import profileImg from '../../assets/profile.jpeg'
import svgReact from '../../assets/svg/react.svg'
import svgNode  from '../../assets/svg/nodejs.svg'
import svgFigma from '../../assets/svg/figma.svg'
import svgGit   from '../../assets/svg/git.svg'
import './About.css'

const PILLS = [{src:svgReact,name:'React.js'},{src:svgNode,name:'Node.js'},{src:svgFigma,name:'Figma'},{src:svgGit,name:'Git'}]
const FACTS = [['3+',''],['20+',''],['12+',''],['100%','']]
const CHIPS_EN = [{e:'🎓',l:'CS Student'},{e:'🎨',l:'Illustrator'},{e:'⚡',l:'Git & Agile'},{e:'💡',l:'Clean Code'},{e:'🇩🇿',l:'Algeria'}]
const CHIPS_AR = [{e:'🎓',l:'طالب علوم حاسوب'},{e:'🎨',l:'إلستريتور'},{e:'⚡',l:'Git & Agile'},{e:'💡',l:'كود نظيف'},{e:'🇩🇿',l:'الجزائر'}]

export default function About() {
  const { t, lang } = useContext(LangCtx)
  const [hovered, setHovered] = useState(null)
  const chips = lang === 'ar' ? CHIPS_AR : CHIPS_EN

  const facts = [
    ['3+', t.about.status ? lang==='ar'?'سنوات':'Yrs' : ''],
    ['20+', lang==='ar'?'مشروع':'Projects'],
    ['12+', lang==='ar'?'تقنية':'Tech'],
    ['100%', lang==='ar'?'تفاني':'Dedication'],
  ]

  return (
    <section id="about" className="about">
      <div className="about-wrap">
        {/* Image */}
        <div className="about-img rv-left">
          <div className="ab-corner tl" /><div className="ab-corner br" />
          <div className="ab-img-wrap">
            <img src={profileImg} alt="Fadi Medkour" />
            <div className="ab-overlay" />
          </div>

          <div className="ab-status">
            <span className="abs-dot" />
            <div>
              <div className="abs-live">{lang === 'ar' ? 'الحالة' : 'Live Status'}</div>
              <strong>{t.about.status}</strong>
            </div>
          </div>

          <div className="ab-pills">
            {PILLS.map(({ src, name }) => (
              <div
                key={name}
                className="ab-pill"
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={src} alt={name} />
                <span className={hovered === name ? 'visible' : ''}>{name}</span>
              </div>
            ))}
          </div>

          <div className="ab-facts">
            {facts.map(([num, label]) => (
              <div key={label+num} className="ab-fact">
                <span>{num}</span><small>{label}</small>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
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
