# Sitemap and Page Architecture

## Concept version

Build one high-impact route first:

`/`

It contains:
1. concept disclosure
2. hero
3. introduction
4. live current card
5. four-world gateway
6. race chapter
7. Shanghai
8. Montreal
9. Silverstone
10. Zandvoort / next
11. helmet
12. career
13. world/editorial
14. performance
15. G.I.R.L.
16. press
17. partners
18. contact
19. footer

Use anchored navigation and animated route-state cues, but keep native URL/hash behavior accessible.

## Production-ready route structure

`/`
`/race`
`/world`
`/performance`
`/story`
`/girl`
`/press`
`/partners`
`/contact`

The single-page concept must be built from components that can later be moved to these routes without rewriting their data layer.

## Priority

P0: hero, current, race, helmet, world, G.I.R.L., mobile  
P1: performance, career, press, partners, contact  
P2: separate deep routes, CMS dashboard, Danish localisation
