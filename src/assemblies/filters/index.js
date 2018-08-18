import Vue from 'vue'
import unixTimeToDate from './unixTimeToDate'
import unixTimeToTime from './unixTimeToTime'
import unixTimeToDatetime from './unixTimeToDatetime'
import liToYuan from './liToYuan'

Vue.filter('unixTimeToDate', unixTimeToDate)
Vue.filter('unixTimeToTime', unixTimeToTime)
Vue.filter('unixTimeToDatetime', unixTimeToDatetime)
Vue.filter('liToYuan', liToYuan)
