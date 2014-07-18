'use strict';

var webpack = require('webpack');

module.exports = {
  contentBase: __dirname + "/dist/",
  target: 'web',
  cache: true,
  bail: true,
  devtool: '#source-map',
  entry: {
    app: './src/js/entry.jsx'
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
        loader: 'jshint-loader!jsx-loader?harmony&insertPragma=React.DOM'
      }
    ],
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader?harmony&insertPragma=React.DOM" },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/jeet/stylus/' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
      { test: /\.gif$/, loader: "url-loader?mimetype=image/gif" },
      { test: /\.jpe?g$/, loader: "url-loader?mimetype=image/jpeg" }
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    extentions: ['jsx'],
    modulesDirectories: ['node_modules']
  },
  plugins: []
};
