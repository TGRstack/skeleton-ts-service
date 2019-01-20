const { series, } = require('nps-utils') // rimraf, concurrent, setColors
const paths = require('./_paths.js')

module.exports = {
  default: series.nps('commit.pre', 'scrub.build', 'build.server'),
  description: 'Remove the previous build and run the compiler',
  server: 'npx webpack --config '+paths.wp.server.dev,
  production: {
    default: series.nps('commit.pre', 'scrub.build', 'build.production.server'),
    server: 'npx webpack --config '+paths.wp.server.prod,
  },
}
