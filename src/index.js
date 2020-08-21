import './styles/main.css'
import { model } from './model'
import { templates } from '../templates'


const site = document.querySelector('#site')

model.forEach(block => {
  site.insertAdjacentHTML('beforeend', block.toHTML())
})
