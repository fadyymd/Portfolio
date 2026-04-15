import { useScrollReveal } from './hooks/useScrollReveal.js'

import LoadingScreen    from './components/UI/LoadingScreen.jsx'
import Particles        from './components/UI/Particles.jsx'
import CursorSpotlight  from './components/UI/CursorSpotlight.jsx'
import ToastContainer   from './components/UI/Toast.jsx'
import BackToTop        from './components/UI/BackToTop.jsx'
import SectionNav       from './components/UI/SectionNav.jsx'

import Navbar     from './components/Navbar/Navbar.jsx'
import Hero       from './components/Hero/Hero.jsx'
import About      from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Skills     from './components/Skills/Skills.jsx'
import Projects   from './components/Projects/Projects.jsx'
import Contact    from './components/Contact/Contact.jsx'
import Footer     from './components/Footer/Footer.jsx'

export default function App() {
  useScrollReveal()
  return (
    <>
      <LoadingScreen />
      <Particles />
      <CursorSpotlight />
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
    </>
  )
}
