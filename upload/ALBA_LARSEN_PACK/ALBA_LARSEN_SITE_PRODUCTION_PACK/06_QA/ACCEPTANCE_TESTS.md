# Acceptance Tests

Zai must not say the project is complete until these pass.

## Research/data

- [ ] Alba is shown as 17 on the 2026-08-14 snapshot.
- [ ] F1 Academy position is 9th and points are 24.
- [ ] Next race is Zandvoort, 21-23 August 2026.
- [ ] Shanghai qualifying is P2.
- [ ] Montreal Reverse Grid is not called an official podium; classified result is P11 after penalty.
- [ ] Silverstone qualifying is P13; race finishes P10/P10.
- [ ] British F4 Zandvoort podium is P3.
- [ ] 2025 top-five count is seven.
- [ ] volatile figures include an `as of` date.
- [ ] no stale LinkedIn partner is presented as current without verification.

## Brand

- [ ] site does not invent a replacement logo for Alba.
- [ ] existing Alba identity is treated as reference/foundation.
- [ ] prototype colors are marked approximate until brand files exist.
- [ ] Ferrari is a current racing layer, not the entire personal brand.

## Rights

- [ ] no third-party editorial/race images copied into public assets without permission.
- [ ] concept disclosure is visible.
- [ ] concept mode is noindex,nofollow.
- [ ] no fake endorsement language.
- [ ] no private or sensitive personal data.
- [ ] G.I.R.L. minor imagery requires approved source/release.

## UX

- [ ] 360px has no horizontal overflow.
- [ ] 390px hero is visually strong and readable.
- [ ] 430px menu is usable with thumb.
- [ ] 768px tablet does not inherit broken desktop overlaps.
- [ ] 1440px layout uses the full editorial grid intentionally.
- [ ] mobile is not merely scaled desktop.
- [ ] first five mobile beats communicate identity, Ferrari/current, world, G.I.R.L., next race.

## Motion

- [ ] no loader longer than necessary.
- [ ] no scroll-jacking.
- [ ] prefers-reduced-motion disables ornamental animation.
- [ ] career has non-scroll-linked fallback.
- [ ] hero animation does not delay content access.
- [ ] all interactive animation responds quickly on touch.

## Accessibility

- [ ] keyboard navigation works.
- [ ] visible focus states.
- [ ] semantic headings.
- [ ] alt text for every supplied image.
- [ ] charts have text equivalents.
- [ ] target sizes are practical on mobile.

## Engineering

- [ ] TypeScript strict passes.
- [ ] lint passes.
- [ ] tests pass.
- [ ] production build passes.
- [ ] no console errors.
- [ ] no missing keys/warnings.
- [ ] no hardcoded volatile race data inside JSX components.
- [ ] asset registry detects missing required assets.
- [ ] no accidental external hotlinks.
- [ ] README includes setup, mode, content update and asset replacement instructions.

## Performance

- [ ] no unnecessary Three.js/WebGL.
- [ ] responsive images configured.
- [ ] below-fold media lazy loads.
- [ ] hero media is optimized.
- [ ] no autoplay audio.
- [ ] reduced JS motion on mobile if needed.
- [ ] test in throttled mobile profile.

## Final visual QA

Capture:
- [ ] 1440x900 desktop
- [ ] 1024x768 tablet
- [ ] 430x932 mobile
- [ ] 390x844 mobile
- [ ] 360x800 mobile

Review each screenshot for:
- crop quality
- typography clipping
- whitespace
- z-index errors
- contrast
- section rhythm
- generic-template feel

Final question:
`Could this exact site be reused for another driver by swapping the name and photos?`

If yes, continue designing.
