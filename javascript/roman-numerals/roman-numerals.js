const TABLE =
  [ [1, 'I']
  , [4, 'IV']
  , [5, 'V']
  , [9, 'IX']
  , [10, 'X']
  , [40, 'XL']
  , [50, 'L']
  , [90, 'XC']
  , [100, 'C']
  , [400, 'CD']
  , [500, 'D']
  , [900, 'CM']
  , [1000, 'M']
  ]

module.exports = function toRoman (n) {
  let idx = TABLE.length - 1
  let result = ''

  while (n !== 0) {
    const [number, roman] = TABLE[idx]
    if (number <= n) {
      n -= number
      result += roman
    } else {
      idx--
    }
  }

  return result
}
