// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  
  return (
    <section className="about-section" id="about">
      <div className="stars"></div>
      <div className="comet"></div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>Specialized in building seamless web applications that balance form and function.I engineer responsive, performant web apps that align with both business goals and user needs.
          Clean architecture, efficient logic, and smooth UX are at the heart of everything I create.
          
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
