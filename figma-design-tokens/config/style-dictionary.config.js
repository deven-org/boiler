const kebabCase = require('lodash.kebabcase');
const StyleDictionary = require('style-dictionary');
const { minifyDictionary, fileHeader } = StyleDictionary.formatHelpers;
require('./transforms/index');

const types = [
  'borderRadius',
  'borderWidth',
  'fontFamilies',
  'fontWeights',
  'lineHeights',
  'fontSizes',
  'spacing',
  'pargraphSpacing',
  'letterSpacing',
];

StyleDictionary.registerFormat({
  name: 'custom/format/tokens',
  formatter: function ({ dictionary, file }) {
    const tokenObj = dictionary.tokens;
    const tokenName = Object.keys(tokenObj).toString();

    return fileHeader({ file }) + `export const ${tokenName}Tokens = ` + JSON.stringify(minifyDictionary(tokenObj));
  },
});

module.exports = {
  source: ['figma-design-tokens/input/tokens.normalized.json'],
  platforms: {
    scss: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'transform/resolveMath', 'transform/size/px'],
      prefix: 'blr',
      buildPath: 'figma-design-tokens/',
      files: [
        ...types.map((type) => ({
          format: 'css/variables',
          destination: `../src/foundation/_tokens-generated/_${kebabCase(type)}.generated.scss`,
          filter: (token) => token.attributes.category === 'core' && token.attributes.type === type,
        })),
        {
          format: 'css/variables',
          destination: `../src/foundation/_tokens-generated/_color.generated.scss`,
          filter: (token) => {
            const isCore = token.attributes.category === 'core';
            const isColor = token.attributes.type === 'color';

            // We want to filter out some base color values that the final colors are made of.
            // We don't need them as css variables.
            const isLgt = token.attributes.item === 'LGT';
            const isSat = ['HUE', 'SAT'].includes(token.attributes.subitem);

            return isCore && isColor && !isSat && !isLgt;
          },
        },
      ],
    },
    js: {
      transforms: [
        'attribute/cti',
        'name/cti/pascal',
        'transform/resolveMath',
        'transform/size/px',
        'transform/strReplace',
        'transform/font-weight',
      ],
      prefix: 'blr',
      buildPath: 'figma-design-tokens/',
      files: [
        {
          format: 'custom/format/tokens',
          destination: '../src/foundation/_tokens-generated/__semantic-tokens.generated.js',
          filter: (token) => token.attributes.category === 'semantic',
        },
        {
          format: 'custom/format/tokens',
          destination: '../src/foundation/_tokens-generated/__component-tokens.generated.js',
          filter: (token) => token.attributes.category === 'component',
        },
      ],
    },
  },
};
