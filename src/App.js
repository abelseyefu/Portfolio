import React from 'react'
import './index.css'
import Home from './routes/Home';
import Contact from './routes/Contact';
import Project from './routes/Project';
import About from './routes/About';
import {Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar';



function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path = '/' element = {<Home />}/>
      <Route path = '/project' element = {<Project />}/>
      <Route path = '/about' element = {<About />}/>
      <Route path = '/contact' element = {<Contact />}/>
    </Routes>
    
    </>
  );
}

export default App;
