import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { tours } from "@/data/tours";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://bachitours.com";

const localizedPath = (locale: string, key: string, slug?: string) => {
  const map = routing.pathnames as Record<string, string | Record<string, string>>;
  const entry = map[key];
  let path = typeof entry === "string" ? entry : (entry as Record<string, string>)[locale];
  if (slug && path) path = path.replace("[slug]", slug);
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticKeys = ["/", "/tours", "/booking", "/about", "/contact", "/faq", "/terms", "/cancellation", "/privacy", "/imprint"];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const key of staticKeys) {
      entries.push({
        url: `${SITE}${localizedPath(locale, key)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: key === "/" ? 1.0 : 0.7,
      });
    }
    for (const tour of tours) {
      const slug = tour.i18n[locale].slug;
      entries.push({
        url: `${SITE}${localizedPath(locale, "/tours/[slug]", slug)}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
  }
  return entries;
}
