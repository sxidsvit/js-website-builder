День 1
-----------------------------------------------------------------------------
Видео 3

(1) Установленная версия node.js: node -v 
(2) Инициирум package.json: npm init
(3) npm install -D webpack webpack-cli webpack-dev-server
(4) создаём webpack.config.js

const path = require('path') // встроенный в node.js модуль
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
      template: './src/index.html'
    })
  ]
}

(5) __dirname:  D:\My projects\js-website-builder

(6) Устанавливаем плагин HtmlWebpackPlugin
npm install --save-dev html-webpack-plugin

The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags. Just add the plugin to your webpack configuration 
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html' // template for building html file
    })
  ]

  (7) основываясь на шаблоне index.html, который мы создаём и помещаем в папку /src/index.html, плагин будет генерировать HTML-страницу и помещать в неё скрипты
