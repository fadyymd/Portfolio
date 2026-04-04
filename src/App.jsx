import { useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal.js'
import CursorGlow   from './components/UI/CursorGlow.jsx'
import Navbar       from './components/Navbar/Navbar.jsx'
import Hero         from './components/Hero/Hero.jsx'
import About        from './components/About/About.jsx'
import Experience   from './components/Experience/Experience.jsx'
import Skills       from './components/Skills/Skills.jsx'
import Projects     from './components/Projects/Projects.jsx'
import Contact      from './components/Contact/Contact.jsx'
import Footer       from './components/Footer/Footer.jsx'

export default function App() {
  useScrollReveal()
  return (
    <>
      <CursorGlow />
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
    </>
  )
}
