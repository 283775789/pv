import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/sharing/article-list/article-list'
import ArticalDetail from '@pages/sharing/article-detail/article-detail'

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
      path: '/artical-detail',
      component: ArticalDetail,
      meta: {
        title: '高价文',
        level: 2
      }
    }
  ]
})
