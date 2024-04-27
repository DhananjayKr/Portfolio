// import React, { useState } from 'react'
// import './Navbar.css'
// import MobileNav from './MobileNav/MobileNav';

// function Navbar() {
// const [openMenu, setOpenMenu] = useState(false);

// const toggleMenu = () => {
//     setOpenMenu(!openMenu);
// };

//   return (
//     <>

//         <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
//         <nav className="nav-wrapper">
//             <div className="nav-content">
//                 <h2><i>Dhananjay Kumar</i></h2>
//                 <ul>
//                     <li>
//                         <a href="" className="menu-item">Home</a>
//                     </li>
//                     <li>
//                         <a href="" className="menu-item">Skill</a>
//                     </li>
//                     <li>
//                         <a href="" className="menu-item">Work Experience</a>
//                     </li>
//                     <li>
//                         <a href="" className="menu-item">Contact Me</a>
//                     </li>

//                     <button className="contact-btn" onClick={() => {}}>Hire Me</button>
//                 </ul>

//                 <button className="menu-btn" onClick={toggleMenu}>
//                     <span
//                         className={"material-symbols-outlined"}
//                         style={{fontSize: "1.8rem"}}
//                     >
//                        {openMenu ? "close" : "menu"}

//                     </span>
//                 </button>
//             </div>
//         </nav>
//     </>
//   )
// }

// export default Navbar;

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

function Navbar(props) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav
        isOpen={openMenu}
        toggleMenu={toggleMenu}
        handleHeroClick={props.handleHeroClick}
        handleSkillClick={props.handleSkillClick}
        handleContactClick={props.handleContactClick}
        handleWorkClick={props.handleWorkClick}
      />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h2>
            <i>Dhananjay Kumar</i>
          </h2>
          {/* <ul>
                        <li>
                            <Link to="/" className="menu-item">Home</Link>
                        </li>
                        <li>
                            <Link to="/skills" className="menu-item">Skills</Link>
                        </li>
                        <li>
                            <Link to="/workexperience" className="menu-item">Work Experience</Link>
                        </li>
                        <li>
                            <Link to="/contactme" className="menu-item">Contact Me</Link>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>Hire Me</button>
                    </ul> */}

          <ul>
            <li className="menu-item" onClick={props.handleHeroClick}>
              Home
            </li>
            <li className="menu-item" onClick={props.handleSkillClick}>
              Skills
            </li>
            <li className="menu-item" onClick={props.handleWorkClick}>
              Work Experience
            </li>
            <li className="menu-item" onClick={props.handleContactClick}>
              Contact
            </li>
            <button
              className="contact-btn"
              onClick={() => {
                window.location.href = "mailto:officialdkr007@gmail.com";
              }}
            >
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
