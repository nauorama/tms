var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    rename       = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber      = require('gulp-plumber'),
    notify       = require('gulp-notify'),
    sourcemaps   = require('gulp-sourcemaps'),
    watch        =  require('gulp-watch');


// start browserSync
gulp.task('browser-sync', function() {
	browserSync({
		port: 9000,
		server: "./",
		notify: false
	});
});

// compile sass > autoprefix > save to app
gulp.task('sass', function(){
	return gulp.src([
    'sass/main.scss'
	], { base: 'sass' })
    .pipe(sourcemaps.init())
    .pipe(plumber({
        errorHandler: notify.onError(function (err) {
            return {
                title: "Styles",
                message: err.message
            };
        })
    }))
		.pipe(concat('all.scss'))
		.pipe(sass({
      pretty: true
    }))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(rename("styles.css"))
    .pipe(sourcemaps.write())
		.pipe(gulp.dest('./'))
});

// Watch Changes

gulp.task('watch', ['browser-sync'], function () {
    watch('*.html', function () {
        gulp.start(browserSync.reload);
    });
    watch('sass/**/*', function () {
        gulp.start('sass',browserSync.reload);
    });
});


// default task
gulp.task('default', ['sass', 'watch']);

//build
gulp.task('build',['sass']);
