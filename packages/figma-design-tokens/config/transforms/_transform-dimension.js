import StyleDictionary from "style-dictionary";
const { transformDimension } = require('@tokens-studio/sd-transforms');

StyleDictionary.registerTransform({
  name: 'transform/size/px',
  type: 'value',
  transitive: true,
  filter: (token) =>
    ['sizing', 'spacing', 'borderRadius', 'borderWidth'].includes(token.type) && !token.value.includes('rem'),
  transform: (token) => transformDimension(token.value),
});
