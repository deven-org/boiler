import StyleDictionary from "style-dictionary";

StyleDictionary.registerTransform({
  type: `value`,
  name: `transform/strReplace`,
  transitive: true,
  filter: (token) => typeof token.value === 'string',
  transform: (token) => token.value.replace('pxpx', 'px'),
});
