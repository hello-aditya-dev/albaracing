# MASTER ZAI BUILD PROMPT — ALBA LARSEN DIGITAL FLAGSHIP CONCEPT

You are the lead digital creative director, senior product designer, senior frontend engineer, motion designer, editorial designer, accessibility engineer, performance engineer, content systems engineer, QA lead and release manager for this project.

You are not being asked to make “a cool racing website.”

You are being asked to build a highly resolved, production-quality speculative digital flagship for Alba Larsen using the supplied research and production pack.

The project must look as though the visual system grew around Alba specifically.

Do not produce a generic athlete template.
Do not produce a generic black Ferrari site.
Do not produce an AI-portfolio-style page filled with random gradients, 3D cars, fake telemetry, cursor effects or decorative complexity.

The project succeeds only if it feels unmistakably specific to:
- Alba Larsen
- her existing Alba Racing brand identity
- her 2026 Ferrari/F1 Academy chapter
- her fashion/editorial world
- her performance/data story
- G.I.R.L.
- her age and cultural position
- her current racing moment

---

# 0. FIRST ACTION: READ THE PACKAGE

Before writing code, read every relevant file in this package.

Required reading order:

1. `/README.md`
2. `/01_RESEARCH/FACT_SHEET.md`
3. `/01_RESEARCH/SOURCE_REGISTRY.json`
4. `/01_RESEARCH/F1_ACADEMY_2026.json`
5. `/01_RESEARCH/CAREER_TIMELINE.json`
6. `/01_RESEARCH/PARTNERSHIPS.json`
7. `/01_RESEARCH/PRESS_INDEX.json`
8. `/01_RESEARCH/QUOTE_BANK.json`
9. `/02_CONTENT/COPY_DECK.md`
10. `/02_CONTENT/SITEMAP.md`
11. `/02_CONTENT/SEO_METADATA.json`
12. every file under `/03_DESIGN/`
13. every file under `/04_ASSETS/`
14. every file under `/05_IMPLEMENTATION/`
15. every file under `/06_QA/`

Do not start implementation until you understand the fact-conflict ledger, rights restrictions, concept-mode rules and responsive philosophy.

Create an internal implementation checklist after reading, then execute it.

---

# 1. PROJECT STATUS

This is an independent speculative concept.

It is NOT currently an official Alba Larsen website.

The concept must display a clear but visually restrained disclosure:

“Independent website concept. Not affiliated with or endorsed by Alba Larsen, Alba Racing, Scuderia Ferrari, Ferrari Driver Academy, F1 Academy, MP Motorsport or their partners.”

Use concept-mode metadata:
- noindex
- nofollow

Do not create an official-looking domain claim.
Do not claim approval.
Do not claim that the site was commissioned.
Do not add fake testimonials from Alba or management.

The architecture must be capable of becoming an official site later by changing approved assets/content and switching site mode.

---

# 2. DATA LOCK

Research snapshot:
`2026-08-14`

For the first build, treat the supplied data as locked.

Critical current values:
- age: 17
- F1 Academy team: MP Motorsport
- supported by: Ferrari
- number: 12
- championship position: 9th
- points: 24
- next round: Zandvoort, 21–23 August 2026
- Shanghai qualifying: P2
- Montreal reverse-grid classified result: P11 after a five-second penalty
- Silverstone qualifying: P13
- Silverstone race finishes: P10 and P10
- British F4 Zandvoort: P3
- 2025 F1 Academy top-five finishes: 7
- manager public email: lars@a-l-b-a.com

Do not “correct” these from memory.

If you have browsing access and find newer data, DO NOT silently change the concept snapshot. Report the newer value separately and ask before changing the locked snapshot, because the site is being built for a specific pitch state.

Every volatile value must come from content data with:
- `value`
- `asOf`
- `sourceId`

Do not bury current standings directly inside JSX.

---

# 3. CORE CREATIVE IDEA

Working internal concept:
`NO SINGLE LANE`

Do not present this as an official Alba slogan.

Internal design principle:
`EDITORIAL VELOCITY`

The website should feel like one identity moving through different environments.

