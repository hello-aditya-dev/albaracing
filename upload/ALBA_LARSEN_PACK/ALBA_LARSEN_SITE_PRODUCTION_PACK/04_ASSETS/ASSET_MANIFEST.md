# Asset Manifest

## Rule

No third-party copyrighted images are bundled in this package.

Zai must build a complete image-slot system and use local neutral placeholders unless the user supplies authorized media.

Do not silently scrape, download, hotlink, or copy images from the source pages into a public production site.

## Priority asset request to management

### Alba brand
- official Alba wordmark SVG
- avatar mark SVG
- brand guidelines
- official palette
- official typography
- pattern/checker assets
- brand/livery graphics

### 2026 racing
- official 2026 headshot
- race-suit portrait
- full-car side profile
- full-car three-quarter
- cockpit close-up
- helmet front
- helmet left/right
- helmet rear
- action shots from Shanghai, Montreal, Silverstone
- Zandvoort testing images
- team/garage candid imagery
- trackside wide images with negative space

### Fashion/editorial
- management-approved Vogue assets
- management-approved Teen Vogue assets
- approved Tommy Jeans Spring 2026 campaign assets
- approved event/paddock style images

### Performance
- WHOOP partnership hero
- wearable close-up
- training/performance imagery
- approved example charts if partner provides them

### G.I.R.L.
- official logo
- approved event imagery
- group photos with releases
- track-day images
- sim-racing images
- mentorship images

### Press
- portrait headshot
- landscape media image
- short biography
- long biography
- racing resume PDF
- approved press kit

## Slot naming convention

`hero.primary`
`hero.mobile`
`race.shanghai.hero`
`race.montreal.hero`
`race.silverstone.hero`
`race.zandvoort.hero`
`helmet.front`
`helmet.side`
`helmet.rear`
`world.vogue.01`
`world.teenvogue.01`
`world.tommy.01`
`performance.whoop.01`
`girl.community.01`
`girl.community.02`
`press.headshot`
`social.og`

## Placeholder behavior

When an asset is missing:
- render an elegant typographic/colour composition
- include small internal dev label such as `ASSET REQUIRED: helmet.side`
- strip those labels in screenshots only if the user intentionally supplies a temporary authorized asset
- never use AI-generated images purporting to be Alba unless the user provides an image of her for editing/generation and applicable permissions are satisfied
