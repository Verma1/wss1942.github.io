var gulp = require('gulp');
var mustache = require('gulp-mustache');
var template = require('gulp-template');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('a', function() {
	gulp.src("./template/me.html")
	    .pipe(template("./data/me.json"))
	    .pipe(gulp.dest("page"))

});

// 监视文件改动并重新载入
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['*.html', 'stylesheets/*.css', 'js/*.js'])
        .on('change', reload);
});