Do not split Alba into fake opposites such as:
“racer vs fashion girl.”

Instead show a consistent person whose themes repeat:
- confidence
- recognisability
- performance
- speed
- self-expression
- access for the next generation

The site has four main worlds:

RACE
WORLD
PERFORMANCE
G.I.R.L.

They should feel different in rhythm, but belong to one system.

---

# 4. EXISTING BRAND: DO NOT REBRAND ALBA

Athletics created an Alba Racing identity.

Use its publicly documented principles as the foundation:
- compact lowercase bold sans-serif wordmark
- youthful confidence
- vibrant colour
- logo/avatar
- italic secondary typography for speed and clarity
- flexible system across livery, merchandise and media

Do not redraw the official logo badly from a screenshot.
Do not invent a competing logo.

Create a component named something like:
`AlbaWordmarkSlot`

If official SVG files are not supplied:
- use a clearly marked placeholder wordmark treatment for development
- do not pretend it is the official asset
- keep replacement friction near zero

The site must feel compatible with the Athletics identity, not like a new agency overwrote it.

---

# 5. 2026 FERRARI LAYER

Ferrari is a major current chapter, not Alba’s entire permanent identity.

Use Ferrari-associated red primarily in:
- current-season cards
- race chapters
- result/data accents
- 2026 hero metadata

Use baby blue as a meaningful 2026 token derived from Alba’s helmet story.

Use red + white as a Denmark/Ferrari intersection where appropriate.

Do not flood every screen with Ferrari red.
Do not mimic ferrari.com.
Do not create unauthorized Ferrari marks yourself.

If official brand marks are not supplied, use text labels rather than fake SVG recreations.

Number `12` is a current-season token.
Do not make the entire permanent site architecture depend on the number because race numbers can change.

---

# 6. VISUAL SYSTEM

Use `/03_DESIGN/DESIGN_TOKENS.json`.

Important:
The colours in that file are prototype approximations.
Do not label them as official Alba brand values.

Primary fields:
- ink
- paper
- cream
- Alba red approximation
- velocity blue approximation
- baby blue 2026 approximation
- signal pink approximation
- paddock yellow approximation

Most screens should use only:
- one base
- one accent
- photography

Do not show every colour at once.

The result should feel controlled.

---

# 7. TYPOGRAPHY

Preferred roles:

Display:
PP Neue Montreal or a licensed equivalent.

Editorial:
PP Editorial New or a licensed equivalent.

Data:
IBM Plex Mono.

Do not bundle unlicensed commercial font files.

If those fonts are unavailable, select legal alternatives with similar roles:
- contemporary grotesk for display
- restrained editorial serif
- credible mono for data

Do not use a stereotypical “racing” techno font.

The typography should carry most of the identity.

Use huge scale changes, strict alignment and deliberate whitespace.

---

# 8. BUILD THE CONCEPT AS A SINGLE HIGH-IMPACT ROUTE

Primary deliverable:
`/`

The page order is:

1. concept disclosure
2. header/hero
3. intro
4. current season
5. four-world gateway
6. race opening
7. Shanghai
8. Montreal
9. Silverstone
10. Zandvoort/next
11. helmet
12. career
13. world/editorial
14. performance
15. G.I.R.L.
16. press
17. partners
18. contact
19. footer

Build these as modular route-ready sections so they can later move to:
- `/race`
- `/world`
- `/performance`
- `/story`
- `/girl`
- `/press`
- `/partners`
- `/contact`

Do not create eight thin pages now if doing so weakens the concept.
The first pitch must have one exceptional scroll experience.

---

# 9. HERO — EXACT INTENT

The hero must create immediate recognition.

Desktop:
- full viewport or near-full viewport
- Alba image slot dominates
- deliberately asymmetric composition
- enormous ALBA LARSEN typography
- minimal navigation
- no generic paragraph over the portrait

Content:
`SCUDERIA FERRARI DRIVER ACADEMY / F1 ACADEMY / DENMARK`

`ALBA LARSEN`

`17 / ROSKILDE / #12`

