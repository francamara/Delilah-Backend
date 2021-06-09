function getDate() {
  const d = new Date()
  const year = +d.getUTCFullYear()
  const month = +d.getUTCMonth() + 1
  const day = +d.getUTCDate()
  const hour = +d.getUTCHours()
  const minute = +d.getUTCMinutes()
  const second = +d.getUTCSeconds()
  const response = `${year}/${month}/${day} ${hour}:${minute}:${second}`
  return response
}
module.exports = getDate
