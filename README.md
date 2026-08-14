# Alba Larsen — Digital Flagship Concept

An independent speculative digital flagship for Danish racing driver **Alba Larsen**, connecting racing, performance, culture and G.I.R.L.

> **Independent website concept.** Not affiliated with or endorsed by Alba Larsen, Alba Racing, Scuderia Ferrari, Ferrari Driver Academy, F1 Academy, MP Motorsport or their partners.

---

## Project Status

This is a **concept-mode** speculative build. It is not an official Alba Larsen website.

- Research snapshot: **2026-08-14**
- Site mode: `concept` (noindex, nofollow, disclosure visible)
- No live contact forms in concept mode
- All third-party imagery uses elegant placeholders pending approved assets

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Animation | Framer Motion |
| Data | Typed local content repository |
| Validation | Zod |
| Fonts | Geist Sans (display), IBM Plex Mono (data), Georgia (editorial) |
| Package Manager | Bun |

---

## Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Lint
bun run lint

# Production build
bun run build
```

The dev server runs on `http://localhost:3000`.

---

## Site Modes

Controlled via `NEXT_PUBLIC_SITE_MODE` environment variable.

| Mode | Disclosure | Robots | Contact Form | Analytics |
|------|-----------|--------|-------------|----------|
| `concept` (default) | Visible | noindex, nofollow | Disabled | Off |
| `official` | Hidden (after approval) | index, follow | Enabled | If configured |

```bash
# Concept mode (default)
NEXT_PUBLIC_SITE_MODE=concept bun run dev

# Official mode (requires management approval + approved assets)
NEXT_PUBLIC_SITE_MODE=official bun run dev
```

---

## Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Single-page scroll experience
│   └── globals.css         # Design tokens, fonts, utilities
├── components/
│   ├── global/             # Header, Footer, ConceptDisclosure
│   ├── hero/               # Hero section
│   ├── race/               # Intro, CurrentSeason, WorldGateway,
│   │                       # RaceSection, Shanghai, Montreal,
│   │                       # Silverstone, Zandvoort
│   ├── helmet/             # Helmet interaction with hotspots
│   ├── career/             # Career timeline
│   ├── world/              # Editorial/fashion section
│   ├── performance/        # Human telemetry (illustrative)
│   ├── girl/               # G.I.R.L. section
│   ├── press/              # Press index with filters
│   ├── partners/           # Partnership cards
│   └── contact/            # Contact (routes to management)
├── content/                # Typed data layer
│   ├── profile.ts          # Driver profile (name, age, team, etc.)
│   ├── season-2026.ts      # 2026 F1 Academy season data
│   ├── career.ts           # Career timeline milestones
│   ├── partners.ts         # Partnership relationships
│   ├── press.ts            # Press index
│   ├── sources.ts          # Source registry with traceability
│   ├── assets.ts           # Asset registry with rights tracking
│   ├── quotes.ts           # Approved quote bank
│   └── copy.ts             # All display copy
└── lib/
    ├── tokens.ts           # Design tokens + site mode
    ├── motion.ts           # Framer Motion animation variants
    └── utils.ts            # Utility functions
