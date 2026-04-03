/* ================================================================
   FADI MEDKOUR — PORTFOLIO PRO
   Full React 18 App — SVGs from /src/svg/ embedded inline
================================================================ */
const { useState, useEffect, useRef } = React;

/* ══════════════════════════════════════════
   SVG ICONS — All from /src/svg/ project files
══════════════════════════════════════════ */
/* HTML5 — html-5-svgrepo-com.svg */
const SvgHTML = () => <svg viewBox="0 0 32 32" fill="none"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/><path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/><path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/></svg>;
/* CSS3 — css3-02-svgrepo-com.svg */
const SvgCSS = () => <svg viewBox="0 0 512 512"><path d="M483.111.501l-42.59 461.314-184.524 49.684L71.47 461.815 28.889.501H483.111zM397.29 94.302H111.866l6.885 55.708h269.946l-6.6 55.277-132.07 55.006 4.38 54.453 127.69.414-4.381 72.606-64.058 18.035-.525.146-61.864-15.617-3.754-45.07H132.1l7.511 87.007 116.423 34.429.21.062 115.799-33.802 15.021-172.761H255.831l.323-.14 135.83-58.071L397.29 94.302z" fill="#264de4"/></svg>;
/* JS — js-official-svgrepo-com.svg */
const SvgJS = () => <svg viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" fill="#f5de19"/><path d="M20.809 23.875a2.866 2.866 0 002.6 1.6c1.09 0 1.787-.545 1.787-1.3 0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964 0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 013.742 2.107L25 18.128A1.789 1.789 0 0023.311 17a1.145 1.145 0 00-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133 0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 01-4.795-2.691zm-9.295.228c.413.733.789 1.353 1.693 1.353.864 0 1.41-.338 1.41-1.653V14.856h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 01-3.947-2.4z" fill="#323330"/></svg>;
/* React — react-javascript-js-framework-facebook-svgrepo-com.svg */
const SvgReact = () => <svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="4.5" fill="#00d8ff"/><ellipse cx="32" cy="32" rx="28" ry="10.5" fill="none" stroke="#00d8ff" strokeWidth="2.5"/><ellipse cx="32" cy="32" rx="28" ry="10.5" fill="none" stroke="#00d8ff" strokeWidth="2.5" transform="rotate(60 32 32)"/><ellipse cx="32" cy="32" rx="28" ry="10.5" fill="none" stroke="#00d8ff" strokeWidth="2.5" transform="rotate(120 32 32)"/></svg>;
/* Tailwind — tailwind-svgrepo-com.svg */
const SvgTailwind = () => <svg viewBox="0 0 32 32"><path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9Q11.1 10.9 9 13.7zM2 22.1q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9Q4.1 19.3 2 22.1z" fill="#44a8b3"/></svg>;
/* MongoDB — mongodb-svgrepo-com.svg */
const SvgMongo = () => <svg viewBox="0 0 32 32"><path d="M27.5 5.5H18.2L16.1 9.7H4.4V26.5H29.6V5.5zm0 4.2H19.3l1.1-2.1h7.1z" fill="#458248"/><path d="M26.775 31l-.563-.187s.072-2.851-.956-3.05c-.678-.786.1-14 2.567-.112a2.033 2.033 0 00-1 1.142A10.575 10.575 0 0026.775 31z" fill="#9dc39a"/><path d="M27.079 28.247a9.917 9.917 0 003.748-9.919c-1.1-4.864-3.711-6.463-3.992-7.073a7.321 7.321 0 01-.619-1.2l.208 13.552s-.99.393.655 2.64z" fill="#499d4a"/><path d="M25.925 28.427S21.334 25.3 21.6 19.769a11.656 11.656 0 014.139-8.736A1.3 1.3 0 0026.194 10c.286.615.239 9.182.269 10.184C26.58 24.082 26.247 27.691 25.925 28.427z" fill="#58aa50"/></svg>;
/* MySQL — mysql-svgrepo-com.svg (simplified clean version) */
const SvgMySQL = () => <svg viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="8" rx="10" ry="4" stroke="#00758f" strokeWidth="1.5"/><path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="#00758f" strokeWidth="1.5"/><path d="M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" stroke="#00758f" strokeWidth="1.5"/></svg>;
/* Git — git-svgrepo-com.svg */
const SvgGit = () => <svg viewBox="0 0 32 32" fill="none"><path d="M2.585 17.413a2 2 0 010-2.826L14.587 2.585a2 2 0 012.826 0L29.415 14.587a2 2 0 010 2.826L17.413 29.415a2 2 0 01-2.826 0L2.585 17.413z" fill="#EE513B"/><path d="M12.149 5.062l-1.215 1.215 3.139 3.139a1.875 1.875 0 102.326 1.896v7.679a1.875 1.875 0 102.124 1.086l3-3a1.875 1.875 0 10-1.25-1.76l-2.874 2.874v-6.875a1.875 1.875 0 10-2.601-2.6l-2.649 2.649v-.003l-3.15-3.15 3.15-3.15z" fill="white"/></svg>;
/* GitHub — github-svgrepo-com.svg */
const SvgGitHub = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
/* Figma — figma-svgrepo-com.svg */
const SvgFigma = () => <svg viewBox="0 0 24 24"><path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/><path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/><path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/><path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/><path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/></svg>;
/* Adobe Illustrator — adobe-illustrator-svgrepo-com.svg */
const SvgAI = () => <svg viewBox="0 0 32 32" fill="none"><path d="M2 12.133C2 8.586 2 6.813 2.69 5.458 3.297 4.266 4.266 3.297 5.458 2.69 6.813 2 8.586 2 12.133 2H19.867C23.414 2 25.187 2 26.542 2.69c1.192.607 2.161 1.576 2.768 2.768C30 6.813 30 8.586 30 12.133V19.867C30 23.414 30 25.187 29.31 26.542c-.607 1.192-1.576 2.161-2.768 2.768C25.187 30 23.414 30 19.867 30H12.133C8.586 30 6.813 30 5.458 29.31c-1.192-.607-2.161-1.576-2.768-2.768C2 25.187 2 23.414 2 19.867V12.133z" fill="#330000"/><path d="M15.569 19.596H11.23l-.883 2.813H7.924l3.757-11.135h2.987l4.264 12.39h-2.437l-.926-2.068zm-3.663-2.427h2.868L13.39 12.18l-1.484 4.989zM21.804 12.006a2.038 2.038 0 01-1.562-.504 1.847 1.847 0 01-.465-1.018 1.838 1.838 0 01.477-1.503 1.838 1.838 0 011.588-.507c.451 0 .805.138 1.061.414a1.884 1.884 0 01.502 1.438 1.88 1.88 0 01-.488 1.174 1.88 1.88 0 01-1.113.506zM20.508 22.39V13.18h2.461v9.209H20.508z" fill="#FF9A00"/></svg>;
/* Node.js inline representation */
const SvgNode = () => <svg viewBox="0 0 24 24" fill="#339933"><path d="M11.998 0a.944.944 0 00-.47.124L1.23 5.958C.79 6.207.527 6.674.527 7.173v11.665c0 .499.263.965.704 1.215l10.298 5.833c.145.083.306.124.469.124a.94.94 0 00.47-.124l10.297-5.833c.441-.25.704-.716.704-1.215V7.173c0-.499-.263-.965-.704-1.215L12.47.125A.944.944 0 0011.998 0z"/></svg>;

