import fs from 'fs';
import path from 'path';
import camelCase from 'lodash.camelcase';
import chalk from 'chalk';

const __dirname = path.resolve();
const iconDir = `${__dirname}/icons-optimized`;

fs.readdir(iconDir, (err, files) => {
  if (err) {
    throw new Error('Unable to scan directory: ' + err);
  }

  const icons = [];
  const iconTemplateStrings = [];

  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      const withPrefix = `blr${path.parse(file).name}`;
      const name = camelCase(withPrefix);
      const data = fs.readFileSync(`${iconDir}/${file}`, 'utf8');
      // adds a class attribute to the svg string
      const withClassAttribute = data.replace('<svg ', '<svg class="${className}" ');

      icons.push({ name, withClassAttribute });

      iconTemplateStrings.push(`const ${name} = (className: string) => html\`${withClassAttribute}\`; \n`);
    }
  });

  console.log(chalk.greenBright(`\n... 🖼️ compiles ${icons.length} icons:\n`));
  icons.forEach((icon) => console.log(chalk.green.bold(`${icon.name}`)));
  console.log('\n');

  const template = `
  import { html } from 'lit-element'; \n
  ${iconTemplateStrings.join('\n')}

  export const IconMapping = { ${icons.map((icon) => icon.name).join(',\n')} };
  export type IconType = keyof typeof IconMapping;
  export const IconKeys = Object.keys(IconMapping);
  `;

  fs.writeFileSync(`${iconDir}/icons.ts`, template, 'utf-8');
});
