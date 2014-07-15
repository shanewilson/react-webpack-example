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
var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackConfig = Object.create(require('./webpack.config.js'));
var CompressionPlugin = require("compression-webpack-plugin");

var production = !!$.util.env.production;
var watch = false;

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

$.util.log('Environment', $.util.colors.blue(production ? 'Production' : 'Development'));

gulp.task('clean', function() {
  return gulp.src(paths.dest, {read: false})
    .pipe($.rimraf());
});

gulp.task('html', function() {
  return gulp.src(paths.html.src)
    .pipe($.if(production, $.replace('.js', '.min.js')))
    .pipe($.if(production,
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

gulp.task('browser:sync', function() {
  return browserSync.init(null, {
    server: {
      baseDir: paths.dest
    },
    open: false,
    notify: true
  });
});

// Reload all Browsers
gulp.task('bs:reload', function() {
  browserSync.reload();
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

gulp.task('js:lint', function() {
  return gulp.src(paths.js.src)
    .pipe($.react())
    .pipe($.jscs())
    .on('error', function(e) {
      $.util.log(e.message);
      if (!watch) process.exit(0);
    })
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!watch, $.jshint.reporter('fail')));
});

function rev(files) {
  var vendorFiles = require(paths.vendor + "/rev-manifest.json");

  fs.readFile(paths.html.dest, 'utf8', function (err,data) {
    if (err) {
      return $.util.log(err);
    }

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

gulp.task('webpack:build', ['js:lint'], function() {
  webpackConfig.output.path = paths.js.dest;
  if (production) {
    // Turning off dev settings
    webpackConfig.bail = true;
    webpackConfig.debug = false;
    webpackConfig.profile = false;
    webpackConfig.output.pathInfo = false;

    // Adding production settings
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

  if (watch) webpackConfig.watch = true;

  return webpack(webpackConfig, function(err, stats) {
    if (err) throw new $.util.PluginError('webpack:build', err);

    $.util.log('webpack:build', stats.toString({
      colors: true,
      reasons: true
    }));

    if (production) rev(stats.toJson().assets);

    if (!browserSync.active) gulp.start('browser:sync');

    if (watch) {
      gulp.start('js:lint');
      var s = production ? 200 : 0; // need to wait for rev to finish
      setTimeout(browserSync.reload, s);
    }
  });
});

gulp.task('default', $.taskListing);

gulp.task('serve', function() {
  watch = true;

  var ts = production ? ['build'] : ['html', 'bs:reload'];
  gulp.watch(paths.html.src, ts);

  return gulp.start('build');
});

gulp.task('build', ['clean'], function() {
  return gulp.start('html', 'js:bower', 'webpack:build');
});
