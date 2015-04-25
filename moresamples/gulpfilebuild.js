
var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.uglify())
      .pipe(plugins.concat('app.js'))
      .pipe(gulp.dest('build'));
});

gulp.task('init', function () {
   console.log('gulp task :init');
});

gulp.task('css', ['init'], function () {
   //  css task here
console.log('gulp task :css');
});

//gulp.task('js', function () {
  // return gulp.src('js/*.js')
	//.pipe(cache(‘linting’))
     // .pipe(jshint())
    //  .pipe(jshint.reporter('default'))
    //  .pipe(uglify())
    //  .pipe(concat('app.js'))
    //  .pipe(gulp.dest('build'));
});

gulp.task('imginit', function () {
   console.log('gulp task :imginit');
});


gulp.task('imgs', ['imginit'], function () {
   // img task here
console.log('gulp task :imgs');
});



gulp.task('build', ['css', 'js', 'imgs'], function (){
   // Deal with build here
console.log('gulp task :build');
});





;
