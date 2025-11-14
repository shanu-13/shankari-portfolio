import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="stars"></div>
      
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Portfolio</h3>
            <p>Building digital experiences with passion and precision</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Connect</h4>
              <a href="mailto:your.email@example.com">Email</a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            
            <div className="link-group">
              <h4>Sections</h4>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-info">
            <p>&copy; 2024 Portfolio. All rights reserved.</p>
            <p>Made with ❤️ and lots of coffee</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;