import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../images/github.png';
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/linkedin.png';
import '../styling/App.css';

function Home() {
  return (
    <div className="hero-container">
      <div className="gradient-circle"></div>
      <div className="gradient-circle-right"></div>
      <div className="hero-content">
        <h1 className="floating-text">Rohan Tummala</h1>
        <p>AI/ML Research | Sports Analytics | Computational Biology | Graphic Design</p>
        <p className="bio">Rising Freshman @ UC Berkeley. Reach out: <a href="mailto:rohantummala07@gmail.com" className='email-link'>rohantummala07@gmail.com</a></p>

        <div className="links">
          <Link to="/about">About Me</Link>
          <Link to="/projects">Technical Projects</Link>
          <Link to="/design">Graphic Design</Link>
          <a href={require('../images/resume.pdf')} target="_blank" rel="noopener noreferrer">Resume</a>
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
    </div>
  );
}

export default Home;
