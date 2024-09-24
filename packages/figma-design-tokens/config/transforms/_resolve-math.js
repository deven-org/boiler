import StyleDictionary from "style-dictionary";
const { checkAndEvaluateMath } = require('@tokens-studio/sd-transforms');

StyleDictionary.registerTransform({
  type: `value`,
  name: `transform/resolveMath`,
  transitive: true,
  filter: (token) => typeof token.value === 'string',
  transform: (token) => `${checkAndEvaluateMath(token.value)}`
  ,
});
