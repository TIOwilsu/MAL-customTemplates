const entryOutput = require('./entryOutput')
const modules = require('./modules')
const devServer = require('./devServer')
const plugins = require('./plugins')
const watch = require('./watch')

module.exports = {
    ...entryOutput,
    mode: process.env.NODE_ENV,
    module: modules,
    devServer: devServer,
    plugins: plugins
}