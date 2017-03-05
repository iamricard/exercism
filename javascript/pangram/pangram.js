module.exports = function Pangram (word) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map((c) => `(?=.*${c})+`)
    .join('')

  const REGEX = new RegExp(alphabet)

  return {
    isPangram: () => REGEX.test(word.toLowerCase())
  }
}
