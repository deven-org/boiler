const StyleDictionary = require('style-dictionary');
const buildInTransforms = require('style-dictionary/lib/common/transforms');

StyleDictionary.registerTransform({
  type: `value`,
  name: `transform/font-to-rem`,
  matcher: (token) => typeof token.value === 'string' && token.original.type === 'fontSizes',
  transformer: (token, options) => buildInTransforms['size/pxToRem'].transformer(token, options),
});
