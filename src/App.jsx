import { createContext } from 'react'
import { useLang }         from './hooks/useLang.js'
import { useScrollReveal } from './hooks/useScrollReveal.js'
import { T }               from './i18n.js'

import MouseFollower  from './components/UI/MouseFollower.jsx'
import MouseTrail     from './components/UI/MouseTrail.jsx'
import LoadingScreen  from './components/UI/LoadingScreen.jsx'
import Particles      from './components/UI/Particles.jsx'
import ToastContainer from './components/UI/Toast.jsx'
import BackToTop      from './components/UI/BackToTop.jsx'
import SectionNav     from './components/UI/SectionNav.jsx'

import Navbar     from './components/Navbar/Navbar.jsx'
import Hero       from './components/Hero/Hero.jsx'
import About      from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Skills     from './components/Skills/Skills.jsx'
import Projects   from './components/Projects/Projects.jsx'
import Contact    from './components/Contact/Contact.jsx'
import Footer     from './components/Footer/Footer.jsx'

export const LangCtx = createContext({ lang:'en', toggle:()=>{}, t:T.en, isAr:false })

export default function App() {
  const { lang, toggle, isAr } = useLang()
  const t = T[lang]
  useScrollReveal()

  return (
    <LangCtx.Provider value={{ lang, toggle, t, isAr }}>
      <LoadingScreen />
      <Particles />
      <MouseTrail />
      <MouseFollower />
      <ToastContainer />
      <BackToTop />
      <SectionNav />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LangCtx.Provider>
  )
}
