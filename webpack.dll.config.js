const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    devserver: [
      'webpack-dev-server/client/index.js',
      'webpack-dev-server/client/socket.js',
      'webpack-dev-server/client/overlay.js',
      'webpack-dev-server/client/utils/log.js',
      'webpack-dev-server/client/utils/sendMessage.js',
      'webpack-dev-server/client/utils/reloadApp.js',
      'webpack-dev-server/client/utils/createSocketUrl.js',
      'strip-ansi/index.js',
    ],
    vendor: ['react','react-dom']
  },
  output: {
    path: path.join(__dirname, './dll/'),
    filename: '[name].dll.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '/dll/[name]-manifest.json'),
      name: '[name]'
    })
  ]
}