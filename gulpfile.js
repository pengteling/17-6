
var gulp = require('gulp');
// npm i browser-sync
/*实时监测 浏览器实时变化*/
var browserSync = require('browser-sync');
gulp.task('browser-sync', function() {
    var files = [
        'demo/**/*.html',
        'demo/**/style/**/*.css',
        'demo/**/css/**/*.css',
        'demo/**/js/**/*.js',
        'demo/**/images/**/*.{png,jpg,jpeg,svg,gif,ico}'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './demo/'
        }
    });
});
gulp.task('default',['browser-sync']);