/* ══════════════════════════════════════════
   HOOKS
══════════════════════════════════════════ */
function useCursorGlow() {
  useEffect(() => {
    const el = document.getElementById('cglow');
    if (!el || window.innerWidth <= 768) { el && el.remove(); return; }
    let rx = 0, ry = 0, tx = 0, ty = 0, id;
    const mv = e => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      rx += (tx - rx) * .1; ry += (ty - ry) * .1;
      el.style.left = rx + 'px'; el.style.top = ry + 'px';
      id = requestAnimationFrame(tick);
    };
    document.addEventListener('mousemove', mv);
    id = requestAnimationFrame(tick);
    return () => { document.removeEventListener('mousemove', mv); cancelAnimationFrame(id); };
  }, []);
}

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    setTimeout(() => document.querySelectorAll('.rv').forEach(el => obs.observe(el)), 120);
    return () => obs.disconnect();
  });
}

function useTypewriter(words) {
  const [text, setText] = useState('');
  const s = useRef({ wi: 0, ci: 0, del: false });
  useEffect(() => {
    let t;
    const run = () => {
      const { wi, ci, del } = s.current;
      const w = words[wi];
      if (!del && ci < w.length) {
        s.current.ci++; setText(w.slice(0, ci + 1)); t = setTimeout(run, 80);
      } else if (!del) {
        t = setTimeout(() => { s.current.del = true; run(); }, 1800);
      } else if (ci > 0) {
        s.current.ci--; setText(w.slice(0, ci - 1)); t = setTimeout(run, 50);
      } else {
        s.current.del = false; s.current.wi = (wi + 1) % words.length; t = setTimeout(run, 100);
      }
    };
    run();
    return () => clearTimeout(t);
  }, []);
  return text;
}

