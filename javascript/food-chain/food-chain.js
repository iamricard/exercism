module.exports = function FoodChain () {
  const critters =
    [ 'fly'
    , 'spider'
    , 'bird'
    , 'cat'
    , 'dog'
    , 'goat'
    , 'cow'
    , 'horse'
    ]

  const seconds =
    [ ''
    , 'It wriggled and jiggled and tickled inside her.'
    , 'How absurd to swallow a bird!'
    , 'Imagine that, to swallow a cat!'
    , 'What a hog, to swallow a dog!'
    , 'Just opened her throat and swallowed a goat!'
    , 'I don\'t know how she swallowed a cow!',
    ]

  function chorus (critter, idx) {
    if (critter === 'fly' || critter === 'horse') return []

    const previousCritter = critters[idx - 1]
    const base = `She swallowed the ${critter} to catch the ${previousCritter}`

    if (critter === 'bird') {
      return [
        `${base} that wriggled and jiggled and tickled inside her.`,
        ...chorus(critters[idx - 1], idx - 1)
      ]
    } else {
      return [
        `${base}.`,
        ...chorus(critters[idx - 1], idx - 1)
      ]
    }
  }

  const first = (critter) =>
    `I know an old lady who swallowed a ${critter}.`
  const choruses =
    critters.map(chorus)
  const last = (critter) =>
    critter === 'horse'
      ? 'She\'s dead, of course!'
      : 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.'

  const verses = critters.map((critter, idx) =>
    [ first(critter)
    , seconds[idx]
    , choruses[idx].join('\n')
    , last(critter)
    ].filter((x) => x).join('\n')
  )


  const verse = (idx) => `${verses[idx - 1]}\n`

  return {
    verse,
    verses: (n, m = critters.length) => {
      let song = []

      while (n <= m) {
        song.push(verse(n))
        n++
      }

      song.push('')

      return song.join('\n')
    }
  }
}
