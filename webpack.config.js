'use strict';

var path, webpack, info;

info = require('./package.json');
path = require('path');
webpack = require('webpack');

module.exports = {
  contentBase: __dirname + "/public/",
  cache: true,
  entry: {
    vendor: ['react'],
    bundle: './src/jsx/app'
  },
  output: {
    path: path.join(__dirname, 'public', 'js'),
    publicPath: 'public/js/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "jsx-loader?insertPragma=React.DOM"
      }, {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js', '.styl'],
    modulesDirectories: ['src', 'src/jsx', 'src/js', 'web_modules', 'bower_components', 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
    new webpack.optimize.CommonsChunkPlugin('libs.js')
  ]
};
