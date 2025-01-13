import type { StorybookConfig } from '@storybook/web-components-webpack5';
import { resolve } from 'path';
import { merge } from 'webpack-merge';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@geometricpanda/storybook-addon-badges',
  ],
  framework: '@storybook/web-components-webpack5',
  docs: {
    autodocs: true,
  },
  staticDirs: ['../../assets'],

  previewBody: (body) => `
    ${body}
    <script>console.log('this build was created on ${new Date().toLocaleString()}');</script>
  `,
  webpackFinal: async (config) => {
    const result = merge(config, {
      resolve: {
        extensionAlias: {
          '.js': ['.ts', '.js'],
          '.mjs': ['.mts', '.mjs'],
          '.cjs': ['.cts', '.cjs'],
        },
      },
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: resolve(__dirname, 'packages'),
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'raw-loader',
              },
            ],
          },
        ],
      },
    });

    return result;
  },
};

export default config;
