// const kebabCase = require('lodash.kebabcase');
const StyleDictionaryPackage = require('style-dictionary');
const sdTransforms = require('@tokens-studio/sd-transforms');
const { minifyDictionary, fileHeader } = StyleDictionaryPackage.formatHelpers;
require('./transforms/index');

const themes = require('./themes.cjs');

const { registerTransforms } = sdTransforms;
registerTransforms(StyleDictionaryPackage);

const semanticTypes = [
  // sizes variants
  'XS',
  'SM',
  'MD',
  'LG',
  'XL',

  // elevation  variants
  'Lvl_1',
  'Lvl_2',

  // emphasis  variants
  'CTA',
  'Primary',
  'Secondary',
  'Silent',
  'Destructive',
  'Encourage',

  // feedback  variants
  'Neutral',
  'Warning',
  'Error',

  // componentElements
  'Caption',
  'CaptionSlot',
  'Label',
  'LabelSlot',
  'Legend',
  'UserInput',
  'Placeholder',
  'Input',
  'InputSlot',
  'InputField',
  'InputIcon',
  'PrefixSuffix',
  'FocusBorder',

  // tokenTypes
  'BorderRadius',
  'BorderWidth',
  'SurfaceFill',
  'InputBorderRadius',
  'Fill',
  'Background',

  // semantic
  'Focus',
  'Feedback',
];

const componentTypes = [
  'ButtonGroup',
  'CaptionComponent',
  'CaptionGroup',
  'Checkbox',
  'Counter',
  'Divider',
  'FormLabel',
  'Icon',
  'IconButton',
  'IconDropdown',
  'Loader',
  'RadioGroup',
  'NumberInput',
  'Select',
  'Slider',
  'StepperButton',
  'StepperCombo',
  'Radio',
  'TabBar',
  'TextButton',
  'TextArea',
  'ToggleSwitch',
  'Tooltip',
];

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
      `input/tokens/intermediary/${theme}.json`,
      'input/tokens/core/*.json',
      'input/tokens/color/*.json',
      'input/tokens/dimensions/*.json',
      'input/tokens/captions/*.json',
      'input/tokens/sizeVariants/*.json',
    ],
    platforms: {
      /*
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
      */
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
              const typeToFilter = semanticTypes;
              return typeToFilter.includes(token.attributes.type);
            },
          },
          {
            format: 'custom/format/componentTokens',
            destination: `__component-tokens.${theme}.generated.mjs`,
            filter: (token) => {
              const typeToFilter = componentTypes;
              return typeToFilter.includes(token.attributes.type) && token.type !== 'componentConfig';
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
  console.log(`\nProcessing: [${theme}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

  //StyleDictionary.buildPlatform('scss');
  StyleDictionary.buildPlatform('js');
});
