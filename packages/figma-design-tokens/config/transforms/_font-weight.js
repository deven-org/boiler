import StyleDictionary from "style-dictionary";

StyleDictionary.registerTransform({
  type: `value`,
  name: `transform/font-weight`,
  transitive: true,
  filter: (token) => typeof token.value === 'string' && token.original.type === 'fontWeights',
  transform: (token) => {
    const fontWeightMapping = { Light: 300, Regular: 400, SemiBold: 600, Bold: 700 };

    return fontWeightMapping[token.value];
  },
});
