import React from "react";
import Layout from "../layouts/Layout";
import TypeWriter from "../components/Typewriter/TypeWriter";
import ContactMe from "../components/ContactMe/ContactMe";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import experiences from "../components/consts/Experiences";
import SmallSection from "../components/SmallSection/SmallSection";
import fullStackSkills from "../components/consts/FullStackSkills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import variants from "../assets/styles/Variants";

const GetExperience = ({ service }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      key={service.id}
      className="col-span-12 grid grid-cols-12 border-t border-grey ">
      <div className="col-span-12 md:col-span-7 flex justify-between border-b md:border-b-0 md:border-r border-grey p-[20px] md:p-[50px]">
        <div className="text-white">{`{${service.startDate}}`}</div>
        <div className="">
          <div className="flex text-navigation leading-[22px] md:text-[48px] md:leading-[48px] text-white">
            {`< `}
            <span className="text-purple">
              <TypeWriter
                words={[" _" + service.title]}
                loop="false"
                cursorStyle={"_"}
                typeSpeed={120}
              />
            </span>
            {` >`}
          </div>
        </div>
      </div>
      <motion.div
        variants={variants.paragraphVariants}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="col-span-12 md:col-span-5 flex flex-col gap-3 text-left p-[20px] md:p-[50px]">
        <span className="text-white text-[18px] md:text-navigation">
          {"//" + service.post}
        </span>
        <span className=" text-[16px] md:text-desc text-yellow md:leading-[16px] leading-[20px]">
          {service.desc}
        </span>
      </motion.div>
    </div>
  );
};

const GetResume = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="con">
      <section className="bg-section min-h-[50vh] md:min-h-screen ms-[20px]">
        <div className="flex flex-col items-center mx-auto gap-7 pt-[50px] md:pt-[90px] pb-[30px] bg-black">
          <div className="flex text-smallTitle leading-[30px] md:text-bigTitle md:leading-[98px] mt-[15px] text-white">
            {`{"`}
            <span className="text-ActiveBlue">
              <TypeWriter
                words={["_resume"]}
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
            className="text-[16px] md:text-desc text-yellow md:leading-[16px] leading-[20px] text-center max-w-[350px] md:max-w-3xl">
            …lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis mollis mauris, vitae mollis leo viverra eu. In cursus
            commodo interdum. Duis vitae ex massa. Quisque luctus diam.
          </motion.div>
        </div>
      </section>

      <section className="ms-[20px] mt-[100px] md:mt-[150px] bg-black">
        <SectionHeader
          icon="{#}"
          title="&lt;experience&gt;"
          desc=" ...Ignite your brand with bespoke services. Experience
          transformative
          journeys that leave a lasting emotional impact."
        />

        <div className="grid grid-cols-12 w-full mt-[50px]">
          {experiences.map((service) => (
            <GetExperience service={service} />
          ))}
        </div>
      </section>

      <section className="ms-[20px] mt-[100px] md:mt-[150px] bg-black">
        <SectionHeader
          icon="{#}"
          title="&lt;skills&gt;"
          desc="...Ignite your brand with bespoke services. Experience transformative journeys that leave a lasting emotional impact."
        />

        <div className="grid grid-cols-12 border-b border-grey">
          {fullStackSkills.map((skill) => (
            <SmallSection
              motion={motion}
              variants={variants}
              id={skill.id}
              icon={skill.icon}
              title={skill.skill}
              desc={skill.description}
            />
          ))}
        </div>
      </section>

      <ContactMe />
    </div>
  );
};

const Resume = () => {
  return <Layout activePage={"resume"}> {<GetResume />} </Layout>;
};

export default Resume;
