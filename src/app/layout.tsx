import type { Metadata } from "next";
import { satoshiRegular } from "@/fonts/font";
import { Provider } from "@/components/Provider";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Scroll from "@/components/Scroll";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://markowstudios.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Markow Studios | Web Design, CRM/ERP & Automation in Chennai",
    template: "%s | Markow Studios",
  },
  description:
    "Markow Studios is a Chennai-based freelance studio designing and building websites, brand posters, CRM/ERP systems, and WhatsApp & email automations (powered by n8n) for clients worldwide.",
  keywords: [
    "Markow Studios",
    "web design Chennai",
    "freelance web developer Chennai",
    "CRM development",
    "ERP systems",
    "n8n automation",
    "WhatsApp automation",
    "poster design",
    "brand identity design",
  ],
  authors: [{ name: "Marcben James Samuel S" }],
  creator: "Markow Studios",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Markow Studios",
    title: "Markow Studios | Web Design, CRM/ERP & Automation in Chennai",
    description:
      "Websites, brand posters, CRM/ERP systems, and WhatsApp & email automations — designed and built by Markow Studios, Chennai.",
    images: [
      {
        url: "/images/general/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Markow Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Markow Studios | Web Design, CRM/ERP & Automation in Chennai",
    description:
      "Websites, brand posters, CRM/ERP systems, and WhatsApp & email automations — designed and built by Markow Studios, Chennai.",
    images: ["/images/general/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Markow Studios",
    url: siteUrl,
    logo: `${siteUrl}/images/general/markow-logo.png`,
    image: `${siteUrl}/images/general/og-image.jpg`,
    email: "markowstudios@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: "Worldwide",
    sameAs: [
      "https://www.instagram.com/markow_studios/",
      "https://github.com/DaganGera",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Marcben James Samuel S",
      },
      {
        "@type": "Person",
        name: "Kowshika S",
      },
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design & Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand & Poster Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & ERP Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workflow Automation" } },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${satoshiRegular.className} scrollbar scrollLight dark:scrollDark duration-300 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText
              `}
        suppressHydrationWarning
      >
        <LenisScroll>
          {/* GSAP SCROLLTRIGGER */}
          <Scroll>
            {/* ENABLES DARK AND LIGHT MODE */}
            <Provider>
              <div>{children}</div>
            </Provider>
          </Scroll>
        </LenisScroll>
      </body>
    </html>
  );
}
