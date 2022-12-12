import gulp from 'gulp'
import path from './config/path.js'
import app from './config/app.js'
import browserSync from 'browser-sync'
import gulpLoadPlugins from 'gulp-load-plugins'

const gp = gulpLoadPlugins()
const bs = browserSync.create()

global.$ = {
  gulp: gulp,
  gp: gp,
  browserSync: bs,

  path: path,
  app: app,
}

/* ---------------------------------- Tasks --------------------------------- */
import clear from './tasks/clear.js'
import html from './tasks/html.js'
import pug from './tasks/pug.js'
import server from './tasks/server.js'
import scss from './tasks/scss.js'
import css from './tasks/css.js'
import js from './tasks/js.js'
import img from './tasks/img.js'
import font from './tasks/font.js'
import { clearOldSprites, makeSprite } from './tasks/sprite.js'
import staticFiles from './tasks/staticFiles.js'

const sprite = $.gulp.series(clearOldSprites, makeSprite)

const watcher = () => {
  $.gulp.watch($.path.html.watch, html)
  $.gulp.watch($.path.scss.watch, scss)
  $.gulp.watch($.path.js.watch, js)
  $.gulp.watch($.path.img.watch, img)
  $.gulp.watch($.path.font.watch, font)
  $.gulp.watch($.path.staticFiles.watch, staticFiles)
}

const build = $.gulp.series(
  clear,
  $.gulp.parallel(html, scss, js, img, staticFiles)
)

const dev = $.gulp.series(build, $.gulp.parallel(server, watcher))

/* --------------------------------- Exports -------------------------------- */

export {
  html,
  pug,
  clear,
  font,
  img,
  css,
  scss,
  server,
  js,
  watcher,
  build,
  dev,
  sprite,
  clearOldSprites,
}

export default $.app.isProd ? build : dev
