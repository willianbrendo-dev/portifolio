import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: "2026-08-11",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
