import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

const App = () => {
  const heroRef = useRef();
  const skillRef = useRef();
  const workRef = useRef();
  const projectRef = useRef();
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

  const handleProjectClick = () => {
    projectRef.current?.scrollIntoView({
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
        handleProjectClick={handleProjectClick}
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
        <div ref={projectRef}>
          <Projects />
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
