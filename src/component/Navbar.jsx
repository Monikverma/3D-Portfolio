import React from 'react';
import "../component/Navbar.css"; 
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for route detection
import { ImUndo2 } from "react-icons/im";
import sug from "../assest/sug.jpg"

export default function Navbar() {
  const location = useLocation(); // Get the current route

  return (
    <>
      <div className='navi'>
        {/* Conditionally render the image based on the current route */}
        {location.pathname !== '/Profile' && (
          <img src={sug} className='photo' alt="Navbar Logo" />
        )}
        <div className="radio-input">
          <div className='u'>
            <input value="home" name='value'/>
            <Link to="/Home">
              <ImUndo2 className='undo' />
            </Link>
          </div>

          <label className="label">
            <input value="profile" name="value-radio" id="profile" type="radio" />
            <Link to="/Profile">
              <span className="text">Profile</span>
            </Link>
          </label>

          <label className="label">
            <input value="about" name="value-radio" id="about" type="radio" />
            <Link to="/About">
              <span className="text">Resume</span>
            </Link>
          </label>

          <label className="label">
            <input value="project" name="value-radio" id="project" type="radio" />
            <Link to="/Project">
              <span className="text">Project</span>
            </Link>
          </label>
        </div>
      </div>
    </>
  );
}
