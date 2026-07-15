# NFCtron Tickets API — campaign integration brief

The homepage campaign is rendered by `CampaignFeature`. UI must never scrape the public Tickets HTML in production. Replace the static object with a typed server-side adapter once an authenticated Tickets API endpoint is available.

## Expected API shape

```ts
interface CampaignGroupResponse {
  id: string;
  slug: string;
  title: string;
  status: 'active' | 'scheduled' | 'ended';
  partner: { name: string; logoUrl?: string };
  landingUrl: string;
  events: Array<{
    id: string;
    title: string;
    startsAt: string;
    endsAt?: string;
    status: 'on_sale' | 'ended';
    imageUrl?: string;
    ticketUrl: string;
  }>;
}
```

## Adapter prompt

> Implement a server-only NFCtron Tickets campaign adapter for Next.js. Fetch the event group by slug, validate the response, map it to `CampaignFeatureData`, calculate active counts by event year and past-event count, preserve the upstream landing URL, and return a safe static fallback on timeout or invalid data. Add a cache/revalidation policy and never expose credentials to the client bundle.

## Validation prompt

> Add contract tests for the NFCtron Tickets campaign adapter. Cover missing images, unknown statuses, events spanning two years, duplicate event IDs, empty campaigns, API timeouts, invalid dates and Czech/English display labels. Assert that active totals equal the sum of active yearly totals.

## Integration rules

- Counts come from the response, never from hardcoded labels.
- Dates are parsed on the server in the campaign timezone.
- Duplicate IDs are removed before aggregation.
- The last valid payload is used when the upstream service is unavailable.
- Campaign content and presentation remain separate so additional partnerships can reuse the component.
