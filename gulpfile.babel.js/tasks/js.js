import webpackStream from 'webpack-stream'

const js = () => {
  return $.gulp
    .src('./src/js/main.js')
    .pipe(webpackStream({
      mode: $.app.isProd ? 'production' : 'development'
    }))
    .pipe($.gulp.dest('./public/js'))
    .pipe($.browserSync.stream())
}

export default js
