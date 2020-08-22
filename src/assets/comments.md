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
Классы позволяют создавать ОБЪЕКТЫ !!! (модели) определенного типа (класса) с заданным набором свойств (полей модели) и методов (например, метод генерирующий  нужный html-шаблон)

(4) Бонус
Видео: Практика JavaScript. Создаем плагин Select с нуля 
https://www.youtube.com/watch?v=35va4OY7Y1c


День 3
-----------------------------------------------------------------------------

(1) Создаем конструктор (реализация левого блока - админки сайта)

(1.1) Создаём новый класс Site. Он позволяет во внутрь тега с указанным селектором отрендерить наш сайт, используя метод render():
const site = new Site('#site').render(model)

(1.2) Создаём класс Sidebar
Его метод init() должен генерировать шаблоны форм с контролами, в которые мы заносим нужный нам контент. Верстку форм можно позаимствовать и Bootstrap (https://getbootstrap.com/docs/4.5/components/forms/). Сами же шаблоны удобно создавать в геттере template.

(1.3) Теперь нужно динамически обработать эти формы: извлечь из них информацию и поместить её на сайт. Для этого создаём специальный метов addBlock().

(1.4) Чтобы не усложнять код и избежать работы с паттерном Observer для передачи данных между модулями, в конструктор класса Sidebar передадим коллбэк (updateCallBack), который будет принимать данные из формы и рендерить их на сайте (обновлять сайт). 

(1.5) Оптимизация стилей. 
Создаём функцию-утилиту css(), которая позволяет преобразовывать стили, записанные в виде объекта, в строку. Теперь их можно использовать как инлайновые стили для стилизации html элементов.
Теперь, если мы создаём модель вручную (для наполнения сайта исходным содержанием), то мы можем прописывать стили в виде элементов блока, что достаточно удобно.

(1.6) Удаляем файл templates.js
Теперь он лишний, так как весь его функционал перемещен в метод toHTML() соответствующего класса.

(2) Заливаем приложение на хостинг Firebase

Поскольку неоднократно это уже делал, то перечислю основные этапы: 
(2.1) Захожу в ранее созданный проект (asp-ads) и перехожу в панель управления хостингами (Develop/Hosting)

(2.2) Добавляю еще один сайт (asp-sites-constructor)

(2.3) Выполняю сборку проекта для продакшин: npm run build
Теперь в папке dist находятся файлы, которые нужно перенести на firebase

(2.4) Последовательно в консоли выполняю команды:
      firebase login
      firebase init

(2.5) Вношу изменения в сгенирированные файлы firebase.json и .fifebaserc . 
После внесения изменений выполняю команду: 
firebase deploy --only hosting:asp-sites-constructor

(2.6) Сайт доступен по адресу https://asp-sites-constructor.web.app/
