'use strict';

var gulp = require('gulp');
var $ = require("gulp-load-plugins")({
  scope: ["devDependencies"], // which keys in the config to look within
  camelize: true, // if true, transforms hyphenated plugins names to camel case
  lazy: true
});

var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackConfig = Object.create(require('./webpack.config.js'));
var CompressionPlugin = require("compression-webpack-plugin");

var config = require('./config.json');
var production = !!$.util.env.production;
var watch = false;

$.util.log('Environment', $.util.colors.blue(production ? 'Production' : 'Development'));

gulp.task('clean', function() {
  return gulp.src(config.paths.dest.path, {read: false})
    .pipe($.clean());
});

gulp.task('html', function() {
  return gulp.src(config.paths.src.html)
    .pipe($.cdnizer([
      {
        file: 'vendor/angular/*.js',
        package: 'angular',
        test: 'angular',
        cdn: '//ajax.googleapis.com/ajax/libs/angularjs/${version}/${filenameMin}'
      },
      {
        file: 'vendor/react/*.js',
        package: 'react',
        test: 'React',
        cdn: '//cccdnjs.cloudflare.com/ajax/libs/react/${version}/${filenameMin}'
      }
      ]))
    .pipe($.if(production,
      $.minifyHtml({conditionals: true, cdata: true, empty: true}),
      $.htmlPrettify({indent_char: ' ', indent_size: 2})))
    .pipe(gulp.dest(config.paths.dest.path));
});

gulp.task('browser:sync', function() {
  return browserSync.init(null, {
    server: {
      baseDir: config.paths.dest.path
    },
    open: false,
    notify: true
  });
});

// Reload all Browsers
gulp.task('bs:reload', function() {
  browserSync.reload();
});

gulp.task('js:vendor', function() {
  return gulp.src(config.paths.src.js.vendor)
    .pipe(gulp.dest(config.paths.dest.vendor));
});

gulp.task('js:lint', function() {
  return gulp.src(config.paths.src.js.glob)
    .pipe($.react())
    .pipe($.jscs())
    .on('error', function(e) {
      $.util.log(e.message);
      if (!watch) process.exit(0);
    })
    .pipe($.jshint('.jshintrc.json'))
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!watch, $.jshint.reporter('fail')))
});

gulp.task('webpack:build', ['js:lint'], function() {
  if (production) {
    webpackConfig.output.filename = "[name].min.js";
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
  } else {
    webpackConfig.devtool = 'source-map';
    webpackConfig.debug = true;
    webpackConfig.output.pathInfo = true;
  }

  if (watch) webpackConfig.watch = true;

  return webpack(webpackConfig, function(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack:build', err);
    }

    $.util.log('webpack:build', stats.toString({
      colors: true
    }));
    if (watch) {
      gulp.start('js:lint');
      browserSync.reload({once: true});
    }
  });
});

gulp.task('default', $.taskListing);

gulp.task('serve', function() {
  watch = true;

  gulp.watch(config.paths.src.html, ['html', 'bs:reload']);

  return gulp.start('build', 'browser:sync');
});

gulp.task('build', ['clean'], function() {
  return gulp.start('html', 'js:vendor', 'webpack:build');
});


// TODO
// External JS
// Rev
// prod > min
