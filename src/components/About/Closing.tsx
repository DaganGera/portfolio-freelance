"use client";
import React from "react";
import Header3 from "../Header3";

function Closing() {
  const line1 = "When we're not building, you'll";
  const line2 = "find Marcben deep in a chess";
  const line3 = "game or a Rubik's Cube, and";
  const line4 = "Kowshika keeping every client";
  const line5 = "conversation warm. Two people,";
  const line6 = "one studio, no missed follow-ups.";

  return (
    <section className="mt-[8vh] mb-[4vh] sm:my-[5vh] md:my-[8vh]">
      <Header3 phrase={line1} className="indent-[10%]" />
      <Header3 phrase={line2} />
      <Header3 phrase={line3} />
      <Header3 phrase={line4} />
      <Header3 phrase={line5} />
      <Header3 phrase={line6} />
    </section>
  );
}

export default Closing;
