import type { MetadataRoute } from "next";
import { allProjects } from "@/utils/works";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://markowstudios.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  const workRoutes: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${siteUrl}/works/${project.title.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes];
}
