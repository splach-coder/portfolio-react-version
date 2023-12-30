const variants = {
  paragraphVariants: {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24, duration: 1 },
    },
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
  },
};

export default variants;
