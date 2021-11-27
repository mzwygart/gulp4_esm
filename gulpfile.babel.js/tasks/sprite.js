import del from 'del'

const clearOldSprites = (cb) => {
  del($.path.src + '/img/sprite/**')
  del($.path.root + '/img/sprite/**')
  cb()
}

const makeSprite = () => {
  return $.gulp
    .src($.path.src + '/assets/icons/*.svg')
    .pipe(
      $.gp.svgSprite({
        mode: {
          dest: $.path.src + '/img/sprite/',
          view: {
            layout: 'vertical',
            sprite: '../../../img/sprite/sprite.svg', //sprite file name
            example: true,
            render: {
              css: {
                dest: './_sprite.css',
              },
            },
          },
        },
      })
    )
    .pipe($.gulp.dest($.path.src + '/img/sprite'))
    .pipe($.gulp.dest($.path.root + '/img/sprite'))
}

export { makeSprite, clearOldSprites }
