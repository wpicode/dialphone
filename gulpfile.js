var gulp = require('gulp');
var minifycss = require( 'gulp-minify-css' );
var notify = require( 'gulp-notify' );
var concatCss = require('gulp-concat-css');
var  rename = require( 'gulp-rename' );
var  plumber = require( 'gulp-plumber' );

var sass = require('gulp-sass');
 
var onError = function( err ) {
  console.log( 'An error occured:', err.message );
  this.emit('end');
}
gulp.task('sass', function () {
 return gulp.src('./sass/*.scss')
    .pipe( plumber( { errorHandler: onError } ) )
    .pipe(sass())
    .pipe( gulp.dest( './css/dist/' ) )
     .pipe(concatCss("main.css"))
    .pipe( minifycss() )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( gulp.dest( './css' ) )
    .pipe(notify({ message: 'sass task complete' }))
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});