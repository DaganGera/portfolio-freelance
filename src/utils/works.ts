import { Projects } from "@/types/type";

import DeluvIntro from "../../public/images/deluv/intro.jpg";
import DeluvMain from "../../public/images/deluv/main.jpg";
import DeluvLandscape1 from "../../public/images/deluv/landscape1.jpg";
import DeluvLandscape2 from "../../public/images/deluv/landscape2.jpg";
import DeluvLandscape3 from "../../public/images/deluv/landscape3.jpg";
import DeluvPortrait1 from "../../public/images/deluv/portrait1.jpg";
import DeluvPortrait2 from "../../public/images/deluv/portrait2.jpg";

import Studio11Intro from "../../public/images/studio11/intro.jpg";
import Studio11Main from "../../public/images/studio11/main.jpg";
import Studio11Landscape1 from "../../public/images/studio11/landscape1.jpg";
import Studio11Landscape2 from "../../public/images/studio11/landscape2.jpg";
import Studio11Landscape3 from "../../public/images/studio11/landscape3.jpg";
import Studio11Portrait1 from "../../public/images/studio11/portrait1.jpg";
import Studio11Portrait2 from "../../public/images/studio11/portrait2.jpg";

import EdathonIntro from "../../public/images/edathon/intro.jpg";
import EdathonMain from "../../public/images/edathon/main.jpg";
import EdathonLandscape1 from "../../public/images/edathon/landscape1.jpg";
import EdathonLandscape2 from "../../public/images/edathon/landscape2.jpg";
import EdathonPortrait1 from "../../public/images/edathon/portrait1.jpg";
import EdathonPortrait2 from "../../public/images/edathon/portrait2.jpg";

