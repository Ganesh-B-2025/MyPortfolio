import React from 'react'
import './About.css'
import profileImage from '../../assets/profilePic.JPG'
import Skills from '../../components/Skills/Skills'

const About = () => {
  return (
    <div className='about-container' id='about'>
      <h1 className="section-title">About</h1>
      <p className="intro-text">
        I’m a passionate and creative full stack web developer with a strong interest in building modern, responsive, and user-friendly websites and web applications.
      </p>
      <p className="intro-text">
        I’ve worked on several projects including food delivery apps, payment systems, and employee management systems. I aim to build websites that not only look good but also perform well across all devices.
      </p>

      <div className="bio-section">
        <img src={profileImage} alt="Profile" className="profile-pic" />

        <div className="bio-content">
          <h2 className="role-title">MERN Stack Web Developer</h2>
          <p className="bio-description">
            I specialize in building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). From designing responsive and interactive frontends in React to developing secure and scalable backends, I focus on writing clean code and ensuring a smooth user experience.
          </p>

          <div className="info-grid">
            <div className="info-item"><i class="fa-solid fa-greater-than"></i><strong>Birthday:</strong> 7 January 2000</div>
            <div className="info-item"><i class="fa-solid fa-greater-than"></i><strong>Age:</strong> 25</div>
            <div className="info-item"><i class="fa-solid fa-greater-than"></i><strong>Website:</strong> www.myportfolio.com</div>
            <div className="info-item"><i class="fa-solid fa-greater-than"></i><strong>Phone:</strong> +91 9980643372</div>
            <div className="info-item"><i class="fa-solid fa-greater-than"></i><strong>Email:</strong> ganesh.2025.in@gmail.com</div>
            <div className="info-item"><i class="fa-solid fa-greater-than"></i><strong>Degree:</strong> B.E - ISE</div>
            <div className="info-item"><i class="fa-solid fa-greater-than"></i><strong>Freelance:</strong> Available</div>
            <div className="info-item"><i class="fa-solid fa-greater-than"></i><strong>City:</strong> Bengaluru, India</div>
          </div>
        <p className='below-para'>I’m always open to freelance or collaborative opportunities where I can contribute as a developer and continue growing as a professional. Whether it’s building a website from scratch or improving an existing one, I’m ready to take on new challenges and deliver quality work.</p>
        </div>
      </div>

      <Skills />
    </div>
  )
}

export default About
