import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, path }) => {
  return (
    <button className=" bg-ActiveBlue px-[30px] py-[10px] md:px-[40px] md:py-[20px] border-none outline-none ease transition-colors duration-200 text-white mx-auto hover:bg-purple">
      <Link to={path} className="text-desc md:text-navigation leading-[22px] text-white no-underline">{children}</Link>
    </button>
  );
};

export default Button;
