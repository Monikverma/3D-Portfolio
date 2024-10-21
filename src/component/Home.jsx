import React from 'react';
import Spline from '@splinetool/react-spline'; // Import Spline React component
import "../component/Home.css"
import { FaReact, FaHtml5, FaCss3Alt, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiGmail } from "react-icons/si";


export default function Home() { // Changed the export to match the filename
  return (
    <div className="service-container">
      <h1>Hi, I Am Monik Verma</h1>

      {/* Spline 3D Viewer using React-Spline component */}
      <div className="spline-viewer-container">
        <Spline scene="https://prod.spline.design/pa1nbn7QViOOf3ow/scene.splinecode" />
      </div>
      
      {/* Freelancer Service Card */}
      <div className="service-card">
        <h2>Monik Verma - Freelance Developer</h2>
        <p>I specialize in front-end development, 3D design, and creating interactive web experiences.</p>

        {/* Service List */}
        <ul className="service-list">
          <li><FaReact className='i'/><h5>React Developer</h5></li>
          <li><IoLogoJavascript className='j'/><h5>Javascript</h5></li>
          <li><FaHtml5 className='h'/><h5>HTML</h5></li>
          <li><FaCss3Alt className='c'/><h5>CSS</h5></li>
        </ul>

        {/* Contact Button */}
        <button className="contact-btn">Contact Me</button>
        <h4>or</h4>
        <br />

        {/* Social Media Links */}
        <ul className="social-media-links">
          <li>
            <a href="https://www.instagram.com/invites/contact/?igsh=fvs8y71owr9r&utm_content=he33fg9" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='insta'/> Follow on Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='face'/> Follow on Facebook
            </a>
          </li>
          <li>
            <a href="mailto:your-email@example.com">
              <SiGmail className='gmail'/> Send an Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
