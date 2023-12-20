import React from "react";
import Layout from "../layouts/Layout";
import TypeWriter from "../components/Typewriter/TypeWriter";
import "../assets/styles/home.css";
import Button from "../components/Button/Button";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import ContactMe from "../components/ContactMe/ContactMe";

const strings = ["_Web designer ", "_Frontend dev ", "_Backend dev "];

const getHome = () => {
  return (
    <div className="con">
      {/* welcoming section */}
      <section className="min-h-screen mx-[20px] bg-section">
        <div className="w-100 bg-black text-white pt-[90px] pb-[30px]">
          <div className="flex flex-col items-center">
            <div className="text-[18px] leading-[20px]">
              {"// HI, I'M SPLASH-CODER, A..."}
            </div>
            <div className="flex text-[30px] leading-[30px]  md:text-bigTitle  md:leading-[98px] mt-[15px] ">
              {`{"`}
              <span className="text-yellow">
                <TypeWriter
                  words={strings}
                  loop="false"
                  cursorStyle={"_"}
                  typeSpeed={120}
                />
              </span>
              {`"}`}
            </div>
          </div>

          <div className=" mt-28 text-center rotate-90">
            <span className="text-[31px] leading-[31px] p-[15px]">
              <a href="#about">{"==>"}</a>
            </span>
          </div>
        </div>
      </section>

      {/* about section */}
      <section
        className="mt-[150px] bg-black flex flex-col items-center"
        id="about">
        <SectionHeader
          icon="{/}"
          title="&lt;about_me&gt;"
          desc="...Step into my world of innovative code. Experience the passion and expertise <br /> of a seasoned full-stack engineer. Welcome to my about me!"
        />

        <div className="grid grid-cols-12 border-t md:border-b border-grey">
          <div className="col-span-12 md:col-span-6 underline text-white md:border-e-[1px] md:border-grey text-[18px] leading-[20px] md:text-smallTitle p-[20px] md:p-[60px] md:leading-[40px]">
            ...I have over 1 years of experience in web development, with a
            strong background in both front-end and back-end technologies;
          </div>
          <div className="col-span-12 border-y-[1px] md:border-t-0 border-grey md:col-span-6 text-[18px] leading-[18px] md:text-desc text-yellow p-[20px] md:p-[60px] md:leading-[20px]">
            …curabitur sit amet luctus tortor, sit amet ultrices ante. Maecenas
            convallis dui arcu, et tempor felis consectetur vel. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Sed id velit ex. Cras ultricies nisi eget sem mollis, a
            maximus felis laoreet. Nam eget ultricies urna, vel ullamcorper
            arcu. Quisque feugiat rhoncus arcu, a tincidunt arcu lacinia ac.
            Maecenas molestie vel ante in finibus. Sed sit amet ligula eros. In
            hac habitasse platea dictumst;
          </div>
        </div>
        <div className="border-s border-grey w-0 h-12 md:h-24"></div>
        <Button path={"/about"}> {"{Read More}"} </Button>
      </section>

      {/*portfolio section */}
      <section className="mt-[150px] bg-black" id="portfolio">
        <SectionHeader
          icon="(!)"
          title="&lt;portfolio&gt;"
          desc="...Welcome to my portfolio, where my creations come to life.
          Explore the beauty of innovation <br />
          and creativity. Embrace the extraordinary."
        />
      </section>

      {/*services section */}
      <section
        className="mt-[150px] bg-black flex flex-col items-center mb-10"
        id="services">
        <SectionHeader
          icon="{#}"
          title="&lt;services&gt;"
          desc=" ...Ignite your brand with bespoke services. Experience
          transformative <br />
          journeys that leave a lasting emotional impact."
        />

        <div className="px-5 pt-5 w-100 overflow-y-hidden w-full">
          <div className="border border-grey md:text-[108px] md:leading-[86px] mb-[20px] text-white py-[20px] border-e ease duration-200 transition-colors flex justify-center bg-gradient-to-r from-transparent to-[#9b99ff30]  hover:bg-yellow text-[30px] leading-[30px] ">
            {'{"'}
            <span className="text-purple">
              <TypeWriter
                words={[" _Web design "]}
                loop="false"
                cursorStyle={"_"}
                typeSpeed={120}
              />
            </span>
            {'"}'}
          </div>
          <div className="border border-grey text-[30px] leading-[30px] md:text-[108px] md:leading-[86px] mb-[20px] text-white text-center py-[20px] border-e ease duration-200 transition-colors flex justify-center bg-gradient-to-r from-transparent to-[#2fcbef30] hover:bg-yellow ">
            {'{"'}
            <span className=" text-ActiveBlue">
              <TypeWriter
                words={[" _front-end dev "]}
                loop="false"
                cursorStyle={"_"}
                typeSpeed={120}
              />
            </span>
            {'"}'}
          </div>
          <div className="border border-grey text-[30px] leading-[30px] md:text-[108px] md:leading-[86px] text-white text-center py-[20px] border-e ease duration-200 transition-colors flex justify-center bg-gradient-to-r from-transparent to-[#e6db7430] hover:bg-yellow">
            {'{"'}
            <span className="text-yellow hover:text-ActiveBlue">
              <TypeWriter
                words={[" _back-end dev "]}
                loop="false"
                cursorStyle={"_"}
                typeSpeed={120}
              />
            </span>
            {'"}'}
          </div>
        </div>

        {/* devider  */}
        <div className="border-s border-grey w-0 h-16 md:h-36"></div>

        <Button path={"/services"}>{"{all services}"}</Button>
      </section>

      {/*empty section */}
      <section className="py-[100px] mx-[20px] bg-section"></section>

      <ContactMe />
    </div>
  );
};

const Home = () => {
  return <Layout activePage={"home"}>{getHome()}</Layout>;
};

export default Home;
