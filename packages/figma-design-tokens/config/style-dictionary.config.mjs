// get an themes array not needed anymore if we derive themes from $themes.json
import * as hardCodedThemes from './themes.cjs';

console.log(hardCodedThemes.array);

import { register, permutateThemes, expandTypesMap, excludeParentKeys } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { fileHeader, minifyDictionary } from 'style-dictionary/utils';
import * as fs from 'fs';

// register(StyleDictionary, {
//   /* options here if needed */
// });

register(StyleDictionary);

//-- registered formats
StyleDictionary.registerFormat({
  name: 'custom/format/semanticTokens',
  format: async ({ dictionary, file }) => {
    const tokenObj = dictionary.tokens;
    return (
      (await fileHeader({ file })) + `export const semanticTokens = ` + JSON.stringify(minifyDictionary(tokenObj, true))
    );
  },
});

StyleDictionary.registerFormat({
  name: 'custom/format/componentTokens',
  format: async ({ dictionary, file }) => {
    const tokenObj = dictionary.tokens;
    return (
      (await fileHeader({ file })) +
      `export const componentTokens = ` +
      JSON.stringify(minifyDictionary(tokenObj, true))
    );
  },
});

StyleDictionary.registerFormat({
  name: 'custom/format/componentConfig',
  format: async ({ dictionary, file }) => {
    const tokenObj = dictionary.tokens;
    return (
      (await fileHeader({ file })) +
      `export const componentConfig = ` +
      JSON.stringify(minifyDictionary(tokenObj, true))
    );
  },
});

//-- registered custom transforms
StyleDictionary.registerTransform({
  type: `value`,
  name: `custom/strReplace`,
  transitive: true,
  filter: (token) => typeof token.value === 'string',
  transform: (token) => token.value.replace('pxpx', 'px'),
});

// directory where our tokens live
const tokenDir = './input/tokens/';

// # # # # # # # # # #
// main process
// # # # # # # # # # #

async function run() {
  const $themes = JSON.parse(fs.readFileSync(`${tokenDir}$themes.json`, 'utf-8'));

  // This would be better since it dynamicaly gets the theme from the $themes file
  const themes = permutateThemes($themes, { separator: '_' });

  const translateThemesToHardCoded = {
    Light_value: 'Light',
    Dark_value: 'Dark',
  };

  console.log('themes:');
  console.log(themes);

  const config = Object.entries(themes).map(([name, tokensets]) => {
    // const src = tokensets.map((tokenset) => `${tokenset}.json`);
    // console.log(src);
    return {
      source: tokensets.map((tokenset) => `${tokenDir}${tokenset}.json`),
      preprocessors: ['tokens-studio'], // <-- since 0.16.0 this must be explicit
      expand: {
        typesMap: expandTypesMap,
      },
      platforms: {
        js: {
          transformGroup: 'tokens-studio',
          transforms: [
            'attribute/cti',
            'name/pascal',
            'ts/resolveMath',
            'ts/size/px',
            'ts/typography/fontWeight',
            'custom/strReplace',
          ],
          buildPath: '../ui-library/src/foundation/_tokens-generated/',
          files: [
            {
              format: 'custom/format/semanticTokens',
              destination: `__semantic-tokens.${translateThemesToHardCoded[name]}.generated.mjs`,
              filter: (token) => {
                return token.attributes.category === 'sem';
              },
            },
            {
              format: 'custom/format/componentTokens',
              // format: 'css/variables',
              destination: `__component-tokens.${translateThemesToHardCoded[name]}.generated.mjs`,
              filter: (token) => {
                return token.attributes.category === 'cmp' && token.$type !== 'componentConfig';
              },
            },
            {
              format: 'custom/format/componentConfig',
              destination: 'config-tokens/__component-config.generated.mjs',
              filter: (token) => {
                return token.$type === 'componentConfig';
              },
            },
          ],
        },
      },
    };
  });

  async function cleanAndBuild(cfg) {
    // console.log(cfg);
    const sd = new StyleDictionary(cfg);
    await sd.cleanAllPlatforms(); // optionally, cleanup files first..
    await sd.buildAllPlatforms();
  }

  await Promise.all(config.map(cleanAndBuild));
}

run();
