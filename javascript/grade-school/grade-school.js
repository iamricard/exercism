module.exports = function School () {
  let db = {}
  const get = (grade) => db[grade] || []
  const add = (name, grade) => {
    db[grade] = [...get(grade), name].sort()
  }
  return {
    add: add,
    grade: get,
    roster: () => db
  }
}
