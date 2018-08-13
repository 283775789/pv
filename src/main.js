// import library and config
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/config/api'
import '@/config/components'
import App from '@/App'
import router from '@/config/router'
import store from '@/config/store'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper/dist/js/swiper.js'

window.Swiper = Swiper
Vue.use(Mint)

// create the vue root instance
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
