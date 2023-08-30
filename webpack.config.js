const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './javascript/autotype/AutoType.js',
  output: {
    filename: 'AutoType.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};
