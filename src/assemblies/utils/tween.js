const TWEEN = require('@tweenjs/tween.js')

export default function (num1, num2, time, callback) {
  new TWEEN.Tween({value: num1})
    .to({value: num2}, time)
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
