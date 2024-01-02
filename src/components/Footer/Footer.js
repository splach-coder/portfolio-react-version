import React from "react";
import pages from "../consts/Pages";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

<FontAwesomeIcon icon={faGithub} />;
const Footer = ({ activePage }) => {
  return (
    <footer className=" border-t-[1px] border-grey ">
      <div className="con text-yellow min-h-auto px-[20px] py-5">
        <div className="grid grid-cols-12">
          <div className="col-span-6 md:col-span-5">
            <ul className="flex w-100 flex-wrap">
              {pages.map((page) => {
                return (
                  <li key={page.id}>
                    <Link
                      key={page.id}
                      to={`${
                        activePage === page.name.toLowerCase()
                          ? "#"
                          : "/" + page.route.toLowerCase()
                      }`}
                      className={`px-[20px] no-underline ease duration-200 transition-colors ${
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
          <div className="col-span-6 md:col-span-2 flex flex-col md:flex-row gap-3 items-end md:items-start md:justify-center text-desc leading-[20px] no-underline text-purple">
            <a href="https://github.com/splach-coder" ariaLabel="welcome to visite my github">
              <div className="text-purple">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </a>
            <a href="https://instagram.com/a.iverson73?igshid=ZDc4ODBmNjlmNQ==" ariaLabel="welcome to visite my instagram">
              <div className="text-purple">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </a>
            <a href="https://twitter.com/anasbenbow123?t=r9rg2US37a6XNLKxCZZ1gw&s=08" ariaLabel="welcome to visite my twitter">
              <div className="text-purple">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </a>
          </div>
          <div className="col-span-12 text-sm md:text-dsec md:col-span-5 mt-10 md:mt-0 flex justify-center md:justify-end md:items-start">
            Copyright ©{new Date().getFullYear() + " "} 
             splash-coder Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
