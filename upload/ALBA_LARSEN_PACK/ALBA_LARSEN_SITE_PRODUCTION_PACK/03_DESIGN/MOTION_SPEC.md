# Motion Specification

Motion should feel like a combination of editorial direction and race timing, not a videogame.

## Global

- respect `prefers-reduced-motion`
- no critical information waits for animation
- animation must not block scrolling
- avoid scroll-jacking
- smooth scroll is optional and must degrade cleanly
- 60fps target on mid-range mobile

## Hero

1. Quiet field.
2. ALBA word reveal: 600-800 ms.
3. Portrait/action image arrives via mask: 700-900 ms.
4. Metadata fades/slides in with 120-160 ms stagger.
5. Do not add a long loader.

## Section entry

- 300-450 ms color-plane or crop transition
- max image parallax: 2-4 percent
- use opacity + translate + clip-path sparingly

## Race

- fast editorial cuts
- stat values can count/roll once only
- track cards snap visually but native scrolling stays intact

## Helmet

- image remains stable
- hotspots animate with 150-220 ms response
- selected annotation line grows once
- no heavy 3D requirement

## Career

Desktop:
- scroll progress maps to horizontal track of milestones
- sticky viewport allowed
- provide keyboard/native fallback
- avoid pinning longer than 250-300vh

Mobile:
- normal vertical reading order
- optional progress rail on left

## World

- slower image/card choreography
- 700-1000 ms crossfades/crop shifts
- magazine-page effect, not a carousel library feel

## Performance

- line graph draws once
- data is illustrative unless sourced
- no pulsing medical UI

## G.I.R.L.

- softer pacing
- group imagery
- numeric proof points reveal without exaggerated count-up

## Route/page transitions

- 300-450 ms maximum
- must not delay browser back/forward semantics
