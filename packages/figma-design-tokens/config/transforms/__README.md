# Transforms may need to be adjusted during the project setup phase

## font-weight

The transformation of the `fontWeight` values currently relies on an mapping object in `font-weight.js`.

```js
const fontWeightMapping = { Light: 300, Regular: 400, SemiBold: 600, Bold: 700 };
```

The font weights may need to be adjusted to match the figma 'fontWeight' types.

## [resolve-math](https://github.com/tokens-studio/sd-transforms)

Without this transform, a lot of values in the `tokens.normalized.json` are just the factors of the end product. We need to transform those factors to their product. Meaning: `1 * 2` will get transformend to `2`. Why we even have to deal with factors is due to the nature of how the figma tokens get created.

## [transform-dimension](https://github.com/tokens-studio/sd-transforms)

Transform dimensions tokens to have px as a unit when missing (transitive)

## str-replace-pxpx

Sometimes due to the nature of the figma token schema we need to clean the value from multiple occurences of the `px` suffix.
