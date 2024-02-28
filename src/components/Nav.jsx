import React, { useState, useEffect } from "react";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const Nav = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      // Add logic if needed when scrolling begins
    });

    Events.scrollEvent.register("end", (to, element) => {
      // Add logic if needed when scrolling ends
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5, x: 400 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 1.2,
        delay: 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="fixed ring-0 top-0 sm:right-[1%] md:right-[3%] lg:right-[5%]  min-[1340px]:right-[10%] sm:top-[20%] max-[640px]:backdrop-blur-sm  max-[640px]:bg-black/20 bg-transparent pt-[1px] w-full sm:w-[6.5rem] z-50  "
    >
      <ul className="flex flex-row sm:flex-col px-2 py-2  justify-center sm:space-x-0 space-x-3 sm:items-center text-white sm:space-y-8 font-Space    sm:text-2xl text-xl w-full ">
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onSetActive={() => handleSetActive("about")}
            spy={true}
          >
            {activeSection === "about" ? (
              // Display this element when "projects" is the active section

              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "Home", // initially rendered starting point
                ]}
                speed={50}
                repeat={Infinity}
                className="text-[#f37439] font-medium"
              />
            ) : (
              // Display this element when "projects" is not the active section

              <h1 className="text-white">Home</h1>
            )}
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onSetActive={() => handleSetActive("projects")}
            spy={true}
          >
            {activeSection === "projects" ? (
              // Display this element when "projects" is the active section

              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "Projects", // initially rendered starting point
                ]}
                speed={50}
                repeat={Infinity}
                className=" text-[#f37439] font-medium"
              />
            ) : (
              // Display this element when "projects" is not the active section

              <h1 className="text-white">Projects</h1>
            )}
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <Link
            to="work"
            smooth={true}
            duration={500}
            onSetActive={() => handleSetActive("work")}
            spy={true}
          >
            {activeSection === "work" ? (
              // Display this element when "projects" is the active section

              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "Work", // initially rendered starting point
                ]}
                speed={50}
                repeat={Infinity}
                className=" text-[#f37439] font-medium"
              />
            ) : (
              // Display this element when "projects" is not the active section

              <h1 className="text-white">Work</h1>
            )}
          </Link>
        </motion.li>
        {/*         <motion.li whileHover={{ scale: 1.2 }}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onSetActive={() => handleSetActive("contact")}
            spy={true}
          >
            {activeSection === "contact" ? (
              // Display this element when "projects" is the active section

              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "Contact", // initially rendered starting point
                ]}
                speed={50}
                repeat={Infinity}
                className="text-[#f37439] "
              />
            ) : (
              // Display this element when "projects" is not the active section

              <h1>Contact</h1>
            )}
          </Link>
        </motion.li> */}
      </ul>
    </motion.nav>
  );
};

export default Nav;
