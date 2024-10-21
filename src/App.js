import React from 'react';
import Home from "./component/Home.jsx";
import Navbar from './component/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './component/Profile.jsx';
import Project from './component/Project.jsx';
import About from './component/About.jsx';

export default function App() {
  return (
    <Router>
      {/* Navbar is placed inside the Router */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        {/* Home Route */}

        {/* Profile Route */}
        <Route path="/Home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/About" element={<About />} /> 
      </Routes>
    </Router>
  );
}
