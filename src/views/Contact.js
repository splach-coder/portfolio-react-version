import React from "react";
import Layout from "../layouts/Layout";
import ContactMe from "../components/ContactMe/ContactMe";

const getContact = () => {
  return (
    <div className="con">
      <ContactMe />

      <div className="w-full my-[50px]">
        <div className="grid grid-cols-12 md:border-t border-s md:border-s-0 border-grey w-[80%] mx-auto">
          <div className="col-span-12 md:col-span-3 flex flex-col gap-3 p-[30px] md:p-[50px] pe-[0px] border-grey border-b md:border-b-0 ">
            <span className="text-[15px] leading-[15px] md:text-[18px] md:leading-[18px] text-purple">
              {"{PHONE}"}
            </span>
            <span className="text-desc leading-[20px] md:leading-[31px] md:text-[31px] text-yellow">
              {"+212645098691"}
            </span>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col gap-3 p-[30px] md:p-[50px] pe-[0px] border-grey md:border-s border-b md:border-b-0 ">
            <span className="text-[15px] leading-[15px] md:text-[18px] md:leading-[18px] text-purple">
              {"{EMAIL}"}
            </span>
            <span className="text-desc leading-[20px] md:leading-[31px] md:text-[31px] text-yellow">
              {"anasbenabbou776@gmail.com"}
            </span>
          </div>
          <div className="col-span-12 md:col-span-3 flex flex-col gap-3 p-[30px] md:p-[50px] pe-[0px] border-grey md:border-s  ">
            <span className="text-[15px] leading-[15px] md:text-[18px] md:leading-[18px] text-purple">
              {"{ADRESS}"}
            </span>
            <span className="text-desc leading-[20px] md:leading-[31px] md:text-[31px] text-yellow">
              {"MORROCO, MARRAKECH"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return <Layout activePage={"contact"}>{getContact()}</Layout>;
};

export default Contact;
