import React from "react";
import Layout from "../layouts/Layout";
import ServicesData from "../components/consts/Services";
import TypeWriter from "../components/Typewriter/TypeWriter";
import ContactMe from "../components/ContactMe/ContactMe";

const getServices = () => {
  return (
    <div className="con">
      <section className="ms-[20px] overflow-y-hidden">
        <div className="flex flex-col items-center mx-auto gap-7 max-w-[350px] md:max-w-3xl pt-[90px]">
          <div className="flex text-smallTitle leading-[30px] md:text-bigTitle md:leading-[98px] mt-[15px] text-white">
            {`{"`}
            <span className="text-ActiveBlue">
              <TypeWriter
                words={["_services"]}
                loop="false"
                cursorStyle={"_"}
                typeSpeed={120}
              />
            </span>
            {`"}`}
          </div>
          <div className="text-[16px] md:text-desc text-yellow md:leading-[16px] leading-[20px] text-center">
            …lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis mollis mauris, vitae mollis leo viverra eu. In cursus
            commodo interdum. Duis vitae ex massa. Quisque luctus diam.
          </div>
        </div>

        <div className="grid grid-cols-12 w-full mt-[50px]">
          {ServicesData.map((service, index) => (
            <div
              key={service.id}
              className="col-span-12 grid grid-cols-12 border-t border-grey ">
              <div className="col-span-12 md:col-span-8 flex justify-between border-b md:border-b-0 md:border-r border-grey p-[20px] md:p-[50px]">
                <div className="text-white">{`{0${index + 1}}`}</div>
                <div className="">
                  <div className="flex text-navigation leading-[22px] md:text-[48px] md:leading-[48px] text-white">
                    {`< `}
                    <span className="text-purple">
                      <TypeWriter
                        words={[" _" + service.title]}
                        loop="false"
                        cursorStyle={"_"}
                        typeSpeed={120}
                      />
                    </span>
                    {` >`}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 text-[16px] md:text-desc text-yellow md:leading-[16px] leading-[20px] text-left p-[20px] md:p-[50px]">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactMe />
    </div>
  );
};

const Services = () => {
  return <Layout activePage={"services"}>{getServices()}</Layout>;
};

export default Services;
