import { useState } from 'react'
import profileImg from '../../assets/profile.jpeg'
import svgReact   from '../../assets/svg/react.svg'
import svgNode    from '../../assets/svg/nodejs.svg'
import svgFigma   from '../../assets/svg/figma.svg'
import svgGit     from '../../assets/svg/git.svg'
import './About.css'

const PILLS=[{src:svgReact,name:'React.js'},{src:svgNode,name:'Node.js'},{src:svgFigma,name:'Figma'},{src:svgGit,name:'Git'}]
const FACTS=[{num:'3+',label:'Years Experience'},{num:'20+',label:'Projects Built'},{num:'12+',label:'Technologies'},{num:'100%',label:'Dedication'}]
const CHIPS=[{e:'🎓',l:'CS Student'},{e:'🎨',l:'Illustrator'},{e:'⚡',l:'Git & Agile'},{e:'💡',l:'Clean Code'},{e:'🇩🇿',l:'Algeria'}]

export default function About() {
  const [hovered,setHovered]=useState(null)
  return(
    <section id="about" className="about">
      <div className="about-wrap">
        {/* Left */}
        <div className="about-img rv-left">
          <div className="ab-corner tl"/><div className="ab-corner br"/>
          <div className="ab-img-wrap">
            <img src={profileImg} alt="Fadi Medkour"/>
            <div className="ab-overlay"/>
          </div>
          <div className="ab-status">
            <span className="abs-dot"/><div><div className="abs-live">Live Status</div><strong>Student &amp; Developer</strong></div>
          </div>
          <div className="ab-pills">
            {PILLS.map(({src,name})=>(
              <div key={name} className="ab-pill" onMouseEnter={()=>setHovered(name)} onMouseLeave={()=>setHovered(null)}>
                <img src={src} alt={name}/><span className={hovered===name?'visible':''}>{name}</span>
              </div>
            ))}
          </div>
          {/* Facts grid */}
          <div className="ab-facts">
            {FACTS.map(({num,label})=>(
              <div key={label} className="ab-fact"><span>{num}</span><small>{label}</small></div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="about-text">
          <div className="section-badge rv" style={{'--i':0}}>Discovery</div>
          <h2 className="section-title rv" style={{'--i':1}}>About The <em>Architect</em></h2>
          <p className="ab-para rv" style={{'--i':2}}>I'm <strong>Fadi Medkour</strong>, a dedicated Full-Stack Developer specialising in building responsive, user-centric interfaces with <strong>React</strong> and scalable back-end systems with <strong>Node.js &amp; Express</strong>.</p>
          <p className="ab-para rv" style={{'--i':3}}>Passionate about continuous learning, I stay at the forefront of emerging technologies to deliver scalable, maintainable solutions. Beyond coding, I bring a creative edge through <strong>Adobe Illustrator</strong> — merging technical precision with visual design.</p>
          <p className="ab-para rv" style={{'--i':4}}>I work using <strong>Agile methodologies</strong> and Git, always writing clean, testable code that scales with confidence.</p>
          <div className="ab-chips rv" style={{'--i':5}}>
            {CHIPS.map(({e,l})=><span key={l} className="ab-chip"><span>{e}</span>{l}</span>)}
          </div>
          <div className="ab-actions rv" style={{'--i':6}}>
            <a href="#contact" className="btn-primary">Work With Me</a>
            <a href="#projects" className="btn-ghost">See Projects</a>
          </div>
        </div>
      </div>
    </section>
  )
}