`NEXT / ZANDVOORT / 21–23 AUG 2026`

`MP MOTORSPORT / FERRARI / 2026`

Mobile:
The hero is more important than desktop.

A user opening the link inside Instagram should understand it in 2–3 seconds.

Do not shrink the desktop hero.
Design the mobile hero intentionally.

Hero animation:
- 600–800 ms word reveal
- 700–900 ms media mask arrival
- metadata stagger 120–160 ms
- content must be readable immediately if reduced motion is enabled

No long loading sequence.
No fake “0–100%” loader.

---

# 10. INTRO

Use the supplied copy.

Display:
`RACING IS THE BEGINNING.`

This section creates the thesis:
Roskilde → karting → Girls on Track → F4 → F1 Academy → Ferrari, with performance, fashion and G.I.R.L. around the racing.

Keep it short.
Do not write a generic biography paragraph.

Use one short sourced quote only if it improves the composition.

---

# 11. CURRENT SEASON CARD

This section must feel live without pretending to be live.

Label:
`NOW`

Show:
`2026`
`F1 ACADEMY`
`MP MOTORSPORT`
`FERRARI`
`#12`

Current:
`09`
`24 PTS`

Timestamp:
`UPDATED 14 AUG 2026`

Next:
`ZANDVOORT`
`21–23 AUG`

The source timestamp is visually important.
It makes the design honest.

Build content so it can be updated in one data file after each race.

---

# 12. FOUR-WORLD GATEWAY

Create four strong editorial modules:

RACE
`Pressure. Precision. Racecraft.`

WORLD
`Style, campaigns, culture and life beyond the visor.`

PERFORMANCE
`The car has telemetry. The driver has signals too.`

G.I.R.L.
`One racing journey opening thousands of first laps.`

Desktop:
These can overlap, shift scale or respond subtly to pointer movement.

Mobile:
Four large, easy-to-swipe/scroll cards.
No tiny card grid.

Each gateway should provide a visual preview of the later chapter.

---

# 13. RACE CHAPTER

Shift the page rhythm.

The grid becomes tighter.
Mono data becomes visible.
Motion gets faster.

Headline:
`2026 / RED`

Body:
`A second F1 Academy season. A first in Ferrari colours. The pace has been clear, even when the results have not always followed it.`

Stats:
`P2 / BEST 2026 QUALIFYING`
`3–1 / QUALIFYING HEAD-TO-HEAD VS GADEMAN`
`09 / CHAMPIONSHIP`
`24 / POINTS`

Do not build a giant championship table.

Alba remains the subject.
Data is supporting evidence.

---

# 14. SHANGHAI

This is the season’s clearest “raw pace, missed result” story.

Use:
`SHANGHAI / 13–15 MAR`
`FAST ENOUGH TO LEAD.`

Data:
`QUALIFYING / P2 / 2:04.585`
`FEATURE / P8`

Narrative:
She recorded her best F1 Academy qualifying result, took the lead in the Feature Race, then lost the potential result after a Safety Car restart error.

Do not soften the error into fake perfection.
The site should be credible.

Visual direction:
- a large race image slot
- one numerical column
- one short paragraph
- one track/circuit metadata line if sourced
- no fake telemetry

---

# 15. MONTREAL

Use:
`MONTREAL / 22–24 MAY`
`POINTS. PRESSURE. CONSEQUENCES.`

Data:
`OPENING / P5`
`REVERSE GRID / P11 AFTER PENALTY`
`FEATURE / P6`

Critical:
Do not call the Reverse Grid result a podium.

Allowed narrative:
“Alba crossed the line in a podium position before a post-race five-second penalty dropped her to P11.”

The purpose of this chapter is to show that the site can tell a sophisticated sports story rather than only celebrate wins.

---

# 16. SILVERSTONE

Use:
`SILVERSTONE / 3–5 JUL`
`A WEEKEND TO LEARN FROM.`

Data:
`QUALIFYING / P13`
`REVERSE GRID / P10`
`FEATURE / P10`

Connect it visually to the later Zandvoort rebound.

Do not overdramatize.
Keep the copy matter-of-fact.

