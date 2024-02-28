import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const projectVariants = {
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, x: -100, scale: 1 },
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

function Work() {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  // Main controls for the outer motion.div
  const mainControls = useAnimation();

  // Controls for the nested motion.div with the h1 element
  const nestedControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
      nestedControls.start("visible");
    }
  }, [mainControls, nestedControls, inView]);

  const skillClick = () =>
    toast.info("Skillmint will be live Early 2023", {
      position: toast.POSITION.TOP_CENTER,
    });

  return (
    <div className="min-h-screen  w-full font-Space z-10 py-10 bg-stone-950">
      <ToastContainer theme="dark" />

      <motion.div
        ref={ref}
        animate={mainControls}
        initial="hidden"
        variants={projectVariants}
        className="w-full flex flex-col justify-center items-start sm:py-0 py-12 min-h-screen "
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={nestedControls}
          variants={projectVariants1} // Use the separate controls for this motion.div
          className="z-20 w-full text-center relative"
        >
          <motion.div
            variants={backgroundVariants}
            className="bg-[#f37439]  absolute inset-0 w-[23.3rem] h-[5px] mt-[2.3rem] mx-auto "
          />
          <h1 className="z-10 text-[1.5em] sm:text-[2em] text-[#fff] text-center w-full py-1 uppercase relative font-bold  tracking-widest">
            My Journey So far
          </h1>
        </motion.div>
        {/* Cards */}
        <div className="flex flex-wrap  mx-auto  w-[80%] sm:w-[60%] max-w-7xl justify-center gap-4">
          <WorkCard
            date2={`2023`}
            date1={`Present`}
            logo="skillmint_logo.jpg"
            logoW={`w-[55.99px] h-[55.99px] object-cover`}
            webUrl={`https://skillmint.io`}
            Company={"Skillmint"}
            Title={`Co-founder & Lead Developer`}
            description={` Envisioning, crafting, and launching a state-of-the-art job
            portal. Utilizing ReactJS and the MERN stack, built both the
            backend and frontend from scratch. With meticulous testing,
            seamless deployment, and AWS integration, Skillmint boasts a
            robust architecture and RESTful API. More than a platform,
            it's a testament to innovation, expertise, and dedication.`}
          />
          <WorkCard
            date2={`2018`}
            date1={`2019`}
            logo="thrive.jfif"
            webUrl={`https://thrivecom.co.uk/`}
            Company={`Thrive Creative Media
            `}
            Title={`Full-Stack Developer`}
            description={`Steering full-stack development initiatives, seamlessly
            weaving together design, construction, and collaboration.
            Leveraging technologies like Flutter, Java, and JavaScript, a
            diverse tech stack was harnessed to craft sophisticated web
            and mobile applications, defining a harmonious blend of
            creativity and advanced technology.`}
          />
          <WorkCard
            date2={`2017`}
            date1={`2018`}
            logo="futuremanconsultants_logo.jfif"
            webUrl={`https://www.futuremanhr.com/`}
            Company={"Future man HR & IT Consultants"}
            Title={`Systems Administrator`}
            description={`Optimized network performance, monitored servers for seamless
            operation, and pioneered backup solutions for data protection.
            A linchpin in dynamic IT environments, my focus on excellence
            ensured resilience and innovation.`}
          />
          <WorkCard
            date2={`2016`}
            date1={`2017`}
            logo="futuremanconsultants_logo.jfif"
            webUrl={`https://www.futuremanhr.com/`}
            Company={"Future man HR & IT Consultants"}
            Title={`IT Technical Support L2`}
            description={`  Delivering second-level technical support, adeptly
            troubleshooting both hardware and software challenges.
            Streamlining assistance to end-users with efficiency and
            precision, contributing to a seamless IT experience.`}
          />
        </div>
      </motion.div>
    </div>
  );
}

function WorkCard({
  date1,
  date2,
  logo,
  logoW,
  webUrl,
  Company,
  Title,
  description,
}) {
  return (
    <>
      <div className=" h-full backdrop-blur-sm w-full font-Space group">
        <h1 className="text-[#e0e0e0] flex w-full items-center justify-end bg-transparent">
          {date1}{" "}
          <MdOutlineKeyboardDoubleArrowLeft className="mx-1 text-xl text-[#f37439] animate-pulse " />
          {date2}
        </h1>
        <h1 className="text-white text-[20px] flex bg-[#0f0f0f] group-hover:bg-white/10 group-hover:px-3 duration-200 ease-in-out px-2 py-2 rounded-t-[10px] items-center">
          <img
            src={`../../assets/${logo}`}
            alt="thrive"
            className={`mask mask-circle ${logoW || `w-14`} mr-4  rounded-full`}
          />
          <a
            href={webUrl}
            target="_blank"
            rel="noreferrer"
            referrerPolicy="no-referrer"
          >
            {Company}
          </a>
        </h1>
        <h2 className="text-[#f37439] text-[16px] sm:text-[26px] p-2 border-b border-[#f37439]">
          {Title}
        </h2>
        <p className="flex flex-col gap-1 p-4 ">
          <span className="text-white ">{description}</span>
        </p>
      </div>
    </>
  );
}
export default Work;
