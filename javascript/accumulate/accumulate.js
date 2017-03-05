module.exports = function accumulate ([x, ...xs], fn) {
  if (!x) return []

  return [fn(x), ...accumulate(xs, fn)]
}
