import { Services } from "@/types/type";

const services = [
  {
    title: "Web Design & Development",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "GSAP",
      "SEO",
      "Supabase",
      "Vercel",
    ],
    description:
      "From landing pages to full multi-page sites, I design and build fast, responsive websites for small businesses, studios, and events — the kind that load instantly, read well on a phone, and actually rank on Google. Every project starts in Figma and ends as a production Next.js site, not a static mockup.",
  },
  {
    title: "Brand & Poster Design",
    technologies: [
      "Figma",
      "Poster Design",
      "Social Media Kits",
      "Typography",
      "Color Theory",
      "Brand Guidelines",
    ],
    description:
      "Logos, posters, and social media creatives that give a brand a consistent face across print and screen. I build a simple visual system first — colors, type, layout logic — so every poster or post looks like it belongs to the same brand, not a one-off design.",
  },
  {
    title: "CRM & ERP Systems",
    technologies: [
      "Custom CRM",
      "Inventory & Ops",
      "Supabase",
      "PostgreSQL",
      "Google Sheets",
      "Dashboards",
    ],
    description:
      "Custom-built CRM and lightweight ERP tools for businesses that have outgrown spreadsheets — lead tracking, inventory, bookings, and internal dashboards, built around how your team already works instead of forcing you into a generic template.",
  },
  {
    title: "Workflow Automation",
    technologies: [
      "n8n",
      "WhatsApp API",
      "Email Automation",
      "Webhooks",
      "Google Workspace",
      "Zapier-style Flows",
    ],
    description:
      "Automated workflows that handle the repetitive parts of running a business — WhatsApp and email follow-ups, lead routing, booking confirmations, and data syncing between the tools you already use, built with n8n so they keep running long after the handoff.",
  },
];

export const allServices: Services[] = [];

services.forEach((item, i) => {
  allServices.push({
    ...item,
    id: i + 1,
  });
});
