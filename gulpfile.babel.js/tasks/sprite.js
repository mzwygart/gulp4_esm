import del from 'del'

const clearImgSprites = (cb) => {
  del($.path.src + '/img/sprite/')
  del($.path.root + '/img/sprite/')
  cb()
}

const makeSprite = () => {
  return $.gulp
    .src($.path.src + '/assets/icons/*.svg')
    .pipe(
      $.gp.svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg', //sprite file name
            example: true,
          },
        },
      })
    )
    .pipe($.gulp.dest($.path.src + '/img/sprite'))
    .pipe($.gulp.dest($.path.root + '/img/sprite'))
}

export { makeSprite, clearImgSprites }
