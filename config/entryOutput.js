const path = require('path')

module.exports = {
    entry: {
        style: path.join(__dirname, '../src/assets/scss/style.scss'),
        script: path.join(__dirname, '../src/assets/js/script.js')
    },     
    output: {
        path: path.resolve('dist'),
        filename: 'assets/js/[name].js'
    }
}