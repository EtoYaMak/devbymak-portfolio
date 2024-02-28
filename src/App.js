// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import { motion, useScroll, useSpring } from "framer-motion";

import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";
import BGVideo from "./components/subcomponents/BGVideo";

const App = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <Router>
      <div className="relative bg-zinc-950  overflow-clip ">
        <Nav />
        <BGVideo />
        <motion.div className="progress-bar z-50" style={{ scaleX }} />
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="work">
          <Work />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </Router>
  );
};

export default App;
