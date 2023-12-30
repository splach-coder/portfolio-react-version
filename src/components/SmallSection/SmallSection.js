import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import React from "react";

const SmallSection = ({ motion, variants, id, icon, title, desc }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      variants={variants.paragraphVariants}
      ref={ref}
      initial="hidden"
      animate={controls}
      key={id}
      className="col-span-12 md:col-span-6 flex flex-col gap-2 md:gap-4 border-t border-grey p-[20px] md:p-[50px]">
      <div className="text-purple text-navigation">{icon}</div>
      <div className="text-white text-navigation leading-[20px] md:text-smallTitle md:leading-[38px]">
        _{title}
      </div>
      <div className="text-[16px] leading-[16px] md:text-desc md:leadin-[20px] text-yellow">
        ...{desc}
      </div>
    </motion.div>
  );
};

export default SmallSection;
