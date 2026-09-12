"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Paragraph from "../Paragraph";
import AboutImage1 from "../../../public/images/general/about/aboutMain2.jpg";
import AboutImage2 from "../../../public/images/general/about/aboutIntro1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion, useInView } from "framer-motion";

function MoreDetail() {
  const image1 = useRef(null);
  const image2 = useRef(null);

  const textRef = useRef(null);
  const text = useInView(textRef, { once: true });

  const EASING = [0.83, 0, 0.17, 1];

  useGSAP(() => {
    gsap.to(image1.current, {
      y: "10%",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(image2.current, {
      y: "10%",
      scrollTrigger: {
        trigger: image2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  const rise = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="mt-[5vh]">
      <div className="flex flex-col md:flex-row items-end gap-6 md:pl-[8vw]">
        <div className="w-full flex-1 object-cover overflow-hidden">
          <Image
            src={AboutImage1}
            alt="self portrait"
            className="w-full h-full scale-110"
            placeholder="blur"
            ref={image1}
          />
        </div>
        <div className="flex-[1.5]">
          <div className="w-full object-cover overflow-hidden">
            <Image
              src={AboutImage2}
              alt="beautiful pink flower"
              className="w-full h-full scale-110"
              placeholder="blur"
              ref={image2}
            />
          </div>
          <div className="mt-[4vh]" ref={textRef}>
            <div className="overflow-hidden">
              <motion.h2
                variants={rise}
                initial="initial"
                animate={text && "animate"}
                className={`tracking-tighter text-[10vw] md:text-[7vw] leading-[1] uppercase`}
              >
                Persistence
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                variants={rise}
                initial="initial"
                animate={text && "animate"}
                className={`tracking-tighter text-[10vw] md:text-[7vw] leading-[1] uppercase`}
              >
                & Motivation
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-x-[5vw] mt-8 md:mt-[8vh] pr-0 pl-[8vw] md:pr-[6vw] md:pl-0"
      >
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-1">
          <div>
            <Paragraph
              text="I'm a fifth-semester AI &amp; Data Science student at St. Joseph's College of Engineering in Chennai, and outside of coursework I build production websites, backend systems, and machine learning pipelines — the kind of range that makes Markow Studios useful for more than just a landing page."
            />
          </div>
          <div className="mt-6">
            <Paragraph text="Freelance work started as a way to apply what I was learning to real projects: a boutique's booking site, a salon's service menu, an event microsite for a hackathon I helped organize. Each one taught me something that made the next one faster and better." />
          </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <div>
            <Paragraph text="The same problem-solving instinct that goes into training a retrieval model or debugging an API goes into figuring out why a client's booking flow isn't converting — it's the same job, different stack." />
          </div>
          <div className="mt-6">
            <Paragraph text="Markow Studios exists so that instinct — plan it, build it, automate what shouldn't need a human every time — is available to businesses that just need their website, their CRM, and their WhatsApp follow-ups to actually work together." />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default MoreDetail;
