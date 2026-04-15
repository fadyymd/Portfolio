import { useEffect } from 'react'
import svgGH from '../../assets/svg/github.svg'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const fn = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [onClose])

  if (!project) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Header */}
        <div className="modal-thumb" style={{ background: project.gradient }}>
          <div className="mt-noise" />
          <div className="mt-grid" />
          <span className="mt-emoji">{project.emoji}</span>
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <div className="mm-left">
              <div className="mm-tags">
                {project.tags.map(t => <span key={t} className="mm-tag">{t}</span>)}
              </div>
              <h2>{project.title}</h2>
              <p className="mm-desc">{project.longDesc || project.desc}</p>
            </div>
          </div>

          {project.features && (
            <div className="modal-features">
              <h4>Key Features</h4>
              <ul>
                {project.features.map((f,i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-actions">
            <a href={project.live} className="btn-primary" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" width="14" height="14">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
            <a href={project.src} className="btn-ghost" target="_blank" rel="noreferrer">
              <img src={svgGH} alt="" style={{width:16,height:16,filter:'invert(.7)'}}/>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
