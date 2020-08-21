export function row(content, styles = '') {
  const style = ` ${styles}; margin: 0px;`
  return `<div class="row" style="${style}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}