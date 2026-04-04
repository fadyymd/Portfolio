import profileImg  from '../../assets/profile.jpeg'
import svgReact    from '../../assets/svg/react-javascript-js-framework-facebook-svgrepo-com.svg'
import svgNode     from '../../assets/svg/node-js-svgrepo-com.svg'
import svgFigma    from '../../assets/svg/figma-svgrepo-com.svg'
import './About.css'

const CHIPS = [
  { emoji:'🎓', label:'University Student'  },
  { emoji:'🎨', label:'Adobe Illustrator'   },
  { emoji:'⚡', label:'Git & Agile'         },
  { emoji:'💡', label:'Clean Code'          },
  { emoji:'🇩🇿', label:'Algiers, Algeria'   },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-wrap">

        {/* Image side */}
        <div className="about-img rv-left">
          <div className="ab-corner tl"/><div className="ab-corner br"/>
          <img src={profileImg} alt="Fadi Medkour" className="ab-img"/>

          <div className="ab-status">
            <span className="ab-dot"/>
            <div>
              <div className="ab-live">Live Status</div>
              <strong>Student &amp; Developer</strong>
            </div>
          </div>

          {/* Tech stack mini pills */}
          <div className="ab-tech">
            <div className="ab-tech-item">
              <img src={svgReact} alt="React"/><span>React.js</span>
            </div>
            <div className="ab-tech-item">
              <img src={svgNode} alt="Node"/><span>Node.js</span>
            </div>
            <div className="ab-tech-item">
              <img src={svgFigma} alt="Figma"/><span>Figma</span>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="about-text">
          <div className="section-badge rv" style={{'--i':0}}>Discovery</div>
          <h2 className="section-title rv" style={{'--i':1}}>
            About The <em>Architect</em>
          </h2>

          <p className="ab-para rv" style={{'--i':2}}>
            I'm <strong>Fadi Medkour</strong>, a dedicated Full‑Stack Developer specialising in
            TypeScript and crafting responsive, user‑centric interfaces with <strong>React</strong>.
            I build full‑stack apps using <strong>Node.js &amp; Express</strong> backed by
            robust MongoDB and MySQL databases seamlessly integrated into every project.
          </p>
          <p className="ab-para rv" style={{'--i':3}}>
            Passionate about continuous learning, I stay at the forefront of emerging technologies
            to deliver scalable, maintainable solutions. Beyond coding, I bring a creative edge
            through <strong>Adobe Illustrator</strong> — merging technical precision with visual design.
          </p>
          <p className="ab-para rv" style={{'--i':4}}>
            I work using <strong>Agile methodologies</strong> and Git, always writing clean,
            testable, and maintainable code that scales with confidence.
          </p>

          {/* Chips */}
          <div className="ab-chips rv" style={{'--i':5}}>
            {CHIPS.map(({emoji,label}) => (
              <span className="ab-chip" key={label}>
                <span>{emoji}</span>{label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="ab-actions rv" style={{'--i':6}}>
            <a href="#contact" className="btn-primary">
              Work With Me
            </a>
            <a href="#projects" className="btn-ghost">
              See My Work
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
