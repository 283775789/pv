import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/sharing/articles'

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
    }
  ]
})
