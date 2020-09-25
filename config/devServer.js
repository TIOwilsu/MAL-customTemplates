const path = require('path')

module.exports = {
    index: 'index.html',
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    port: 9000
}
