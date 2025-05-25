import React from 'react'
import './Skills.css'

const skills = [
  { label: 'HTML', percent: 100 },
  { label: 'CSS', percent: 95 },
  { label: 'JavaScript', percent: 90 },
  { label: 'ReactJS', percent: 90 },
  { label: 'Node.js', percent: 85 },
  { label: 'MongoDB', percent: 85 },
  { label: 'Java', percent: 90 },
  { label: 'SQL', percent: 85 },
  { label: 'Python', percent: 70 },
  { label: 'Spring Boot', percent: 75 },
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1 className="section-title">Skills</h1>
      <p className="skills-intro">These are the technologies and tools I've worked with throughout my projects and internships:</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <div className="skill-label">
              <span>{skill.label}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="progress">
              <div className="progress-filled" style={{ width: `${skill.percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
