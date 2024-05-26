import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Resume from './components/Resume'

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <Navbar  
        heroRef={heroRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        skillsRef={skillsRef}
        resumeRef={resumeRef}
        footerRef={footerRef}
      />

      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={resumeRef}>
        <Resume />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  )
}

export default App
