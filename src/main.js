// import library and config
import pad from '@/config/pad'
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/config/api'
import '@comps'
import '@filters'
import App from '@/App'
import router from '@/config/router'
import store from '@/config/store'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper/dist/js/swiper.js'

window.Swiper = Swiper
Vue.use(Mint)

Vue.prototype.pad = pad

// create the vue root instance
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
