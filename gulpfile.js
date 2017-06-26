const gulp = require('gulp');
const clean = require('gulp-clean');
const concatCSS = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const pug = require('gulp-pug');

gulp.task('clean', () => {
    gulp.src(['./tmp', './dist'], {
        force: true
    })
        .pipe(clean())
});

gulp.task('views', function buildHTML() {
    gulp.src('views/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist'))
});

gulp.task('concat', () => {
    gulp.src('public/css/*.css')
        .pipe(concatCSS('css/style.css'))
        .pipe(gulp.dest('./tmp'))
});

gulp.task('minify', () => {
    gulp.src('./tmp/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('move:img', () => {
    gulp.src('public/img/*.jpg')
        .pipe(gulp.dest('./dist/img/'))
});