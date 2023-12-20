import React from "react";
import pages from "../consts/Pages";

console.log(pages);

const Header = ({ activePage }) => {
  return (
    <header>
      <div className="container min-h-auto">
        <div className="bg-black grid grid-cols-12 py-6 mx-[20px]">
          <div className="col-span-4">
            <div className="flex flex-col gap-y-1 text-desc leading-[20px] text-white">
              <span>// splash-coder</span>
              <span className="text-purple">&nbsp;&nbsp;&nbsp;web_dev</span>
            </div>
          </div>
          <div className="col-span-8">
            <ul className="flex w-100 justify-end list-none text-navigation">
              {pages.map((page) => {
                return (
                  <li key={page.id}>
                    <a
                      key={page.id}
                      href="#"
                      className={`px-[22px] no-underline ease duration-200 transition-colors ${
                        activePage === page.name.toLowerCase()
                          ? "text-ActiveBlue"
                          : "text-yellow hover:text-purple"
                      }`}>
                      _{page.name.toLowerCase()}
                    </a>
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
