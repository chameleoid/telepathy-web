'use strict';

require('dotenv');

const browserify = require('browserify');
const gulp = require('gulp');
const path = require('path');
const pkg = require('./package.json');

const plug = require('gulp-load-plugins')({
  pattern: [ 'vinyl-*', 'run-sequence' ],
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
  img: `${dist}/img`,
  js: `${dist}/js`,
};

// Locations of source files
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

// Data to be included in Swig templates
let data = {
  version: pkg.version,
};


// Task aliases
gulp.task('default', cb => plug.runSequence([ 'lint', 'test' ], 'build', cb));
gulp.task('test', [ 'default', 'e2e' ]);

gulp.task('build', [ 'img', 'font', 'css', 'html' ]);

gulp.task('e2e', cb => plug.runSequence('server', 'wdio', 'server:stop', cb));

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
  browserify(src.entry)
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
  gulp.src(`.wdio/${process.env.CI ? 'ci' : 'local'}.conf.js`)
    .pipe(plug.ignoreErrors())
    .pipe(plug.wdio({ wdio: {} }))
);

gulp.task('watch', () => plug.runSequence('build', 'server', () => {
  gulp.watch(src.js, cb => plug.runSequence('eslint', 'js', cb));
  gulp.watch(src.css, [ 'css' ]);
  gulp.watch(src.html, [ 'html' ]);
  gulp.watch(src.img, [ 'img' ]);
  gulp.watch(src.font, [ 'font' ]);

  gulp.watch(`${dist}/**/*`, file => 
    server.notify(file)
  );
}));
