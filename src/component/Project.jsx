import React from 'react';
import "../component/Project.css";
import exommerce from "../assest/exommerce.jpg"; // Import the image correctly
import ss from "../assest/ss.png"

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "eCommerce Store",
      image: exommerce, // Use the imported image here
      description: "A fully functional eCommerce website built with React. Free Ecommerce  Integrated API. 3-D design  model for Contact,Functioning With the Cart system  ",
      link: "https://monikverma.github.io/3D-Ecommerce-Store/"
    },
    {
      id: 2,
      title: "Film4u.com",
      image: ss, // Replace with your image URL
      description: "Film4u is the platform where you can watch or download the movie freely. This Website is made by HTML,CSS and JavaSript used of animation or Transition property of CSS",
      link: "file:///E:/React/mern/nav.html"
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-section">
      <h2 className="project-title">My Projects</h2>
      <div className="project-container">
        {projects.map(project => (
          <div key={project.id} className="project-box">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-name">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="view-project-button">View Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
