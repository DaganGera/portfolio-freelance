import React from "react";
import type { Metadata } from "next";
import Intro from "@/components/About/Intro";
import AboutMe from "@/components/About/AboutMe";
import MoreDetail from "@/components/About/MoreDetail";
import Resume from "@/components/About/Resume";
import Mockups from "@/components/About/Mockups";
import Closing from "@/components/About/Closing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Markow Studios — Marcben James Samuel S (design & development) and Kowshika S (outreach & PR), a Chennai-based freelance studio building websites, brand systems, and automations.",
};

function About() {
  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
        <Intro />
        <AboutMe />
        <MoreDetail />
        <Resume />
        <Mockups />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}

export default About;
