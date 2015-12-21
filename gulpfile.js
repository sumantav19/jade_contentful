var gulp = require('gulp'), gulpjade = require('gulp-jade') , gulpData = require('gulp-data');



gulp.task('templates',function () {
	// body...
	
		gulp.src (['./src/jade/*.jade'])
		.pipe(gulpData(function(file){
			return require('./src/json/index.json');
		}))
		.pipe(gulpData(function(file){
			return require('./src/json/entries.json')
		}))
		.pipe(gulpjade( {pretty: true}))
		.pipe(gulp.dest('./dest'));
	
});
gulp.task('tasktest',function(){
	return console.log('test success');
});

