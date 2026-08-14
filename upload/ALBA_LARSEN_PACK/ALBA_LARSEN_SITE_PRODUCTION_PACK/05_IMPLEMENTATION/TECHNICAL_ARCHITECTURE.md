# Technical Architecture

## Goal

A production-quality speculative concept that is:
- extremely polished on mobile
- easy to convert into an official site
- easy to update after every race
- performant enough for an Instagram in-app browser
- accessible
- data-driven
- not dependent on third-party image scraping

## Recommended stack

- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS or a similarly disciplined utility/token layer
- Framer Motion for component motion
- GSAP only where it provides a real advantage for the career/scroll sequence; avoid using two animation systems for the same job
- native CSS scroll behavior where possible
- Zod for content/data validation
- local JSON/TypeScript content repository for the speculative build
- optional headless CMS adapter prepared behind an interface for official conversion
- Vercel deployment

Do not pin a framework version blindly. Use the current stable version supported by the environment at build time, and record the versions in the README.

## Architecture

`app/`
- layout
- page
- metadata
- robots
- sitemap only if official mode

`components/`
- global
- hero
- race
- helmet
- career
- world
- performance
- girl
- press
- partners
- contact

`content/`
- profile
- season
- career
- partners
- press
- copy
- sources

`lib/`
- content validators
- source helpers
- motion
- a11y helpers
- formatting

`public/`
- placeholders
- authorized brand assets only
- no scraped media

## Modes

Environment:
`NEXT_PUBLIC_SITE_MODE=concept|official`

Concept mode:
- disclosure visible
- noindex,nofollow
- management contact shown only because it is public
- no live contact form submission
- no analytics unless user explicitly configures it
- third-party marks treated conservatively

Official mode:
- disclosure removed only after approval
- indexable
- approved assets
- real contact routes
- analytics/CMS if configured

## Data layer

All volatile facts come from typed content data.

Create schemas for:
- DriverProfile
- Season
- Round
- RaceResult
- CareerMilestone
- EditorialFeature
- Partner
- PressItem
- Source
- AssetSlot

Every volatile field supports:
- `value`
- `asOf`
- `sourceId`
- optional `status`

## Current-card update

Do not scrape F1 Academy client-side.

For concept:
- current data comes from checked-in JSON
- visible timestamp `UPDATED 14 AUG 2026`

For an official site:
- update through CMS/admin/manual workflow or a server-side licensed/approved data source
- never promise "live" unless it is actually live

## Performance

Targets on production build:
- LCP <= 2.5s on realistic mobile test where assets permit
- CLS <= 0.1
- INP <= 200ms target
- no hero video required
- image AVIF/WebP
- responsive srcsets
- lazy load below fold
- preload only hero media and critical font subset
- avoid giant JS animation bundle
- no autoplay audio
- no WebGL unless justified and measured

## Accessibility

- WCAG AA for functional text
- semantic heading order
- keyboard operable nav/interactions
- visible focus
- descriptive alt text
- reduced motion
- touch targets around 44px
- no hover-only information
- charts have text equivalents
- color is not the only status signal

## Internationalisation

Phase 1: English.
Prepare dictionary structure for Danish.
Do not machine-translate magazine titles or official brand names.

## Testing

- unit tests for data validation and formatting
- component tests for stateful interactions
- Playwright smoke tests:
  - hero
  - menu
  - section navigation
  - helmet hotspots
  - career keyboard fallback
  - mobile no overflow
  - reduced motion
  - concept disclosure
  - noindex metadata
- run typecheck, lint, tests and production build
