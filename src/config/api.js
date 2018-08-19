/**
 * api config
 */

import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'mint-ui'

const apiUrl = 'http://192.168.0.3:9527'

Vue.prototype.qs = require('qs')
Vue.prototype.axios = axios

/* ------------------------------ base url config ------------------------------ */
const baseURL = `${apiUrl}/mobile-server`
Vue.prototype.host = apiUrl
axios.defaults.baseURL = baseURL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/* ------------------------------ handle response error msg ------------------------------ */
axios.interceptors.response.use(function (response) {
  if (response.data.code !== 0) {
    Toast(response.data.msg)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

// the development enviroment have to set a cookie for get api data
// product environment comment the follow code
document.cookie = 'WZ_TOKEN=jF/QL/+N1mQYAfWHoYGqn85QH1aOt6HOIqLO46wiTNw=;'
