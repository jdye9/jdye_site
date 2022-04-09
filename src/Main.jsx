import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './views/Home'
import ContactMe from './views/ContactMe'
import Projects from './views/Projects'
import Resume from './views/Resume'
import AboutMe from './views/AboutMe'

const Main = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/aboutme" element={<AboutMe />}/>
        <Route exact path="/contactme" element={<ContactMe />}/>
        <Route exact path="/projects" element={<Projects />}/>
        <Route exact path="/resume" element={<Resume />}/>
    </Routes>
  )
}

export default Main