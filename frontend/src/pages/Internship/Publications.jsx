import React from 'react';
import './Publications.css';

const Publications = () => {
  return (
    <div className="publications-container" id="publication">
      <h1 className="section-title">Publications</h1>
      <p className="publications-intro">
        My research contribution in the field of AI-integrated Ayurveda systems has been recognized in international journals.
      </p>

      <div className="publication-box">
        <h3>Ayurcare: AI-Driven Ayurveda Prescription and Treatment Recommendation System</h3>
        <p>
          <strong>Journal:</strong> International Research Journal of Engineering and Technology (IRJET)<br />
          <strong>Volume:</strong> 12, Issue: 04, April 2025
        </p>
        <ul>
          <li>Published research on AI-powered system that uses symptom analysis and facial emotion recognition.</li>
          <li>Combines ancient Ayurvedic medicine with modern AI to deliver personalized treatments.</li>
          <li>Focused on building a real-world system that supports holistic health care decisions.</li>
        </ul>
        <a
          className="publication-link"
          href="https://www.irjet.net/archives/V12/i4/IRJET-V12I4281.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Publication ↗
        </a>
      </div>
    </div>
  );
};

export default Publications;
