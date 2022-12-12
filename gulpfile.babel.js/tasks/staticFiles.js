const staticFiles = () => {
  return (
    $.gulp
      .src($.path.staticFiles.src)
      .pipe(
        $.gp.plumber({
          errorHandler: $.gp.notify.onError((error) => ({
            title: 'staticFiles',
            message: error.message,
          })),
        })
      )
      .pipe($.gulp.dest($.path.staticFiles.dest))
      .pipe($.browserSync.stream())
  )
}

export default staticFiles
