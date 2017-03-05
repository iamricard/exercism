function HelloWorld () {
  return {
    hello: (input) => `Hello, ${input || 'World'}!`
  }
}

module.exports = HelloWorld
