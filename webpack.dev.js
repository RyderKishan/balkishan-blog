const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'debug',
    compress: true,
    open: false,
    writeToDisk: false,
    host: '192.168.18.5',
    contentBase: 'build',
    historyApiFallback: true,
    liveReload: true,
    port: 8081,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
