'use strict';

require('dotenv').config();

const browserify = require('browserify');
const gulp = require('gulp');
const path = require('path');
const pkg = require('./package.json');

const plug = require('gulp-load-plugins')({
  pattern: [ 'vinyl-*' ],
  overridePattern: false,

  rename: {
    'gulp-cached': 'cache',
    'gulp-clean-css': 'cleanCSS',
    'vinyl-buffer': 'buffer',
    'vinyl-source-stream': 'source',
  },
});

let server;


// Destination paths for builds
let dist = 'build';
let dest = {
  css: `${dist}/css`,
  font: `${dist}/font`,
  html: dist,
  ico: dist,
  img: `${dist}/img`,
  js: `${dist}/js`,
};

// Locations of source files
let src = {
  css: 'src/css/**/*.{less,css}',
  entry: 'src/js/telepathy.js',
  font: 'src/font/{,font-awesome/}*.*',
  html: 'src/html/**/*.html',
  ico: 'src/img/favicon.ico',
  img: 'src/img/*.png',
  js: 'src/js/*.js',
  less: 'src/css/telepathy.less',
  swig: 'src/html/index.html',
  test: 'src/test/**.{js,json}',
};

// Data to be included in Swig templates
let data = {
  version: pkg.version,
};


// Task aliases
gulp.task('default', plug.sequence('build', 'server', 'test', 'server:stop'));

gulp.task('build', [ 'ico', 'img', 'font', 'css', 'js', 'html' ]);
gulp.task('test', [ 'lint', 'wdio' ]);

gulp.task('lint', [ 'eslint' ]);
gulp.task('html', [ 'swig' ]);
gulp.task('css', [ 'less' ]);


// Tasks
gulp.task('mocha', () =>
  gulp.src(src.test, { read: false })
    .pipe(plug.mocha({ reporter: 'spec' }))
);

gulp.task('eslint', () =>
  gulp.src([ src.js, src.test ])
    .pipe(plug.cache('lint'))
    .pipe(plug.eslint())
    .pipe(plug.remember('lint'))
    .pipe(plug.eslint.format())
    .pipe(plug.eslint.failAfterError())
);

gulp.task('js', () =>
  browserify({ debug: true })
    .add(src.entry)
    .bundle()
    .pipe(plug.source('telepathy.js'))
    .pipe(plug.buffer())
    .pipe(gulp.dest(dest.js))
);

gulp.task('less', () =>
  gulp.src(src.less)
    .pipe(plug.less())
    .pipe(plug.cleanCSS())
    .pipe(gulp.dest(dest.css))
);

gulp.task('swig', () =>
  gulp.src(src.swig)
    .pipe(plug.swig({
      defaults: { cache: false },
      data,
    }))
    .pipe(gulp.dest(dest.html))
);

gulp.task('img', () =>
  gulp.src(src.img)
    .pipe(gulp.dest(dest.img))
);

gulp.task('ico', () =>
  gulp.src(src.ico)
    .pipe(gulp.dest(dest.ico))
);

gulp.task('font', () =>
  gulp.src(src.font)
    .pipe(gulp.dest(dest.font))
);

gulp.task('server', () => {
  server = plug.liveServer.static(dist);
  server.start();
});

gulp.task('server:stop', () => {
  server.stop();
});

gulp.task('wdio', () =>
  gulp.src(`.wdio.conf.js`)
    .pipe(plug.ignoreErrors())
    .pipe(plug.wdio({ wdio: {} }))
);

gulp.task('watch', () => plug.sequence('build', 'server', () => {
  gulp.watch(src.js, plug.sequence('eslint', 'js'));
  gulp.watch(src.css, [ 'css' ]);
  gulp.watch(src.html, [ 'html' ]);
  gulp.watch(src.img, [ 'img' ]);
  gulp.watch(src.font, [ 'font' ]);

  gulp.watch(`${dist}/**/*`, file =>
    server.notify(file)
  );
}));
