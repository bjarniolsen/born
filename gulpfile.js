/**
 * SETUP
 * 
 * require module dependencies
 */
var gulp = require('gulp'),
	// JS
	uglify = require('gulp-uglifyjs'),
	// CSS
    minifyCss = require('gulp-minify-css'),
	// MISC
	rename = require("gulp-rename"),
	gutil = require('gulp-util'),
	plumber = require('gulp-plumber'),
	convertEncoding = require('gulp-convert-encoding'),
	livereload = require('gulp-livereload'),
	watcherCallback = function (event) {
	    console.log('=================================================================');
	    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	};

/**
 * TASKS
 *  default: all tasks.
 *  copyAllJsFiles: copy resources to WEBROOT folders
 *  Then add watches on folders.
 *
 *  The array of tasks (after task: default) is run on start
 */
gulp
	.task('default', [
		'css',
		'js',
		'view'
	], function () {
	    livereload.listen();

	    // WATCH events
	    // Watch CSS-folder(s) for changes
	    gulp
	        .watch('static/css/**/*.css', ['css'])
			.on('change', watcherCallback);
	    // Watch JS-folder(s) for changes
	    gulp
	        .watch('static/js/**/*.js', ['js'])
			.on('change', watcherCallback);
	    // Watch VIEW-folder(s) for changes
	    gulp
	        .watch('index.php', ['view'])
			.on('change', watcherCallback);
	});


/**
 * CSS
 *
 * Set up task for CSS
 */
gulp
	.task('css', function () {
	    gulp.src('static/css/main.css')
            //.pipe(plumber({
                //errorHandler: onError
            //}))
    		// Uglify the javascript files into "m.min.js" 
    		// and create a sourcemap file
            /*.pipe(uglify('m.min.js', {
                output: {
                	beautify: true
                },
                compress: false,
				outSourceMap: true,
				sourceRoot: '../../',
    		    mangle: false
            }))*/
        	//.pipe(plumber.stop())
    		// Render the output into the /MIN folder
    		//.pipe(gulp.dest('v3-html/min'))
	        .pipe(livereload());
	});


/**
 * JAVASCRIPT
 *
 * Set up task for JS
 */
gulp
	.task('js', function () {
	    gulp.src('static/js/main.js')
            //.pipe(plumber({
                //errorHandler: onError
            //}))
    		// Uglify the javascript files into "m.min.js" 
    		// and create a sourcemap file
            /*.pipe(uglify('m.min.js', {
                output: {
                	beautify: true
                },
                compress: false,
				outSourceMap: true,
				sourceRoot: '../../',
    		    mangle: false
            }))*/
        	//.pipe(plumber.stop())
    		// Render the output into the /MIN folder
    		//.pipe(gulp.dest('v3-html/min'))
	        .pipe(livereload());
	});


/**
 * VIEWS
 *
 * Set up task for VIEWS
 */
gulp
	.task('view', function () {
	    gulp.src('index.php').pipe(livereload());
	});

var onError = function (err) {
    gutil.log(gutil.colors.yellow(err));
};
