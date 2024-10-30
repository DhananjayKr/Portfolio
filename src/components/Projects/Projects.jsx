import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h3>
        Projects Here <i>(Click on text to open website)</i>
      </h3>
      <ul className="project-list">
        <li>
          <div className="project-item">
            <a
              href="https://weatherwizzz.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weather App With React.js
            </a>
            <img
              src="./assets/images/weather.png"
              alt="Weather App"
              className="project-image"
            />
          </div>
        </li>
        <li>
          <div className="project-item">
            <a
              href="https://drumgamejs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              A Drum With with JS
            </a>
            <img
              src="../assets/images/drum.png"
              alt="Drum Game"
              className="project-image"
            />
          </div>
        </li>
        {/* <li>
          <div className="project-item">
            <a
              href="dhananjaykumar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-commerce
            </a>
            <img
              src="../assets/images/ecommerce.png"
              alt="E-commerce"
              className="project-image"
            />
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Projects;
