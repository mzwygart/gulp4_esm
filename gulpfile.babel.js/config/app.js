import webpackConfig from './webpack.config'
const isProd = process.argv.includes('--production')
const isDev = !process.argv.includes('--production')

export default {
  isProd,

  isDev,

  htmlmin: { collapseWhitespace: isProd },

  pug: {
    pretty: isDev,
  },

  webpack: webpackConfig,

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },

  rename: { suffix: '.min' },
}
