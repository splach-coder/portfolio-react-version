import React from "react";
import Layout from "../layouts/Layout";
import TypeWriter from "../components/Typewriter/TypeWriter";
import projects from "../components/consts/Projects";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import ContactMe from "../components/ContactMe/ContactMe";
import { useInView } from "react-intersection-observer";
import variants from "../assets/styles/Variants";

const GetPortfolio = () => {
  const [activeProject, setActiveProject] = React.useState(projects[0]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedProjectText, setSelectedProjectText] = React.useState(
    projects[0].text
  );

  const activeButtonStyle = (id) =>
    activeProject.id === id
      ? "text-purple border-purple"
      : "border-yellow text-yellow";

  const handleClick = (project) => {
    setActiveProject(project);
    setSelectedProjectText(project.text);
    setIsOpen(false);
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="con">
      <section className="ms-[20px] overflow-y-hidden">
        <div className="pt-[90px]">
          <div className="flex flex-col items-center mx-auto gap-7 max-w-3xl">
            <div className="flex text-smallTitle leading-[30px] md:text-bigTitle md:leading-[98px] mt-[15px] text-white">
              {`{"`}
              <span className="text-ActiveBlue">
                <TypeWriter
                  words={["_portfolio"]}
                  loop="false"
                  cursorStyle={"_"}
                  typeSpeed={120}
                />
              </span>
              {`"}`}
            </div>
            <motion.div
              variants={variants.paragraphVariants}
              ref={ref}
              initial="hidden"
              animate={controls}
              className=" text-[16px] md:text-desc text-yellow md:leading-[16px] leading-[20px] text-center">
              …Excited to showcase my portfolio! Whether you need a sleek
              website, innovative app, or a complete digital makeover, I've got
              you covered. Let's collaborate and make your project stand out.
              Contact me today and let's bring your ideas to life!
            </motion.div>

           

            <div className="hidden md:flex mt-5 gap-10">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleClick(project)}
                  className={`py-[3px] px-[20px] hover:text-purple hover:border-purple border-[3px] ${activeButtonStyle(
                    project.id
                  )}`}>
                  {project.text}
                </button>
              ))}
            </div>

            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="block md:hidden">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className="py-[3px] px-[20px] text-purple hover:border-purple border-[3px] w-[200px] text-desc">
                {selectedProjectText}
                <motion.div
                  className="flex justify-center"
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.55 }}>
                  <svg
                    width="15"
                    height="15"
                    fill="#9A99FF"
                    viewBox="0 0 20 20">
                    <path d="M0 7 L 20 7 L 10 16" />
                  </svg>
                </motion.div>
              </motion.button>
              <motion.ul
                className="flex flex-col gap-1 mt-1"
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0%)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50%)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}>
                {projects.map((project) => (
                  <motion.li
                    key={project.id}
                    onClick={() => handleClick(project)}
                    className={`py-[3px] px-[20px] hover:text-purple hover:border-purple border-[3px] ${activeButtonStyle(
                      project.id
                    )}`}
                    variants={itemVariants}>
                    {project.text}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject ? activeProject.id : "empty"}
                className="mt-5 grid grid-cols-12 gap-5"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                {activeProject.projects.map((project) => (
                  <div className="col-span-12 md:col-span-6">
                    <img
                      src={process.env.PUBLIC_URL + "/images/" + project}
                      alt=""
                    />
                    <p className="mt-1 text-yellow">{activeProject.tags}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ContactMe />
    </div>
  );
};

const Portfolio = () => {
  return (
    <Layout activePage={"portfolio"}>
      <GetPortfolio />
    </Layout>
  );
};

export default Portfolio;
