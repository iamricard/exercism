const values = (o) =>
  Object.keys(o)
        .map((k) => o[k])

module.exports = function Anagram (word) {
  let letters = word.toLowerCase().split('')
  let letterCount = {}

  for (let i = 0; i < letters.length; i++) {
    const key = letters[i]
    const count = parseInt(letterCount[key]) || 0
    letterCount[key] = count + 1
  }

  function matches ([w, ...ws]) {
    if (!w || word.toLowerCase() === w.toLowerCase()) return []

    let comparedCount = Object.assign({}, letterCount)
    let wLetters = w.toLowerCase().split('')

    for (let i = 0; i < wLetters.length; i++) {
      const key = wLetters[i]
      const count = parseInt(comparedCount[key])

      if (!count || count - 1 < 0) return [...matches(ws)]

      comparedCount[key] = count - 1
    }

    if (values(comparedCount).filter((count) => count !== 0).length !== 0) {
      return [...matches(ws)]
    }

    return [w, ...matches(ws)]
  }

  return {
    matches: (w, ...ws) => {
      if (typeof w === 'string') return matches([w, ...ws])

      return matches(w)
    }
  }
}
