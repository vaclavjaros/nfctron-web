# NFCtron web — indexing checklist

## Current status (intentional)

**Search indexing is OFF** for this pre-release site (`nfctron-www-pg`).

That is deliberate until launch. The site can stay public for internal
review, but crawlers should not discover or index it.

Controlled by `SITE_INDEXING_ENABLED` in `src/config/site.ts` (currently
`false`). While off:

- every page emits `noindex, nofollow` meta robots
- `robots.txt` disallows all user agents
- `/sitemap.xml` is empty and is not advertised
- responses send `X-Robots-Tag: noindex, nofollow` (see `next.config.js`)

When this site replaces production www, flip `SITE_INDEXING_ENABLED` to
`true` and remove the `X-Robots-Tag` header from `next.config.js`.

## Adding a public page

Every new public page must be registered in `src/config/site.ts` under
`INDEXABLE_ROUTES` when it is ready for indexing. This registry generates the
XML sitemap automatically once indexing is enabled.

For every new page:

1. Add a unique title and meta description.
2. Add the route to `INDEXABLE_ROUTES`.
3. Confirm the page is not blocked in `robots.ts` after indexing is enabled.
4. Verify the canonical production URL uses `NEXT_PUBLIC_SITE_URL`.
5. Run the production build and inspect `/robots.txt` and `/sitemap.xml`.

## Behavior after launch (`SITE_INDEXING_ENABLED = true`)

- Public pages are crawlable and indexable.
- API routes are excluded from crawling.
- `robots.txt` points crawlers to the XML sitemap.
- The sitemap includes the visitor, organizer, retailer and artist pages.
- The site hostname comes from `NEXT_PUBLIC_SITE_URL`, with
  `https://www.nfctron.com` as the fallback.
