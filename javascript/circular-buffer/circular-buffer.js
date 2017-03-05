function bufferEmptyException () {
  this.name = 'BufferEmptyException'
  this.message = 'Empty Buffer Exception'
  this.stack = (new Error()).stack
}

function bufferFullException () {
  this.name = 'BufferFullException'
  this.message = 'Full Buffer Exception'
  this.stack = (new Error()).stack
}

function circularBuffer (size) {
  let memory = null
  let currentNode = null
  let count = 0

  function write (value) {
    if (count === size) throw new bufferFullException()
    if (value === undefined || value === null) return

    currentNode = { value, next: null, previous: currentNode }

    if (currentNode.previous) currentNode.previous.next = currentNode

    if (!memory) {
      memory = currentNode
    }

    count++
  }

  function forceWrite (value) {
    if (size === count) memory = memory.next
    else count++

    currentNode = { value, next: null, previous: currentNode }
    currentNode.previous.next = currentNode
  }

  function read () {
    if (count === 0) throw new bufferEmptyException()

    let value = memory.value
    memory = memory.next
    if (memory) {
      memory.previous = null
    }
    count--
    return value
  }

  function clear () {
    count = 0
    memory = null
    currentNode = null
  }

  return { clear, forceWrite, read, write }
}

module.exports = { bufferEmptyException, bufferFullException, circularBuffer }
