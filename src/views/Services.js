import React from "react";
import Layout from "../layouts/Layout";
import ServicesData from "../components/consts/Services";
import TypeWriter from "../components/Typewriter/TypeWriter";
import { motion, useAnimation } from "framer-motion";
import ContactMe from "../components/ContactMe/ContactMe";
import { useInView } from "react-intersection-observer";
import variants from "../assets/styles/Variants";

const GetSmallServices = ({ service, index }) => {
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
      <div className="col-span-12 md:col-span-8 flex justify-between border-b md:border-b-0 md:border-r border-grey p-[20px] md:p-[50px]">
        <motion.div
          variants={variants.paragraphVariants}
          ref={ref}
          initial="hidden"
          animate={controls}
          className="text-white">{`{0${index + 1}}`}</motion.div>
        <motion.div
          variants={variants.paragraphVariants}
          ref={ref}
          initial="hidden"
          animate={controls}
          className="">
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
        </motion.div>
      </div>
      <motion.div
        variants={variants.paragraphVariants}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="col-span-12 md:col-span-4 text-[16px] md:text-desc text-yellow md:leading-[16px] leading-[20px] text-left p-[20px] md:p-[50px]">
        {service.description}
      </motion.div>
    </div>
  );
};

const GetServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="con">
      <section className="ms-[20px] overflow-y-hidden">
        <div className="flex flex-col items-center mx-auto gap-7 max-w-[350px] md:max-w-3xl pt-[90px]">
          <div className="flex text-smallTitle leading-[30px] md:text-bigTitle md:leading-[98px] mt-[15px] text-white">
            {`{"`}
            <span className="text-ActiveBlue">
              <TypeWriter
                words={["_services"]}
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
            className="text-[16px] md:text-desc text-yellow md:leading-[16px] leading-[20px] text-center">
            …lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis mollis mauris, vitae mollis leo viverra eu. In cursus
            commodo interdum. Duis vitae ex massa. Quisque luctus diam.
          </motion.div>
        </div>

        <div className="grid grid-cols-12 w-full mt-[50px]">
          {ServicesData.map((service, index) => (
            <GetSmallServices service={service} index={index} />
          ))}
        </div>
      </section>

      <ContactMe />
    </div>
  );
};

const Services = () => {
  return <Layout activePage={"services"}>{<GetServices />}</Layout>;
};

export default Services;
