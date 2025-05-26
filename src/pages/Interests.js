import React from 'react';
import styles from '../styling/Interests.module.css';
import { Link } from 'react-router-dom';

import AIMLImg from '../images/interests/AIML.png';
import BiomedImg from '../images/interests/biomed.png';
import SportsAnalyticsImg from '../images/interests/sportsanalytics.png';
import PhotoshopImg from '../images/interests/photoshop.png';
import TravelImg from '../images/interests/travel.png';
import SportsImg from '../images/interests/sports.png';

function Interests() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>My Interests</h1>
      <Link to="/" className={styles.returnHome}>Return to Homepage</Link>
      <p className={styles.intro}>Here are some things I'm passionate about.</p>

      <section className={styles.interestsContainer}>
        {[
          {
            img: AIMLImg,
            title: 'AI & Machine Learning',
            desc: 'Exploring deep learning, neural networks, and AI applications in real-world problems.',
          },
          {
            img: BiomedImg,
            title: 'Computational Biology',
            desc: 'Applying algorithms and data science to biological research and biomedical image analysis.',
          },
          {
            img: SportsAnalyticsImg,
            title: 'Sports Analytics',
            desc: 'Breaking down player stats, play-by-play data, and performance optimization in sports.',
          },
          {
            img: PhotoshopImg,
            title: 'Graphic Design',
            desc: 'Creating digital artwork, branding, and designs.',
          },
          {
            img: TravelImg,
            title: 'Travel',
            desc: 'Discovering new landscapes around the world.',
          },
          {
            img: SportsImg,
            title: 'Basketball & Track',
            desc: 'Varsity Sports at the Nueva School.',
          },
        ].map(({ img, title, desc }) => (
          <div key={title} className={styles.interest}>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        ))}
      </section>

      <footer className={styles.footer}>© 2025 Rohan Tummala</footer>
    </div>
  );
}

export default Interests;
