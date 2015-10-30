// import from npm
var gulp = require('gulp'),
  minifyHTML = require('gulp-minify-html'),
  sass = require('gulp-sass'),
  uncss = require('gulp-uncss'),
  uglify = require('gulp-uglify'),
  uglifycss = require('gulp-csso'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  concat = require('gulp-concat'),
  concatCSS = require('gulp-concat-css'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  babel = require('gulp-babel'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  source = require('vinyl-source-stream');

var src = 'src/';
var dest = 'build/';

// Index - Minify
gulp.task('minify-index', function() {
  var opts = {
    conditionals: true,
    spare: true
  };

  return gulp.src(['src/main.html'])
    .pipe(minifyHTML(opts))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});



// Compile Sass
gulp.task('sass', function() {
  gulp.src('src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss())
    .pipe(gulp.dest('build/css'));
});

// CSS - Remove Unused -> concat -> minify
gulp.task('styles', function() {
  return gulp.src(['src/css/custom.css', 'src/css/main.css', 'src/css/normalize.css'])
    .pipe(uncss({
      html: ['src/main.html'],
      ignore: []
    }))
    .pipe(concatCSS('all.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('build/css'));
});

// // JS - Sourcemaps - > Concat -> minify
// gulp.task('scripts', function() {
//   return gulp.src(['src/js/game.js', 'src/js/classes/*'])
//     .pipe(sourcemaps.init())
//     .pipe(babel())
//     .pipe(concat('bundle.js'))
//     .pipe(uglify())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('build/js'));
// });

// JS
gulp.task('scripts', function() {
  return browserify({entries: 'src/js/game.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build/js'));
});

// Compress Images
gulp.task('image', function() {
  gulp.src('src/assets/img/*')
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('build/assets/img'));
});

// Watch for changes in files
gulp.task('watch', function() {
  // watch index.html
  gulp.watch(src + 'main.html', ['minify-index']);
  // watch .css files
  gulp.watch(src + 'css/*.css', ['styles']);
  // watch .js files
  gulp.watch(src + 'js/**/*', ['scripts']);
  // watch image files
  gulp.watch(src + 'assets/img/**/*', ['image']);
});

// Watch Sass files
gulp.task('sass:watch', function() {
  gulp.watch(src + 'css/*.scss', ['sass']);
});


// allows you to just type 'gulp' in terminal
gulp.task('default', ['watch', 'sass', 'sass:watch', 'minify-index', 'styles', 'scripts', 'image']);
