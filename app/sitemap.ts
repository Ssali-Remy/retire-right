import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://retirerightadvisory.com";
  const now = new Date();
  return [
    "",
    "#about",
    "#services",
    "#quiz",
    "#community",
    "#wellness",
    "#impact",
    "#blog",
    "#contact",
  ].map((path) => ({
    url: `${base}/${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
