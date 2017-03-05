const toPairs =
  (o) => Object.keys(o)
               .map((k) => [k, o[k]])

module.exports = function ETL () {
  function transform (data) {
    return Object.assign({}, ...toPairs(data).map(([value, letters]) => (
      Object.assign({}, ...letters.map((letter) => ({ [letter.toLowerCase()]: Number(value) })))
    )))
  }

  return { transform }
}
