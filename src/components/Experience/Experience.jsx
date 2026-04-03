import './Experience.css'

const TIMELINE = [
  {
    period:   '2024 — Present',
    title:    'Senior Full Stack Developer',
    company:  'Freelance & Independent Projects',
    bullets:  [
      'Built production-grade full-stack applications with React on the frontend and Node.js on the backend.',
      'Focused on performance, security and scalable architecture across all projects.',
      'Delivered responsive UIs and robust REST APIs for clients across various industries.',
      'Maintained clean, well-documented codebases following SOLID principles.',
    ],
  },
  {
    period:   '2023 — 2024',
    title:    'Full Stack Developer',
    company:  'Personal & Academic Projects',
    bullets:  [
      'Developed multiple full-stack projects spanning frontend and backend layers.',
      'Built real-time chat apps, e-commerce platforms, and admin dashboards.',
      'Continuously adopted new technologies and best practices in system design.',
      'Collaborated with peers using Git workflows and Agile/Scrum methodology.',
    ],
  },
  {
    period:   '2022 — 2023',
    title:    'Frontend Developer',
    company:  'Early Career Stage',
    bullets:  [
      'Specialised in frontend development with HTML5, CSS3, JavaScript and React.',
      'Built a strong foundation in UX/UI design and responsive interface development.',
      'Explored component architecture, state management and animation libraries.',
    ],
  },
  {
    period:   'Ongoing',
    title:    'Computer Science Student',
    company:  'University — Algeria 🇩🇿',
    bullets:  [
      'Academic study deepens theoretical understanding of algorithms and data structures.',
      'Knowledge directly applied in real-world full-stack projects.',
      'Active contributor to local developer community and open-source projects.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="exp-wrap">
        <div className="sec-hdr rv">
          <div className="section-label">Professional Journey</div>
          <h2 className="section-title">My <em>Experience</em></h2>
          <p className="section-sub">My path through the world of software development.</p>
        </div>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div className="tl-item rv" style={{ '--i': i }} key={i}>
              {/* Dot & line */}
              <div className="tl-left">
                <div className="tl-dot">
                  <div className="tl-dot-inner" />
                </div>
                {i < TIMELINE.length - 1 && <div className="tl-line" />}
              </div>

              {/* Content */}
              <div className="tl-content">
                <div className="tl-period">{item.period}</div>
                <div className="tl-card">
                  <h3 className="tl-title">{item.title}</h3>
                  <div className="tl-company">{item.company}</div>
                  <ul className="tl-bullets">
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
