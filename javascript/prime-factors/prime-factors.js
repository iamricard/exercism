function isPrime (n) {
  for(let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }

  return n > 1
}

function primesFor (number) {
  function go (n, div) {
    if (n === 0 || n === 1) return []
    if (n % div === 0 && isPrime(div)) return [div, ... go(n / div, div)]
    return [...go(n, div + 1)]
  }

  return go(number, 1)
}

module.exports = { isPrime, for: primesFor }
