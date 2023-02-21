const StyleDictionary = require('style-dictionary');
const { checkAndEvaluateMath } = require('@tokens-studio/sd-transforms');

StyleDictionary.registerTransform({
  type: `value`,
  name: `transform/resolveMath`,
  transitive: true,
  matcher: (token) => typeof token.value === 'string',
  transformer: (token) => `${checkAndEvaluateMath(token.value)}`
  ,
});
