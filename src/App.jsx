// import React from "react";
// import './App.css' ;
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Skills from "./components/Skills/Skills";
// import WorkExperience from "./components/WorkExperience/WorkExperience";
// import ContactMe from "./components/ContactMe/ContactMe";
// import Footer from "./components/Footer/Footer";
// import { BrowserRouter,Routes, Route } from "react-router-dom";
// const App = () => {
//     return (

//         <>
//         <Navbar />
//         <div className="container">
//         <Hero />
//         <Skills />
//         <WorkExperience />
//         <ContactMe />
//         </div>
//         <Footer />

//        </>
//     )
// }

// export default App;

import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const App = () => {
//     return (
//         <Router>
//             <Navbar />
//             <div className="container">
//                 <Routes>
//                     <Route path="/" element={<Hero />} />
//                     <Route path="/skills" element={<Skills />} />
//                     <Route path="/workexperience" element={<WorkExperience />} />
//                     <Route path="/contactme" element={<ContactMe />} />
//                 </Routes>
//             </div>
//             <Footer />
//         </Router>
//     )
// }

const App = () => {
  const heroRef = useRef();
  const skillRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const handleHeroClick = () => {
    heroRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  const handleSkillClick = () => {
    skillRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  const handleWorkClick = () => {
    workRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  return (
    <>
      <Navbar
        handleHeroClick={handleHeroClick}
        handleSkillClick={handleSkillClick}
        handleContactClick={handleContactClick}
        handleWorkClick={handleWorkClick}
      />
      <div className="container">
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={skillRef}>
          <Skills />
        </div>
        <div ref={workRef}>
          <WorkExperience />
        </div>
        <div ref={contactRef}>
          <ContactMe />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
