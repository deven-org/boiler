import type { StorybookConfig } from '@storybook/web-components-webpack5';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../../ui-library/src/**/*.stories.mdx', '../../ui-library/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/web-components-webpack5',
  docs: {
    autodocs: true,
  },
  staticDirs: ['../static'],

  webpackFinal: async (config) => {
    config.module!.rules!.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: resolve(__dirname, 'packages'),
    });

    // Return the altered config
    return config;
  },
};

export default config;
