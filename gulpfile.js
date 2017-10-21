'use strict';

const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const cache = require('gulp-cached');
const cleanCSS = require('gulp-clean-css');
const eslint = require('gulp-eslint');
const gls = require('gulp-live-server');
const gulp = require('gulp');
const less = require('gulp-less');
const mocha = require('gulp-mocha');
const path = require('path');
const pkg = require('./package.json');
const remember = require('gulp-remember');
const runSequence = require('run-sequence');
const source = require('vinyl-source-stream');
const swig = require('gulp-swig');
const wdio = require('gulp-wdio');

let dist = 'build';

let dest = {
  css: `${dist}/css`,
  font: `${dist}/font`,
  html: dist,
  img: `${dist}/img`,
  js: `${dist}/js`,
};

let src = {
  css: 'src/css/**/*.{less,css}',
  entry: 'src/js/telepathy.js',
  font: 'src/font/{,font-awesome/}*.*',
  html: 'src/html/**/*.html',
  img: 'src/img/*.*',
  js: 'src/js/*.js',
  less: 'src/css/telepathy.less',
  swig: 'src/html/index.html',
  test: 'src/test/**.{js,json}',
};

let data = {
  version: pkg.version,
};

let server;

gulp.task('default', cb => runSequence([ 'lint', 'test'], 'build', cb));

gulp.task('test', [ 'mocha' ]);

gulp.task('lint', [ 'eslint' ]);

gulp.task('build', [ 'copy', 'css', 'html' ]);

gulp.task('copy', [ 'img', 'font' ]);

gulp.task('mocha', () =>
  gulp.src(src.test, { read: false })
    .pipe(mocha({ reporter: 'spec' }))
);

gulp.task('eslint', () =>
  gulp.src([ src.js, src.test ])
    .pipe(cache('lint'))
    .pipe(eslint())
    .pipe(remember('lint'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('js', () =>
  browserify(src.entry)
    .bundle()
    .pipe(source('telepathy.js'))
    .pipe(buffer())
    .pipe(gulp.dest(dest.js))
);

gulp.task('css', [ 'less' ]);
gulp.task('less', () =>
  gulp.src(src.less)
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest(dest.css))
);

gulp.task('html', [ 'swig' ]);
gulp.task('swig', () =>
  gulp.src(src.swig)
    .pipe(swig({
      defaults: { cache: false },
      data,
    }))
    .pipe(gulp.dest(dest.html))
);

gulp.task('img', () =>
  gulp.src(src.img)
    .pipe(gulp.dest(dest.img))
);

gulp.task('font', () =>
  gulp.src(src.font)
    .pipe(gulp.dest(dest.font))
);

gulp.task('server', () => {
  server = gls.static(dist);
  server.start();
});

gulp.task('e2e', [ 'wdio' ]);
gulp.task('wdio', () =>
  gulp.src('wdio.conf/local.js').pipe(wdio({ wdio: {} }))
);

gulp.task('serve', cb => runSequence('build', 'server', cb));

gulp.task('watch', [ 'serve' ], () => {
  gulp.watch(src.js, cb => runSequence('eslint', 'js', cb));
  gulp.watch(src.css, [ 'css' ]);
  gulp.watch(src.html, [ 'html' ]);
  gulp.watch(src.img, [ 'img' ]);
  gulp.watch(src.font, [ 'font' ]);

  gulp.watch(`${dist}/**/*`, file => 
    server.notify(file)
  );
});

/* 
"grunt": "~0.4.1",
"grunt-browserify": "~1.2.4",
"grunt-contrib-connect": "~0.5.0",
"grunt-contrib-cssmin": "~0.6.1",
"grunt-contrib-htmlmin": "~0.1.3",
"grunt-contrib-jshint": "~0.6.4",
"grunt-contrib-less": "~0.7.0",
"grunt-contrib-uglify": "~0.2.4",
"grunt-contrib-watch": "~0.5.3",
"grunt-karma": "~0.6.2",
"grunt-manifest": "~0.4.0",
"grunt-shell": "~0.3.1",
"grunt-swig": "~0.1.0",
"gulp": "^3.9.1",
"gulp-cached": "^1.1.1",
"gulp-eslint": "^4.0.0",
"gulp-mocha": "^4.3.1",
"gulp-remember": "^0.3.1",
"karma-browserify": "~0.0.4",
"karma-mocha": "~0.1.0",
"mocha": "^4.0.1",
"should": "~1.3.0"
*/