---

# 17. ZANDVOORT / NEXT

This should feel current and forward-looking.

Use:
`NEXT / ZANDVOORT`
`BACK TO THE SAME TRACK.`

Context:
- British F4 overall P3 at Zandvoort in July
- strong F1 Academy testing at the circuit
- F1 Academy returns 21–23 August

Data:
`BRITISH F4 / P3`
`F1 ACADEMY / 21–23 AUG`

This should become one of the final beats in the 15–20 second pitch video.

---

# 18. HELMET — SIGNATURE INTERACTION

Build one excellent helmet interaction.

Do not build a 3D helmet unless an accurate authorized model exists.

Preferred:
- high-resolution approved image slot
- controlled zoom/crop
- four hotspots
- animated annotation lines
- touch-first behavior

Headline:
`MADE TO BE SEEN.`

Hotspots:
`BABY BLUE / FERRARI HISTORY`
`RED + WHITE / DENMARK + FERRARI`
`FRONT / SCUDERIA`
`REAR / ALBA`

Concept:
Alba has publicly described her preference for a simple, immediately recognisable helmet design.

Translate that into the site’s design philosophy.

The interaction must work without hover.

---

# 19. CAREER

Do not create a boring vertical resume timeline on desktop.

Desktop:
Use a restrained horizontal progression tied to scroll.

Milestones:
`2020–21 / FIRST KARTS`
`2022 / ZEALAND`
`2023 / RISING STARS`
`2024 / FORMULA 4`
`2025 / F1 ACADEMY`
`2026 / FERRARI`
`NEXT / —`

The last state matters.
Do not predict F3, F2 or F1.

Leave the future open.

Mobile:
Normal vertical reading flow.
No forced horizontal scrolling.

---

# 20. WORLD / EDITORIAL

The website must become quieter here.

Switch toward:
- paper/cream
- larger margins
- serif accents
- slower transitions
- magazine-like crops

Headline:
`OFF TRACK. STILL ALBA.`

Use source-backed editorial modules:
- Vogue Scandinavia / 2025
- Teen Vogue / 2025
- Tommy Jeans / Spring 2026

Do not reproduce third-party images without approved files.

If no assets are supplied:
build elegant editorial placeholders:
- publication name
- date
- photographer/credit metadata
- intended image aspect ratio
- “approved image required” dev marker

Do not fabricate a magazine cover.

Style marginalia:
`BAGGY`
`COLOUR`
`RACE SUIT`
`NAILS`
`HELMET`

These are visual notes, not a celebrity-trivia section.

The purpose is to reveal how fashion and confidence fit into the same identity.

---

# 21. PERFORMANCE / WHOOP

Headline:
`HUMAN TELEMETRY`

This section is allowed to feel scientific, but not medical.

Show four concepts:
`SLEEP`
`RECOVERY`
`STRAIN`
`FOCUS`

Use:
- thin lines
- calm data visualization
- strong typography
- subtle signals

Critical:
Do not invent Alba’s private biometric values.

If a chart is included, label it:
`ILLUSTRATIVE`

Provide a text equivalent.

Include:
`Illustrative interface. No private biometric values displayed.`

WHOOP is a verified three-year partnership/global ambassador relationship.

---

# 22. G.I.R.L.

Do not turn this into “Alba charity section.”

G.I.R.L. is its own movement.

Headline:
`HER FIRST LAP LED TO THEIRS.`

Use:
`400+ / GIRLS AND YOUNG WOMEN ENGAGED IN DENMARK BY DEC 2025`
`15,000 / GLOBAL 2026 PARTICIPATION GOAL`

If you decide to use more recent G.I.R.L. website figures:
- put them in content data
- date-stamp them
- keep the original sourced values in the research file
- do not mix incompatible dates

Programme cards:
- Track Days
- Sim Racing
- Watch Parties
- Mentorship
- 1-on-1 Coaching if current official G.I.R.L. content still supports it

CTA:
`ENTER G.I.R.L. ↗`

Link to the official G.I.R.L. site.

Community imagery should emphasize participants and activity, not always center Alba.

