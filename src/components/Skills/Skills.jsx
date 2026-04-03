import './Skills.css'

/* ── Inline SVG icons ── */
const Icons = {
  HTML:     () => <svg viewBox="0 0 32 32" fill="none"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/><path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/><path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/></svg>,
  CSS:      () => <svg viewBox="0 0 512 512"><path d="M483.111.501l-42.59 461.314-184.524 49.684L71.47 461.815 28.889.501H483.111zM397.29 94.302H111.866l6.885 55.708h269.946l-6.6 55.277-132.07 55.006 4.38 54.453 127.69.414-4.381 72.606-64.058 18.035-.525.146-61.864-15.617-3.754-45.07H132.1l7.511 87.007 116.423 34.429.21.062 115.799-33.802 15.021-172.761H255.831l.323-.14 135.83-58.071L397.29 94.302z" fill="#264de4"/></svg>,
  JS:       () => <svg viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" fill="#f5de19"/><path d="M20.809 23.875a2.866 2.866 0 002.6 1.6c1.09 0 1.787-.545 1.787-1.3 0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964 0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 013.742 2.107L25 18.128A1.789 1.789 0 0023.311 17a1.145 1.145 0 00-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133 0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 01-4.795-2.691zm-9.295.228c.413.733.789 1.353 1.693 1.353.864 0 1.41-.338 1.41-1.653V14.856h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 01-3.947-2.4z" fill="#323330"/></svg>,
  React:    () => <svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="4.5" fill="#00d8ff"/><ellipse cx="32" cy="32" rx="28" ry="10.5" fill="none" stroke="#00d8ff" strokeWidth="2.5"/><ellipse cx="32" cy="32" rx="28" ry="10.5" fill="none" stroke="#00d8ff" strokeWidth="2.5" transform="rotate(60 32 32)"/><ellipse cx="32" cy="32" rx="28" ry="10.5" fill="none" stroke="#00d8ff" strokeWidth="2.5" transform="rotate(120 32 32)"/></svg>,
  Tailwind: () => <svg viewBox="0 0 32 32"><path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9Q11.1 10.9 9 13.7zM2 22.1q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9Q4.1 19.3 2 22.1z" fill="#44a8b3"/></svg>,
  Node:     () => <svg viewBox="0 0 24 24" fill="#339933"><path d="M11.998 0a.944.944 0 00-.47.124L1.23 5.958C.79 6.207.527 6.674.527 7.173v11.665c0 .499.263.965.704 1.215l10.298 5.833c.145.083.306.124.469.124a.94.94 0 00.47-.124l10.297-5.833c.441-.25.704-.716.704-1.215V7.173c0-.499-.263-.965-.704-1.215L12.47.125A.944.944 0 0011.998 0z"/></svg>,
  Express:  () => <svg viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  MongoDB:  () => <svg viewBox="0 0 32 32"><path d="M27.5 5.5H18.2L16.1 9.7H4.4V26.5H29.6V5.5zm0 4.2H19.3l1.1-2.1h7.1z" fill="#458248"/><path d="M26.775 31l-.563-.187s.072-2.851-.956-3.05c-.678-.786.1-14 2.567-.112a2.033 2.033 0 00-1 1.142A10.575 10.575 0 0026.775 31z" fill="#9dc39a"/><path d="M27.079 28.247a9.917 9.917 0 003.748-9.919c-1.1-4.864-3.711-6.463-3.992-7.073a7.321 7.321 0 01-.619-1.2l.208 13.552s-.99.393.655 2.64z" fill="#499d4a"/><path d="M25.925 28.427S21.334 25.3 21.6 19.769a11.656 11.656 0 014.139-8.736A1.3 1.3 0 0026.194 10c.286.615.239 9.182.269 10.184C26.58 24.082 26.247 27.691 25.925 28.427z" fill="#58aa50"/></svg>,
  MySQL:    () => <svg viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="8" rx="10" ry="4" stroke="#00758f" strokeWidth="1.5"/><path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="#00758f" strokeWidth="1.5"/><path d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" stroke="#00758f" strokeWidth="1.5"/></svg>,
  Git:      () => <svg viewBox="0 0 32 32" fill="none"><path d="M2.585 17.413a2 2 0 010-2.826L14.587 2.585a2 2 0 012.826 0L29.415 14.587a2 2 0 010 2.826L17.413 29.415a2 2 0 01-2.826 0L2.585 17.413z" fill="#EE513B"/><path d="M12.149 5.062l-1.215 1.215 3.139 3.139a1.875 1.875 0 102.326 1.896v7.679a1.875 1.875 0 102.124 1.086l3-3a1.875 1.875 0 10-1.25-1.76l-2.874 2.874v-6.875a1.875 1.875 0 10-2.601-2.6l-2.649 2.649v-.003l-3.15-3.15 3.15-3.15z" fill="white"/></svg>,
  GitHub:   () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  Figma:    () => <svg viewBox="0 0 24 24"><path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/><path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/><path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/><path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/><path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/></svg>,
  AI:       () => <svg viewBox="0 0 32 32" fill="none"><path d="M2 12.133C2 8.586 2 6.813 2.69 5.458 3.297 4.266 4.266 3.297 5.458 2.69 6.813 2 8.586 2 12.133 2H19.867C23.414 2 25.187 2 26.542 2.69c1.192.607 2.161 1.576 2.768 2.768C30 6.813 30 8.586 30 12.133V19.867C30 23.414 30 25.187 29.31 26.542c-.607 1.192-1.576 2.161-2.768 2.768C25.187 30 23.414 30 19.867 30H12.133C8.586 30 6.813 30 5.458 29.31c-1.192-.607-2.161-1.576-2.768-2.768C2 25.187 2 23.414 2 19.867V12.133z" fill="#330000"/><path d="M15.569 19.596H11.23l-.883 2.813H7.924l3.757-11.135h2.987l4.264 12.39h-2.437l-.926-2.068zm-3.663-2.427h2.868L13.39 12.18l-1.484 4.989zM21.804 12.006a2.038 2.038 0 01-1.562-.504 1.847 1.847 0 01-.465-1.018 1.838 1.838 0 01.477-1.503 1.838 1.838 0 011.588-.507c.451 0 .805.138 1.061.414a1.884 1.884 0 01.502 1.438 1.88 1.88 0 01-.488 1.174 1.88 1.88 0 01-1.113.506zM20.508 22.39V13.18h2.461v9.209H20.508z" fill="#FF9A00"/></svg>,
}

