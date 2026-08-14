# Responsive System

## Desktop >= 1200

- 12-column grid
- 48-72 px outer margin
- 20-24 px column gap
- max editorial canvas around 1600 px
- allow deliberate full-bleed image escapes
- career can become a horizontal scroll-linked sequence
- world/editorial cards can overlap in z-space, but never obscure essential text

## Tablet 768-1199

- 8-column grid
- 32 px margins
- 16-20 px gap
- simplify stacked editorial overlap
- helmet hotspots remain touch-sized
- no desktop-only hover dependence

## Mobile < 768

- 4-column grid
- 20 px margins
- 12 px gap
- design specifically for 360, 375, 390, 393, 412 and 430 widths
- first five viewport-height beats should communicate:
  1. ALBA
  2. Ferrari / #12 / current
  3. World
  4. G.I.R.L.
  5. Next race
- horizontal career becomes vertical
- editorial stack becomes full-width cards
- minimum touch target around 44 px
- use `100svh`
- no horizontal overflow
- test inside an in-app browser style viewport

## Typography behavior

Display headlines may scale with `clamp()`, but impose explicit caps so names never clip.

Mobile:
- hero name should feel oversized but readable in one or two lines
- body minimum around 16 px
- data labels around 11-13 px only when high contrast and non-essential

## Image crops

Create separate focal positions for desktop and mobile.
Do not rely on `object-position:center` for every Alba portrait.
