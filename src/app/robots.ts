import type { MetadataRoute } from "next";
import { SITE_INDEXING_ENABLED, SITE_URL } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!SITE_INDEXING_ENABLED) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
