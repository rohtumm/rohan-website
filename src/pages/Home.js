import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../images/github.png';
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/linkedin.png';
import '../styling/App.css';

function Home() {
  return (
    <div>
      <h1>Rohan Tummala</h1>
      <p>AI/ML Research | Sports Analytics | Computational Biology | Graphic Design</p>

      <div className="links">
        <Link to="/projects">Technical Projects</Link>
        <Link to="/design">Graphic Design</Link>
        <Link to="/interests">Interests</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="socials">
        <a href="https://github.com/rohtumm" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/rohan.tummala_graphics/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/rohan-tummala-90ba65264/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default Home;
