const StyleDictionaryPackage = require('style-dictionary');
const sdTransforms = require('@tokens-studio/sd-transforms');

const { registerTransforms } = sdTransforms;
registerTransforms(StyleDictionaryPackage);

const getStyleDictionaryConfig = (theme) => {
  return {
    source: [
      'input/tokens/core/*.json',
      `input/tokens/Inter/${theme}.json`,
      'input/tokens/Colors/*.json',
      'input/tokens/Dimensions/*.json',
    ],
    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        prefix: 'blr',
        buildPath: '../ui-library/src/foundation/_tokens-generated/',
        files: [
          {
            destination: `_variables-${theme}.css`,
            format: 'css/variables',
          },
        ],
      },
    },
  };
};

console.log('Build started...');

['Light', 'Dark'].map(function (theme) {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${theme}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

  StyleDictionary.buildPlatform('css');

  console.log('\nEnd processing');
});

console.log('\n==============================================');
console.log('\nBuild completed!');
