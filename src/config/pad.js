let OS_EVN = ''
let pad = null

// UI interface for pad
window.UI = {}

// android environment detection
if (window.YgApi) {
  OS_EVN = 'android'
  pad = window.YgApi
}

// ios environment detection
if (window.webkit) {
  OS_EVN = 'ios'
  pad = window.webkit.messageHandlers
}

/**
 * action: back to the pad page
 */
const backToPad = function () {
  if (pad) {
    if (OS_EVN === 'android') {
      pad.exitPage()
    } else if (OS_EVN === 'ios') {
      pad.exitPage.postMessage(null)
    }
  }
}

/**
 * action: pass the header background color to pad
 */
const setStatusBarColor = function (color) {
  if (pad) {
    if (OS_EVN === 'android') {
      pad.setStatusBarColor(color)
    } else if (OS_EVN === 'ios') {
      pad.setStatusBarColor.postMessage(color)
    }
  }
}

/**
 * action: share a artical
 * @param {Number} type 1-we chat 2-we chat moments 3-qq 4-qq zone
 * @param {String} url share url
 * @param {String} iconUrl share icon url
 * @param {String} title share title
 * @param {String} desc share description
 */
const share = function (type, url, iconUrl, title, desc) {
  if (pad) {
    if (OS_EVN === 'android') {
      pad.share(type, url, iconUrl, title, desc)
    } else if (OS_EVN === 'ios') {
      pad.share.postMessage(type, url, iconUrl, title, desc)
    }
  }
}

/**
 * action: share a QR-code
 * @param {Number} type 1-we chat 2-we chat moments 3-qq 4-qq zone
 * @param {String} img share QR-code url
 */
const shareImg = function (type, img) {
  if (pad) {
    if (OS_EVN === 'android') {
      pad.shareImg(type, img)
    } else if (OS_EVN === 'ios') {
      pad.shareImg.postMessage(type, img)
    }
  }
}

export default {
  OS_EVN,
  backToPad,
  share,
  shareImg,
  setStatusBarColor
}
