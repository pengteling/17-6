
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
//gulp.task('default',['browser-sync']);


var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber'); //防止gulp退出进程
gulp.task('less', function() { 
    return gulp.src('./less/**/*.less')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./less/css'))
      // .pipe(browserSync.reload({
      //            stream: true
      //        }));
  });

gulp.task( 'watch', function() { // 开启监听
  gulp.watch("less/**/*.less", ['less']);  // ./less路径 不监控 新增加的，如果去掉 ./ 则可以监控 less中新增加的less文件改动
});

gulp.task('default',['less','watch','browser-sync']);

