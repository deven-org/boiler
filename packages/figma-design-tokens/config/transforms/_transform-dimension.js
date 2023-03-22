const StyleDictionary = require('style-dictionary');
const { transformDimension } = require('@tokens-studio/sd-transforms');

StyleDictionary.registerTransform({
  name: 'transform/size/px',
  type: 'value',
  transitive: true,
  matcher: (token) =>
    ['sizing', 'spacing', 'borderRadius', 'borderWidth'].includes(token.type) && !token.value.includes('rem'),
  transformer: (token) => transformDimension(token.value),
});
