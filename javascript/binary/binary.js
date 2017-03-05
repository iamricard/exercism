module.exports = function Binary (n) {
  const isInvalid = !Number(n) || /[2-9]+/.test(n)

  function toDecimal () {
    if (isInvalid) return 0

    return n
           .split('')
           .reverse()
           .map((x, idx) => Math.pow(2, idx) * Number(x))
           .reduce((acc, x) => acc + x, 0)
  }

  return { toDecimal }
}
