import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div className="resume-container" id="resume">
      <h1 className="section-title">Resume</h1>
      <p className="resume-intro">
        A dedicated and creative full-stack developer with hands-on experience in web development, AI-powered applications, and backend systems. Passionate about building impactful projects and constantly learning new technologies.
      </p>

      <div className="resume-grid">

        {/* Summary + Education */}
        <div>
          <h2 className="resume-heading">Summary</h2>
          <div className="resume-box">
            <h3>Ganesh B</h3>
            <p>Full Stack Developer skilled in MERN stack, Java, Spring Boot, and modern frontend technologies. I enjoy building responsive, user-friendly web apps and AI-driven platforms.</p>
            <ul>
              <li>Bengaluru, Karnataka</li>
              <li>+91 9980643372</li>
              <li>ganesh.2025.in@gmail.com</li>
            </ul>
          </div>

          <h2 className="resume-heading">Education</h2>
          <div className="resume-box">
            <h3>B.E – Information Science & Engineering</h3>
            <h4>Global Academy of Technology, Bengaluru</h4>
            <p>2022 – 2025 | CGPA: 8.4</p>
          </div>
          <div className="resume-box">
            <h3>Diploma – Computer Science & Engineering</h3>
            <h4>Bapuji Polytechnic, Davanagere</h4>
            <p>2016 – 2020 | Percentage: 60%</p>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="resume-heading">Professional Experience</h2>

          <div className="resume-box">
            <h3>AI/ML Internship – NLP Chatbot</h3>
            <h4>Inspire Global Tech Solutions, Bengaluru</h4>
            <p>Mar 2025 – Apr 2025</p>
            <ul>
              <li>Developed a TF-IDF-based Ayurveda chatbot using Python and NLP techniques.</li>
              <li>Handled preprocessing and query-matching using cosine similarity.</li>
              <li>Worked on semantic search over Ayurvedic symptom datasets.</li>
            </ul>
          </div>

          <div className="resume-box">
            <h3>Java Spring Boot Internship</h3>
            <h4>Techno Hacks Solutions Pvt. Ltd., Bengaluru</h4>
            <p>Sep 2024 – Oct 2024</p>
            <ul>
              <li>Created REST APIs and performed file handling using Java and Spring Boot.</li>
              <li>Understood backend API structure and request/response models.</li>
            </ul>
          </div>

          <div className="resume-box">
            <h3>Full Stack Developer – Project</h3>
            <h4>Ayurcare: AI-driven Healthcare System</h4>
            <p>Oct 2024 – May 2025</p>
            <ul>
              <li>Built a Flask-based Ayurveda prescription app with NLP & DeepFace emotion recognition.</li>
              <li>Integrated symptom-based logic with rule-based AI models for personalized suggestions.</li>
              <li>Created responsive frontend using HTML, CSS, and JavaScript.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume
