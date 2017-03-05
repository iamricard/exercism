const zip = (a1, a2) =>
  a1.map((x, i) => [x, a2[i]])

function Hamming () {
  const compute =
    (a, b) => zip(a.split(''), b.split(''))
              .filter(([x, y]) => x !== y)
              .length
  return {
    compute: (a, b) => {
      if (a.length !== b.length) throw new Error('DNA strands must be of equal length.')

      return compute(a, b)
    }
  }
}

module.exports = Hamming
