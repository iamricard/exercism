const values = (o) =>
  Object.keys(o)
        .map((k) => o[k])

const all = (xs, fn) =>
  xs.reduce((acc, x) => acc && fn(x), true)

module.exports = function Isogram (word) {
  const increment = (map, key) => {
    if (!key) return map

    const count = parseInt(map[key]) || 0

    return Object.assign({}, map, {
      [key]: count + 1
    })
  }

  const count = word.toLowerCase()
                    .replace(/[- ]/g, '')
                    .split('')
                    .reduce(increment, {})

  return {
    isIsogram: () => all(values(count), (x) => x === 1)
  }
}
