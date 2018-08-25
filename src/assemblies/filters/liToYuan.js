export default function (value) {
  let r = Math.floor(value / 10) / 100
  return isNaN(r) ? 0 : r
}
