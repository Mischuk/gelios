var gulp         = require('gulp');
var connect      = require('gulp-connect');
var stylus       = require('gulp-stylus');
var jade         = require('gulp-jade');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var rigger       = require('gulp-rigger');
var notify       = require('gulp-notify');
// Local server
gulp.task('connect', function () {
  connect.server({
    root: ['build'],
    livereload: true
  });
});

//Jade
gulp.task('jade', function() {
  return gulp.src(['development/templates/**/*.jade'])
    .pipe(jade({
      pretty: true,
      cache: true
    }))
    .pipe(gulp.dest('build/templates/'))
    .pipe(connect.reload());
});

// Images
gulp.task('jpg', function () {
  return gulp.src('development/images/**/*.jpg')
    .pipe(gulp.dest('build/images/'))
    .pipe(connect.reload());
});
gulp.task('png', function () {
  return gulp.src('development/images/**/*.png')
    .pipe(gulp.dest('build/images/'))
    .pipe(connect.reload());
});

// Index
gulp.task('index', function () {
  return gulp.src('development/index.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

//JS
gulp.task('js', function() {
  return gulp.src("development/scripts/*.js")
    .pipe(gulp.dest('build/scripts/'))
    .pipe(connect.reload());
});

// Stylus
gulp.task('app:styl', function() {
  var onError = function(err) {
    notify.onError({
      title:    "Styles",
      subtitle: "Failure!",
      message:  "Error: <%= error.message %>"
    })(err);
    this.emit('end');
  };

  return gulp.src("development/styles/app.styl")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: [
        '> 1%', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4'
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build/styles"))
    .pipe(connect.reload());
});

// Fast styles
gulp.task('styles:styl', function() {
  var onError = function(err) {
    notify.onError({
      title:    "Styles",
      subtitle: "Failure!",
      message:  "Error: <%= error.message %>"
    })(err);
    this.emit('end');
  };
  return gulp.src("development/styles/styles.styl")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build/styles"))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch("development/index.html", ['index']);
  gulp.watch("development/styles/includes/*.styl", ['app:styl']);
  gulp.watch("development/styles/modules/*.styl", ['app:styl']);
  gulp.watch("development/styles/global.styl", ['app:styl','styles:styl']);
  gulp.watch("development/styles/styles.styl", ['styles:styl']);
  gulp.watch("development/templates/**/*.jade", ['jade']);
  gulp.watch("development/images/**/*.jpg", ['jpg']);
  gulp.watch("development/images/**/*.png", ['png']);
  gulp.watch("development/scripts/*.js", ['js']);
  gulp.watch("build/scripts/*.js", ['js']);
  gulp.watch("build/templates/*.html", ['jade']);
});

// Watching project files
gulp.task('default', ['index', 'jade', 'app:styl', 'styles:styl', 'js', 'png', 'jpg', 'connect', 'watch']);