const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env) => merge(common(env), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    overlay: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});
