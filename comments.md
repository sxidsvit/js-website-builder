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

-----------------------------------------------------------------------------
Видео 4 

(1) Подключаем Bootstrap (https://getbootstrap.com/) в ./src/index.html :

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

(2) Создаём базовую html-зазметку 
(3) Coздаём пакпку со стилями: /src/styles/main.css
(4) Создаём базовые стили в файле main.css
(5) Подключаем стили с помощью JS:
    (5.1) index.js - import './styles/main.css'
    (5.2) npm install --save-dev style-loader css-loader (https://webpack.js.org/loaders/style-loader/)
    (5.3)  module: {
            rules: [
             {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
             },
          ],
        }
(6) Используем стили Bootstrap и cоздаем структуру (layout) нашей страницы index.html

-----------------------------------------------------------------------------
Видео 5
