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
      <div className="container text-yellow min-h-auto px-[20px] py-5">
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <ul className="flex w-100 flex-wrap">
              {pages.map((page) => {
                return (
                  <li key={page.id}>
                    <Link
                      key={page.id}
                      to={`${
                        activePage === page.name.toLowerCase()
                          ? "#"
                          : "/" + page.name.toLowerCase()
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
          <div className="col-span-2 flex gap-3 justify-center text-desc leading-[20px] no-underline text-purple">
            <a href="https://github.com/splach-coder">
              <div className="text-purple">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </a>
            <a href="https://instagram.com/a.iverson73?igshid=ZDc4ODBmNjlmNQ==">
              <div className="text-purple">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </a>
            <a href="https://twitter.com/anasbenbow123?t=r9rg2US37a6XNLKxCZZ1gw&s=08">
              <div className="text-purple">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </a>
          </div>
          <div className="col-span-5 flex justify-end">
            Copyright ©
            <script>document.write(new Date().getFullYear());</script>
            splash-coder Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
