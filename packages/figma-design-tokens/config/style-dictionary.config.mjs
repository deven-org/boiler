// get an themes array
import themes from './themes.cjs';

import { register, permutateThemes, expandTypesMap, excludeParentKeys } from '@tokens-studio/sd-transforms';
// import { expandTypesMap } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { fileHeader, minifyDictionary } from 'style-dictionary/utils';
// import promises from 'fs';
import * as fs from 'fs';

// register(StyleDictionary, {
//   /* options here if needed */
// });

register(StyleDictionary);

StyleDictionary.registerFormat({
  name: 'custom/format/semanticTokens',
  format: async ({ dictionary, file, options }) => {
    const tokenObj = dictionary.tokens;
    return (await fileHeader({ file })) + `export const semanticTokens = ` + JSON.stringify(minifyDictionary(tokenObj));
  },
});

StyleDictionary.registerFormat({
  name: 'custom/format/componentTokens',
  format: async ({ dictionary, file }) => {
    const tokenObj = dictionary.tokens;
    return (
      (await fileHeader({ file })) + `export const componentTokens = ` + JSON.stringify(minifyDictionary(tokenObj))
    );
  },
});

StyleDictionary.registerFormat({
  name: 'custom/format/componentConfig',
  format: async ({ dictionary, file }) => {
    const tokenObj = dictionary.tokens;
    return (
      (await fileHeader({ file })) + `export const componentConfig = ` + JSON.stringify(minifyDictionary(tokenObj))
    );
  },
});

const tokenDir = './input/tokens/';

async function run() {
  const $themes = JSON.parse(fs.readFileSync(`${tokenDir}$themes.json`, 'utf-8'));

  const themes = permutateThemes($themes, { separator: '_' });
  console.log(themes);

  const testConfig = Object.entries(themes).map(([name, tokensets]) => {
    // const src = tokensets.map((tokenset) => `${tokenset}.json`);
    // console.log(src);
    return {
      source: tokensets.map((tokenset) => `${tokenDir}${tokenset}.json`),
      preprocessors: ['tokens-studio'], // <-- since 0.16.0 this must be explicit
      expand: {
        typesMap: expandTypesMap,
      },
      platforms: {
        css: {
          transformGroup: 'tokens-studio',
          transforms: ['name/kebab'],
          buildPath: '../ui-library/src/foundation/_tokens-generated/',
          files: [
            {
              format: 'custom/format/semanticTokens',
              destination: `__semantic-tokens.${name}.generated.mjs`,
              filter: (token) => {
                return token.attributes.category === 'sem';
              },
            },
            {
              format: 'custom/format/componentTokens',
              destination: `__component-tokens.${name}.generated.mjs`,
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
  });

  async function cleanAndBuild(cfg) {
    const sd = new StyleDictionary(cfg);
    await sd.cleanAllPlatforms(); // optionally, cleanup files first..
    await sd.buildAllPlatforms();
  }

  await Promise.all(testConfig.map(cleanAndBuild));
}

run();

console.log('okay');

// StyleDictionary.registerFormat({
//   name: 'custom/format/semanticTokens',
//   format: async ({ dictionary, file }) => {
//     const tokenObj = dictionary.tokens;
//     return (
//       (await fileHeaders({ file })) + `export const semanticTokens = ` + JSON.stringify(minifyDictionary(tokenObj))
//     );
//   },
// });
// StyleDictionary.registerFormat({
//   name: 'custom/format/componentTokens',
//   format: async ({ dictionary, file }) => {
//     const tokenObj = dictionary.tokens;
//     return (
//       (await fileHeaders({ file })) + `export const componentTokens = ` + JSON.stringify(minifyDictionary(tokenObj))
//     );
//   },
// });
// StyleDictionary.registerFormat({
//   name: 'custom/format/componentConfig',
//   format: async ({ dictionary, file }) => {
//     const tokenObj = dictionary.tokens;
//     return (
//       (await fileHeaders({ file })) + `export const componentConfig = ` + JSON.stringify(minifyDictionary(tokenObj))
//     );
//   },
// });
