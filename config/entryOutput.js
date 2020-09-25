const path = require('path')

module.exports = {
    entry: {
        style: path.join(__dirname, '../public/assets/scss/style.scss'),
        script: path.join(__dirname, '../public/assets/js/script.js')
    },     
    output: {
        path: path.resolve('dist'),
        filename: 'assets/js/[name].js'
    }
}