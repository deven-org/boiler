/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const chalk = require('chalk');

const componentsPath = path.join(__dirname, 'src/components');
const componentNames = fs.readdirSync(componentsPath);
const validComponents = [];

console.log(chalk.bold('Components:'));
componentNames.forEach((component) => {
  if (fs.existsSync(`${componentsPath}/${component}/index.html`)) {
    console.log(chalk.bgGreen(`📄 ${component}: http://localhost:8080/${component}.html`));
    return validComponents.push(component);
  } else {
    return console.log(chalk.bgRed(`😔 ${component} has no index.html`));
  }
});
console.log('\n');

module.exports = {
  entry: ['./src/index.ts', './src/foundation/index.scss'],
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    usedExports: true,
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [{ from: 'src/assets', to: 'assets' }]
    // }),
    new ESLintPlugin({
      extensions: ['.ts', '.js'],
      exclude: 'node_modules',
      context: 'src',
    }),
  ].concat(
    validComponents.map((name) => {
      return new HtmlWebpackPlugin({
        template: `./src/components/${name}/index.html`,
        filename: `${name}.html`,
      });
    })
  ),
};
