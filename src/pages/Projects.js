import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/projects.css';

import mlbImage from '../images/mlb_project.png';
import simulationsImage from '../images/simulations.png';
import nuevaImage from '../images/nueva_sports.png';
import mvpImage from '../images/mvp.png';
import brainTumorImage from '../images/brain_tumor_paper.png';

function Projects() {
  return (
    <div>
      <h3>Technical Projects</h3>
      <Link to="/" className="return-home">Return to Homepage</Link>

      <div className="projects-container">
        <div className="project">
          <img src={mlbImage} alt="MLB Swing Prediction" />
          <h2>MLB Baseball Swing Prediction Website</h2>
          <p>
            A web app that predicts baseball swings based on pitch and game data.{' '}
            <a href="https://devers-swing-analysis.streamlit.app/" target="_blank" rel="noopener noreferrer" className="external">
              Check it out.
            </a>
          </p>
          <p className="project-date">February 2025</p>
        </div>

        <div className="project">
          <img src={simulationsImage} alt="Monte Carlo Simulations" />
          <h2>Analyzing Basketball Player Props Using Monte Carlo Simulations</h2>
          <p>
            <a href="https://raw.githubusercontent.com/rohtumm/rohtumm.github.io/refs/heads/main/images/presentation.pdf" target="_blank" rel="noopener noreferrer" className="external">
              Presentation
            </a>{' '}
            given at the 2024 Ohio State Sports Analytics Conference predicting NBA player points lines using simulations.
          </p>
          <p className="project-date">April 2024</p>
        </div>

        <div className="project">
          <img src={nuevaImage} alt="Nueva Sports Analytics" />
          <h2>Nueva Sports Analytics Club</h2>
          <p>
            A dedicated club that publishes a variety of projects aiming to answer unique questions at the intersection of sports and analytics.{' '}
            <a href="https://nuevaschoolsportsanalytics.wordpress.com/" target="_blank" rel="noopener noreferrer" className="external">
              Learn more here.
            </a>
          </p>
          <p className="project-date">September 2023</p>
        </div>

        <div className="project">
          <img src={mvpImage} alt="NBA MVP Predictor" />
          <h2>NBA MVP Predictor</h2>
          <p>
            Project that predicted the NBA MVP for the 2022-23 season. Published in the{' '}
            <a href="https://www.samford.edu/sports-analytics/fans/2023/Using-Machine-Learning-to-Predict-the-NBA-MVP" target="_blank" rel="noopener noreferrer" className="external">
              Samford Center for Sports Analytics
            </a>.
          </p>
          <p className="project-date">April 2023</p>
        </div>

        <div className="project">
          <img src={brainTumorImage} alt="Brain Tumor Prediction Paper" />
          <h2>Brain Tumor Classification Paper</h2>
          <p>
            <a href="https://www.medrxiv.org/content/10.1101/2023.10.03.23296522v1.full" target="_blank" rel="noopener noreferrer" className="external">
              Research paper
            </a>{' '}
            exploring AI-based brain tumor detection methods.
          </p>
          <p className="project-date">January 2023</p>
        </div>
      </div>

      <footer>© 2025 Rohan Tummala</footer>
    </div>
  );
}

export default Projects;
