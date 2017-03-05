const capitalize = ([c, ...str]) => [c.toUpperCase(), ...str].join('')

module.exports = function BeerSong () {
  const bottle = (n) => {
    if (n < 1) return 'no more bottles'
    else if (n === 1) return '1 bottle'
    else return `${n} bottles`
  }

  const it = (n) => n > 0 ? 'one' : 'it'

  const firstLine = (n) =>
    `${capitalize(bottle(n))} of beer on the wall, ${bottle(n)} of beer.`

  const secondLine = (n) => n < 0
    ? 'Go to the store and buy some more, 99 bottles of beer on the wall.'
    : `Take ${it(n)} down and pass it around, ${bottle(n)} of beer on the wall.`

  const verseTemplate = (n) =>
    `${firstLine(n)}\n${secondLine(n - 1)}\n`

  return {
    verse: verseTemplate,
    sing: (n, m = 0) => {
      let song = []

      while (n >= m) {
        song.push(verseTemplate(n))
        n--
      }

      return song.join('\n')
    }
  }
}
