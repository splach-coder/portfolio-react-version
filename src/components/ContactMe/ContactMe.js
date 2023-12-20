import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";

const ContactMe = () => {
  return (
    <section className="mt-[150px] bg-black" id="contactme">
      <SectionHeader
        icon="{*}"
        title="&lt;Contact me&gt;"
        desc="...Unlock the gateway to connection. Reach out and let's embark
  <br />
  on a transformative journey together."
      />

      <div className="w-full pb-5 flex flex-col items-center">
        <div className="w-[80%]">
          <form action="#" className="flex flex-col gap-4">
            <input
              type="text"
              id="name"
              className="py-7  outline-none border-b border-grey bg-transparent text-purple text-desc leading-[20px] ease duration-200 transition-all focus:border-b-2 focus:border-purple placeholder:text-purple"
              placeholder="_name*"
            />
            <input
              type="email"
              id="email"
              className="py-7  outline-none border-b border-grey bg-transparent text-purple text-desc leading-[20px] ease duration-200 transition-all focus:border-b-2 focus:border-purple placeholder:text-purple "
              placeholder="_email*"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="py-7  outline-none border-b border-grey bg-transparent text-purple text-desc leading-[20px] ease duration-200 transition-all focus:border-b-2 focus:border-purple placeholder:text-purple"
              placeholder="_message*"></textarea>
          </form>
        </div>
        {/* devider  */}
        <div className="border-s border-grey w-0 h-12 md:h-24"></div>
        <Button>{"{send}"}</Button>
      </div>
    </section>
  );
};

export default ContactMe;
