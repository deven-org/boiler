/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  output: {
    publicPath: '/js-example-app/',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: '.' },
        { from: '../ui-library/dist', to: '.' },
      ],
    }),
  ],
});
