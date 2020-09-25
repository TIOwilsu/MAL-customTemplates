const path = require('path')
const HtmlWebPackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require("mini-css-extract-plugin")  

module.exports = [
    new HtmlWebPackPlugin({ 
        template: path.join(__dirname, '../public/index.html'), 
        filename: 'index.html',
        minify: true
    }),
    new MiniCssExtractPlugin({  filename: "assets/css/[name].css" })   
]
   
