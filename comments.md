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

(2) Создаём базовую html-разметку 
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
Видео 5 - Подведение итогов первого дня

-----------------------------------------------------------------------------
Видео 6 - Бонус: Webpack. Полный курс 2020
https://www.youtube.com/watch?v=eSaF8NXeNsA

День 2
-----------------------------------------------------------------------------

(1) Создаем модель на JavaScript

Правильно:  document.querySelector('#site').insertAdjacentHTML('beforeend', html)
Ошибока:  document.querySelector('#site').insertAdjacentElement('beforeend', html)

(2) Оптимизируем и улучшаем код

(2.1) Элемент из DOM, при возможности, нужно получать один раз, так как это времязатратная процедура
(2.2) Создаём файл с функциями, которые генеррируют нужные нам шаблоны ( templates.js )
(2.3) Создаем сайт с вспомогательными функциями (utils.js), в который помещаем функции генеррирующие повторяющиеся фрагменты шаблонов
(2.4) В опциях модели добавляем два новых поля tag и style. C учётом этого, правим функции-утилиты (utils.js), так чтобы появилась возможность вносить соответствующие изменения в щаблоны

(3) Внедряем ООП и SOLID 

(3.1) Длинный теrcn можно поместить в переменную. Затем её передать в функцию. Код после этого лучше читается.
(3.2) Устанавливаем загрузчик файлов для Webpack, чтобы можно было работать с картинками: npm install file-loader --save-dev 
и вносим соответствующие изменения в блок правил webpack.config.js:
{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }, ()
(3.3) теперь в файл с моделью (model.js) можно импортировать картинку (import image from './assets/censor_news_big3.jpg') и затем использовать ссылку на неё в самой модели
(3.2) Классы и их наследование позволяют лучше масштабировать приложение, избежать дублирования кода, выполнять принципы SOLID. 
Классы позволяют создавать объекты определенного типа: с заданным набором свойств (полей модели) и методов (например генерировать нужный html-шаблон)
