'use strict';

var webpack = require('webpack');

var jsxLoader = 'jsx?insertPragma=React.DOM&harmony=true';

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
     'webpack/hot/dev-server',
     './src/entry.jsx'
  ],
  output: {
    pathInfo: true,
    path: '/dist/',
    publicPath: "/js/",
    filename: "[name].js",
    chunkFilename: '[id].js'
  },
  externals: {
    react: 'React',
    mori: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?/,
        exclude: [__dirname + '/node_modules', __dirname + '/src/js/lib'],
        loader: 'jshint!' + jsxLoader
      }
    ],
    loaders: [
      { test: /\.jsx?$/, loaders: [jsxLoader] },
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};
