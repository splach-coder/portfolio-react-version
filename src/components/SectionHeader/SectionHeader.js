import React from "react";

const SectionHeader = ({ icon, title, desc }) => (
    <div className="flex flex-col items-center gap-y-3 mb-[50px]">
      <div className="text-[31px] leading-[31px] text-purple">{icon}</div>
      <div className="text-white text-[40px] leading-[40px] md:text-[108px] md:leading-[86px]">{title}</div>
      <div
        className="text-yellow text-[16px] leading-[16px] md:text-desc md:leading-[20px] text-center"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  );
export default SectionHeader;
