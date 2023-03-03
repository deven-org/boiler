const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  type: `value`,
  name: `transform/strReplace`,
  transitive: true,
  matcher: (token) => typeof token.value === 'string',
  transformer: (token) => token.value.replace('pxpx', 'px'),
});
