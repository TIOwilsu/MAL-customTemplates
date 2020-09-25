const MiniCssExtractPlugin = require("mini-css-extract-plugin") 

module.exports = {
  rules: [  
    {  
      test: /\.scss$/,  
      use: [
        MiniCssExtractPlugin.loader, 
        "css-loader",
        "sass-loader"
      ]  
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }  
  ]  
}