module.exports = function Triange (...sides) {
  const [x, y, z] = [...sides].sort((x, y) => x - y)
  const hasNegativeSides = sides.filter((s) => s <= 0).length > 0
  const isInvalid = hasNegativeSides || (x + y < z)
  const sidesSet = new Set([x, y, z])

  const kind = () => {
    if (isInvalid) throw new Error()

    switch (sidesSet.size) {
      case 1: return 'equilateral'
      case 2: return 'isosceles'
      case 3: return 'scalene'
    }
  }

  return { kind }
}
