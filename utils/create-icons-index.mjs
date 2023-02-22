import fs from 'fs';
import path from 'path';
import camelCase from 'lodash.camelcase';
import chalk from 'chalk';

const __dirname = path.resolve();
const iconDir = `${__dirname}/src/foundation/icons`;

fs.readdir(iconDir, (err, files) => {
  if (err) {
    throw new Error('Unable to scan directory: ' + err);
  }

  const icons = [];
  const iconTemplateStrings = [];

  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      const name = camelCase(path.parse(file).name);
      const data = fs.readFileSync(`${iconDir}/${file}`, 'utf8');
      // adds a class attribute to the svg string
      const withClassAttribute = data.replace('fill="currentColor"', 'class="${className}" fill="currentColor"');

      icons.push({ name, withClassAttribute });

      iconTemplateStrings.push(`const ${name} = (className: string) => html\`${withClassAttribute}\`; \n`);
    }
  });

  console.log(chalk.greenBright(`\n... 🖼️ compiles ${icons.length} icons:\n`));
  icons.forEach((icon) => console.log(chalk.green.bold(`${icon.name}`)));
  console.log('\n');

  const template = `
  import { html } from 'lit'; \n
  ${iconTemplateStrings.join('\n')}

  export const IconMapping = { ${icons.map((icon) => icon.name).join(',\n')} };
  export type IconType = keyof typeof IconMapping;
  `;

  fs.writeFileSync(`${iconDir}/index.ts`, template, 'utf-8');
});
