var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var templateCache = require('gulp-angular-templatecache');
var babili = require('gulp-babili');
var rename = require('gulp-rename');
var sh = require('shelljs');
var connect = require('gulp-connect');

var assets = {
  scripts_dev: [
    './www/lib/jquery/dist/jquery.js',
    './www/lib/angular-bootstrap/ui-bootstrap.js',
    './www/lib/angular-bootstrap/ui-bootstrap-tpls.js',
    './www/lib/requirejs/require.js',
    './www/lib/lodash/dist/lodash.js',
    './www/lib/localforage/dist/localforage.js'
  ],
  scripts_prod: [
    './www/lib/jquery/dist/jquery.min.js',
    './www/lib/angular-bootstrap/ui-bootstrap.min.js',
    './www/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
    './www/lib/requirejs/require.js',
    './www/lib/lodash/dist/lodash.min.js',
    './www/lib/localforage/dist/localforage.min.js'
  ],
  styles_dev: [
    './www/css/main.css',
    './www/lib/bootstrap/dist/css/bootstrap.css',
    './www/lib/angular-bootstrap/ui-bootstrap-csp.css'
  ],
  styles_prod: [
    './www/css/main.min.css',
    './www/lib/bootstrap/dist/css/bootstrap.min.css',
    './www/lib/angular-bootstrap/ui-bootstrap-csp.css'
  ]
};

var paths = {
  sass: ['./scss/**/*.scss'],
  templates: ['./www/templates/**/*.html'],
  scripts_min: ['./www/js/**/*.min.js'],
  scripts: [
    './www/js/**/*.js',
    '!./www/js/**/*.min.js'
  ]
};

/*
 Build assets
 */
gulp.task('assets-scripts-dev', function () {
  return gulp.src(assets.scripts_dev)
  .pipe(concat('assets-scripts.js'))
  .pipe(gulp.dest('./www/dist/'))
});
gulp.task('assets-scripts-prod', function () {
  return gulp.src(assets.scripts_prod)
  .pipe(concat('assets-scripts.js'))
  .pipe(gulp.dest('./www/dist/'))
});

gulp.task('assets-styles-dev', function () {
  return gulp.src(assets.styles_dev)
  .pipe(concat('assets-styles.css'))
  .pipe(gulp.dest('./www/dist/'))
});
gulp.task('assets-styles-prod', function () {
  return gulp.src(assets.styles_prod)
  .pipe(concat('assets-styles.css'))
  .pipe(gulp.dest('./www/dist/'))
});

/*
 Build app templates
 */
gulp.task('build-views', function () {
  gulp.src(paths.templates)
  .pipe(templateCache())
  .pipe(gulp.dest('./www/dist/'))
  .pipe(connect.reload());
});

/*
 Build app scripts
 */
gulp.task('build-scripts-dev', function () {
  return gulp.src(paths.scripts)
  .pipe(concat('app-bundle.js'))
  .pipe(gulp.dest('./www/dist/'))
  .pipe(connect.reload());
});

gulp.task('build-scripts-prod', function () {
  return gulp.src(paths.scripts)
  .pipe(concat('app-bundle.js'))
  .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
  .pipe(gulp.dest('./www/dist/'))
  .pipe(connect.reload());
});

/*
 Build app styles
 */
gulp.task('sass', function (done) {
  gulp.src('./scss/**/*.scss')
  .pipe(sass({
    errLogToConsole: true
  }))
  .pipe(gulp.dest('./www/css/'))
  .pipe(minifyCss({
    keepSpecialComments: 0
  }))
  .pipe(rename({extname: '.min.css'}))
  .pipe(gulp.dest('./www/css/'))
  .pipe(connect.reload());
//      .on('end', done);
});

/**
 * Build tasks
 */
var devBuild = ['assets-scripts-dev', 'assets-styles-dev', 'build-scripts-dev', 'build-views'];
gulp.task('dev-build', devBuild);
var prodBuild = ['assets-scripts-prod', 'assets-styles-prod', 'build-scripts-prod', 'build-views'];
gulp.task('prod-build', prodBuild);

/**
 * Run development tasks
 */
var devTasks = ['sass', 'assets-scripts-dev', 'assets-styles-dev', 'watch', 'live-reload-dev'];
gulp.task('dev', devTasks);
gulp.task('default', ['dev']);

/**
 * Watches
 */
gulp.task('watch', function () {
  gulp.watch(paths.sass, {emit:'all'}, ['sass']);
  gulp.watch(paths.scripts, ['build-scripts-dev']);
  gulp.watch(paths.templates, ['build-views']);
});

gulp.task('live-reload-dev', function () {
  connect.server({
    name: 'Dev App',
    root: 'www',
    port: 8105,
    livereload: true
  });
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
  .on('log', function (data) {
    gutil.log('bower', gutil.colors.cyan(data.id), data.message);
  });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
    '  ' + gutil.colors.red('Git is not installed.'),
    '\n  Git, the version control system, is required to download Ionic.',
    '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
    '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