const CATEGORIES = [
  {
    label: 'Frontend',
    sub:   'UI / Interfaces',
    color: '#1563ff',
    icon:  <svg viewBox="0 0 24 24" fill="none" stroke="#1563ff" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    skills: [
      { Icon: Icons.HTML,     name: 'HTML5'      },
      { Icon: Icons.CSS,      name: 'CSS3'       },
      { Icon: Icons.JS,       name: 'JavaScript' },
      { Icon: Icons.React,    name: 'React.js'   },
      { Icon: Icons.Tailwind, name: 'Tailwind'   },
    ],
  },
  {
    label: 'Backend',
    sub:   'APIs / Server',
    color: '#6c3aed',
    icon:  <svg viewBox="0 0 24 24" fill="none" stroke="#6c3aed" strokeWidth="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    skills: [
      { Icon: Icons.Node,    name: 'Node.js'    },
      { Icon: Icons.Express, name: 'Express.js' },
      { Icon: null,          name: 'REST APIs'  },
      { Icon: null,          name: 'JWT / Auth' },
    ],
  },
  {
    label: 'Database',
    sub:   'Storage / Data',
    color: '#059669',
    icon:  <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    skills: [
      { Icon: Icons.MongoDB, name: 'MongoDB'     },
      { Icon: Icons.MySQL,   name: 'MySQL'       },
      { Icon: null,          name: 'Mongoose ODM'},
      { Icon: null,          name: 'SQL / NoSQL' },
    ],
  },
  {
    label: 'Tools & Design',
    sub:   'Workflow / Creative',
    color: '#d97706',
    icon:  <svg viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
    skills: [
      { Icon: Icons.Git,    name: 'Git'          },
      { Icon: Icons.GitHub, name: 'GitHub'       },
      { Icon: Icons.Figma,  name: 'Figma'        },
      { Icon: Icons.AI,     name: 'Illustrator'  },
      { Icon: null,         name: 'Agile/Scrum'  },
    ],
  },
]

function SkillCard({ cat, idx }) {
  return (
    <div className="sk-card rv" style={{ '--i': idx, '--c': cat.color }}>
      <div className="sk-card-bar" />
      <div className="sk-head">
        <div className="sk-icon">{cat.icon}</div>
        <div>
          <h3>{cat.label}</h3>
          <p>{cat.sub}</p>
        </div>
      </div>
      <div className="sk-tags">
        {cat.skills.map(({ Icon, name }) => (
          <span className="sk-tag" key={name}>
            {Icon && <span className="sk-tag-icon"><Icon /></span>}
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-wrap">
        <div className="sec-hdr rv">
          <div className="section-label">Inventory</div>
          <h2 className="section-title">The <em>Tech Stack</em></h2>
          <p className="section-sub">
            Tools and technologies I use to build exceptional digital products — from idea to production.
          </p>
        </div>
        <div className="skills-grid">
          {CATEGORIES.map((cat, i) => (
            <SkillCard cat={cat} idx={i} key={cat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
