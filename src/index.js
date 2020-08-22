import './styles/main.css'
import { model } from './model'
import { Site } from './classes/site.js'
import { Sidebar } from './classes/sidebar'

const site = new Site('#site')
site.render(model)

const updateCallBack = newBlock => {
  model.push(newBlock)
  site.render(model)
}

new Sidebar('#panel', updateCallBack)
