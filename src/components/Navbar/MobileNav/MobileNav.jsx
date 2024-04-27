import React from "react";
import "./MobileNav.css";

const MobileNav = ({
  isOpen,
  toggleMenu,
  handleHeroClick,
  handleSkillClick,
  handleWorkClick,
  handleContactClick,
}) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h2>
            <i>Dhananjay Kumar</i>
          </h2>

          <ul>
            {/* <li>
                    <a className="menu-item">Home</a>
                </li>
                <li>
                    <a className="menu-item">Skills</a>
                </li>
                <li>
                    <a className="menu-item">Work Experience</a>
                </li>
                <li>
                    <a className="menu-item">Contact Me</a>
                </li> */}

            <li className="menu-item" onClick={handleHeroClick}>
              Home
            </li>
            <li className="menu-item" onClick={handleSkillClick}>
              Skills
            </li>
            <li className="menu-item" onClick={handleWorkClick}>
              Work Experience
            </li>
            <li className="menu-item" onClick={handleContactClick}>
              Contact
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
