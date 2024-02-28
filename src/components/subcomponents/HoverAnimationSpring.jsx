// HoverAnimationSpring.js
import React from "react";
import { motion } from "framer-motion";

function HoverAnimationSpring({ icon, text, link }) {
  const iconAnimation = {
    initial: { x: -10, opacity: 0.65 },
    hover: { x: -18, opacity: 1 },
  };

  const textAnimation = {
    initial: { x: -20, opacity: 0 },
    hover: { x: -15, opacity: 1 },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="my-8 " // Add margin for spacing
      style={{ position: "relative", width: "fit-content" }}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        {/* Icon */}
        <motion.h1
          className="mx-2 text-white p-2 "
          style={{ position: "absolute", left: 0, zIndex: 1 }}
          variants={iconAnimation}
          transition={{ duration: 0.25 }}
        >
          {icon}
        </motion.h1>

        {/* Text Animation */}
        <motion.h1
          style={{
            position: "absolute",
            left: "3rem", // Adjust spacing from the icon
            whiteSpace: "nowrap",
          }}
          variants={textAnimation}
          transition={{ duration: 0.25, delay: 0.15 }}
          className="text-xl text-white p-4"
        >
          {text}
        </motion.h1>
      </a>
    </motion.div>
  );
}

export default HoverAnimationSpring;
