const first = 'a'.charCodeAt(0)
const last = 'z'.charCodeAt(0)

function encode (str) {
  return str
        .toLowerCase()
        .replace(/[ ,.]/g, '')
        .split('')
        .map((char) => Number(char) || String.fromCharCode(first + last - char.charCodeAt(0)))
        .join('')
        .split(/([a-z1-9]{5})/g)
        .filter((x) => !!x)
        .join(' ')
}

module.exports = { encode }
