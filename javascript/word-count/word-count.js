module.exports = function Words () {
  const increment = (map, key) => {
    const count = parseInt(map[key]) || 0

    return Object.assign({}, map, {
      [key]: count + 1
    })
  }

  const id = (x) => x

  return {
    count: (str) =>
      str.toLowerCase()
         .trim()
         .replace(/,/g, ' ')
         .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@?]/g, '')
         .replace(/\t/, ' ')
         .split(' ')
         .filter(id)
         .map((w) => w.replace(/^'/, '').replace(/'$/, ''))
         .reduce(increment, {})
  }
}
