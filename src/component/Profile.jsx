import React from 'react';
import "../component/Profile.css";
import Spline from '@splinetool/react-spline';
import sug from "../assest/sug.jpg"

export default function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="spline">
          <Spline scene="https://prod.spline.design/vkT8xMqqEMI232m6/scene.splinecode" />
       
        <div className="profile-info">
          {/* Add your logo or personal branding here */}
          <img src={sug} alt="Logo" className="profile-logo" />

          <h4 className="profile-name">Monik Verma</h4>
          <h3 className="profile-role">Frontend Developer | 3D Enthusiast</h3>
          <p className="profile-bio">
            I'm a passionate frontend developer who enjoys creating dynamic and visually appealing web experiences.
            Experienced in Spline and modern web design techniques, I'm constantly exploring new ways to bring ideas to life.
          </p>
          .<br/>
          .<br/>
          .<br/>
          .<br/>
          .<p className='profile-bio'>6 month Experience at Solitaire Infosys</p>
          <br /><br />
          <p className='profile-role'>Expertise :</p>
          <p className='profile-bio'>Web Development <br />HTML,CSS,Bootstrap <br />React.js Developer</p>
        <br /><br /> <p className='profile-role'>Matriculation :</p>
         <p className='profile-bio'>H.D Public School Janedghat,SHIMLA</p>
          <p className='edu'>EDUCATION :<br/>:</p>
          <p className='educ'>Diploma In Computer Engineering From A.B.V.G.I.E.T Pragatinagar,Shimla</p>
          <br /><br /><p className='education'>Language :</p>
          <br /><p className='educ'>Hindi</p>
          <br /><p className='educ'>English</p>
          </div>
        </div>
      </div>
    </>
  );
}
