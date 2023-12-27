import React from "react";
import Layout from "../layouts/Layout";
import TypeWriter from "../components/Typewriter/TypeWriter";
import ContactMe from "../components/ContactMe/ContactMe";
import softSkillsArray from "../components/consts/SoftSkills";
import SmallSection from "../components/SmallSection/SmallSection";

const GetAbout = () => {
  return (
    <div className="con">
      <section className="bg-section ms-[20px] min-h-[110vh] md:min-h-screen">
        <div className="w-100 bg-black pt-[90px] pb-[30px] text-white">
          <div className="flex flex-col items-center mx-auto gap-7 max-w-4xl">
            <div className="flex text-smallTitle leading-[30px] md:text-bigTitle md:leading-[98px] mt-[15px] ">
              {`{"`}
              <span className="text-ActiveBlue">
                <TypeWriter
                  words={["_about_me"]}
                  loop="false"
                  cursorStyle={"_"}
                  typeSpeed={120}
                />
              </span>
              {`"}`}
            </div>
            <div className="md:text-smallTitle text-yellow md:leading-[40px] text-center text-desc leading-[20px]">
              ...I have over 12 years of experience in web development, with a
              strong background in both front-end and back-end technologies.
              Nullam facilisis mollis mauris, vitae mollis leo viverra eu. In
              cursus commodo interdum;
            </div>
            <div className=" text-[16px] md:text-desc text-white md:leading-[16px] leading-[20px] text-center">
              …lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              facilisis mollis mauris, vitae mollis leo viverra eu. In cursus
              commodo interdum. Duis vitae ex massa. Quisque luctus diam.
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[150px]">
        <div className="text-white text-[30px] leading-[20px] md:text-[108px] md:leading-[96px] text-center mb-[50px]">
          &lt;what drives my work&gt;
        </div>
        <div className="grid grid-cols-12">
          {softSkillsArray.map((skill) => (
            <SmallSection
              id={skill.id}
              icon={skill.icon}
              title={skill.skill}
              desc={skill.description}
            />
          ))}
        </div>
      </section>

      {/*empty section */}
      <section className="py-[100px] mt-[50px] ms-[20px] bg-section"></section>

      <ContactMe />
    </div>
  );
};

const About = () => {
  return (
    <Layout activePage={"about"}>
      <GetAbout />
    </Layout>
  );
};

export default About;
