import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import Publications from './pages/Internship/Publications';
import LeftNavbar from './components/LeftNavbar/LeftNavbar';

const App = () => {
  return (
    <div className='app'>
      <LeftNavbar />
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
