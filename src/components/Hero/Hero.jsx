import { useRef, useEffect, useState } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter.js'
import profileImg from '../../assets/profile.jpeg'
import svgReact   from '../../assets/svg/react.svg'
import svgNode    from '../../assets/svg/nodejs.svg'
import svgHTML    from '../../assets/svg/html.svg'
import svgCSS     from '../../assets/svg/css.svg'
import svgJS      from '../../assets/svg/js.svg'
import svgTW      from '../../assets/svg/tailwind.svg'
import svgMongo   from '../../assets/svg/mongodb.svg'
import svgGit     from '../../assets/svg/git.svg'
import './Hero.css'

const TICKER = [
  {src:svgHTML,name:'HTML5'},{src:svgCSS,name:'CSS3'},{src:svgJS,name:'JavaScript'},
  {src:svgReact,name:'React.js'},{src:svgTW,name:'Tailwind'},{src:svgNode,name:'Node.js'},
  {src:svgMongo,name:'MongoDB'},{src:svgGit,name:'Git'},
]

function Counter({target,label}) {
  const [n,setN]=useState(0); const ref=useRef(); const done=useRef(false)
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!done.current){
        done.current=true; let v=0; const step=target/50
        const iv=setInterval(()=>{ v=Math.min(v+step,target); setN(Math.floor(v)); if(v>=target)clearInterval(iv) },24)
      }
    },{threshold:.6})
    if(ref.current)obs.observe(ref.current)
    return ()=>obs.disconnect()
  },[target])
  return(
    <div className="h-stat" ref={ref}>
      <span className="h-num">{n}+</span>
      <span className="h-lbl">{label}</span>
    </div>
  )
}

export default function Hero() {
  const role=useTypewriter(['Full Stack Dev','React Engineer','Backend Builder','UI Craftsman'])
  const doubled=[...TICKER,...TICKER]
  const [mousePos,setMousePos]=useState({x:0,y:0})
  const heroRef=useRef()

  useEffect(()=>{
    const fn=e=>{
      if(!heroRef.current)return
      const r=heroRef.current.getBoundingClientRect()
      setMousePos({ x:(e.clientX-r.left-r.width/2)/r.width, y:(e.clientY-r.top-r.height/2)/r.height })
    }
    const el=heroRef.current
    if(el){el.addEventListener('mousemove',fn);return()=>el.removeEventListener('mousemove',fn)}
  },[])

  return(
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-grid"/>
      <div className="orb orb-1"/>
      <div className="orb orb-2"/>
      <div className="orb orb-3"/>

      {/* Parallax mouse effect on orb */}
      <div className="orb-mouse" style={{transform:`translate(${mousePos.x*28}px,${mousePos.y*28}px)`}}/>

      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-badge rv" style={{'--i':0}}>
            <span className="badge-pulse"/><span>WELCOME TO MY UNIVERSE</span>
          </div>
          <h1 className="hero-title rv" style={{'--i':1}}>
            <span className="ht-sub">Crafting Digital</span>
            <span className="ht-main">Masterpieces</span>
          </h1>
          <p className="hero-desc rv" style={{'--i':2}}>
            I'm <strong>Fadi Medkour</strong>, a professional&nbsp;
            <span className="typed">{role}<span className="cursor">|</span></span>
            &nbsp;dedicated to building high-performance, user-centric web applications.
          </p>
          <div className="hero-btns rv" style={{'--i':3}}>
            <a href="#contact" className="btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" width="16" height="16"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              Let's Collaborate
            </a>
            <a href="#" className="btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Get Resume
            </a>
          </div>

          {/* Code card */}
          <div className="code-card rv" style={{'--i':4}}>
            <div className="cc-header">
              <span className="cc-dot r"/><span className="cc-dot y"/><span className="cc-dot g"/>
              <span className="cc-file">Portfolio.ts</span>
              <span className="cc-lang">TypeScript</span>
            </div>
            <div className="cc-body">
              <div className="cc-line"><span className="n">01</span><span className="kw">const</span><span className="var"> developer</span><span className="op"> = </span><span className="br">{'{'}</span></div>
              <div className="cc-line"><span className="n">02</span><span className="sp"/><span className="key">name</span><span className="op">:</span><span className="str"> 'Fadi Medkour'</span><span className="op">,</span></div>
              <div className="cc-line"><span className="n">03</span><span className="sp"/><span className="key">focus</span><span className="op">:</span><span className="str"> 'Fullstack Mastery'</span><span className="op">,</span></div>
              <div className="cc-line"><span className="n">04</span><span className="sp"/><span className="key">skills</span><span className="op">:</span><span className="br"> [</span><span className="str">'React'</span><span className="op">, </span><span className="str">'Node'</span><span className="op">, </span><span className="str">'AI'</span><span className="br">]</span><span className="op">,</span></div>
              <div className="cc-line"><span className="n">05</span><span className="sp"/><span className="key">passionate</span><span className="op">:</span><span className="bool"> true</span><span className="op">,</span></div>
              <div className="cc-line"><span className="n">06</span><span className="sp"/><span className="key">motto</span><span className="op">:</span><span className="str"> "Build with Purpose"</span></div>
              <div className="cc-line"><span className="n">07</span><span className="br">{'}'}</span><span className="op">;</span></div>
              <div className="cc-line cc-call"><span className="n">08</span><span className="var">developer</span><span className="op">.</span><span className="fn">showcase</span><span className="op">();</span></div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right rv-right" style={{'--i':0}}>
          <div className="photo-wrap" style={{transform:`perspective(800px) rotateY(${mousePos.x*-6}deg) rotateX(${mousePos.y*4}deg)`}}>
            <div className="photo-ring"/>
            <div className="photo-frame">
              <img src={profileImg} alt="Fadi Medkour"/>
              <div className="photo-shine" style={{background:`radial-gradient(circle at ${50+mousePos.x*30}% ${50+mousePos.y*30}%, rgba(255,255,255,.08) 0%, transparent 60%)`}}/>
              <div className="photo-fade"/>
            </div>

            {/* Stats */}
            <div className="float-stats">
              <Counter target={3} label="Years Exp."/>
              <div className="sep"/>
              <Counter target={20} label="Projects"/>
              <div className="sep"/>
              <Counter target={12} label="Technologies"/>
            </div>

            {/* React badge */}
            <div className="float-react">
              <img src={svgReact} alt="React" className="fr-spin"/>
              <div><div className="fr-name">React.js</div><div className="fr-sub">Component Expert</div></div>
            </div>

            {/* Passion badge */}
            <div className="float-passion">
              <span className="fp-dot"/>Built with Passion
            </div>

            {/* Node badge */}
            <div className="float-node">
              <img src={svgNode} alt="Node.js"/>
              <span>Node.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="tech-ticker">
        <div className="ticker-inner">
          {doubled.map((t,i)=>(
            <div className="t-item" key={i}>
              <img src={t.src} alt={t.name}/><span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="scroll-hint">
        <div className="sh-mouse"><div className="sh-wheel"/></div>
        <span>scroll down</span>
      </a>
    </section>
  )
}
