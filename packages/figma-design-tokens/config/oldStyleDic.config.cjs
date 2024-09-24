// THIS IS OLD

// const kebabCase = require('lodash.kebabcase');

const StyleDictionaryPackage = require('style-dictionary');
const sdTransforms = require('@tokens-studio/sd-transforms');
const themes = require('./themes.cjs');

const { minifyDictionary, fileHeader } = StyleDictionaryPackage.formatHelpers;
require('./transforms/index');

const { registerTransforms } = sdTransforms;
registerTransforms(StyleDictionaryPackage);

StyleDictionaryPackage.registerFormat({
  name: 'custom/format/semanticTokens',
  formatter: ({ dictionary, file }) => {
    const tokenObj = dictionary.tokens;
    return fileHeader({ file }) + `export const semanticTokens = ` + JSON.stringify(minifyDictionary(tokenObj));
  },
});

StyleDictionaryPackage.registerFormat({
  name: 'custom/format/componentTokens',
  formatter: ({ dictionary, file }) => {
    const tokenObj = dictionary.tokens;
    return fileHeader({ file }) + `export const componentTokens = ` + JSON.stringify(minifyDictionary(tokenObj));
  },
});

StyleDictionaryPackage.registerFormat({
  name: 'custom/format/componentConfig',
  formatter: ({ dictionary, file }) => {
    const tokenObj = dictionary.tokens;
    return fileHeader({ file }) + `export const componentConfig = ` + JSON.stringify(minifyDictionary(tokenObj));
  },
});

const getStyleDictionaryConfig = (theme) => {
  return {
    source: [
      'input/tokens/core/*.json',
      `input/tokens/sys/${theme.toLowerCase()}.json`,
      'input/tokens/sys/sizes.json',
      'input/tokens/sem/*.json',
      'input/tokens/cmp/*.json',
    ],
    platforms: {
      js: {
        transforms: [
          'attribute/cti',
          'name/cti/pascal',
          'transform/resolveMath',
          'transform/size/px',
          'transform/strReplace',
          'transform/font-weight',
        ],
        buildPath: '../ui-library/src/foundation/_tokens-generated/',
        files: [
          {
            format: 'custom/format/semanticTokens',
            destination: `__semantic-tokens.${theme}.generated.mjs`,
            filter: (token) => {
              return token.attributes.category === 'sem';
            },
          },
          {
            format: 'custom/format/componentTokens',
            destination: `__component-tokens.${theme}.generated.mjs`,
            filter: (token) => {
              return token.attributes.category === 'cmp' && token.type !== 'componentConfig';
            },
          },
          {
            format: 'custom/format/componentConfig',
            destination: 'config-tokens/__component-config.generated.mjs',
            filter: (token) => {
              return token.type === 'componentConfig';
            },
          },
        ],
      },
    },
  };
};

themes.array.map((theme) => {
  console.log('\n==============================================');
  console.log(`\nStyleDictionary Processing: [${theme}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

  //StyleDictionary.buildPlatform('scss');
  StyleDictionary.buildPlatform('js');
});
