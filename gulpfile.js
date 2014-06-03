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
var jshintrc = require('./.jshintrc.json');
var bower = require('./bower.json');
var production = !!$.util.env.production;
var output = production ? config.paths.prod : config.paths.stage;
webpackConfig.output.path = output + '/js';
var watch = false;

$.util.log('Environment', $.util.colors.blue(production ? 'Production' : 'Development'));

gulp.task('clean', function() {
  return gulp.src(output, {read: false})
    .pipe($.clean());
});

gulp.task('todo', function() {
  gulp.src(config.paths.src.js.glob)
    .pipe($.react())
    .pipe($.todo())
    .pipe(gulp.dest('todo'));
});

// Generates Plato complexity analysis
gulp.task('plato', function() {
  gulp.src(config.paths.src.js.glob)
    .pipe($.react())
    .pipe($.plato('report', {
      jshint: {
        options: jshintrc
      },
      complexity: {
        trycatch: true
      }
    }));
});

gulp.task('html', function() {
  return gulp.src(config.paths.src.html)
    .pipe($.if(production, $.replace('.js', '.min.js')))
    .pipe($.if(production,
      $.cdnizer({
        fallbackTest: '<script>if(typeof ${ test } === "undefined") cdnizerLoad("${ filepath }");</script>',
        files: [
          {
            file: 'vendor/angular/*.min.js',
            package: 'angular',
            test: 'angular',
            cdn: '//ajax.googleapis.com/ajax/libs/angularjs/${version}/${filenameMin}'
          },
          {
            file: 'vendor/react/*.min.js',
            package: 'react',
            test: 'React',
            cdn: '//cdnjs.cloudflare.com/ajax/libs/react/${version}/${filenameMin}'
          }
        ]})))
//    .pipe($.if(production,
//      $.minifyHtml({conditionals: true, cdata: true, empty: true}),
//      $.htmlPrettify({indent_char: ' ', indent_size: 2})))
    .pipe(gulp.dest(output));
});

gulp.task('browser:sync', function() {
  return browserSync.init(null, {
    server: {
      baseDir: output
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
  var vf = production ? "./vendor/**/*.min.js" : config.paths.src.js.vendor;
  var stream = gulp.src(vf);

  if (production) {
    stream.pipe($.rev())
      .pipe(gulp.dest(output + "/vendor"))
      .pipe($.rev.manifest())
      .pipe(gulp.dest(output + "/vendor"))
  }

  return stream.pipe(gulp.dest(output + "/vendor"));
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
  } else {
    webpackConfig.devtool = 'source-map';
    webpackConfig.debug = true;
    webpackConfig.output.pathInfo = true;
  }

  if (watch) webpackConfig.watch = true;

  return webpack(webpackConfig, function(err, stats) {
    if (err) throw new $.util.PluginError('webpack:build', err);

    $.util.log('webpack:build', stats.toString({
      colors: true
    }));

    if (production) rev(stats.toJson().assets);

    if (watch) {
      gulp.start('js:lint');
      browserSync.reload({once: true});
    }
  });
});

function rev(files) {
  var vendorFiles = require(output + "/vendor/rev-manifest.json");

  var fs = require('fs');
  fs.readFile(output + "/index.html", 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    files.forEach(function(file) {
      data = data.replace(file.name.split('.')[0] + '.min.js', file.name);
    });
    for (var file in vendorFiles) {
      if (vendorFiles.hasOwnProperty(file)) data = data.replace(file, vendorFiles[file]);
    }

    fs.writeFile(output + "/index.html", data, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
}

gulp.task('default', $.taskListing);

gulp.task('serve', function() {
  watch = true;

  gulp.watch(config.paths.src.html, ['html', 'bs:reload']);

  return gulp.start('build', 'browser:sync');
});

gulp.task('build', ['clean'], function() {
  return gulp.start('html', 'js:vendor', 'webpack:build');
});
