'use strict';

var gulp = require('gulp');
var pg = require("gulp-load-plugins")({
  scope: ["devDependencies"], // which keys in the config to look within
  camelize: true, // if true, transforms hyphenated plugins names to camel case
  lazy: true
});
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');
//var react = require('gulp-react');
//var jshint = require('gulp-jshint-cached');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
//var gulpif = require('gulp-if');
//var uglify = require('gulp-uglify');
//var clean = require('gulp-clean');
//var prettify = require('gulp-html-prettify');
//var size = require('gulp-filesize');
//var rename = require("gulp-rename");
//var jscs = require('gulp-jscs');
//var notify = require('gulp-notify');
//var plumber = require('gulp-plumber');
var Notification = require('node-notifier');
//var minifyHTML = require('gulp-minify-html');
//var sourcemaps = require('gulp-sourcemaps');
//var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
//var stripDebug = require('gulp-strip-debug');
//var changed = require('gulp-changed');

var config = require('./gulp-config.json');
var packageJson = require('./package.json');
var dependencies = Object.keys(packageJson && packageJson.dependencies || {});

var notifier = new Notification();
var production = !!gutil.env.production;
var watch = false;
console.log(pg);
gutil.log('Environment', gutil.colors.blue(production ? 'Production' : 'Development'));

gulp.task('clean', function() {
  return gulp.src(config.paths.dest.path, {read: false})
    .pipe(pg.clean());
});

gulp.task('jslint', function() {
  return gulp.src(config.paths.src.js.glob)
    .pipe(pg.react())
    .pipe(pg.jscs())
    .on('error', function(e) {
      notifier.notify({
        title: 'JSCS Error',
        message: 'JSCS Error'
      });
      gutil.log(e.message);
      process.exit(0);
    })
    .pipe(pg.jshint('.jshintrc'))
    .pipe(pg.jshint.reporter('jshint-stylish'))
    .pipe(pg.jshint.reporter('fail'))
    .on('error', function(e) {
      notifier.notify({
        title: 'JSHint Error',
        message: e
      });
      process.exit(0);
    })
});

gulp.task('js-libs', function() {
  var stream = browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('libs.js'))
    .pipe(buffer())
    .pipe(pg.filesize())
    .pipe(gulp.dest(config.paths.dest.js));

  if (production) {
    stream.pipe(buffer())
      .pipe(pg.uglify(
        {
          mangle: {
            except: ['require', 'export', '$.super']
          }
        }))
      .pipe(pg.rename('libs.min.js'))
      .pipe(pg.filesize())
      .pipe(gulp.dest(config.paths.dest.js))
  }
  return stream;
});

gulp.task('js', ['js-libs'], function() {
  var bundle = watch ? watchify(config.paths.src.js.entry) : browserify(config.paths.src.js.entry);

  function rebundle() {
    gulp.start('jslint');
    var stream = bundle.bundle(
      {
        debug: true
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(pg.filesize())
      .pipe(gulp.dest(config.paths.dest.js));

    if (production) {
      stream.pipe(buffer())
        .pipe(pg.stripDebug())
        .pipe(pg.sourcemaps.init())
        .pipe(pg.uglify(
          {
            mangle: {
              except: ['require', 'export', 'pgsuper']
            }
          }))
        .pipe(pg.rename('bundle.min.js'))
        .pipe(pg.sourcemaps.write('./'))
        .pipe(pg.filesize())
        .pipe(gulp.dest(config.paths.dest.js))
    }

    stream.pipe(browserSync.reload({stream: true, once: true}));

    return stream;
  }

  bundle.external(dependencies);
  bundle.transform(reactify);

  bundle.on('update', rebundle);

  return rebundle();
});

gulp.task('images', function () {
  return gulp.src(config.paths.src.images)
    .pipe(pg.changed(config.paths.dest.images))
    .pipe(pg.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest(config.paths.dest.images));
});

gulp.task('html', function() {
  return gulp.src(config.paths.src.html)
    .pipe(pg.if(production,
      pg.minifyHtml({conditionals: true, cdata: true, empty: true}),
      pg.htmlPrettify({indent_char: ' ', indent_size: 2})))
    .pipe(gulp.dest(config.paths.dest.path));
});

gulp.task('browser-sync', function() {
  return browserSync.init(null, {
    server: {
      baseDir: config.paths.dest.path
    },
    open: false,
    notify: false
  });
});

// Reload all Browsers
gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', function() {
  watch = true;

  gulp.watch(config.paths.src.html, ['html', 'bs-reload']);

  return gulp.start('build', 'browser-sync');
});

gulp.task('build', ['clean'], function() {
  return gulp.start('html', 'images','js');
});
