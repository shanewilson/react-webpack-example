'use strict';

var gulp = require('gulp');
var $ = require("gulp-load-plugins")({
  scope: ["devDependencies"], // which keys in the config to look within
  camelize: true, // if true, transforms hyphenated plugins names to camel case
  lazy: true
});
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');
var browserSync = require('browser-sync');
var Notification = require('node-notifier');
var pngcrush = require('imagemin-pngcrush');
var nib = require('nib');

var config = require('./gulp-config.json');
var dependencies = Object.keys(require('./package.json').dependencies);

var notifier = new Notification();
var production = !!$.util.env.production;
var watch = false;

$.util.log('Environment', $.util.colors.blue(production ? 'Production' : 'Development'));

gulp.task('clean', function() {
  return gulp.src(config.paths.dest.path, {read: false})
    .pipe($.clean());
});

gulp.task('jslint', function() {
  return gulp.src(config.paths.src.js.glob)
    .pipe($.react())
    .pipe($.jscs())
    .on('error', function(e) {
      $.util.log(e.message);
      if (!watch) process.exit(0);
    })
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!watch, $.jshint.reporter('fail')))
});

gulp.task('js-libs', function() {
  var stream = browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('libs.js'))
    .pipe(buffer());

  if (production) {
    stream
      .pipe($.uglify(
        {
          mangle: {
            except: ['require', 'export', '$.super']
          }
        }))
      .pipe($.rename('libs.min.js'))
  }
  return stream
    .pipe(gulp.dest(config.paths.dest.js))
    .pipe($.size({showFiles:true}))
    .pipe($.size({showFiles:true, gzip:true}));
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
      .pipe(gulp.dest(config.paths.dest.js))
      .pipe($.size({showFiles:true}))
      .pipe($.size({showFiles:true, gzip:true}))

    if (production) {
      stream.pipe(buffer())
        .pipe($.stripDebug())
        .pipe($.sourcemaps.init())
        .pipe($.uglify(
          {
            mangle: {
              except: ['require', 'export', 'pgsuper']
            }
          }))
        .pipe($.rename('bundle.min.js'))
        .pipe($.sourcemaps.write('./'))

        .pipe(gulp.dest(config.paths.dest.js))
        .pipe($.size({showFiles:true}))
        .pipe($.size({showFiles:true, gzip:true}))
    }

    stream.pipe(browserSync.reload({stream: true, once: true}));

    return stream;
  }

  bundle.external(dependencies);
  bundle.transform(reactify);

  bundle.on('update', rebundle);

  return rebundle();
});

gulp.task('styles', function() {
  var stream = gulp.src(config.paths.src.css.entry)
    .pipe($.stylus({
      errors: true,
      use: [nib()]
    }))
    .on('error', function() {
      this.emit('end');
      if (!watch) process.exit(0);
    })
    .pipe($.size({showFiles:true}))
    .pipe($.size({showFiles:true, gzip:true}));

  if (production) {
    stream
      .pipe($.csso())
      .pipe($.rename('styles.min.css'))
  }

  stream
    .pipe(gulp.dest(config.paths.dest.css))
    .pipe($.size({showFiles:true}))
    .pipe($.size({showFiles:true, gzip:true}))
    .pipe(browserSync.reload({stream: true, once: true}));

  return stream;
});

gulp.task('images', function() {
  return gulp.src(config.paths.src.images)
    .pipe($.newer(config.paths.dest.images))
    .pipe($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
      svgoPlugins: [
        {removeViewBox: false}
      ],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest(config.paths.dest.images));
});

gulp.task('html', function() {
  return gulp.src(config.paths.src.html)
    .pipe($.if(production,
      $.minifyHtml({conditionals: true, cdata: true, empty: true}),
      $.htmlPrettify({indent_char: ' ', indent_size: 2})))
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
  gulp.watch(config.paths.src.css.glob, ['styles']);

  return gulp.start('build', 'browser-sync');
});

gulp.task('build', ['clean'], function() {
  return gulp.start('html', 'images', 'styles', 'js');
});

// TODO
// Stylus
// External JS
// Rev
// prod > min
