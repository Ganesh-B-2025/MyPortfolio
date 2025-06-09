import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div className="projects-container" id="project">
      <h1 className="section-title">Projects</h1>
      <p className="projects-intro">
        Below are some of the key projects I’ve worked on that showcase my development and problem-solving skills.
      </p>

      <div className="project-list">

        <div className="project-box">
          <h3>Ayurcare: AI-Driven Ayurveda Prescription and Wellness System</h3>
          <p><strong>Tech Stack:</strong> HTML, CSS, JS, Flask, MySQL</p>
          <ul>
            <li><strong>Personalized Ayurvedic Chatbot:</strong> Integrated an NLP-based chatbot using TF-IDF to recommend customized Ayurvedic remedies based on user-input symptoms.</li>
            <li><strong>Emotion-Based Health Insights:</strong> Implemented facial emotion recognition with DeepFace and OpenCV to provide emotion-specific Ayurvedic health tips and suggestions.</li>
            <li><strong>Modern Tech Stack:</strong> Developed a responsive and interactive web application using HTML, CSS, JavaScript, Flask (backend), and MySQL (database).</li>
            <li><strong>AI & Rule-Based Recommendations:</strong> Combined rule-based logic with AI models to deliver accurate, user-specific Ayurvedic prescriptions and wellness guidance.</li>
          </ul>
                    <a 
            href=https://github.com/Ganesh-B-2025/Ayurcare"https://github.com/Gani-java/Employee-Management-System-Using-JAVA-/tree/master/src/main"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View on GitHub
          </a>
        </div>

        <div className="project-box">
          <h3>Online Food Delivery (Frontend)</h3>
          <p><strong>Tech Stack:</strong> React.js, Custom CSS</p>
          <ul>
            <li><strong>Built with React.js and Custom CSS:</strong> Developed a clean, responsive user interface from scratch without relying on any CSS frameworks.</li>
            <li><strong>User Features & Cart Management:</strong> Implemented user login/signup functionality and used React Context API to manage the shopping cart and user sessions.</li>
            <li><strong>Hands-on Full-Stack Experience:</strong> Strengthened frontend development skills while working on a real-world MERN stack project.</li>
          </ul>
        </div>

        <div className="project-box">
          <h3>Employee Management System</h3>
          <p><strong>Tech Stack:</strong> JSP, Apache Tomcat</p>
          <ul>
            <li><strong>Role-Based Authentication:</strong> Built separate login pages and functionalities for Admin and Employee users using JSP and Servlets.</li>
            <li><strong>Full CRUD Operations:</strong> Enabled users to perform SQL-based insert, update, and delete operations through a user-friendly web interface.</li>
            <li><strong>Responsive Frontend Design:</strong> Created a mobile-friendly, accessible UI using custom CSS without external frameworks.</li>
            <li><strong>Apache Tomcat Deployment:</strong> Deployed the application on Apache Tomcat, facilitating secure access and communication between Admin and Employee roles.</li>
          </ul>
          <a 
            href="https://github.com/Gani-java/Employee-Management-System-Using-JAVA-/tree/master/src/main"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View on GitHub
          </a>
        </div>

        <div className="project-box">
          <h3>Paytm-like Payment Application</h3>
          <p><strong>Tech Stack:</strong> MERN Stack</p>
          <ul>
            <li><strong>Secure User Authentication:</strong> Implemented sign-up, sign-in, and session management using JWT stored in local storage.</li>
            <li><strong>Core Payment Features:</strong> Developed a dashboard with balance display, friend search by first name, and peer-to-peer money transfer.</li>
            <li><strong>Modern Tech Stack:</strong> Built the application using the MERN stack (MongoDB, Express.js, React.js, Node.js) for full-stack functionality.</li>
            <li><strong>Responsive UI Design:</strong> Created an intuitive and mobile-friendly frontend using React.js and Tailwind CSS.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Project;
