import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Design from './pages/Design';
import Interests from './pages/Interests';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/design" element={<Design />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
