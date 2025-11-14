// src/components/SkillsSection.jsx

import '../components/Skillsection.css';
import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e44d26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
  { name: "React JS", icon: <FaReact color="#61dafb" /> },
  { name: "Node.Js", icon: <FaNode color="#3c873a" /> },
  { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
  { name: "MYSQL", icon: <SiMysql color="#00758f" /> },
];

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    document.querySelectorAll('.skill-text').forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-title">
        <span className="Sub-text"><h2>Skills</h2><br/><h3>Scroll Upwards</h3></span>
      </div>
      <div className="skills-scroll">
        {skills.map((skill, index) => (
          <div key={index} className="skill-slide">
            <div className="skill-text">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
