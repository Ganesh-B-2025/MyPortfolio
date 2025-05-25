import React, { useState } from 'react';
import './LeftNavbar.css';
import profilePic from '../assets/profilePic.JPG';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`navbar ${isOpen ? 'open' : ''}`}>
        <span style={{
          fontSize:'20px',
          fontWeight:'500',
        }}>Passionate Web Developer</span>

        <img src={profilePic} className='profile' alt="Profile" />
        <span className='name'>Ganesh B</span>

        <ul className="social-icons">
          <li><a target='_blank' href="https://www.twitter.com"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a target='_blank' href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a></li>
          <li><a target='_blank' href="https://www.instagram.com/gani_shamnur/"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a target='_blank' href="https://github.com/Ganesh-B-2025"><i className="fa-brands fa-github"></i></a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/gani2000/"><i className="fa-brands fa-linkedin"></i></a></li>
        </ul>

        <div className='nav-links'>
          <NavLink to='/'  onClick={toggleNavbar} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <i className="fa-solid fa-house"></i><span>Home</span>
          </NavLink>
          <NavLink to='/about' onClick={toggleNavbar} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <i className="fa-regular fa-user"></i><span>About</span>
          </NavLink>
          <NavLink to='/resume' onClick={toggleNavbar} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <i className="fa-solid fa-file-contract"></i><span>Resume</span>
          </NavLink>
          <NavLink to='/project' onClick={toggleNavbar} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <i className="fa-solid fa-diagram-project"></i><span>Project</span>
          </NavLink>
          <NavLink to='/publications' onClick={toggleNavbar} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <i className="fa-solid fa-briefcase"></i><span>Publications</span>
          </NavLink>
          <NavLink to='/contact' onClick={toggleNavbar} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <i className="fa-solid fa-id-card"></i><span>Contact</span>
          </NavLink>
        </div>
      </div>

      <div className="menu-toggle" onClick={toggleNavbar}>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </div>
    </>
  );
};

export default LeftNavbar;