function useCounter(target) {
  const [n, setN] = useState(0);
  const ref = useRef(); const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let v = 0; const step = target / 44;
        const iv = setInterval(() => { v = Math.min(v + step, target); setN(Math.floor(v)); if (v >= target) clearInterval(iv); }, 28);
      }
    }, { threshold: 0.6 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return [n, ref];
}

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50);
      let cur = 'hero';
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [['#about','About'],['#skills','Skills'],['#projects','Projects'],['#experience','Experience']];
  const close = () => setOpen(false);

  return (
    <>
      <div id="cglow"/>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">fadi<span className="dot">_</span>dev</a>
        <div className="nav-links">
          {links.map(([h, l]) => (
            <a key={h} href={h} className={active === h.slice(1) ? 'active' : ''}>{l}</a>
          ))}
          <a href="#contact" className="nav-cta">Hire Me</a>
        </div>
        <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span/><span/><span/>
        </button>
      </nav>
      <div className={`mob-menu${open ? ' open' : ''}`}>
        {links.map(([h, l]) => <a key={h} href={h} onClick={close}>{l}</a>)}
        <a href="#contact" onClick={close} style={{ color: 'var(--bl)', fontWeight: 600 }}>Hire Me →</a>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
function Stat({ target, label }) {
  const [n, ref] = useCounter(target);
  return (
    <div className="h-stat" ref={ref}>
      <span className="h-stat-num">{n}+</span>
      <span className="h-stat-label">{label}</span>
    </div>
  );
}

function Hero() {
  const role = useTypewriter(['Full Stack Dev','React Engineer','Backend Builder','UI Craftsman']);
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-grid"/>
      <div className="orb orb-1"/><div className="orb orb-2"/><div className="orb orb-3"/>
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"/>
            Available for Work · Algiers, DZ
          </div>
          <h1 className="hero-title">
            <span className="line1">Fadi Medkour</span>
            <span className="line2">{role}<span className="type-cursor">|</span></span>
          </h1>
          <p className="hero-desc">
            Senior Full Stack Developer crafting high-performance web applications — from pixel-perfect interfaces to scalable back-end systems. I build with purpose, ship with quality.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-main">
              <svg viewBox="0 0 24 24" fill="#fff" width="16" height="16"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              View My Work
            </a>
            <a href="#contact" className="btn-out">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
              Contact Me
            </a>
          </div>
          <div className="hero-stats">
            <Stat target={3} label="Years Exp."/>
            <div className="h-stat-sep"/>
            <Stat target={20} label="Projects Done"/>
            <div className="h-stat-sep"/>
            <Stat target={12} label="Technologies"/>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <div className="photo-glow"/>
            <div className="photo-inner">
              <img src="src/assets/profile.jpeg" alt="Fadi Medkour"/>
              <div className="photo-overlay"/>
            </div>
            <div className="fc fc-code">
              <div><span className="kw">const</span> <span className="cm">fadi</span> = {'{'}</div>
              <div>&nbsp;&nbsp;<span className="cm">name</span>: <span className="st">"Medkour"</span>,</div>
              <div>&nbsp;&nbsp;<span className="cm">level</span>: <span className="st">"Senior"</span>,</div>
              <div>&nbsp;&nbsp;<span className="cm">stack</span>: <span className="st">"Full"</span></div>
              <div>{'}'}</div>
            </div>
            <div className="fc fc-react">
              <div className="fc-react-icon"><SvgReact/></div>
              <div className="fc-react-text">
                <div className="r1">React.js</div>
                <div className="r2">Component Expert</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        <span>scroll</span>
      </a>
    </section>
  );
}

