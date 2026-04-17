import type { MetadataRoute } from "next";
import { brand } from "@/src/data/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: brand.siteUrl,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
