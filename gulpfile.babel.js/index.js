import gulp from 'gulp'
import config from './config.js'
import browserSync from 'browser-sync'
import gulpLoadPlugins from 'gulp-load-plugins'

const gp = gulpLoadPlugins()
const bs = browserSync.create()

global.$ = {
  gulp: gulp,
  gp: gp,
  browserSync: bs,
  path: config.path,
  app: config,
}

/* ---------------------------------- Tasks --------------------------------- */
import clear from './tasks/clear.js'
import html from './tasks/html.js'
import server from './tasks/server.js'
import scss from './tasks/scss.js'
import js from './tasks/js.js'
import img from './tasks/img.js'
import font from './tasks/font.js'
import staticFiles from './tasks/staticFiles.js'

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
  clear,
  font,
  img,
  scss,
  server,
  js,
  watcher,
  build,
  dev,
}

export default $.app.isProd ? build : dev
