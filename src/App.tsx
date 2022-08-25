import React from 'react';
import './App.css';
import Home from './components/home/Home'
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Achievements from './components/experience/Achievements';
import Footer from './components/Footer';

function App() {
  return <>
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="experience" element={<Experience/>}></Route>
        <Route path="achievements" element={<Achievements/>}></Route>
        <Route path="projects" element={<Projects/>}></Route>
      </Routes>
    </Router>
    <Footer/>
  </>;
}

export default App;
