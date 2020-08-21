export function row(content, styles = '') {
  console.log('row - styles: ', styles);
  return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}