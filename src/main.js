// 引入库及应用配置
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/config/api'
import '@/config/components'
import App from '@/App'
import router from '@/config/router'
import store from '@/config/store'

// 解决ios click bug
// var attachFastClick = require('fastclick')
// attachFastClick.attach(document.body)
Vue.use(Mint)

// 创建Vue应用根实例
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
