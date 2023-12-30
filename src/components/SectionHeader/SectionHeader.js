import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../AnimatedText/AnimatedText";

const SectionHeader = ({ icon, title, desc }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={container}
      className="flex flex-col items-center gap-y-3 mb-[50px]">
      <motion.div className="text-[31px] leading-[31px] text-purple">
        <AnimatedText type="heading1" text={icon} />
      </motion.div>
      <motion.div className="text-white text-[40px] leading-[40px] md:text-[108px] md:leading-[86px]">
        <AnimatedText type="heading1" text={title} />
      </motion.div>
      <motion.div className="text-yellow text-[16px] leading-[16px] md:text-desc md:leading-[20px] text-center max-w-[400px] md:max-w-3xl">
        <AnimatedText type="paragraph" text={desc} />
      </motion.div>
    </motion.div>
  );
};
export default SectionHeader;
