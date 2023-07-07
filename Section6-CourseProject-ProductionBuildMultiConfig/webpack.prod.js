const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const purgePath = {
  src: path.join(__dirname, 'src'),
};

module.exports = merge(commonConfig, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }),
      safelist: ['dummy-css'],
    }),
    // new BundleAnalyzerPlugin({}),
    new MiniCssExtractPlugin({}),
  ],
});
