import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const __dirname = path.resolve();

const files = fs
  .readdirSync(`${__dirname}/src/foundation/_tokens-generated`)
  .filter((item) => item.endsWith('generated.scss'))
  .map((item) => item.replace('.scss', '').replace('_', ''))
  .map((item) => `@use './${item}';`);

console.log(chalk.magentaBright('👷 creates foundation/_tokens-generated/index.scss... \n'));

fs.writeFileSync(`${__dirname}/src/foundation/_tokens-generated/index.generated.scss`, files.join('\n'), 'utf-8');
