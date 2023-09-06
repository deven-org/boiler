const path = require('path');

module.exports = {
  stories: ['../../ui-library/src/**/*.stories.mdx', '../../ui-library/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  framework: '@storybook/web-components',
  staticDirs: ['../static'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../packages'),
    });

    // Return the altered config
    return config;
  },
  babel: async (options) => {
    Object.assign(options.plugins.find((plugin) => plugin[0].includes('plugin-proposal-decorators'))[1], {
      decoratorsBeforeExport: true,
      legacy: false,
    });
    return options;
  },
};
