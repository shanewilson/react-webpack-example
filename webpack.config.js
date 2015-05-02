'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var production = process.env.NODE_ENV === 'production';
var config = production ? require('./webpack.prod.config.js') : require('./webpack.base.config.js');

config.module.loaders = config.module.loaders.concat([
  {test: /\.jsx?$/, loader: 'babel?optional=runtime', exclude: /node_modules/},
  {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss')}
]);

config.plugins = config.plugins.concat(
    [
      new ExtractTextPlugin(config.output.css),
      function() {
        this.plugin('done', function(stats) {
          var fs = require('graceful-fs');

          fs.readFile('./src/index.html', 'utf8', function(readErr, data) {
            if (readErr) return console.log(readErr);

            data = data.replace(
                '</head>',
                '<link rel="stylesheet" href="/js/style.css"/></head>'
            );

            if (production) {
              data = config.revFiles(data, stats.toJson().assets);
            }

            fs.writeFile('./dist/index.html', data, 'utf8', function(writeErr) {
              if (writeErr) return console.log(writeErr);
            });
          });
        });
      }
    ]);

module.exports = config;
