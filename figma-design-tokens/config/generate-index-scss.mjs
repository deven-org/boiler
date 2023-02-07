import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const __dirname = path.resolve();

const files = fs
  .readdirSync(`${__dirname}/src/foundation/scss`)
  .filter((item) => item.endsWith('.scss'))
  .map((item) => item.replace('.scss', '').replace('_', ''))
  .map((item) => `@use './${item}';`);

console.log(chalk.magentaBright('👷 creates foundation/scss/index.scss... \n'));

fs.writeFileSync(`${__dirname}/src/foundation/scss/index.scss`, files.join('\n'), 'utf-8');
