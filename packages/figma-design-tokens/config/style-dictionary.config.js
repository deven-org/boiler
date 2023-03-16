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
  source: ['input/tokens.normalized.json'],
  platforms: {
    scss: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'transform/resolveMath',
        'transform/size/px',
        'transform/font-to-rem',
      ],
      prefix: 'blr',
      buildPath: '../ui-library/src/foundation/_tokens-generated/',
      files: [
        ...types.map((type) => ({
          format: 'css/variables',
          destination: `_${kebabCase(type)}.generated.scss`,
          filter: (token) => token.attributes.category === 'core' && token.attributes.type === type,
        })),
        {
          format: 'css/variables',
          destination: `_color.generated.scss`,
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
        'transform/font-to-rem',
      ],
      prefix: 'blr',
      buildPath: '../ui-library/src/foundation/_tokens-generated/',
      files: [
        {
          format: 'custom/format/tokens',
          destination: '__semantic-tokens.generated.js',
          filter: (token) => token.attributes.category === 'semantic',
        },
        {
          format: 'custom/format/tokens',
          destination: '__component-tokens.generated.js',
          filter: (token) => token.attributes.category === 'component',
        },
      ],
    },
  },
};
