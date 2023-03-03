import fs from 'fs';
import path from 'path';
import TokenJson from '../input/BLR-tokens.json' assert { type: 'json' };
import chalk from 'chalk';

const __dirname = path.resolve();

const core = TokenJson.BLR_COR;
const sem = TokenJson.BLR_SEM;
const comp = TokenJson.BLR_CMP;

if (typeof core == 'undefined' || typeof sem === 'undefined' || typeof comp === 'undefined') {
  throw new Error(chalk.redBright('token.json has wrong format.'));
}

const flattenedJson = { ...core, semantic: sem, component: comp };
const string = JSON.stringify(flattenedJson)
  .replaceAll('{Label', '{semantic.Label')
  .replaceAll('{Action', '{semantic.Action');

console.log(chalk.cyanBright('\n🧵🪡 normalize token.json...\n'));

fs.writeFileSync(`${__dirname}/input/tokens.normalized.json`, string, 'utf-8');
