import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Toolkit from './components/Toolkit'
import Footer from './components/Footer'
import Projects from './components/Projects'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Services from './components/Services'


const App = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname === "/" ? "home" : pathname.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Services />
      {/* <Projects /> */}
      <Toolkit />
      <Footer />
    </div>
  )
}

export default App
