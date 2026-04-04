import svgGH from '../../assets/svg/github-svgrepo-com.svg'
import svgHTML from '../../assets/svg/html-5-svgrepo-com.svg'
import svgCSS  from '../../assets/svg/css3-02-svgrepo-com.svg'
import svgReact from '../../assets/svg/react-javascript-js-framework-facebook-svgrepo-com.svg'
import svgNode  from '../../assets/svg/node-js-svgrepo-com.svg'
import svgJS    from '../../assets/svg/js-official-svgrepo-com.svg'
import './Footer.css'

const NAV = ['About','Experience','Skills','Projects','Contact']

const BUILT_WITH = [
  { src: svgReact, name: 'React' },
  { src: svgNode,  name: 'Node'  },
  { src: svgJS,    name: 'JS'    },
  { src: svgHTML,  name: 'HTML'  },
  { src: svgCSS,   name: 'CSS'   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top grid */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="f-logo">
              <span className="f-logo-f">F</span>adi<span className="f-logo-dot">.</span>dev
            </div>
            <p>Professional Full Stack Developer dedicated to crafting high-performance digital experiences with cutting-edge technology.</p>
            <div className="f-built">
              <span>Built with</span>
              <div className="f-built-icons">
                {BUILT_WITH.map(({ src, name }) => (
                  <img key={name} src={src} alt={name} title={name} />
                ))}
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {NAV.map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="mailto:fadi.medkour@email.com">fadi.medkour@email.com</a>
            <a href="https://linkedin.com/in/fadi-medkour" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/fadi-medkour" target="_blank" rel="noreferrer">GitHub</a>
            <span className="footer-flag">🇩🇿 Algiers, Algeria</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {year} Fadi Medkour. All rights reserved. Made with ❤️ in Algeria</p>
          <div className="f-socials">
            <a href="https://github.com/fadi-medkour" className="f-social" title="GitHub" target="_blank" rel="noreferrer">
              <img src={svgGH} alt="GitHub" style={{ width:15, height:15, filter:'invert(.7)' }} />
            </a>
            <a href="https://linkedin.com/in/fadi-medkour" className="f-social" title="LinkedIn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="#0A66C2" width="15" height="15"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:fadi.medkour@email.com" className="f-social" title="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
            </a>
            <a href="#hero" className="f-social" title="Back to top">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
