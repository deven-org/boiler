import fs from 'fs';
import path from 'path';
import camelCase from 'lodash.camelcase';
import chalk from 'chalk';

const __dirname = path.resolve();
const iconDir = `${__dirname}/icons-optimized`;
const srcDir = `${__dirname}/src`;

let pureKeys = [];

fs.readdir(iconDir, (err, files) => {
  if (err) {
    throw new Error('Unable to scan directory: ' + err);
  }

  const iconNames = [];
  const iconTemplateStrings = [];

  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      const fileName = path.parse(file).name;
      const withPrefix = `blr${fileName}`;
      const splitsWithoutSize = withPrefix.split('_').slice(0, -1);
      const withoutSize = splitsWithoutSize.join('-');
      const name = camelCase(withPrefix);
      const nameWithoutSize = camelCase(withoutSize);

      iconNames.push(name);

      if (pureKeys.indexOf(`"${nameWithoutSize}"`) === -1) {
        pureKeys.push(`"${nameWithoutSize}"`);
      }

      const svgFileContent = fs.readFileSync(path.resolve(iconDir, file), { encoding: 'utf-8' });

      iconTemplateStrings.push(`export const ${name}: string = ${JSON.stringify(svgFileContent)};`);
    }
  });

  console.log(chalk.greenBright(`\n... 🖼️ compiles ${iconNames.length} icons:\n`));
  // iconNames.forEach((icon) => console.log(chalk.green.bold(`${icon}`)));
  // console.log('\n');

  const template = `
    ${iconTemplateStrings.join('\n')}

    export const PureIconKeys = [
      ${pureKeys.join(',\n')}
    ] as const;

    export const IconMapping = { ${iconNames.map((icon) => icon).join(',\n')} };
    export type IconType = keyof typeof IconMapping;
    export const IconKeys = Object.keys(IconMapping);
    export type SizelessIconType = (typeof PureIconKeys)[number];
  `;

  fs.writeFileSync(`${srcDir}/icons.generated.ts`, template, 'utf-8');
});
