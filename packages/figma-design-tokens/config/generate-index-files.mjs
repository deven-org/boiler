import fs from 'fs';
import chalk from 'chalk';

const files = fs.readdirSync(`../ui-library/src/foundation/_tokens-generated`);

const convertToCamelCase = (item) => {
  let convertedString = item;
  convertedString = convertedString
    .replace('.generated', '')
    .replace('.js', '')
    .replace('__', '')
    .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
  return convertedString;
};

const cssFiles = files
  .filter((item) => item.endsWith('generated.scss') && item.startsWith('_'))
  .map((item) => item.replace('.scss', '').replace('_', ''))
  .map((item) => `@use './${item}';`);

const filteredJsFiles = files.filter((item) => item.endsWith('generated.js') && item.startsWith('__'));

const importsPart = filteredJsFiles.map((item) => `import {${convertToCamelCase(item)}} from './${item}'`);
const constsPart = filteredJsFiles.map(
  (item) => `const ${convertToCamelCase(item)}Wrapped = wrapValuesWithCss(${convertToCamelCase(item)})`
);
const exportsPart = filteredJsFiles.map(
  (item) => `export {${convertToCamelCase(item)}Wrapped as ${convertToCamelCase(item)}}`
);

const fileOutPut = `import {wrapValuesWithCss} from '../../utils/wrap-values-with-css';
    ${importsPart.join('\n')}

    ${constsPart.join('\n')}
    
    ${exportsPart.join('\n')}`;

console.log(chalk.magentaBright('👷 creates foundation/_tokens-generated/index.generated.scss... \n'));
fs.writeFileSync(`../ui-library/src/foundation/_tokens-generated/index.generated.scss`, cssFiles.join('\n'), 'utf-8');

console.log(chalk.cyanBright('👷 creates foundation/_tokens-generated/index.generated.ts... \n'));
fs.writeFileSync(`../ui-library/src/foundation/_tokens-generated/index.generated.ts`, fileOutPut, 'utf-8');
