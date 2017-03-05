module.exports = function Gigasecond (d) {
  const TIME = d.getTime()
  const GIGA_SECOND = Math.pow(10, 12) // 10^9s === 10^12ms

  return {
    date: () => new Date(TIME + GIGA_SECOND)
  }
}
