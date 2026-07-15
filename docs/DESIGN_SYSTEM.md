# NFCtron web — visual rules

This file records the working visual language for future pages and components.

## Rhythm

- Standard content section: `py-12 sm:py-14 lg:py-16` (`section`).
- Hero sections may use `py-10 sm:py-12 lg:py-14`; avoid filling the viewport.
- Related blocks need a visible pause. Do not compensate for an oversized component with arbitrary negative margins.
- Internal spacing follows a restrained 4 / 8 / 12 / 16 / 24 / 32 px scale.

## Type

- Visitor homepage H1: 38 px mobile, 44 px tablet, 48 px desktop; semibold, tight but readable leading.
- Section headings: 30–36 px, semibold, negative tracking around `-0.035em`.
- Eyebrows: 10–12 px uppercase with wide tracking.
- Metadata and helper copy must remain visually secondary (9–12 px).

## Components

- Prefer shared components over copied markup: header, footer, event card and campaign feature.
- Active states use a quiet primary tint, not heavy borders or oversized pills.
- Cards use 12–16 px radii, subtle borders and restrained shadows.
- All cards must preserve their hierarchy and spacing on mobile; horizontal filter sets may scroll.

## Content

- NFCtron is always written as `NFCtron`.
- State what is available on a specific event; do not imply that every event supports chip payments or credit refunds.
- Campaigns must show their state, partner, verified metrics and one clear CTA.

## Quality gate

- Check Czech and English variants.
- Verify mobile, tablet and desktop layouts.
- Run `bun run type-check` and `bun run build` before handoff.
