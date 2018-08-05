import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/sharing/home'
import Home2 from '@pages/sharing/home/home2'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'xactive',
  linkExactActiveClass: 'xcurrent',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: '来米资讯',
        level: 1
      }
    },
    {
      path: '/p2',
      component: Home2,
      meta: {
        title: '二级页面',
        level: 2
      }
    }
  ]
})
