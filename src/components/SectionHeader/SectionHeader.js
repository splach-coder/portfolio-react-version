import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const items = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.025,
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 1,
      },
    },
    hidden: { opacity: 0, y: -200, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={container}
      className="flex flex-col items-center gap-y-3 mb-[50px]">
      <motion.div
        variants={items}
        className="text-[31px] leading-[31px] text-purple">
        {icon}
      </motion.div>
      <motion.div
        variants={items}
        className="text-white text-[40px] leading-[40px] md:text-[108px] md:leading-[86px]">
        {title}
      </motion.div>
      <motion.div
        variants={items}
        className="text-yellow text-[16px] leading-[16px] md:text-desc md:leading-[20px] text-center max-w-[400px] md:max-w-3xl">
        {desc}
      </motion.div>
    </motion.div>
  );
};
export default SectionHeader;
