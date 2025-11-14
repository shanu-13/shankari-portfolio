import React, { useRef, useState, useEffect } from 'react';
import './ExperienceTrack.css';

const Experience = () => {
  const containerRef = useRef();
  const [visibleCards, setVisibleCards] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const experiences = [
     { 
      title: "Frontend Web Developer", 
      company: "Annaimalais Coco", 
      year: "SEP 2024 - FEB 2025", 
      description: "Launched my professional journey crafting modern, responsive web applications. Specialized in implementing best practices while contributing to real-time e-commerce solutions and enhancing user experiences.",
      skills: ["WordPress", "JavaScript", "React.js", "SEO", "API Integration"],
      achievements: ["Integrated advanced shipping solutions for e-commerce platform", "Mastered React & Node.js development stack", "Actively contributed to open-source projects"]
    },
    { 
      title: "Full Stack Developer", 
      company: "Vdart Academy", 
      year: "JUN 2025 - JUL 2025", 
      description: "Thrived in a collaborative peer-learning environment, mastering full-stack development through hands-on projects. Built comprehensive applications spanning both frontend interfaces and robust backend architectures.",
      skills: ["React.js", "Django", "JavaScript", "Python"],
      achievements: ["Gained invaluable insights through expert mentorship programs", "Successfully led and coordinated a team of 5 developers", "Delivered 2 complete full-stack applications from concept to deployment"]
    },
    { 
      title: "Graphic Designer", 
      company: "Jansons Institute Of Technology", 
      year: "JAN 2025 - MAR 2025", 
      description: "Spearheaded creative design initiatives, developing compelling visual content including posters, presentations, and digital assets. Ensured all designs aligned with institutional branding while maximizing audience engagement.",
      skills: ["Canva", "Visual Design", "Brand Strategy"],
      achievements: ["Led a dynamic team of six creative designers", "Directed comprehensive content strategy and visual storytelling", "Produced award-winning digital magazine featured at heyzine.com/flip-book/6397000ee4.html"]
    }
  ];

  let scrollTimeout;

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const maxScroll = container.scrollWidth - containerWidth;
    
    // Throttle updates
    requestAnimationFrame(() => {
      const progress = scrollLeft / maxScroll;
      setScrollProgress(progress);
      
      const currentCard = Math.round(scrollLeft / containerWidth);
      if (currentCard + 1 !== visibleCards) {
        setVisibleCards(currentCard + 1);
      }
    });

    setIsScrolling(true);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 100);
  };

  useEffect(() => {
    // Animate cards on mount
    const cards = document.querySelectorAll('.experience-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, index * 200);
    });
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="stars"></div>
      <h2 className="section-title">Experience</h2>
      
      <div
        className="cards-container"
        ref={containerRef}
        onScroll={handleScroll}
      >
        <div className="cards-stack">
          {experiences.map((exp, index) => {
            const isActive = index === visibleCards - 1;
            const cardProgress = Math.max(0, Math.min(1, (scrollProgress * experiences.length) - index));
            
            return (
              <div 
                key={index} 
                className={`experience-card ${
                  index < visibleCards ? 'visible' : 'hidden'
                } ${isActive ? 'active' : ''} ${isScrolling ? 'scrolling' : ''}`}
                style={{
                  opacity: index < visibleCards ? 1 : 0,
                  transform: `translateZ(0) scale(${0.95 + (cardProgress * 0.05)})`,
                }}
              >
                <div className="card-header">
                  <div className="title-section">
                    <h3 className="animate-text">{exp.title}</h3>
                    <p className="company animate-text">{exp.company}</p>
                  </div>
                  <span className="year animate-badge">{exp.year}</span>
                </div>
                
                <div className="description-section">
                  <p className="description animate-text">{exp.description}</p>
                </div>
                
                <div className="achievements-section">
                  <h4 className="section-label">Achievements</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex} 
                        className="achievement-item animate-text"
                        style={{
                          animationDelay: `${0.3 + achIndex * 0.1}s`
                        }}
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                

              </div>
            );
          })}
        </div>
        
        {/* Progress indicator */}
        <div className="scroll-progress">
          <div 
            className="progress-bar" 
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>
        </div>
        
        <div className="scroll-indicator">
          <span>← Scroll to explore experiences →</span>
          <div className="experience-counter">
            {visibleCards} / {experiences.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
