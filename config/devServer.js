const path = require('path')

module.exports = {
    index: 'index.html',
    contentBase: path.join(__dirname, '../src'),
    compress: true,
    port: 9000
}
