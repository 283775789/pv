/**
 * api config
 */

import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'mint-ui'

Vue.prototype.qs = require('qs')
Vue.prototype.axios = axios

const apiUrl = 'http://192.168.0.3:9527'

// static resource url prefix
Vue.prototype.staticUrl = 'http://192.168.0.3:9527/static'

// the development enviroment have to set a cookie for get api data
// please comment the follow code in the product environment
document.cookie = 'WZ_TOKEN=vE8z9MABwcljLaWXNj8Ath9ceInZQAQer8VGLsBw43U=;'

/* ------------------------------ base url config ------------------------------ */
const baseURL = `${apiUrl}/mobile-server`
Vue.prototype.host = apiUrl
axios.defaults.baseURL = baseURL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/* ------------------------------ handle response error msg ------------------------------ */
axios.interceptors.response.use(function (response) {
  if (response.data.code && response.data.code !== 0) {
    Toast(response.data.msg)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})
