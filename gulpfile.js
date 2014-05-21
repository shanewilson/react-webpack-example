'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var reactify = require('reactify');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var prettify = require('gulp-html-prettify');

var production = !!gutil.env.production;

gutil.log('Environment', gutil.colors.blue(production ? 'Production' : 'Development'));

var jsBundle = {
      src: [
        'src/js/**/*.js'
      ],
      dest: './js'
    },
    cssBundle = {
      src: [
        'src/scss/style.scss'
      ],
      dest: './css'
    };


gulp.task('clean', function() {
  return gulp.src('public', {read: false})
      .pipe(clean());
});

gulp.task('lint', function() {
  return gulp.src(jsBundle.src)
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('js', [], function() {
  var w = watchify('./src/jsx/app.js');

  function rebundle() {
    return w.bundle(
        {
          debug: !production
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(production, uglify({
          mangle: {
            except: ['require', 'export', '$super']
          }
        })))
        .pipe(gulp.dest('./public/js/'))
        .pipe(browserSync.reload({stream:true, once: true}));
  }

  w.transform(reactify);
  w.on('update', rebundle);

  return rebundle();
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
      .pipe(gulp.dest('./public'));
});

gulp.task('browser-sync', function() {
  return browserSync.init(null, {
    server: {
      baseDir: "public"
    },
    open: false,
    notify: true
  });
});

// Reload all Browsers
gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', ['html', 'js', 'browser-sync'], function() {
  gulp.watch('src/index.html', ['html', 'bs-reload']);
});
