import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const buttonVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24, duration: 1 },
  },
  hidden: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
};

const Button = ({ children, path, type, onClick }) => {
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
    <motion.button
      onClick={onClick !== undefined ? onClick : null}
      initial="hidden"
      animate={controls}
      ref={ref}
      type={type === undefined ? "button" : type}
      variants={buttonVariants}
      className=" bg-ActiveBlue px-[30px] py-[10px] md:px-[40px] md:py-[20px] border-none outline-none ease transition-colors duration-200 text-white mx-auto hover:bg-purple">
      {type === "submit" ? (
        children
      ) : (
        <Link
          to={path}
          className="text-desc md:text-navigation leading-[22px] text-white no-underline">
          {children}
        </Link>
      )}
    </motion.button>
  );
};

export default Button;
