export function row(content, styles = '') {
  const style = ` ${styles}; margin: 0px;`
  return `<div class="row" style="${style}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
  const toString = key => ` ${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join("; ")
}