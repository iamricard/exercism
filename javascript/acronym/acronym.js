const head = ([x, ..._]) => x

module.exports = {
  parse: (str) =>
    str
    .split(/[- ]|[a-z](?=[A-Z])/)
    .map(head)
    .join('')
    .toUpperCase()
}
