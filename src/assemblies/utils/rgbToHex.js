/**
 * @param {String} rgbColor convert rgb color to hex color
 */
export default function (rgbColor) {
  const colors = /(\d+)\D+(\d+)\D+(\d+)\D+/.exec(rgbColor)
  let r = parseInt(colors[1])
  let g = parseInt(colors[2])
  let b = parseInt(colors[3])

  r = r < 16 ? '0' + r.toString(16) : r.toString(16)
  g = g < 16 ? '0' + g.toString(16) : g.toString(16)
  b = b < 16 ? '0' + b.toString(16) : b.toString(16)

  return `#${r}${g}${b}`
}
