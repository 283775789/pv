const timestamp = require('time-stamp')

export default function (value) {
  const date = new Date(value * 1000)

  return timestamp('YY-MM-DD HH:mm:ss', date)
}
