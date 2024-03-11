import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";

const projectVariants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7 },
  },
  hidden: { opacity: 0, y: 500, scale: 1 },
};

const projectVariants1 = {
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, x: 300, scale: 1 },
};
const backgroundVariants = {
  visible: { opacity: 1, transition: { delay: 0.75, duration: 1 } },
  hidden: { opacity: 0 },
};

const ProjectCard = ({
  imagePath,
  title,
  stack,
  description,
  tag,
  websiteUrl,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const handleClick = () => {
    // Open websiteUrl in a new window
    window.open(websiteUrl, "_blank");
  };
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={projectVariants}
      className="flex sm:flex-row flex-col gap-2 max-w-5xl group cursor-pointer px-12"
      onClick={handleClick}
    >
      <img
        src={imagePath}
        className="w-[10rem] sm:w-[8rem] md:w-[10rem] h-auto mask mask-squircle mx-auto"
        alt={title}
      />
      <div className="p-3 backdrop-blur-sm rounded-md w-full bg-black/60 group-hover:bg-white/5 hover:px-4 duration-200 ease-in-out">
        <h1 className="font-Space text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#f37439] font-semibold w-full z-10 border-b-[2px] border-[#f37439]">
          {title}
          <span className="text-[14px] font-medium tracking-wider text-[#fff]  ml-[4px] z-10">
            {stack}
          </span>
        </h1>
        {tag ? (
          <p className="text-white italic font-Space mt-1 text-[13px]">{tag}</p>
        ) : null}
        <p className="w-full text-white font-medium font-Space z-10 mt-1 p-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });
  // Main controls for the outer motion.div
  const mainControls = useAnimation();
  const nestedControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
      nestedControls.start("visible");
    }
  }, [mainControls, nestedControls, inView]);

  return (
    <div className="min-h-screen mx-auto bg-zinc-900  z-10 py-10">
      <AnimatePresence>
        <div className="mx-auto">
          <motion.div
            ref={ref}
            animate={mainControls}
            initial="hidden"
            variants={projectVariants}
            className="w-full flex flex-col justify-center items-start sm:py-0 py-10 "
          >
            <motion.div
              ref={ref}
              initial="hidden"
              animate={nestedControls}
              variants={projectVariants1} // Use the separate controls for this motion.div
              className="z-20 w-full text-center relative -mt-1"
            >
              <motion.div
                variants={backgroundVariants}
                className="bg-[#f37439]  absolute inset-0 w-[15.5rem] h-[5px] mt-[2.30rem] mx-auto "
              />
              <h1 className="z-10 text-[1.5em] sm:text-[2em] text-[#fff] text-center w-full py-1 uppercase relative font-bold  tracking-widest">
                Project Log
              </h1>
            </motion.div>
          </motion.div>
          <div className="flex flex-wrap sm:flex-col items-center gap-5  mt-4">
            <ProjectCard
              imagePath="../../assets/skillmintImageH1.jpg"
              title="Skillmint"
              stack="React, MERN stack, AWS-sdk, TailwindCSS"
              tag="LIVE"
              description="Elevate your career journey. A ReactJS-powered job portal connecting graduates with opportunities worldwide. Your next step begins here."
              websiteUrl="https://skillmint.io"
            />
            <ProjectCard
              imagePath="../../assets/nexgenImage.jpg"
              title="NEXGEN Cyber Solutions"
              tag="LIVE"
              stack="ReactJS, Next.js, TailwindCSS"
              description="Revolutionize online presence with NEXGEN Cyber Solutions. I architected their website using React, Next.js, and Tailwind CSS—merging innovation and precision for a seamless digital experience."
              websiteUrl="https://nexgencybersolutions.co.uk/"
            />
            <ProjectCard
              imagePath="../../assets/cyberawareImage1.jpg"
              title="CyberAware"
              tag="LIVE"
              stack="React, TypeScript, TailwindCSS"
              description="Transforming cybersecurity insights into action. My dissertation's essence captured in a dynamic website, a proactive shield against rising cyber threats for individuals and SMEs. Level up your cybersecurity game today."
              websiteUrl="https://cyberaware-c5jddxd6b-etoyamak.vercel.app/"
            />
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Projects;
