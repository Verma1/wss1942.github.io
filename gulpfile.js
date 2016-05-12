var gulp = require('gulp');
var mustache = require('mustache');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {
	mustache.render(params.json, me.tpl, output.html);
});

// 监视文件改动并重新载入
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['*.html', 'stylesheets/*.css', 'js/*.js'], ['default'])
        .on('change', reload);
});
