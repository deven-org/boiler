/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/index.ts'],
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    usedExports: true,
  },
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: (pathData) => {
      return pathData.chunk.name === 'main' ? '[name].js' : 'chunk_[name].js';
    },
    library: {
      type: 'module',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.svg'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: '../assets', to: 'assets' }],
    }),
  ],
};
