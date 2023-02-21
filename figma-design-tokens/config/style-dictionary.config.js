const kebabCase = require('lodash.kebabcase');
const StyleDictionary = require('style-dictionary');
require('./transforms/font-weight');

const { minifyDictionary, fileHeader } = StyleDictionary.formatHelpers;
const { checkAndEvaluateMath, transformDimension } = require('@tokens-studio/sd-transforms');

const types = [
  'color',
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
  name: 'custom/format/semantic-tokens',
  formatter: function ({ dictionary, file }) {
    const tokenObj = dictionary.tokens;
    return fileHeader({ file }) + 'export const semanticTokens = ' + JSON.stringify(minifyDictionary(tokenObj));
  },
});

StyleDictionary.registerTransform({
  type: `value`,
  name: `resolveMath`,
  transitive: true,
  matcher: token => typeof token.value === 'string',
  // Putting this in strings seems to be required
  transformer: token => {
    const result = `${checkAndEvaluateMath(token.value)}`
    const transformedResult = transformDimension(result);
    return transformedResult.replace('pxpx', 'px');
  },
});

StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  transitive: true,
  matcher: token =>
    ['sizing', 'spacing', 'borderRadius', 'borderWidth', 'fontSizes', 'dimension'].includes(
      token.type,
    ),
  transformer: token => transformDimension(token.value),
});


module.exports = {
  source: ['figma-design-tokens/input/tokens.normalized.json'],
  platforms: {
    scss: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      prefix: 'blr',
      buildPath: 'figma-design-tokens/',
      files: [
        ...types.map((type) => ({
          format: 'css/variables',
          destination: `../src/foundation/_tokens-generated/_${kebabCase(type)}.generated.scss`,
          filter: (token) => token.attributes.category === 'core' && token.attributes.type === type,
        })),
      ],
    },
    js: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'resolveMath', 'transform/font-weight'],
      prefix: 'blr',
      buildPath: 'figma-design-tokens/',
      files: [
        {
          format: 'custom/format/semantic-tokens',
          destination: '../src/foundation/_tokens-generated/semantic-tokens.generated.js',
          filter: (token) => token.attributes.category === 'semantic',
        },
      ],
    },
  },
};
