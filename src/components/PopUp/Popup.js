import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";

const Popup = ({ text, handleClose }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <motion.div
      onClick={handleClose}
      className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-50 bg-grey flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="border-2 border-dashed border-yellow p-[30px] w-[50%] max-w-[500px] min-w-[250px] flex flex-col gap-3"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit">
        <div className="text-[31px] leading-[31px] text-purple">{"{M}"}</div>
        <p className="text-white text-[30px] leading-[30px] md:text-[60px] md:leading-[60px]">
          {text}
        </p>
        <Button onClick={handleClose}>Close</Button>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
