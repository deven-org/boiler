import { globby } from 'globby';
import rimraf from 'rimraf';
import chalk from 'chalk';

// Removes contents of foundation except for README.md, icons folder and normalize file.

console.log(chalk.blueBright('\n🗑️ removes generated files from foundation folder...\n'));

globby(['./src/foundation/*', '!./src/foundation/README.md', '!./src/foundation/icons']).then(function then(paths) {
  paths.map(function map(item) {
    rimraf.sync(item);
  });
});
