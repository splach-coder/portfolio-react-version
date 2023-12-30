import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import TypeWriter from "../components/Typewriter/TypeWriter";
import "../assets/styles/home.css";
import Button from "../components/Button/Button";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import ContactMe from "../components/ContactMe/ContactMe";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import variants from "../assets/styles/Variants";

const strings = ["_Web designer ", "_Frontend dev ", "_Backend dev "];
const servicesVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24, duration: 1 },
  },
  hidden: { opacity: 0, y: 40, transition: { duration: 0.3 } },
};

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.4, // Adjust the stagger duration as needed
          },
        },
        hidden: {
          transition: {
            staggerChildren: 0.4, // Adjust the stagger duration as needed
          },
        },
      }}
      className="px-5 pt-5 w-100 overflow-y-hidden w-full"
      initial="hidden"
      animate={controls}>
      <motion.div
        className="border border-grey md:text-[108px] md:leading-[86px] mb-[20px] text-white py-[20px] border-e ease duration-200 transition-colors flex justify-center bg-gradient-to-r from-transparent to-[#9b99ff30]  hover:bg-yellow text-[30px] leading-[30px] "
        ref={ref}
        variants={servicesVariants}>
        {'{"'}
        <span className="text-purple">
          <TypeWriter
            words={[" _Web design "]}
            loop="false"
            cursorStyle={"_"}
            typeSpeed={120}
          />
        </span>
        {'"}'}
      </motion.div>
      <motion.div
        className="border border-grey text-[30px] leading-[30px] md:text-[108px] md:leading-[86px] mb-[20px] text-white text-center py-[20px] border-e ease duration-200 transition-colors flex justify-center bg-gradient-to-r from-transparent to-[#2fcbef30] hover:bg-yellow "
        ref={ref}
        variants={servicesVariants}>
        {'{"'}
        <span className=" text-ActiveBlue">
          <TypeWriter
            words={[" _front-end dev "]}
            loop="false"
            cursorStyle={"_"}
            typeSpeed={120}
          />
        </span>
        {'"}'}
      </motion.div>
      <motion.div
        className="border border-grey text-[30px] leading-[30px] md:text-[108px] md:leading-[86px] text-white text-center py-[20px] border-e ease duration-200 transition-colors flex justify-center bg-gradient-to-r from-transparent to-[#e6db7430] hover:bg-yellow"
        ref={ref}
        variants={servicesVariants}>
        {'{"'}
        <span className="text-yellow hover:text-ActiveBlue">
          <TypeWriter
            words={[" _back-end dev "]}
            loop="false"
            cursorStyle={"_"}
            typeSpeed={120}
          />
        </span>
        {'"}'}
      </motion.div>
    </motion.div>
  );
};

const GetHome = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="con">
      {/* welcoming section */}
      <section className="min-h-[50vh] md:min-h-screen ms-[20px] bg-section">
        <div className="w-100 bg-black text-white pt-[50px] md:pt-[90px] pb-[30px]">
          <div className="flex flex-col items-center">
            <div className="text-[18px] leading-[20px]">
              {"// HI, I'M SPLASH-CODER, A..."}
            </div>
            <div className="flex text-[30px] leading-[30px]  md:text-bigTitle  md:leading-[98px] mt-[15px] ">
              {`{"`}
              <span className="text-yellow">
                <TypeWriter
                  words={strings}
                  loop="false"
                  cursorStyle={"_"}
                  typeSpeed={120}
                />
              </span>
              {`"}`}
            </div>
          </div>

          <div className="mt-16 md:mt-28 text-center rotate-90">
            <span className="text-[31px] leading-[31px] p-[15px]">
              <a href="#about">{"==>"}</a>
            </span>
          </div>
        </div>
      </section>

      {/* about section */}
      <section
        className="ms-[20px] mt-[100px] md:mt-[150px] bg-black flex flex-col items-center"
        id="about">
        <SectionHeader
          icon="{/}"
          title="&lt;about_me&gt;"
          desc="...Step into my world of innovative code. Experience the passion and expertise of a seasoned full-stack engineer. Welcome to my about me!"
        />

        <div className="grid grid-cols-12 border-t md:border-b border-grey">
          <motion.div
            variants={variants.paragraphVariants}
            ref={ref}
            initial="hidden"
            animate={controls}
            className="col-span-12 md:col-span-6 underline text-white md:border-e-[1px] md:border-grey text-[18px] leading-[20px] md:text-smallTitle p-[20px] md:p-[60px] md:leading-[40px]">
            ...I have over 3 years of experience in web development, with a
            strong background in both front-end and back-end technologies;
          </motion.div>
          <motion.div
            variants={variants.paragraphVariants}
            ref={ref}
            initial="hidden"
            animate={controls}
            className="col-span-12 border-y-[1px] md:border-y-0 border-grey md:col-span-6 text-[18px] leading-[18px] md:text-desc text-yellow p-[20px] md:p-[60px] md:leading-[20px]">
            Hey, I'm Anas Benabbou, a 20-year-old who loves building websites. I enjoy turning cool ideas into sites that work well and look awesome. Let's create something amazing in the digital world!
          </motion.div>
        </div>
        <div className="border-s border-grey w-0 h-12 md:h-24"></div>
        <Button path={"/about"}> {"{Read More}"} </Button>
      </section>

      {/*portfolio section */}
      <section
        className="ms-[20px] mt-[100px] md:mt-[150px] bg-black"
        id="portfolio">
        <SectionHeader
          icon="(!)"
          title="&lt;portfolio&gt;"
          desc="...Welcome to my portfolio, where my creations come to life.
          Explore the beauty of innovation and creativity. Embrace the extraordinary."
        />
      </section>

      {/*services section */}
      <section
        className="ms-[20px] mt-[100px] md:mt-[150px] bg-black flex flex-col items-center mb-10"
        id="services">
        <SectionHeader
          icon="{#}"
          title="&lt;services&gt;"
          desc=" ...Ignite your brand with bespoke services. Experience
          transformative journeys that leave a lasting emotional impact."
        />

        <Services />

        {/* devider  */}
        <div className="border-s border-grey w-0 h-16 md:h-36"></div>

        <Button path={"/services"}>{"{all services}"}</Button>
      </section>

      {/*empty section */}
      <section className="py-[100px] ms-[20px] bg-section"></section>

      <ContactMe />
    </div>
  );
};

const Home = () => {
  return <Layout activePage={"home"}>{<GetHome />}</Layout>;
};

export default Home;
