const TWEEN = require('@tweenjs/tween.js')

export default function (from, to, time, callback) {
  new TWEEN.Tween(from)
    .to(to, time)
    .start()
    .onUpdate(callback)

  const animate = function () {
    if (TWEEN.update()) {
      if (requestAnimationFrame) {
        requestAnimationFrame(animate)
      } else {
        setTimeout(animate, 17)
      }
    }
  }

  animate()
}
