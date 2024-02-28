// Contact.js
import React, { useEffect } from "react";
import HoverAnimationSpring from "./subcomponents/HoverAnimationSpring";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projectVariants = {
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, x: -600, scale: 1 },
};

/* const projectVariants1 = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.44 },
  },
  hidden: { opacity: 0, y: -200, scale: 1 },
}; */
/* const backgroundVariants = {
  visible: { opacity: 1, transition: { delay: 1, duration: 1.2 } },
  hidden: { opacity: 0 },
}; */

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  const mainControls = useAnimation();
  const nestedControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
      nestedControls.start("visible");
    }
  }, [mainControls, nestedControls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#] z-20  font-Space left-0 top-[20%] fixed "
    >
      {/* HEADER */}
      {/*       <motion.div
        ref={ref}
        initial="hidden"
        animate={nestedControls}
        variants={projectVariants1}
        className="z-20 w-full text-center relative h-full"
      >
        <motion.div
          variants={backgroundVariants}
          className="bg-[#f37439] absolute inset-0"
        />
        <h1 className="z-10 text-[1.5em] sm:text-[2em] text-[#fff] text-center w-full py-1 uppercase relative font-medium tracking-widest">
          Connect with me on my Socials
        </h1>
      </motion.div> */}

      {/* LINKS */}
      <motion.div
        className="flex flex-col justify-center sm:left-5 relative " // Center items horizontally
        animate={mainControls}
        initial="hidden"
        variants={projectVariants}
      >
        <div className="border-l border-[#f37439]">
          {/* LinkedIn */}
          <HoverAnimationSpring
            icon={
              <FaLinkedin
                size={44}
                className=" rounded-lg text-[#fcfcfc] p-1"
              />
            }
            text="LinkedIn"
            link="https://www.linkedin.com/in/muhammad-abdul-karim-8224a762/"
          />
        </div>
        <div className="border-l border-[#f37439]">
          {/* Twitter */}
          <HoverAnimationSpring
            icon={<FaTwitter size={44} className=" rounded-lg p-1" />}
            text="Twitter"
            link="https://twitter.com/etoyamak"
          />
        </div>
        <div className="border-l border-[#f37439]">
          {/* GitHub */}
          <HoverAnimationSpring
            icon={<FaGithub size={44} className=" rounded-lg p-1" />}
            text="GitHub"
            link="https://github.com/EtoYaMak"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