Because participants may be minors, use only approved images with appropriate releases.

---

# 23. PRESS

Headline:
`READ / WATCH / LISTEN`

Build filters:
- RACING
- FASHION
- G.I.R.L.
- PERFORMANCE
- VIDEO

Featured sources:
- Vogue Scandinavia
- Teen Vogue
- Forbes
- Formula1.com
- FIA
- L'Officiel

Do not create logo soup.

Use text-led publication cards and optional approved thumbnails.

Every external article link must:
- identify publication
- title
- date
- category
- external-link indicator

---

# 24. PARTNERS

Separate relationships correctly.

Do not call every relationship a sponsor.

Current verified cards:
- Scuderia Ferrari Driver Academy — driver development / academy
- Ferrari — 2026 F1 Academy support identity
- MP Motorsport — F1 Academy team
- WHOOP — global ambassador / performance partnership
- Tommy Jeans / Tommy Hilfiger — fashion/brand relationship

Do not add Ganni, VRAI or other older LinkedIn-listed brands as current without management confirmation.

Headline:
`BUILT AROUND PERFORMANCE.`

CTA:
`BUILD SOMETHING WITH ALBA.`

---

# 25. CONTACT

Alba is 17.

Professional enquiries should route through adult management.

Show:
`LARS HEMMING JØRGENSEN`
`MANAGEMENT`
`lars@a-l-b-a.com`

For concept mode:
- use a mailto or visible email only
- do NOT send a form submission to the address
- do not collect data unnecessarily

Press:
`CONTACT MANAGEMENT`

Partnerships:
`CONTACT MANAGEMENT`

Do not expose private contacts.

---

# 26. ASSET AND COPYRIGHT RULES

Read:
`/04_ASSETS/ASSET_MANIFEST.md`
`/04_ASSETS/RIGHTS_MATRIX.md`
`/04_ASSETS/VISUAL_REFERENCES.md`

Do not:
- scrape magazine images into `/public`
- download Getty images
- hotlink images from press pages
- copy Instagram media
- recreate Ferrari logos
- bundle commercial font files
- use AI-generated images that purport to depict Alba as if they are real editorial/racing photography

Build an asset registry.

Every image slot has:
- key
- local path
- alt
- focal point
- rights status
- source reference
- mobile crop
- desktop crop

If the asset is missing:
render a premium placeholder, not a broken image.

The site must still look deliberately designed with placeholders.

---

# 27. TECH STACK

Use a modern stable Next.js App Router environment supported by the local project.

Requirements:
- TypeScript strict
- React
- Tailwind CSS or equivalent token-driven CSS
- Framer Motion
- GSAP only if it materially improves the career sequence
- Zod data validation
- local typed content repository
- Vercel-ready

Do not add a database for this concept.
Do not add a CMS dependency unless it helps without slowing the first build.

Prepare a content adapter so a CMS can be added later.

Do not use:
- giant UI kits that erase the visual language
- random shadcn defaults
- an entire dashboard component library
- unnecessary Three.js
- heavy charting library for one simple illustrative chart

Custom-build the visible system.

---

# 28. FILE ARCHITECTURE

Recommended:

`app/`
`components/global/`
`components/hero/`
`components/race/`
`components/helmet/`
`components/career/`
`components/world/`
`components/performance/`
`components/girl/`
`components/press/`
`components/partners/`
`components/contact/`
`content/`
`lib/`
`public/placeholders/`

Create:
- `content/profile.ts`
- `content/season-2026.ts`
- `content/career.ts`
- `content/partners.ts`
- `content/press.ts`
- `content/sources.ts`
- `content/assets.ts`

Or equivalent structured files.

Every volatile fact is imported.

---

# 29. SITE MODES

Implement:
`NEXT_PUBLIC_SITE_MODE`

Values:
`concept`
`official`

Default:
`concept`

Concept mode:
- disclosure visible
- robots noindex,nofollow
- concept metadata
- no live contact form
- no claim of endorsement

Official mode:
Do not activate in this task.

Only prepare the switch.

---

# 30. RESPONSIVE EXECUTION

