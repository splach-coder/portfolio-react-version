import { useState, useEffect, memo } from "react";
import pages from "../consts/Pages";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = ({ activePage }) => {
  const [navState, setNavState] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(windowWidth < 767);

  // Function to update window width in state
  const updateWindowWidth = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(() => newWindowWidth);
  };

  useEffect(() => {
    setIsSmallScreen(windowWidth < 767);
  }, [windowWidth]);

  // Effect to set up event listener for window resize
  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("resize", updateWindowWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const openNav = () => {
    setNavState(true);
  };

  const closeNav = () => {
    setNavState(false);
  };

  /*Framer Motion Variants */
  const itemVariants =
    isSmallScreen === true
      ? {
          open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
          closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
        }
      : {};

  const ulVariants = {
    open: {
      clipPath: isSmallScreen ? "inset(0% 0% 0% 0% round 10px)" : undefined,
      transition: {
        type: "spring",
        bounce: 0,
        duration: isSmallScreen ? 0.7 : 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      clipPath: isSmallScreen ? "inset(10% 50% 90% 50% round 10px)" : undefined,
      transition: {
        type: "spring",
        bounce: 0,
        duration: isSmallScreen ? 0.3 : 0.3,
      },
    },
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="con min-h-auto">
        <div className="bg-black grid grid-cols-12 py-6 ms-[20px]">
          <div className="col-span-6 md:col-span-4">
            <div className="flex flex-col gap-y-1 text-[16px] leading-[16px] md:text-desc md:leading-[20px] text-white">
              <span>{"// splash-coder"}</span>
              <span className="text-purple">&nbsp;&nbsp;&nbsp;web_dev</span>
            </div>
          </div>
          <div className="col-span-6 flex justify-end text-purple text-navigation md:hidden">
            <motion.svg
              onClick={openNav}
              width="20"
              viewBox="0 0 600 600"
              initial="hidden"
              style={{ height: "100%" }}
              animate={isSmallScreen ? "visible" : "hidden"}>
              <motion.line
                x1="50"
                y1="100"
                x2="550"
                y2="100"
                strokeWidth="110px"
                stroke="#9a99ff"
                variants={draw}
                custom={0}
                strokeLinecap="round"
              />
              <motion.line
                x1="550"
                y1="300"
                x2="200"
                y2="300"
                strokeWidth="110px"
                stroke="#9a99ff"
                variants={draw}
                custom={0.5}
                strokeLinecap="round"
              />
              <motion.line
                x1="50"
                y1="500"
                x2="550"
                y2="500"
                strokeWidth="110px"
                stroke="#9a99ff"
                variants={draw}
                custom={0}
                strokeLinecap="round"
              />
            </motion.svg>
          </div>
          <motion.div
            initial={isSmallScreen ? "closed" : "open"}
            animate={navState ? "open" : "closed"}
            className={`fixed left-0 top-0 w-screen h-screen z-50 flex items-center justify-center bg-black md:relative md:w-auto md:h-auto md:z-auto md:top-auto md:left-auto md:col-span-8 md:block ${
              navState ? "block" : "hidden"
            }`}>
            <motion.div
              className="absolute top-6 right-8 text-purple text-navigation md:hidden"
              onClick={closeNav}>
              <motion.svg
                width="60"
                height="60"
                viewBox="0 0 600 600"
                initial="hidden"
                animate={navState ? "visible" : "hidden"}>
                <motion.line
                  x1="220"
                  y1="30"
                  x2="360"
                  y2="170"
                  strokeWidth="30px"
                  stroke="#9a99ff"
                  variants={draw}
                  custom={0}
                  strokeLinecap="round"
                />
                <motion.line
                  x1="220"
                  y1="170"
                  x2="360"
                  y2="30"
                  strokeWidth="30px"
                  stroke="#9a99ff"
                  variants={draw}
                  custom={0.5}
                  strokeLinecap="round"
                />
              </motion.svg>
            </motion.div>
            <motion.ul
              className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-0 md:w-100 md:justify-end list-none text-navigation"
              variants={ulVariants}
              style={
                isSmallScreen
                  ? {
                      pointerEvents: navState ? "auto" : "none",
                    }
                  : {}
              }>
              {pages.map((page) => {
                return (
                  <motion.li key={page.id} variants={itemVariants}>
                    <Link
                      to={"/" + page.route}
                      className={`md:px-[10px] lg:px-[22px] no-underline ease duration-200 transition-colors ${
                        activePage === page.name.toLowerCase()
                          ? "text-ActiveBlue"
                          : "text-yellow hover:text-purple"
                      }`}>
                      _{page.name.toLowerCase()}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default memo(Header);
