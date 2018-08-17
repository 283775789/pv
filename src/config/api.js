/**
 * api config
 */

import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'mint-ui'

Vue.prototype.axios = axios
/* ------------------------------ base url config ------------------------------ */
const baseURL = 'http://172.20.10.4:9527/mobile-server'
Vue.prototype.host = 'http://172.20.10.4:9527/'
axios.defaults.baseURL = baseURL

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
