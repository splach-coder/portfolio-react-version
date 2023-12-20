import { useState } from "react";
import pages from "../consts/Pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = ({ activePage }) => {
  const [navState, setNavState] = useState(false);

  const openNav = () => {
    setNavState(true);
  };

  const closeNav = () => {
    setNavState(false);
  };

  return (
    <header>
      <div className="con min-h-auto">
        <div className="bg-black grid grid-cols-12 py-6 ms-[20px]">
          <div className="col-span-6 md:col-span-4">
            <div className="flex flex-col gap-y-1 text-[16px] leading-[16px] md:text-desc md:leading-[20px] text-white">
              <span>{"// splash-coder"}</span>
              <span className="text-purple">&nbsp;&nbsp;&nbsp;web_dev</span>
            </div>
          </div>
          <div
            className="col-span-6 text-right text-purple text-navigation md:hidden"
            onClick={openNav}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div
            className={`fixed left-0 top-0 w-screen h-screen z-50 flex items-center justify-center bg-black md:relative md:w-auto md:h-auto md:z-auto md:top-auto md:left-auto md:col-span-8 md:block ${
              navState ? "block" : "hidden"
            }`}>
            <div
              className="absolute top-4 right-6 text-purple text-navigation md:hidden"
              onClick={closeNav}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <ul className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-0 md:w-100 md:justify-end list-none text-navigation">
              {pages.map((page) => {
                return (
                  <li key={page.id}>
                    <Link
                      to={'/' + page.route}
                      className={`md:px-[10px] lg:px-[22px] no-underline ease duration-200 transition-colors ${
                        activePage === page.name.toLowerCase()
                          ? "text-ActiveBlue"
                          : "text-yellow hover:text-purple"
                      }`}>
                      _{page.name.toLowerCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
