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

const watcher = () => {
  $.gulp.watch($.path.html.watch, html)
  $.gulp.watch($.path.scss.watch, scss)
  $.gulp.watch($.path.js.watch, js)
  $.gulp.watch($.path.img.watch, img)
  $.gulp.watch($.path.font.watch, font)
}

const build = $.gulp.series(
  clear,
  $.gulp.parallel(html, scss, js, img),
  $.gulp.parallel(server, watcher)
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
}

export default $.app.isProd ? build : dev
