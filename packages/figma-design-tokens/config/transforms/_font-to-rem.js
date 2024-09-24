import StyleDictionary from "style-dictionary";
const buildInTransforms = require('style-dictionary/lib/common/transforms');

StyleDictionary.registerTransform({
  type: `$value`,
  name: `transform/font-to-rem`,
  filter: (token) => typeof token.value === 'string' && token.original.type === 'fontSizes',
  transform: (token, options) => buildInTransforms['size/pxToRem'].transformer(token, options),
});
