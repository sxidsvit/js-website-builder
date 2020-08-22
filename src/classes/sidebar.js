import { TitleBlock, TextBlock } from './blocks'

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector)
    this.update = update

    this.init()
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this))
    this.$el.innerHTML = this.template // generating HTML for the sidebar
  }

  get template() {
    return [
      block('Title'),
      block('Text'),
    ].join('')
  }

  addBlock(event) {
    event.preventDefault();
    const type = event.target.name.toLowerCase()

    // get the values ​​of the controls (fields) of the form
    const elements = event.target.elements
    const value = elements.value.value
    const styles = elements.styles.value
    const tag = elements.tag.value

    // Determine the class of the block to be rendered
    const Constructor = type === 'text' ? TextBlock : TitleBlock
    const newBlock = new Constructor(value, { styles, tag })

    // Updating the site
    this.update(newBlock)

    // Clearing form fields
    elements.value.value = ''
    elements.styles.value = ''
    elements.tag.value = ''
  }
}

function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="tag" placeholder="tag">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
}

// function block(type) {
//   return `
//      <form name="${type}">
//      <h5>${type}</h5>
//       <div class="form-group">
//         <input class="form-control form-control" name=""value" placeholder="value" >
//       </div>
//       <div class="form-group">
//         <input class="form-control form-control" name=""styles" placeholder="styles" >
//       </div>
//       <div class="form-group">
//         <input class="form-control form-control" name=""tag" placeholder="tag" >
//       </div>
//       <button type="submit" class="btn btn-primary mb-2">Создать</button>
//      </form>
//      <hr />
//    `
// }