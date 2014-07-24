'use strict';

var webpack = require('webpack');

var jsxLoader = 'jsx?insertPragma=React.DOM';

module.exports = {
  contentBase: __dirname + "/dist/",
  target: 'web',
  cache: true,
  bail: true,
  devtool: '#source-map',
  entry: {
    app: './src/entry.jsx'
  },
  output: {
    path: '/dist/',
    publicPath: "/js/",
    filename: "[name].js",
    chunkFilename: '[id].js'
  },
  externals: [],
  module: {
    preLoaders: [
      {
        test: /\.jsx?/,
        exclude: __dirname + '/node_modules',
        loader: 'jshint!' + jsxLoader
      }
    ],
    loaders: [
      { test: /\.jsx$/, loader: jsxLoader },
      { test: /\.styl$/, loader: 'style!css!stylus?paths=node_modules/'},
      { test: /\.png$/, loader: "url?mimetype=image/png" },
      { test: /\.gif$/, loader: "url?mimetype=image/gif" },
      { test: /\.jpe?g$/, loader: "url?mimetype=image/jpeg" }
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    extentions: ['jsx', 'styl'],
    modulesDirectories: ['node_modules']
  },
  plugins: []
};
