import React, { useState, useRef, useEffect } from 'react';
import styles from '../styling/Design.module.css';

import lamelo from '../images/graphic_design/Lamelo Ball.png';
import ladd from '../images/graphic_design/Ladd Mcconkey.png';
import demar from '../images/graphic_design/Demar Derozan.png';
import josh from '../images/graphic_design/josh allen.png';
import ravens from '../images/graphic_design/Ravens.png';
import cj from '../images/graphic_design/CJ Stroud.png';
import jimmy from '../images/graphic_design/Jimmy.png';
import jaylenWaddle from '../images/graphic_design/Jaylen Waddle.png';
import jaylen from '../images/graphic_design/Cooper Flagg.png';
import boston from '../images/graphic_design/boston.png';
import bulls from '../images/graphic_design/bulls.png';
import nuggets from '../images/graphic_design/nuggets.png';

const featuredImages = [boston, bulls, nuggets];
const allImages = [lamelo, jaylen, demar, josh, ravens, cj, jimmy, jaylenWaddle, ladd];

function Design() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const featuredRef = useRef(null);
  const [isFeaturedVisible, setIsFeaturedVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFeaturedVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (featuredRef.current) observer.observe(featuredRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredImages.length - 1 : prev - 1));
  };

  return (
    <div className={styles.designPage}>
      <div className={styles.gradientShape1}></div>
      <div className={styles.gradientShape2}></div>
      <div className={styles.gradientShape3}></div>
      <div className={styles.gradientShape4}></div>
      <div className={styles.gradientShape5}></div>

      <div className={styles.designContentWrapper}>
        <h1 className={`${styles.title} ${styles.floatingText} ${styles.noFloatAnimation}`}>Graphic Design</h1>
        <a href="/" className={styles.returnHome}>Return to Homepage</a>
        <p className={styles.description}>
          Here are just a few of my favorite graphic design projects from my career. Over the past 5 years, 
          I've created art for brands including Duke Athletics, Ballislife, and various clientele in the NBA and NCAA. 
          My full portfolio can be found at{' '}
          <a href="https://www.behance.net/rohantummala" target="_blank" rel="noopener noreferrer" style={{ color: 'grey', fontStyle: 'italic' }}>
            this link
          </a>.
        </p>

        <div className={styles.gallery}>
          {allImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Design ${i + 1}`}
              onClick={() => setSelectedImage(img)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        {selectedImage && (
          <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="Expanded"
              className={styles.modalImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div ref={featuredRef} className={`${styles.featuredContainer} ${isFeaturedVisible ? styles.visible : ''}`}>
          <div className={styles.textContainer}>
            <h2>Featured Work</h2>
            <p className={styles.description}>
              Click through to explore some of my designs that have been featured across various platforms! Most recently, my graphic created for the 7uice foundation, founded by Jaylen Brown of the Boston Celtics, was shown on an NBC10 Boston news segment during the 2024 NBA Finals. Other designs that I have created have also been featured on different professional teams' social media accounts, including those of the Chicago Bulls and Denver Nuggets.
            </p>
          </div>
          <div className={styles.carousel}>
            <button className={styles.navBtn} onClick={handlePrev}>❮</button>
            <div className={styles.carouselSlide}>
              <img src={featuredImages[currentIndex]} alt="Featured Work" />
            </div>
            <button className={styles.navBtn} onClick={handleNext}>❯</button>
          </div>
        </div>

        <footer className={styles.footer}>© 2025 Rohan Tummala</footer>
      </div>
    </div>
  );
}

export default Design;