const projects = [
  {
    title: "DeLuv",
    alt: "bridal makeup artist applying eyeshadow on a client",
    year: "2026",
    roles: ["web design", "frontend development"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    website: "https://deluv.vercel.app/",
    duration: "3 weeks",
    description1: [
      "DeLuv is a bridal beauty studio and boutique in Chennai, offering Korean skincare, bridal makeup, saree draping, and curated jewellery under one roof. The brief was to make a premium, appointment-driven service feel as considered online as it does in the studio — quiet, editorial, and unmistakably bridal.",
      "I designed and built the site end to end in Next.js, pairing a soft cream-and-blush palette with an editorial serif for headlines and restrained motion for scroll reveals. Every section — the seven-service breakdown, the step-by-step bridal experience, and the studio's own portfolio photography — was structured to move a visitor from ‘just looking’ to booking a consultation.",
    ],
    description2: [
      "The biggest challenge was pacing: bridal clients research for weeks before they commit, so the site needed to earn trust gradually instead of front-loading a hard sell. I leaned on real studio photography, a clear ‘how it works’ consultation flow, and honest copy instead of stock imagery or generic beauty-brand language.",
      "Performance mattered too — most visitors land on mobile from an Instagram bio link, so I optimized image loading and kept animations lightweight so the site feels instant on a phone in direct sunlight, not just on a designer's laptop.",
    ],
    position: "md:justify-end",
    mainImage: DeluvMain,
    introImage: DeluvIntro,
    imagesLandscape: [
      {
        image: DeluvLandscape1,
        alt: "DeLuv's seven-service grid: Bridal Makeup, Korean Glass Skin, Boutique, and Bridal Jewellery",
      },
      {
        image: DeluvLandscape2,
        alt: "bride in a maroon saree with gold jewellery during a bridal consultation",
      },
      {
        image: DeluvLandscape3,
        alt: "Korean glass-skin studio shelf with skincare product bottles",
      },
    ],
    imagesPortrait: [
      {
        image: DeluvPortrait1,
        alt: "DeLuv mobile homepage: luxury bridal beauty and the Korean glass-skin experience",
      },
      {
        image: DeluvPortrait2,
        alt: "bridal makeup artist applying eyeshadow on a client, mobile view",
      },
    ],
  },
  {
    title: "Studio11 Kodambakkam",
    alt: "hairstylist finishing a client's blow-dry in the salon",
    year: "2026",
    roles: ["web design", "frontend development"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    website: "https://studio11-kodambakkam.vercel.app/",
    duration: "2.5 weeks",
    description1: [
      "Studio11 Kodambakkam is a neighbourhood hair, skin, and bridal salon on Rathinammal Street, Chennai, with 40+ Google reviews and stylists that regulars book by name. They needed a site that read as premium as their in-chair experience, without losing the walk-in-friendly, neighbourhood feel that keeps clients coming back.",
      "I built a single-page site in Next.js organized around how people actually decide where to get their hair done: a confident hero with real salon photography, a browsable service menu spanning hair, skin, bridal, and grooming, and direct paths to call or book — no unnecessary steps between intent and appointment.",
    ],
    description2: [
      "The salon offers a genuinely wide menu — hair, skin, hands and feet, bridal, men's grooming — and the challenge was presenting all of it without turning the page into a wall of text. I grouped services into colour-coded cards with just enough detail to help someone pick a treatment, backed by real photos of the actual space and stylists, not stock imagery.",
      "Since most first-time visitors find the salon through a Google search for salons nearby, I paid close attention to on-page SEO — structured headings, descriptive alt text, and fast load times — so the site actually shows up for the searches that matter.",
    ],
    position: "md:justify-start",
    mainImage: Studio11Main,
    introImage: Studio11Intro,
    imagesLandscape: [
      {
        image: Studio11Landscape1,
        alt: "'Five things, done properly' — Studio11 service categories with real salon photography",
      },
      {
        image: Studio11Landscape2,
        alt: "Studio11 Kodambakkam salon interior with styling chairs and mirrors",
      },
      {
        image: Studio11Landscape3,
        alt: "detail shots of the salon: styling chairs, hair colour, and nail care",
      },
    ],
    imagesPortrait: [
      {
        image: Studio11Portrait1,
        alt: "Studio11 Kodambakkam mobile homepage with booking buttons",
      },
      {
        image: Studio11Portrait2,
        alt: "Hair service card listing cuts, colour, and styling, mobile view",
      },
    ],
  },
  {
    title: "EDA-THON",
    alt: "EDA-THON event microsite hero with circuit-board background",
    year: "2026",
    roles: ["web design", "frontend development", "event branding"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"],
    website: "https://edathon-v2.vercel.app/",
    duration: "1.5 weeks",
    description1: [
      "EDA-THON is a one-day exploratory data analysis competition run by the Department of Artificial Intelligence & Data Science and the Data Analytics Club at St. Joseph's College of Engineering — take a raw dataset, clean it, model it, and defend the call you made, all in one afternoon. As the club's president, I designed and built the event's microsite myself.",
      "I leaned into a terminal-and-circuitry visual language — live status indicators, a stage-by-stage countdown, and monospaced data readouts — to make the site itself feel like part of the competition. Every essential detail (date, venue, hours, who's eligible) sits in one glanceable panel instead of being buried in a paragraph.",
    ],
    description2: [
      "Building this alongside actually organizing the event meant the timeline was tight and the requirements changed as registrations came in, so the site needed to be easy to update without a redeploy cycle eating into event-week time. I kept the data — dates, stages, rules — cleanly separated from the visual system so last-minute changes stayed quick and safe.",
      "It was also a chance to design something more experimental than a typical client site: the audience is technical, so I could lean into a denser, more dashboard-like interface than I'd use for a salon or boutique, while keeping the actual registration flow simple and fast.",
    ],
    position: "md:justify-center",
    mainImage: EdathonMain,
    introImage: EdathonIntro,
    imagesLandscape: [
      {
        image: EdathonLandscape1,
        alt: "EDA-THON schedule panel: workshop, competition, techniques, and prizes",
      },
      {
        image: EdathonLandscape2,
        alt: "EDA-THON 'the loop' stages and working hours schedule",
      },
    ],
    imagesPortrait: [
      {
        image: EdathonPortrait1,
        alt: "EDA-THON mobile hero with department badges and awaiting-entry status",
      },
      {
        image: EdathonPortrait2,
        alt: "EDA-THON mobile stats panel: attempts, checkpoints, deliverables, format",
      },
    ],
  },
];

export const allProjects: Projects[] = [];

projects.forEach((item, i) => {
  allProjects.push({
    ...item,
    id: i,
  });
});
