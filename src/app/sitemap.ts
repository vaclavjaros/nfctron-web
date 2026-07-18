import type { MetadataRoute } from "next";
import { INDEXABLE_ROUTES, SITE_INDEXING_ENABLED, SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_INDEXING_ENABLED) {
    return [];
  }

  const lastModified = new Date();

  return INDEXABLE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