Read `/03_DESIGN/RESPONSIVE_SYSTEM.md`.

Mandatory visual test widths:
- 360
- 375
- 390
- 393
- 412
- 430
- 768
- 1024
- 1440

Mobile is the priority.

The first five strong mobile beats should communicate:
1. ALBA
2. Ferrari/current/#12
3. World
4. G.I.R.L.
5. next race

Do not wait until the end to “make it responsive.”

Build mobile and desktop in parallel.

No horizontal overflow at 360.

---

# 31. MOTION EXECUTION

Read `/03_DESIGN/MOTION_SPEC.md`.

The design must feel alive, but motion is not the product.

Rules:
- no scroll-jacking
- no long loader
- no cursor trail
- no mouse-following race car
- no continuous background animation that drains mobile
- no audio
- no huge parallax
- no repeated count-up animations

Implement reduced motion completely.

A user with reduced motion should still receive an excellent composition.

---

# 32. PERFORMANCE

Optimize for a mobile browser opened from Instagram.

Targets:
- good Core Web Vitals
- LCP target <= 2.5s with final assets
- CLS <= 0.1
- INP target <= 200ms
- minimized JS
- responsive image sizing
- AVIF/WebP where possible
- lazy load below fold
- preload only what is critical
- no autoplay video requirement

If a visual effect harms mobile performance, remove the effect.

---

# 33. ACCESSIBILITY

Minimum:
- WCAG AA functional contrast
- semantic sections/headings
- keyboard navigation
- visible focus states
- correct button/link semantics
- touch targets around 44px
- alt text
- reduced motion
- no hover-only content
- text equivalent for illustrative chart
- no content hidden behind pointer-only interactions

Do not treat accessibility as post-build cleanup.

---

# 34. COPY RULES

Use `/02_CONTENT/COPY_DECK.md`.

Tone:
- precise
- editorial
- compact
- intelligent
- young without trying to sound like slang
- confident without hype

Avoid:
- “fearless”
- “unstoppable”
- “redefining limits”
- “breaking barriers” repeated everywhere
- “speed meets style”
- “where fashion meets racing”
- generic AI marketing language
- unverified superlatives
- fake first-person copy

Do not put words in Alba’s mouth.

Use quotations only from the quote bank and source them.

---

# 35. SOURCE TRACEABILITY

Build a development-only source panel or data mapping so that each factual content block can be traced to a source ID.

Do not show ugly footnotes everywhere in the public design.

But keep source IDs in content objects.

Example:
```ts
{
  value: 24,
  asOf: "2026-08-14",
  sourceId: "S02"
}
```

This is critical because current sports data changes quickly.

---

# 36. SEO / METADATA

Concept mode:
Title:
`Alba Larsen — Independent Website Concept`

Description:
`Independent digital concept for Danish racing driver Alba Larsen, connecting racing, performance, culture and G.I.R.L.`

Robots:
`noindex,nofollow`

Do not expose an XML sitemap intended for indexing in concept mode.

Open Graph:
Use a local concept card that does not imply official endorsement.

If no approved Alba image exists, use typography/brand-color composition rather than copied photography.

---

# 37. 20-SECOND PITCH EXPERIENCE

The build must contain visually strong moments that can be recorded in this order:

0–3 sec
Hero / ALBA

3–6 sec
Ferrari / #12 / NOW / Zandvoort

6–10 sec
Helmet interaction

10–14 sec
World / editorial

14–17 sec
G.I.R.L.

17–20 sec
Press / partners / ALBA close

Make those transitions coherent.

Do not optimize the full site only for a demo video.
It must remain a legitimate website.

---

# 38. IMPLEMENTATION PHASES

## Phase 1 — Audit and scaffold
- inspect repo
- record current dependencies
- create architecture
- create typed data layer
- create concept/official mode
- add metadata/robots
- set design tokens

## Phase 2 — Mobile-first visual foundation
- global typography
- header
- hero
- current card
- world gateway
- verify 390 and 430

## Phase 3 — Racing system
- race opening
- Shanghai
- Montreal
- Silverstone
- Zandvoort
- data components
- source traceability

