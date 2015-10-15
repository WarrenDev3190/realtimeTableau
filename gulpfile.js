//Include Gulp
var gulp = require("gulp");

//Include Plugins
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");

//Gulp Server
var gls = require("gulp-live-server");


//Lint Task
gulp.task('lint',function(){
		return gulp.src('./app/public/js/*.js')
				   .pipe(jshint())
				   .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass',function(){
	return gulp.src('./app/public/scss/*.scss')
			   .pipe(sass({
				   'sourcemap=none':true
			   }))
			   .pipe(concat('style.css'))
			   .pipe(autoprefixer('last 2 version','safari 5','ie 8','ie 9','opera 12.1'))
			   .pipe(gulp.dest('./app/public/css/'));
});



gulp.task('serve',function(){
	var server = gls.new('./app.js');
	server.start();
	
	gulp.watch('./app/public/scss/*.scss',['sass']);
	gulp.watch('./app/public/js/src/*.js',['lint']);

	gulp.watch([
		'./app/public/scss/*.scss',
		'./app/public/css/*.css',
		'./views/**/*.ejs',
		'./app/public/js/**/*.js'
		],function(event){
			server.start()
		    .then(function() {
		      return setTimeout(function() {
		        return server.notify(event);
		      }, 1000);
		    }).catch(function (error) {
		      throw error;
		    }).done();
		});
	
	gulp.watch('./app.js',function(){
		server.start.bind(server)()
	});
});

gulp.task('default',['sass','lint','serve']);


