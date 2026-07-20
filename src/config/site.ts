export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nfctron.com"
).replace(/\/$/, "");

/**
 * Intentional: this pre-release site must stay undiscoverable until launch.
 * Keep false while www-pg is a public preview. Flip to true only when
 * this site replaces production www and SEO should go live.
 * Also remove the X-Robots-Tag header in next.config.js when enabling.
 */
export const SITE_INDEXING_ENABLED = false;

export interface IndexableRoute {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly";
  priority: number;
}

/** Route registry for the XML sitemap once SITE_INDEXING_ENABLED is true. */
export const INDEXABLE_ROUTES: IndexableRoute[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/for-organizers", changeFrequency: "weekly", priority: 0.8 },
  { path: "/for-organizers/ticketing", changeFrequency: "weekly", priority: 0.8 },
  { path: "/production", changeFrequency: "weekly", priority: 0.8 },
  { path: "/for-retailers", changeFrequency: "monthly", priority: 0.6 },
  { path: "/for-artists", changeFrequency: "monthly", priority: 0.6 },
  { path: "/music", changeFrequency: "weekly", priority: 0.7 },
  { path: "/cards", changeFrequency: "monthly", priority: 0.5 },
  { path: "/company-structure", changeFrequency: "monthly", priority: 0.6 },
  { path: "/brand-assets", changeFrequency: "monthly", priority: 0.5 },
  {
    path: "/for-artists/sebastian",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/for-artists/elizabeth-kopecka",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/for-artists/like-it",
    changeFrequency: "weekly",
    priority: 0.7,
  },
];
