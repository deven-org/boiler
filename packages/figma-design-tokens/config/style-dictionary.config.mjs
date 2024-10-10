// get an themes array not needed anymore if we derive themes from $themes.json
// import * as hardCodedThemes from './themes.cjs';
// console.log(hardCodedThemes.array);

import { register, permutateThemes, expandTypesMap } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { fileHeader, minifyDictionary } from 'style-dictionary/utils';
import * as fs from 'fs';
import { Buffer } from 'node:buffer';
import prettier from 'prettier';
import { buildpaths } from './buildpaths.mjs';
import JsonToTS from 'json-to-ts';

register(StyleDictionary, {
  /* options here if needed */
});

// mjs format
StyleDictionary.registerFormat({
  name: 'custom/format/mjs',
  format: async ({ dictionary, file }) => {
    const tokenObj = dictionary.tokens;
    const body = `export const tokens = ${JSON.stringify(minifyDictionary(tokenObj, true))}`;
    const prettierConfig = await prettier.resolveConfig(process.cwd());
    const prettyBody = await prettier.format(body, {
      // ...prettierConfig,
      parser: 'babel',
    });
    return (await fileHeader({ file })) + prettyBody;
  },
});

// typings format
StyleDictionary.registerFormat({
  name: 'typescript/accurate-module-declarations',
  format: function ({ dictionary }) {
    const tokenObj = dictionary.tokens;
    return (
      'declare const root: RootObject\n' +
      'export default root\n' +
      JsonToTS(minifyDictionary(tokenObj, true)).join('\n')
    );
  },
});

//registered custom transforms
StyleDictionary.registerTransform({
  type: `value`,
  name: `custom/strReplace`,
  transitive: true,
  filter: (token) => typeof token.value === 'string',
  transform: (token) => token.value.replace('pxpx', 'px'),
});

// directory where our tokens live
const tokenDir = './input/tokens/';

// generate themes_generated.cjs file
function writeThemesFile(themesObj) {
  console.log('themes:');
  console.log(themesObj);
  const themes = JSON.stringify(Object.keys(themesObj));

  console.log(`Themes: ${themes}`);

  const data = new Uint8Array(Buffer.from(`const themes = ${themes} \nexports.array = themes;`));
  fs.writeFile('./config/themes_generated.cjs', data, (err) => {
    if (err) throw err;
    console.log(`\nThe file 'themes_generated.cjs' has been saved!`);
  });
}

// # # # # # # # # # #
// main process
// # # # # # # # # # #

async function run() {
  const $themes = JSON.parse(fs.readFileSync(`${tokenDir}$themes.json`, 'utf-8'));

  const themes = permutateThemes($themes, { separator: '_' });
  writeThemesFile(themes);
  const config = Object.entries(themes).map(([name, tokensets]) => {
    return {
      source: tokensets.map((tokenset) => `${tokenDir}${tokenset}.json`),
      preprocessors: ['tokens-studio'], // <-- since 0.16.0 this must be explicit
      expand: {
        typesMap: expandTypesMap,
      },
      platforms: {
        mjs_modules: {
          transforms: [
            'attribute/cti',
            'name/pascal',
            'ts/resolveMath',
            'ts/size/px',
            'ts/typography/fontWeight',
            'custom/strReplace',
          ],
          // transformGroup: 'tokens-studio',
          buildPath: buildpaths.mjs_modules,
          files: [
            {
              format: 'custom/format/mjs',
              destination: `__semantic-tokens.${name}.generated.mjs`,
              filter: (token) => {
                return token.attributes.category === 'sem';
              },
            },
            {
              format: 'custom/format/mjs',
              destination: `__component-tokens.${name}.generated.mjs`,
              filter: (token) => {
                return token.attributes.category === 'cmp' && token.$type !== 'componentConfig';
              },
            },
            {
              format: 'custom/format/mjs',
              destination: 'config-tokens/__component-config.generated.mjs',
              filter: (token) => {
                return token.$type === 'componentConfig';
              },
            },
          ],
        },
        ts_module_declaration: {
          transforms: [
            'attribute/cti',
            'name/pascal',
            'ts/resolveMath',
            'ts/size/px',
            'ts/typography/fontWeight',
            'custom/strReplace',
          ],
          // transformGroup: 'js',
          buildPath: buildpaths.modul_declarations,
          files: [
            {
              format: 'typescript/accurate-module-declarations',
              destination: `__semantic-tokens.${name}.generated.ts`,
              filter: (token) => {
                return token.attributes.category === 'sem';
              },
            },
            {
              format: 'typescript/accurate-module-declarations',
              destination: `__component-tokens.${name}.generated.ts`,
              filter: (token) => {
                return token.attributes.category === 'cmp' && token.$type !== 'componentConfig';
              },
            },
            {
              format: 'typescript/accurate-module-declarations',
              destination: 'config-tokens/__component-config.generated.ts',
              filter: (token) => {
                return token.$type === 'componentConfig';
              },
            },
          ],
        },
      },
      log: {
        warnings: 'warn', // 'warn' | 'error' | 'disabled'
        verbosity: 'verbose', // 'default' | 'silent' | 'verbose'
        errors: {
          brokenReferences: 'throw', // 'throw' | 'console'
        },
      },
    };
  });

  async function cleanAndBuild(cfg) {
    // console.log(cfg);
    const sd = new StyleDictionary(cfg);
    await sd.cleanAllPlatforms(); // optionally, cleanup files first..
    // await sd.buildAllPlatforms();
    await sd.buildPlatform('mjs_modules');
    await sd.buildPlatform('ts_module_declaration');
  }

  await Promise.all(config.map(cleanAndBuild));
}

run();
