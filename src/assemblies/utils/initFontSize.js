// set root font size for the rem
const initFont = function () {
  const windowWidth = window.innerWidth
  const baseWidth = 375
  const baseFontSize = 20
  const widthRate = (windowWidth / baseWidth).toFixed(2)

  let rootFontSize = 0
  rootFontSize = parseFloat((widthRate * baseFontSize).toFixed(1))
  rootFontSize = rootFontSize <= 25 ? rootFontSize : 25

  document.documentElement.style.fontSize = rootFontSize + 'px'
}

initFont()

window.onload = initFont
