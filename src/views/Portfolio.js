import React from "react";
import Layout from "../layouts/Layout";
import TypeWriter from "../components/Typewriter/TypeWriter";
import projects from "../components/consts/Projects";
import { motion, AnimatePresence } from "framer-motion";
import ContactMe from "../components/ContactMe/ContactMe";

const GetPortfolio = () => {
  const [activeProject, setActiveProject] = React.useState(projects[0]);

  const activeButtonStyle = (id) =>
    activeProject.id === id
      ? "text-purple border-purple"
      : "border-yellow text-yellow";

  const handleClick = (project) => {
    setActiveProject(project);
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
            <div className=" text-[16px] md:text-desc text-yellow md:leading-[16px] leading-[20px] text-center">
              …lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              facilisis mollis mauris, vitae mollis leo viverra eu. In cursus
              commodo interdum. Duis vitae ex massa. Quisque luctus diam.
            </div>
            <div className="mt-5 flex gap-10">
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

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject ? activeProject.id : "empty"}
                className=" mt-5 grid grid-cols-12 gap-5"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                {activeProject.projects.map((project) => (
                  <div className="col-span-6">
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
