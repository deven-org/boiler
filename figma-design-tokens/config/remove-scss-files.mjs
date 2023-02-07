import { globby } from 'globby';
import rimraf from 'rimraf';
import chalk from 'chalk';

// Removes contents of foundation/scss except for the README file.

console.log(chalk.blueBright('\n🗑️ clears foundation/scss folder...\n'));

globby(['./src/foundation/scss/*', '!./src/foundation/scss/README.md']).then(function then(paths) {
  paths.map(function map(item) {
    rimraf.sync(item);
  });
});
