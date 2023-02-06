import React from 'react';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import { Home } from './views/Home/Home'
import { ContactMe } from './views/ContactMe/ContactMe'
import { Projects } from './views/Projects/Projects'
import { Resume } from './views/Resume/Resume'
import { AboutMe } from './views/AboutMe/AboutMe'
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <span className='app-body'>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/aboutme" element={<AboutMe />}/>
          <Route exact path="/contactme" element={<ContactMe />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route exact path="/resume" element={<Resume />}/>
        </Routes>
      </span>
    </div>
  );
}

export default App;
