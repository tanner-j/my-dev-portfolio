import React from 'react'
// import './App.css'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'

import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from 'react'

function App() {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  return (
    <>
      <div className='scroll' ref={scrollRef}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default App
