const path = require('path');
const htmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
    watchFiles: ['./src'],
  },

  plugins: [
    new htmlWebpackplugin({
      template: path.resolve(__dirname, './src/products.html'),
      chunks: ['product'],
      inject: true,
      filename: 'products.html',
    }),
    new htmlWebpackplugin({
      template: path.resolve(__dirname, './src/index.html'),
      chunks: ['index'],
      inject: true,
      filename: 'index.html',
    }),
  ],
};
