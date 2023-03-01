import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const __dirname = path.resolve();

const files = fs.readdirSync(`${__dirname}/src/foundation/_tokens-generated`);

const cssFiles = files
  .filter((item) => item.endsWith('generated.scss'))
  .map((item) => item.replace('.scss', '').replace('_', ''))
  .map((item) => `@use './${item}';`);

const jsFiles = files
  .filter((item) => item.endsWith('generated.js'))
  .map((item) => item.replace('.js', ''))
  .map((item) => `export * from './${item}';`);

console.log(chalk.magentaBright('👷 creates foundation/_tokens-generated/index.generated.scss... \n'));
fs.writeFileSync(`${__dirname}/src/foundation/_tokens-generated/index.generated.scss`, cssFiles.join('\n'), 'utf-8');

console.log(chalk.cyanBright('👷 creates foundation/_tokens-generated/index.generated.js... \n'));
fs.writeFileSync(`${__dirname}/src/foundation/_tokens-generated/index.generated.js`, jsFiles.join('\n'), 'utf-8');
