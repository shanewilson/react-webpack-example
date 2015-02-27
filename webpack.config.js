'use strict';

var webpack = require('webpack');

module.exports = {
  contentBase: __dirname + "/dist/",
  target: 'web',
  cache: true,
  bail: false,
  debug: true,
  profile: true,
  devtool: 'eval',
  entry: [
     'webpack-dev-server/client?http://localhost:9000',
     'webpack/hot/only-dev-server',
     './src/entry.jsx'
  ],
  output: {
    pathInfo: true,
    path: '/dist/',
    publicPath: "/js/",
    filename: "[name].js",
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      { test: require.resolve("react/addons"), loader: "expose?React" },
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental&optional=runtime'], exclude: /node_modules/ },
      { test: /\.styl$/, loader: 'style!css!stylus?paths=node_modules/'},
      { test: /\.png$/, loader: "url?mimetype=image/png" },
      { test: /\.gif$/, loader: "url?mimetype=image/gif" },
      { test: /\.jpe?g$/, loader: "url?mimetype=image/jpeg" }
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    extentions: ['js', 'jsx', 'styl']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};