## Phase 4 — Signature interaction
- helmet
- accessible hotspots
- mobile touch behavior

## Phase 5 — Career
- desktop horizontal progression
- mobile vertical fallback
- keyboard accessibility

## Phase 6 — Editorial world
- world intro
- publication cards
- style marginalia
- placeholders

## Phase 7 — Performance
- human telemetry concept
- illustrative chart
- text equivalent

## Phase 8 — G.I.R.L.
- impact
- programmes
- external CTA

## Phase 9 — Press / partners / contact
- filters
- relationship labels
- management route
- footer

## Phase 10 — motion
Only after static layouts are excellent.
Add motion section by section.

## Phase 11 — performance and accessibility
- audit
- fix
- re-test

## Phase 12 — screenshot QA
Capture required sizes.
Inspect manually.
Fix every visible defect.

## Phase 13 — build gate
Run:
- typecheck
- lint
- tests
- production build

Do not stop at “looks good in dev.”

---

# 39. TESTS

Read `/06_QA/ACCEPTANCE_TESTS.md`.

Add automated tests where appropriate.

At minimum, verify:
- concept disclosure
- noindex
- data values
- route anchors
- mobile menu
- helmet keyboard/touch behavior
- reduced motion
- no overflow
- asset fallback
- source/date rendering
- external links
- no live contact submission in concept mode

---

# 40. README

Create a strong project README that explains:
- what the project is
- independent concept status
- setup
- commands
- environment modes
- directory structure
- content update workflow
- how to update race results
- how to replace asset placeholders
- rights rules
- how to switch to official mode only after approval
- QA commands
- deployment

Do not put “Built by AI” or Zai branding in the site or README.

---

# 41. QUALITY BAR

Use this test continuously:

“Could this exact design be used for another driver by swapping the name and photos?”

If yes, continue working.

The design must rely on Alba-specific material:
- the Athletics identity
- Ferrari 2026
- baby-blue helmet story
- Danish red/white
- number 12 as a season token
- Roskilde
- compressed career path
- Vogue/Teen Vogue/Tommy world
- WHOOP performance layer
- G.I.R.L.
- current Zandvoort narrative
- honest racing setbacks and pace

Do not create specificity by adding random decorations.

Specificity must come from real story, typography, composition, data and assets.

---

# 42. DO NOT DO THESE THINGS

Do not:
- ask me to choose between five generic design directions
- stop after scaffolding
- create a low-fidelity wireframe and call it done
- leave lorem ipsum
- leave obvious TODOs in customer-visible UI
- use broken external images
- scrape copyrighted media
- add fake sponsor logos
- add fake results
- add fake social counts
- add fake quotes
- claim Alba approved it
- add a checkout
- add a fan store
- add a newsletter signup unless there is a real endpoint and approval
- add a CMS dashboard just to make the repo look bigger
- add login/authentication
- add Three.js because motorsport “needs 3D”
- add a car that follows the cursor
- make every section black
- make the design Ferrari-owned
- make G.I.R.L. a token charity footer
- make fashion a shallow photo gallery

---

# 43. DEFINITION OF DONE

The task is complete only when:

1. The site is fully implemented.
2. Mobile is exceptional, not merely functional.
3. Desktop is equally resolved.
4. All locked facts are correct.
5. Rights-sensitive images are placeholders unless approved files were supplied.
6. Concept disclosure and noindex are active.
7. All key interactions work with touch and keyboard.
8. Reduced motion works.
9. No horizontal overflow exists at 360px.
10. TypeScript passes.
11. Lint passes.
12. Tests pass.
13. Production build passes.
14. Screenshots have been reviewed at the required widths.
15. README is complete.
16. Every current race value comes from data, not component literals.
17. The site does not feel reusable for another driver.
18. You provide a final completion report with:
    - implemented sections
    - files changed
    - commands run
    - test results
    - build result
    - remaining missing authorized assets
    - remaining content requiring management approval
    - known limitations
    - exact steps to run and deploy

If anything fails, fix it before calling the project finished.

Build the website.
