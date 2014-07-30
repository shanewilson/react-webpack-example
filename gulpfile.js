/* jshint strict: false, camelcase: false */
/* global require */

'use strict';

var gulp = require('gulp');
var $ = require("gulp-load-plugins")({
  scope: ["devDependencies"], // which keys in the config to look within
  camelize: true, // if true, transforms hyphenated plugins names to camel case
  lazy: true
});

var fs = require('graceful-fs');

var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = Object.create(require('./webpack.config.js'));
var CompressionPlugin = require("compression-webpack-plugin");

var production = !!$.util.env.production;

// <paths>
var paths = {
  "src": "./src",
  "dev": "./dist",
  "stage": "./dist",
  "bower": "./bower_components/**/*",
  js : {},
  html: {}
};
paths.dest = production ? paths.stage : paths.dev;
paths.js.src = paths.src + "/js/**/*";
paths.js.dest = paths.dest + "/js";
paths.bower = production ? paths.bower + ".min.js" : paths.bower + ".js";
paths.vendor = paths.dest + "/vendor";
paths.html.src = paths.src + "/index.html";
paths.html.dest = paths.dest + "/index.html";
// </paths>

// <webpackConfig>
if (production) {
  // Adding production settings
  webpackConfig.bail = true;
  webpackConfig.debug = false;
  webpackConfig.profile = false;
  webpackConfig.output.pathInfo = false;
  webpackConfig.devtool = "#source-map";

  webpackConfig.output.filename = "[name].[hash].min.js";
  webpackConfig.plugins = webpackConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['require', 'export', '$super']
      },
      compress: {
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
    }));
}
// </webpackConfig>

$.util.log('Environment', $.util.colors.blue(production ? 'Production' : 'Development'));

gulp.task('clean', function() {
  return gulp.src(paths.dest, {read: false})
    .pipe($.rimraf());
});

gulp.task('html', function() {
  return gulp.src(paths.html.src)
    .pipe($.if(production, $.replace('.js', '.min.js')))
    .pipe($.if(false,
      $.cdnizer({
        fallbackTest: '<script>if(typeof ${ test } === "undefined") cdnizerLoad("${ filepath }");</script>',
        files: [
          {
            file: 'vendor/react/react.min.js',
            package: 'react',
            test: 'React',
            cdn: '//fb.me/react-${version}.min.js'
          }
        ]})))
    .pipe($.if(production,
      $.minifyHtml({conditionals: true, cdata: true, empty: true}),
      $.htmlPrettify({indent_char: ' ', indent_size: 2})))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('js:bower', function() {
  var stream = gulp.src(paths.bower);

  if (production) {
    stream.pipe($.rev())
    .pipe(gulp.dest(paths.vendor))
    .pipe($.rev.manifest())
    .pipe(gulp.dest(paths.vendor));
  }

  return stream.pipe(gulp.dest(paths.vendor));
});

function rev(files) {
  var manifest = paths.vendor + "/rev-manifest.json";
  var vendorFiles = fs.existsSync(manifest) ? require(manifest) : [];

  fs.readFile(paths.html.dest, 'utf8', function (err,data) {
    if (err) return $.util.log(err);

    files.forEach(function(file) {
      data = data.replace(file.name.split('.')[0] + '.min.js', file.name);
    });

    for (var file in vendorFiles) {
      if (vendorFiles.hasOwnProperty(file)) data = data.replace(file, vendorFiles[file]);
    }

    fs.writeFile(paths.html.dest, data, 'utf8', function (err) {
      if (err) return $.util.log(err);
    });
  });
}

gulp.task('webpack:build', ['html', 'js:bower'], function() {
  webpackConfig.output.path = paths.js.dest;

  return webpack(webpackConfig, function(err, stats) {
    if (err) throw new $.util.PluginError('webpack:build', err);

    $.util.log('Webpack', stats.toString({
      colors: true,
      reasons: true
    }));

    if (production) rev(stats.toJson().assets);
  });
});

gulp.task("webpack:serve", ['html', 'js:bower'], function() {
    // Start a webpack-dev-server
    var server = "localhost";
    var port = 9000;
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
      noInfo: true,
      hot: true,
      contentBase: webpackConfig.contentBase,
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors:true,
        reasons: true
      }
    }).listen(port, server, function(err) {
        if(err) throw new $.util.PluginError("webpack:serve", err);

        // Server listening
        $.util.log("Starting", $.util.colors.blue("Webpack Development Server"));
        $.util.log("Listening", $.util.colors.magenta("http://"+server+":"+port+"/webpack-dev-server/index.html"));
    });
});

gulp.task('default', $.taskListing);

gulp.task('serve', ['clean'], function() {
  gulp.watch(paths.html.src, ['html']);

  gulp.start('webpack:serve');
});

gulp.task('build', ['clean'], function() {
  return gulp.start('webpack:build');
});
