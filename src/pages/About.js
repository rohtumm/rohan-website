import React from 'react';

function About() {
  return (
    <div className="hero-container" style={{ minHeight: '100vh' }}>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-right"></div>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 20px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h1 className="floating-text no-float-animation" style={{ fontSize: '2.5em', marginBottom: 16 }}>Hi! I'm Rohan Tummala</h1>
        <a href="/" className="returnHome" style={{ fontStyle: 'italic', color: 'grey', marginBottom: 24, display: 'block' }}>Return to Homepage</a>
        <p style={{ fontSize: '1.2em', color: '#444', lineHeight: 1.7}}>
            I'm a current freshman at UC Berkeley interested in AI and machine learning, applied mathematics, and using data to solve real-world problems—especially in sports, finance, and healthcare. I love building things that combine technology and creativity, and I'm always looking for new ways to learn. <br />
            <br />
            In the past, I've interned at the UCSF Cardiac Biomechanics Lab, where I applied computer vision and machine learning to help predict aortic aneurysm risk. I've also worked at Tigo Energy, where I was responsible for improving data access using tools like SQL and Docker. <br />
            <br />
            Outside of internships, I’ve built full-stack web apps like a Spanish learning habits tracker used by students at my school, and developed a random forest based model to predict swing probability for MLB batters given pitch and game data. I’ve also been recognized as a Northern California JSHS Finalist, earned an Outstanding Designation at the HiMCM Math Modeling Contest, and had my work published in sports analytics journals and conferences.
        </p>
      </div>
    </div>
  );
}

export default About; 