/* ══════════════════════════════════════════
   ABOUT
══════════════════════════════════════════ */
function About() {
  return (
    <section id="about" className="about">
      <div className="about-wrap">
        <div className="about-img-wrap rv">
          <div className="ab-corner"/><div className="ab-corner2"/><div className="ab-dots"/>
          <img src="src/assets/profile.jpeg" alt="Fadi Medkour"/>
          <div className="ab-badge">
            <div className="ab-badge-status"><span className="ab-badge-dot"/>Live Status</div>
            <strong>Student &amp; Developer</strong>
          </div>
          <div className="ab-chip-wrap">
            <div className="ab-chip"><SvgReact/><span>React.js</span></div>
            <div className="ab-chip"><SvgNode/><span>Node.js</span></div>
            <div className="ab-chip"><SvgFigma/><span>Figma</span></div>
          </div>
        </div>
        <div>
          <div className="section-label rv" style={{'--i':0}}>About Me</div>
          <h2 className="section-title rv" style={{'--i':1}}>Who I Am &amp; <em>What I Do</em></h2>
          <div className="about-text">
            <p className="rv" style={{'--i':2}}>I'm <strong>Fadi Medkour</strong>, a Senior Full Stack Developer with advanced expertise in building modern applications end-to-end. I focus on <strong>performance, scalability and exceptional user experience</strong> across every layer of the stack.</p>
            <p className="rv" style={{'--i':3}}>On the <strong>frontend</strong>, I craft fast, interactive UIs with HTML, CSS, JavaScript and React. On the <strong>backend</strong>, I build robust and secure APIs with Node.js, backed by SQL and NoSQL databases designed to scale.</p>
            <p className="rv" style={{'--i':4}}>Beyond coding, I bring a creative edge through <strong>Adobe Illustrator</strong> — merging technical precision with visual design. I work using Agile methodologies and Git, always writing clean, maintainable code.</p>
          </div>
          <div className="about-chips rv" style={{'--i':5}}>
            <span className="chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="2" width="14" height="14"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              University Student
            </span>
            <span className="chip"><SvgAI/>Adobe Illustrator</span>
            <span className="chip"><SvgGit/>Git &amp; Agile</span>
            <span className="chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="2" width="14" height="14"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              Clean Code
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SKILLS
══════════════════════════════════════════ */
const SKS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: 'Frontend', sub: 'UI / Interfaces',
    tags: [
      { ic: <SvgHTML/>, l: 'HTML5' }, { ic: <SvgCSS/>, l: 'CSS3' },
      { ic: <SvgJS/>, l: 'JavaScript' }, { ic: <SvgReact/>, l: 'React.js' },
      { ic: <SvgTailwind/>, l: 'Tailwind CSS' },
    ]
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    title: 'Backend', sub: 'APIs / Server',
    tags: [
      { ic: <SvgNode/>, l: 'Node.js' },
      { ic: <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>, l: 'Express.js' },
      { ic: <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, l: 'JWT / Auth' },
      { ic: <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="1.5"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>, l: 'REST APIs' },
    ]
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    title: 'Database', sub: 'Storage / Data',
    tags: [
      { ic: <SvgMongo/>, l: 'MongoDB' }, { ic: <SvgMySQL/>, l: 'MySQL' },
      { ic: <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="1.5"><path d="M4 7h16M4 12h16M4 17h10"/></svg>, l: 'SQL / NoSQL' },
      { ic: <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>, l: 'Mongoose ODM' },
    ]
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
    title: 'Tools & Design', sub: 'Workflow / Creative',
    tags: [
      { ic: <SvgGit/>, l: 'Git' }, { ic: <SvgGitHub/>, l: 'GitHub' },
      { ic: <SvgFigma/>, l: 'Figma' }, { ic: <SvgAI/>, l: 'Illustrator' },
      { ic: <svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, l: 'Agile/Scrum' },
    ]
  },
];

