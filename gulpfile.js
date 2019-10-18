var gulp = require('gulp');
var watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require ('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require ('postcss-import');


// create a default task
gulp.task('default', function(){
  console.log('Hurray you created a gulp task!');
});
// create a html task
// create task to process the css file from source to destination
gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

// create a gulp watch task watching the html
gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });
// dummy css file for gulp to watch any file with extension .css
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });

});