```

---

## Content Update Workflow

All volatile race facts are stored in typed content files under `src/content/`. **No volatile data lives inside JSX components.**

### Updating after a race weekend

1. Edit `src/content/season-2026.ts`:
   - Update `standing.value` and `points.value`
   - Update the relevant round's `races` array with new results
   - Set `status: "complete"` on the finished round
   - Set `status: "next"` on the upcoming round
   - Update all `asOf` dates and `sourceId` references

2. Edit `src/content/copy.ts` if display copy needs updating

3. The `DATA SNAPSHOT / [date]` timestamp in the Current Season section updates from `copy.nowDataSnapshot`

### Adding a new press item

Add an entry to `pressItems` in `src/content/press.ts` with:
```ts
{
  publication: "Publication Name",
  title: "Article Title",
  date: "YYYY-MM-DD",
  categories: ["racing"],
  url: "https://...",
  rights: "permission status"
}
```

---

## Asset Replacement Workflow

Every image slot is tracked in `src/content/assets.ts` with:
- `key` — slot identifier (e.g., `hero.primary`)
- `localPath` — path to the actual file (null when placeholder)
- `rightsStatus` — `"required" | "approved" | "owned" | "placeholder"`
- `alt` — descriptive alt text

### Replacing a placeholder with an approved asset

1. Place the approved image in `public/images/` (e.g., `public/images/hero-primary.webp`)
2. Update the asset slot in `assets.ts`: set `localPath` and `rightsStatus: "approved"`
3. Update the component to use `<Image>` with the `localPath`
4. Provide both desktop and mobile crops where specified

### Checking which assets are still missing

```ts
import { getMissingAssets } from '@/content/assets'
console.log(getMissingAssets())
```

---

## Copyright and Rights

- **No** third-party editorial, race, or campaign photography is bundled
- **No** unlicensed commercial font files are included
- **No** Ferrari, F1 Academy, or partner logos are recreated
- All magazine/editorial images use designed placeholders until approved assets are supplied
- G.I.R.L. imagery involving minors requires approved source with suitable releases
- The Alba Racing wordmark uses a placeholder treatment — the official Athletics SVG should replace it

---

## Official-Mode Conversion

Before switching from concept to official mode:

1. Written approval from Alba's management
2. Approved brand files (wordmark SVG, avatar, palette, guidelines)
3. Approved photography library
4. Approved partner logos and relationship wording
5. Approved biography and copy
6. Approved contact routes
7. Privacy/cookie/legal review
8. Set `NEXT_PUBLIC_SITE_MODE=official`
9. Update robots metadata (becomes indexable)
10. Configure analytics if needed
11. Refresh current race data

---

## Data Verification

Key locked values as of 2026-08-14:

| Fact | Value | Source |
|------|-------|--------|
| Age | 17 | S01 |
| F1 Academy position | 9th | S02 |
| Points | 24 | S02 |
| Car number | 12 | S01 |
| Team | MP Motorsport | S01 |
| Supported by | Ferrari | S01 |
| Shanghai qualifying | P2 (2:04.585) | S04 |
| Montreal Reverse Grid | P11 after 5s penalty (not podium) | S06 |
| Silverstone qualifying | P13 | S07 |
| British F4 Zandvoort | P3 | S16 |
| 2025 top-five finishes | 7 | S01 |
| Next round | Zandvoort, 21–23 Aug | S03 |
| Manager | Lars Hemming Jørgensen | S28 |

Do not "correct" these from memory or web searches without updating the source registry.

---

## Deployment

### Vercel (recommended)

```bash
bun run build
vercel deploy
```

Set environment variable:
- `NEXT_PUBLIC_SITE_MODE=concept` (or `official` after approval)

### Other platforms

The project outputs a standalone build. Deploy the `.next/standalone` directory with your preferred Node.js host.

---

## Commands

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server (port 3000) |
| `bun run build` | Production build |
| `bun run lint` | ESLint check |
| `bun run db:push` | Push Prisma schema (not currently used) |

---

## Accessibility

- WCAG AA functional contrast
- Semantic headings (h1 → h2 → h3)
- Keyboard navigation with visible focus states
- `prefers-reduced-motion` respected — ornamental animations disabled
- 44px minimum touch targets on mobile
- Alt text on all images
- Text equivalents for illustrative charts
- No hover-only information

---

## Performance Targets

- LCP ≤ 2.5s on mobile (once production assets available)
- CLS ≤ 0.1
- INP ≤ 200ms
- Responsive image sizes with AVIF/WebP
- Lazy loading below the fold
- No autoplay audio or video dependency
- No unnecessary WebGL/Three.js

---

## License

This is a speculative concept project. All rights to Alba Larsen's name, image, and brand belong to Alba Larsen and her management. All rights to Ferrari, F1 Academy, and partner brands belong to their respective owners.

This code is provided for concept demonstration purposes only.
