import config from '../config.js'
const isProd = process.argv.includes('--production')
const isDev = !process.argv.includes('--production')

export default {
  isProd,

  isDev,

  htmlmin: { collapseWhitespace: isProd },

  pug: {
    pretty: isDev,
  },

  webpack: config.webpack,

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },

  rename: { suffix: '.min' },
}
