'use strict';
const gulp = require('gulp'),
    less = require('gulp-less'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    browserSync = require("browser-sync").create(),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require("gulp-notify");

// gulp.task('serve', function () {
//     browserSync.init({
//         server: {
//             baseDir: "public_html"
//         }
//     });
//     browserSync.watch("public_html/*.html", browserSync.reload);
// });

gulp.task('styles', function () {
    return gulp.src('public_html/less/main.less')
        .pipe(less({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss({level: {1: {specialComments: 0}}}))
        .pipe(gulp.dest('public_html/css'));
        // .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('public_html/less/*.less', gulp.series('styles'));
});

gulp.task('default', gulp.series(
    gulp.parallel('styles'),
    gulp.parallel('watch')
));
