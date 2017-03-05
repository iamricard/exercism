const BigInt = require('./big-integer')

module.exports = function Grains () {
  const computeSquare =
    (n) => BigInt(2).pow(n).toString()

  const nums = Array(64).fill(0).map((_, idx) => computeSquare(idx))

  const computeTotal =
    () => nums.reduce((acc, n) => acc.add(n.toString()), BigInt(0)).toString()

  return {
    square: (n) => nums[n - 1],
    total: computeTotal
  }
}
