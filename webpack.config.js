const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        oneOf: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};