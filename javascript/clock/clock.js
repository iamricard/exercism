function pad (n) {
  return `0${n}`.slice(-2)
}

function computeHours (initialHours, minutes) {
  const extraHours = Math.floor(minutes / 60)
  const addedHours = initialHours + extraHours

  return (addedHours < 0 ? 24 - (Math.abs(addedHours) % 24) : addedHours) % 24
}

function computeMinutes (minutes) {
  return minutes < 0 ? 60 - (Math.abs(minutes) % 60) : minutes % 60
}

function at (h, m = 0) {
  let minutes = computeMinutes(m)
  let hours = computeHours(h, m)

  function toString (h, m) {
    return `${pad(h)}:${pad(m)}`
  }

  function equals (c) {
    return c.hours === hours && c.minutes === minutes
  }

  function plus (m = 0) {
    hours = computeHours(hours, minutes + m)
    minutes = computeMinutes(minutes + m)

    return {
      equals,
      hours,
      minutes,
      minus,
      plus,
      toString: toString.bind(null, hours, minutes)
    }
  }

  function minus (m = 0) {
    return plus(m * -1)
  }

  return {
    equals,
    hours,
    minutes,
    minus,
    plus,
    toString: toString.bind(null, hours, minutes)
  }
}

module.exports = { at }
