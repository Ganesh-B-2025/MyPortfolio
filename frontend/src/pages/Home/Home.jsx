import React, { useEffect, useState } from 'react';
import './Home.css';
import backgroundImage from './backgroundImage.JPG';
import Ganesh from './Ganesh.pdf'

const Home = () => {
  const roles = ["Web Developer", "MERN Stack Developer", "JAVA Developer"];
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `linear-gradient(rgba(4, 11, 20, 0.7), rgba(4, 11, 20, 0.7)), url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };

  return (
    <div className='home-container' style={containerStyle} id='home'>
      <div className="text-wrapper">
        <h2>Ganesh B</h2>
        <div>I'm <span className='typed-text'>{text}</span><span className='cursor'>|</span></div>

        <a
          href={Ganesh}
          download="Ganesh_B_Resume.pdf"
          className="download-btn"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
