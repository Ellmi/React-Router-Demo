var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');


gulp.task('browserify', function() {
    return browserify('src/js/app.js')
        .bundle()
        .on('error', function(err){
            console.log(err.message);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/js/**/*', ['browserify']);
});
