import React from "react";
import Header3 from "../Header3";

function AboutMe() {
  const line1 = "I'm Marcben, founder of"
  const line2 = "Markow Studios, where I design"
  const line3 = "and build websites, brand"
  const line4 = "systems, and the CRM, ERP,"
  const line5 = "and WhatsApp/email automations"
  const line6 = "that keep small businesses"
  const line7 = "running smoothly behind the"
  const line8 = "scenes."

  return (
    <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
      <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
        <p className={`text-[14px] md:text-[18px]`}>
          About me
        </p>
        <div className="flex-1">
          <Header3 phrase={line1} className="indent-[10%]"/>
          <Header3 phrase={line2}/>
          <Header3 phrase={line3}/>
          <Header3 phrase={line4}/>
          <Header3 phrase={line5}/>
          <Header3 phrase={line6}/>
          <Header3 phrase={line7}/>
          <Header3 phrase={line8}/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
