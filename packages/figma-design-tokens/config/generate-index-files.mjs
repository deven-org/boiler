import fs from 'fs';
import chalk from 'chalk';
import themes from './themes_generated.cjs';
import { buildpaths } from './buildpaths.mjs';

const files = fs.readdirSync(buildpaths.mjs_modules);

const convertToCamelCase = (item) => {
  let convertedString = item;
  convertedString = convertedString
    .replace('.generated', '')
    .replace('.js', '')
    .replace('__', '')
    .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());

  console.log(convertedString);
  return convertedString;
};

/*
const cssFiles = files
  .filter((item) => item.endsWith('generated.scss') && item.startsWith('_'))
  .map((item) => item.replace('.scss', '').replace('_', ''))
  .map((item) => `@use './${item}';`);

console.log(chalk.magentaBright('👷 creates foundation/_tokens-generated/index.generated.scss... \n'));
fs.writeFileSync(`../ui-library/src/foundation/_tokens-generated/index.generated.scss`, cssFiles.join('\n'), 'utf-8');
*/

themes.array.map((theme) => {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${theme}]`);

  const filteredJsFiles = files.filter((item) => item.endsWith(theme + '.generated.mjs') && item.startsWith('__'));

  const importsPart = filteredJsFiles.map((item) => {
    return `import {tokens as ${convertToCamelCase(item.split('.')[0])}} from './mjs_modules/${item}';`;
  });
  const constsPart = filteredJsFiles.map(
    (item) =>
      `const ${convertToCamelCase(item.split('.')[0])}Wrapped = wrapValuesWithCss(${convertToCamelCase(
        item.split('.')[0],
      )})`,
  );
  const exportsPart = filteredJsFiles.map(
    (item) => `export {${convertToCamelCase(item.split('.')[0])}Wrapped as ${convertToCamelCase(item.split('.')[0])}}`,
  );

  const fileOutPut = `import {wrapValuesWithCss} from '../../utils/wrap-values-with-css.js';
      ${importsPart.join('\n')}
      ${constsPart.join('\n')}
      ${exportsPart.join('\n')}`;

  console.log(chalk.cyanBright(`👷 creates foundation/_tokens-generated/index.${theme}.generated.ts... \n`));
  fs.writeFileSync(`../ui-library/src/foundation/_tokens-generated/index.${theme}.generated.ts`, fileOutPut, 'utf-8');
});

const themeFile = `export const Themes = [ "${themes.array.join(
  '", "',
)}" ] as const; export type ThemeType = (typeof Themes)[number];`;
fs.writeFileSync(`../ui-library/src/foundation/_tokens-generated/index.themes.ts`, themeFile, 'utf-8');
