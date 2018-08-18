import Vue from 'vue'
import unixTimeToDate from './unixTimeToDate'
import unixTimeToTime from './unixTimeToTime'
import unixTimeToDatetime from './unixTimeToDatetime'

Vue.filter('unixTimeToDate', unixTimeToDate)
Vue.filter('unixTimeToTime', unixTimeToTime)
Vue.filter('unixTimeToDatetime', unixTimeToDatetime)
