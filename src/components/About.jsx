import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "Redux",
  "Node.js",
  "Python",
  "Git/Github",
  "C#",
  "AWS",
  "REST API",
  "Networks",
  "Cybersecurity",
];
const projectVariants = {
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7 },
  },
  hidden: { opacity: 0, x: 800, scale: 0.1 },
};
const skillsVariants = {
  visible: {
    opacity: 1,
    y: 40,
    scale: 1,

    transition: { duration: 1, delay: 2 },
  },
  hidden: { opacity: 0, y: 200, scale: 1 },
};
function About() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={projectVariants}
      className="About  z-1 font-Space  pointer-events-none select-none text-white min-h-screen"
    >
      {/* text-[#fbfaf0] */}
      <div className="w-fit mx-auto  relative top-10">
        <img
          src="../../assets/me.jpg"
          alt=""
          className="w-40 sm:w-80 mask mask-circle mx-auto ml-1 "
        />
      </div>

      <div className="relative w-fit mx-auto mt-24 text-center  font-Space font-medium">
        <div className="  border-r-0 border-l-0 border-t-0 mb-2 px-6 text-[.8em] sm:text-[1.8em]">
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            sequence={[
              `Muhammad Abdul Karim`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
            ]}
            wrapper="span"
            speed={110}
            cursor={false}
            repeat={0}
          />
        </div>
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            display: "block",
            fontSize: "1.2em",
          }}
          sequence={[
            `I develop things! \n Everything IT`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
          ]}
          wrapper="span"
          speed={130}
          cursor={false}
          repeat={0}
        />
      </div>
      <motion.div
        intial="hidden"
        variants={skillsVariants}
        className="flex flex-wrap max-w-xl mx-auto gap-1 justify-center "
      >
        {skills.map((skill, index) => (
          <h1
            key={index}
            className="text-[#fff]  font-Space font-medium  sm:text-[17px] px-2 py-1 bg-[#f37439] rounded-md w-fit"
          >
            {skill}
          </h1>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default About;
