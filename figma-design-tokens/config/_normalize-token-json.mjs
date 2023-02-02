import fs from 'fs';
import path from 'path';
import TokenJson from '../input/tokens.json' assert { type: 'json' };
import chalk from 'chalk';

const __dirname = path.resolve();
const core = TokenJson.UNI_core;
const global = TokenJson.UNI_global;

if (typeof core == 'undefined' || typeof global === 'undefined') {
  throw new Error(chalk.redBright('token.json has wrong format.'));
}

const flattenedJson = { ...core, ...global };

const string = JSON.stringify(flattenedJson);
const modifiedJson = string.replaceAll('base}', 'base.value}');

console.log(
  chalk.cyanBright(
    '\n🧹 NORMALIZE TOKEN.JSON FILE 🧹\nTaking original figma token.json file...\nNormalizing it to make it ready for style-dictionary..\n'
  )
);

fs.writeFileSync(`${__dirname}/figma-design-tokens/input/tokens.normalized.json`, modifiedJson, 'utf-8');
