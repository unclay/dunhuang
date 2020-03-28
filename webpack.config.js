const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        oneOf: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ],
  },
};