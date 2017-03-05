const hasChars = (str) => /[a-zA-Z]/.test(str)

module.exports = function Bob () {
  return {
    hey: (str) => {
      switch (true) {
        case str.trim() === '':
          return 'Fine. Be that way!'
        case str.toUpperCase() === str && hasChars(str):
          return 'Whoa, chill out!'
        case str.charAt(str.length - 1) === '?':
          return 'Sure.'
        default:
          return 'Whatever.'
      }
    }
  }
}
