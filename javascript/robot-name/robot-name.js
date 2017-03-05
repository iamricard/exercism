function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function toLetter (n) {
  return String.fromCharCode((n % 26) + 97).toUpperCase()
}

const names = new Set()

module.exports = function Robot () {
  const generateName = () => {
    const t = (new Date()).getTime().toString()
    const letters =
      [ getRandomInt(0, 13)
      , getRandomInt(0, 13)
      ]
      .map((n) => toLetter(t.slice(n, n + 2)))
      .join('')
    const numbers =
      [ getRandomInt(0, 13)
      , getRandomInt(0, 13)
      , getRandomInt(0, 13)
      ]
      .map((n) => t.slice(n, n + 1))
      .join('')

    let name = `${letters}${numbers}`

    if (names.has(name)) return generateName()

    names.add(name)
    return name
  }

  this.name = generateName()
  this.reset = () => {
    this.name = generateName()
  }
}
