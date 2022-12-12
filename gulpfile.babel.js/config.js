const pathSrc = './src'
const pathDest = './public'

const isProd = process.argv.includes('--production')
const isDev = !process.argv.includes('--production')

export default {
  isProd,
  isDev,
  htmlmin: { collapseWhitespace: isProd },
  imagemin: {
    verbose: true,
  },
  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },
  rename: { suffix: '.min' },
  path: {
    root: pathDest,
    src: pathSrc,

    html: {
      src: pathSrc + '/html/**/*.html',
      watch: pathSrc + '/html/**/*.html',
      dest: pathDest,
    },

    pug: {
      src: pathSrc + '/pug/**/*.html',
      watch: pathSrc + '/pug/**/*.html',
      dest: pathDest,
    },

    css: {
      src: pathSrc + '/css/**/*.css',
      watch: pathSrc + '/css/**/*.css',
      dest: pathDest + '/css',
    },

    scss: {
      src: pathSrc + '/scss/**/*.{sass,scss}',
      watch: pathSrc + '/scss/**/*.{sass,scss}',
      dest: pathDest + '/css',
    },

    js: {
      src: pathSrc + '/js/**/*.js',
      watch: pathSrc + '/js/**/*.js',
      dest: pathDest + '/js',
    },

    img: {
      src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
      watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
      dest: pathDest + '/img',
    },

    font: {
      src: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
      watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
      dest: pathDest + '/fonts',
    },

    staticFiles: {
      src: pathSrc + '/static/**/*',
      watch: pathSrc + '/static/**/*',
      dest: pathDest,
    },
  }
}
