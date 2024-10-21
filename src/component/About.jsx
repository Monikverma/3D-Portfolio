import React from 'react';
import Spline from '@splinetool/react-spline';
import "../component/About.css"; // Add your custom CSS for styling

export default function About() {
  return (
    <div className="about-container">
      <div className="spline-viewer-container">
      <Spline scene="https://prod.spline.design/Qx29n6ey0n60QbrQ/scene.splinecode"/>
      
      <p>
        Hi, I'm Monik Verma, a passionate frontend developer and tech enthusiast.
        I specialize in creating dynamic and visually appealing web experiences.
        Here's more about me and my journey in the world of web development.
      </p>

      {/* Resume Section */}
      <div className="resume-section">
        <h2>Resume</h2>
        <div className="resume-buttons">
          {/* View Resume Button */}
          <a 
            href="/resume.pdf" // Replace with the actual path to your resume
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-button"
          >
            View Resume
          </a>

          {/* Download Resume Button */}
          <a 
            href="/resume.pdf" // Replace with the actual path to your resume
            download="Monik_Verma_Resume.pdf" 
            className="resume-button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
