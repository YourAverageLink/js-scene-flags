# JS Scene Flags

JS Scene Flags is a JavaScript library for dealing with scene flags in Skyward Sword.

## Installation

Use the package manager [npm](https://docs.npmjs.com/about-npm) to install JS Scene Flags.
Note: The name is slightly different on npm.

```bash
npm install ss-scene-flags
```

## Usage

```javascript
const {flagToEvent, getBiTInfo, lookupFlag} = require('ss-scene-flags');

// returns "Door from Hylia's Temple to Hylia's Realm is unlocked"
flagToEvent('7x04','sealed grounds')

/* returns
[
  'Skyloft: Open Shed Door at Night',
  "Sealed Grounds: Checked Hylia's Realm Statue",
  'Sky: Talk to Lumpy Pumpkin Barkeep',
  'Faron Woods: Heart Piece behind Rocks',
  'Lake Floria: Lake Floria Waterfall Statue Checked'
] */
getBiTInfo('5x02')

/* (true is whether or not it should return the flag action as well) returns 
[
  '0x08: Box is pushed up against wall (can be unset)',
  '5x02: Open Shed Door at Night'
] */
lookupFlag('shed','skyloft',true)

```

