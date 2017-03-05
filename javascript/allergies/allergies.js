module.exports = function Allergies (x) {
  const scores =
    [ [128, 'cats']
    , [64, 'pollen']
    , [32, 'chocolate']
    , [16, 'tomatoes']
    , [8, 'strawberries']
    , [4, 'shellfish']
    , [2, 'peanuts']
    , [1, 'eggs']
    ]
    .reduce(([score, ...allergies], [aScore, aName]) => {
      if (score >= aScore) return [score - aScore, aName, ...allergies]

      return [score, ...allergies]
    }, [x % 256])
    .slice(1)

  function list () { return scores }
  function allergicTo (x) { return scores.indexOf(x) > -1 }

  return { allergicTo, list }
}
