import { row, col } from './src/utils'


function title(block) {
  const { tag, styles } = block.options
  return row(col(`<${tag}>${block.value}</${tag}>`), styles)
}

function text(block) {
  const { tag, styles } = block.options
  return row(col(`<${tag}>${block.value}</${tag}>`), block.options.styles)
}

function textColumns(block) {
  const { tag, styles } = block.options
  let html = block.value.map(item => `<${tag} class="col-sm">${item}</${tag}>`)
  return row(`${html.join('')}`, styles)
}

function image(block) {
  const { alt, styles, imageStyles } = block.options
  let html = `<img src="${block.value}" alt="${alt}" style="${imageStyles}"/>`
  return row(html, styles)
}

export const templates = { title, text, textColumns, image }