function SkillCard({ sk, i }) {
  return (
    <div className="sk-card rv" style={{'--i': i}}>
      <div className="sk-card-bar"/>
      <div className="sk-card-glow"/>
      <div className="sk-head">
        <div className="sk-icon">{sk.icon}</div>
        <div><h3>{sk.title}</h3><p>{sk.sub}</p></div>
      </div>
      <div className="sk-tags">
        {sk.tags.map((t, j) => (
          <span className="stag" key={j}>
            <span className="stag-icon">{t.ic}</span>{t.l}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-wrap">
        <div className="sec-hdr rv">
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">Skills &amp; <em>Technologies</em></h2>
          <p className="section-sub">The tools and technologies I use to build exceptional digital products from idea to production.</p>
        </div>
        <div className="skills-grid">
          {SKS.map((sk, i) => <SkillCard sk={sk} i={i} key={i}/>)}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PROJECTS
══════════════════════════════════════════ */
const PROJS = [
  { emoji:'🛒', tags:['React.js','Node.js','MongoDB'], title:'E-Commerce Platform', desc:'Full-stack e-commerce with real-time inventory management, payment gateway integration and admin dashboard. Built for scale.', feat:true, from:'rgba(29,124,242,.18)', to:'rgba(0,229,255,.08)' },
  { emoji:'📊', tags:['React.js','REST API','CSS3'], title:'Admin Dashboard', desc:'Comprehensive admin panel with interactive charts, user management, advanced filtering and CSV report exports.', from:'rgba(124,58,237,.18)', to:'rgba(29,124,242,.08)' },
  { emoji:'💬', tags:['JavaScript','WebSocket','Node.js'], title:'Real-Time Chat App', desc:'Instant messaging platform using WebSockets supporting group and private chats with real-time notifications.', from:'rgba(5,150,105,.18)', to:'rgba(0,229,255,.08)' },
  { emoji:'🎨', tags:['HTML5','CSS3','Illustrator'], title:'Brand Identity Site', desc:'Startup website merging coding and Adobe Illustrator design skills — complete UI and visual identity.', from:'rgba(245,158,11,.18)', to:'rgba(239,68,68,.08)' },
  { emoji:'✅', tags:['React.js','Tailwind','API'], title:'Task Manager App', desc:'Full-featured task manager with Drag & Drop, advanced filters and real-time data synchronization.', from:'rgba(16,185,129,.18)', to:'rgba(29,124,242,.08)' },
  { emoji:'🔐', tags:['Node.js','JWT','SQL'], title:'Auth System', desc:'Complete authentication & role-based authorization using JWT, bcrypt and SQL with high security standards.', from:'rgba(239,68,68,.18)', to:'rgba(124,58,237,.08)' },
];

function ProjCard({ p, i }) {
  return (
    <div className="proj-card rv" style={{'--i': i}}>
      {p.feat && <div className="proj-featured-badge">✦ Featured</div>}
      <div className="proj-thumb">
        <div className="proj-thumb-bg" style={{background:`linear-gradient(135deg,${p.from},${p.to})`}}/>
        <div className="proj-thumb-grid"/>
        <span className="proj-emoji">{p.emoji}</span>
        <div className="proj-overlay">
          <a href="#" className="proj-btn" title="Live Demo">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" width="17" height="17"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          <a href="#" className="proj-btn" title="Source Code">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" width="17" height="17"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </a>
        </div>
      </div>
      <div className="proj-body">
        <div className="proj-tags">{p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}</div>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="proj-wrap">
        <div className="sec-hdr rv">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured <em>Projects</em></h2>
          <p className="section-sub">Selected high-impact work built with focus on performance, scalability and outstanding user experience.</p>
        </div>
        <div className="proj-grid">
          {PROJS.map((p, i) => <ProjCard p={p} i={i} key={i}/>)}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   EXPERIENCE
══════════════════════════════════════════ */
const TL = [
  { period:'2024 — Present', title:'Senior Full Stack Developer', co:'Freelance & Independent Projects', desc:'Building production-grade full-stack applications. React on the frontend, Node.js on the backend. Focus on performance, security and scalable architecture across all projects.' },
  { period:'2023 — 2024', title:'Full Stack Developer', co:'Personal & Academic Projects', desc:'Developed multiple projects spanning frontend and backend, continuously learning new technologies and applying best practices in code quality and system design.' },
  { period:'2022 — 2023', title:'Frontend Developer', co:'Early Career Stage', desc:'Specialized in frontend development with HTML, CSS, JavaScript and React. Built a strong foundation in UX/UI design and responsive, interactive interface development.' },
  { period:'Ongoing', title:'Computer Science Student', co:'University — Algeria', desc:'Academic study deepens theoretical understanding of algorithms and data structures — directly applied in real-world projects.' },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="exp-wrap">
        <div className="sec-hdr rv">
          <div className="section-label">Career</div>
          <h2 className="section-title">Professional <em>Journey</em></h2>
          <p className="section-sub">My path through the world of software development.</p>
        </div>
        <div className="timeline">
          {TL.map((item, i) => (
            <div className="tl-item rv" style={{'--i': i}} key={i}>
              <div className="tl-node"/>
              <div className="tl-period">{item.period}</div>
              <div className="tl-box">
                <h3>{item.title}</h3>
                <div className="tl-company">{item.co}</div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   CONTACT
══════════════════════════════════════════ */
function Contact() {
  const [st, setSt] = useState('idle');
  const onSubmit = e => {
    e.preventDefault(); setSt('loading');
    setTimeout(() => { setSt('success'); e.target.reset(); setTimeout(() => setSt('idle'), 3500); }, 900);
  };
  const stacks = [<SvgHTML/>, <SvgCSS/>, <SvgJS/>, <SvgReact/>, <SvgNode/>];
  const links = [
    [<svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>, 'Email', 'fadi.medkour@email.com'],
    [<svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, 'LinkedIn', 'linkedin.com/in/fadi-medkour'],
    [<SvgGitHub/>, 'GitHub', 'github.com/fadi-medkour'],
    [<svg viewBox="0 0 24 24" fill="none" stroke="#1d7cf2" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, 'Location', 'Algiers, Algeria 🇩🇿'],
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-wrap">
        <div className="sec-hdr sec-hdr-center rv">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's <em>Work Together</em></h2>
          <p className="section-sub">Have a project in mind? I'm always open to new opportunities and creative collaborations.</p>
        </div>
        <div className="contact-grid rv">
          <div className="contact-info">
            <h3>Get In Touch 👋</h3>
            <p>I'll get back to you within 24 hours. Don't hesitate to reach out for any collaboration.</p>
            <div className="c-links">
              {links.map(([ic, lbl, val], i) => (
                <div className="c-link" key={i}>
                  <div className="c-link-icon">{ic}</div>
                  <div><small>{lbl}</small><span>{val}</span></div>
                </div>
              ))}
            </div>
            <div className="c-stack">
              <span className="c-stack-label">Built with</span>
              <div className="c-stack-icons">
                {stacks.map((ic, i) => <div className="c-stack-icon" key={i}>{ic}</div>)}
              </div>
            </div>
          </div>
          <form className="c-form" onSubmit={onSubmit}>
            <div className="fg"><label>Full Name</label><input type="text" placeholder="Your full name..." required/></div>
            <div className="fg"><label>Email Address</label><input type="email" placeholder="email@example.com" required/></div>
            <div className="fg"><label>Subject</label><input type="text" placeholder="What's it about?"/></div>
            <div className="fg"><label>Message</label><textarea placeholder="Tell me about your project or idea..." required/></div>
            <button type="submit" className={`f-submit${st === 'success' ? ' success' : ''}`} disabled={st === 'loading'}>
              {st === 'success' ? (
                <><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg> Sent Successfully!</>
              ) : st === 'loading' ? (
                <><div className="spinner"/> Sending...</>
              ) : (
                <><svg viewBox="0 0 24 24" fill="none" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13" stroke="white" strokeWidth="2"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="white"/></svg> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer>
      <div className="f-logo">fadi<span>.</span>dev</div>
      <p>© 2026 Fadi Medkour · Built with <span>React.js</span>, HTML &amp; CSS</p>
      <div className="f-socials">
        <a className="f-social" href="#" title="GitHub"><SvgGitHub/></a>
        <a className="f-social" href="#" title="LinkedIn">
          <svg viewBox="0 0 24 24" fill="#0A66C2" width="15" height="15"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a className="f-social" href="#" title="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
        </a>
        <a className="f-social" href="#hero" title="Back to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </a>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════
   APP ROOT
══════════════════════════════════════════ */
function App() {
  useCursorGlow();
  useScrollReveal();
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
