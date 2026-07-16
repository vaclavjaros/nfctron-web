export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nfctron.com"
).replace(/\/$/, "");

export interface IndexableRoute {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly";
  priority: number;
}

// Add every new public page here when it is ready for search engine indexing.
export const INDEXABLE_ROUTES: IndexableRoute[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/for-organizers", changeFrequency: "weekly", priority: 0.8 },
  { path: "/for-retailers", changeFrequency: "monthly", priority: 0.6 },
  { path: "/for-artists", changeFrequency: "monthly", priority: 0.6 },
  { path: "/cards", changeFrequency: "monthly", priority: 0.5 },
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
