import profileImg from '../../assets/profile.jpeg'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-wrap">

        {/* Left — image */}
        <div className="about-img-col rv">
          <div className="ab-corner tl" />
          <div className="ab-corner br" />
          <img src={profileImg} alt="Fadi Medkour" className="ab-img" />

          {/* Status badge */}
          <div className="ab-status">
            <span className="ab-status-dot" />
            <div>
              <div className="ab-status-live">Live Status</div>
              <strong>Student &amp; Developer</strong>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div className="about-text-col">
          <div className="section-label rv" style={{ '--i': 0 }}>Discovery</div>
          <h2 className="section-title rv" style={{ '--i': 1 }}>
            About The <em>Architect</em>
          </h2>
          <p className="ab-para rv" style={{ '--i': 2 }}>
            I'm <strong>Fadi Medkour</strong>, a dedicated Full-Stack Developer specialising in
            TypeScript and crafting responsive, user-centric interfaces with <strong>React</strong>.
            I build full-stack websites using <strong>Node.js &amp; Express</strong> backed by
            robust database layers seamlessly integrated into every application.
          </p>
          <p className="ab-para rv" style={{ '--i': 3 }}>
            Passionate about continuous learning, I stay at the forefront of emerging technologies
            to deliver scalable, maintainable solutions that exceed expectations. Beyond coding, I
            bring a creative edge through <strong>Adobe Illustrator</strong> — merging technical
            precision with visual design.
          </p>
          <p className="ab-para rv" style={{ '--i': 4 }}>
            I work using <strong>Agile methodologies</strong> and Git, always writing clean,
            testable, and maintainable code that scales.
          </p>

          {/* Chips */}
          <div className="ab-chips rv" style={{ '--i': 5 }}>
            {[
              { icon: '🎓', label: 'University Student' },
              { icon: '🎨', label: 'Adobe Illustrator' },
              { icon: '⚡', label: 'Git & Agile' },
              { icon: '💡', label: 'Clean Code' },
            ].map(({ icon, label }) => (
              <span className="ab-chip" key={label}>
                <span>{icon}</span> {label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
