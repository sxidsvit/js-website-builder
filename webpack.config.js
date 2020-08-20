const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // main file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3210
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html' // template for building html file
    })
  ]
}