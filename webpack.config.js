'use strict';

var minify = require('html-minifier').minify;
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var postcssTools = require('webpack-postcss-tools');
var varMap = postcssTools.makeVarMap('src/css/styles.css');

var production = process.env.NODE_ENV == 'production';
var build = process.env.BUILD_ENV == 'build';

var postCss = "css?importLoaders=1!postcss";
var cssLoader = build ? ExtractTextPlugin.extract('style', postCss)
    : "style!" + postCss;

var config = {
      target: "web",
      entry: "./src/entry.jsx",
      output: {
        path: './dist/js',
        pathInfo: true,
        publicPath: "/js/",
        filename: "main.js"
      },
      module: {
        loaders: [
          {test: /\.jsx?$/, loaders: ['react-hot', 'babel?optional=runtime'], exclude: /node_modules/},
          {test: /\.css$/, loader: cssLoader},
          {test: /\.png$/, loader: "url?mimetype=image/png"},
          {test: /\.gif$/, loader: "url?mimetype=image/gif"},
          {test: /\.jpe?g$/, loader: "url?mimetype=image/jpeg"},
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&minetype=application/font-woff" },
          { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
        ],
        noParse: /\.min\.js/
      },
      postcss: [
        // Plugins seem to be first in last out
        // https://github.com/postcss/postcss#plugins
        postcssTools.prependTildesToImports,

        // Fallbacks
        require('autoprefixer-core')({browsers: ['last 2 version']}),

        // Future CSS Syntax
        require('postcss-custom-properties')({variables: varMap.vars}),
        require('postcss-custom-media')({extensions: varMap.media}),
        require('postcss-custom-selectors')({extensions: varMap.selector}),
        require('postcss-media-minmax')(),
        require('postcss-color-function')(),
        //require('postcss-bem-linter')({
        //  namespace: 'ns'
        //})

      ],
      resolve: {
        extentions: ['js', 'jsx', 'css']
      }
      ,
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
          }
        }),
        new webpack.NoErrorsPlugin()
      ]
    }
    ;

if (production) {
  config.bail = true;
  config.debug = false;
  config.profile = false;
  config.output.pathInfo = false;
  config.devtool = "#source-map";
  config.output.filename = "[name].[hash].min.js";
  config.output.chunkFilename = '[id].js';
  config.postcss = [
    // Optimizations
    require('postcss-import'),
    require('csswring'),
    require('postcss-discard-duplicates')(),
    require('postcss-calc')()
  ].concat(config.postcss);
  config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['require', 'export', '$super']
      },
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    }),
    new CompressionPlugin({
      asset: "{file}.gz",
      algorithm: "gzip",
      regExp: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]);
}

if (build) {
  var exCSS = production ? 'style.[hash].min.css' : 'style.css';
  config.plugins = config.plugins.concat(
      new ExtractTextPlugin(exCSS),
      [
        function () {
          this.plugin("done", function (stats) {
            var fs = require('graceful-fs');
            fs.readFile('./src/index.html', 'utf8', function (err, data) {
              if (err) return console.log(err);

              data = data.replace(
                  '</head>',
                  '<link rel="stylesheet" href="/js/style.css" /></head>'
              );

              if (production) {
                var files = stats.toJson().assets;

                files.forEach(function (file) {
                  var path = file.name.split('.');
                  data = data.replace(path[0] + '.' + path[path.length - 1], file.name);
                });

                data = minify(data, {
                  collapseWhitespace: true,
                  removeAttributeQuotes: true,
                  useShortDoctype: true
                });
              }

              fs.writeFile('./dist/index.html', data, 'utf8', function (err) {
                if (err) return $.util.log(err);
              });
            });
          });
        }
      ]);
}

module.exports = config;