/**
 * routing meta information:
 * title: The title content of the page, it is displayed in the middle of the header.
 * level: Indicates the level of the page and the effect of sliding when the page is changed.
 */

import Vue from 'vue'
import Router from 'vue-router'

// share
import Home from '@pages/sharing/home'
import ArticalDetail from '@pages/sharing/article-detail'

// follower
import Student from '@pages/student/home'
import Invite from '@pages/student/invite'

// me
import Me from '@pages/me/home'
import IncomeList from '@pages/me/income-list'
import Withdraw from '@pages/me/withdraw'
import WithdrawList from '@pages/me/withdrew-list'
import RankingList from '@pages/me/ranking-list'
import Guide from '@pages/me/guide'
import GuideDetail from '@pages/me/guide-detail'
import Service from '@pages/me/service'
import Business from '@pages/me/business'
import BusinessForm from '@pages/me/business-form'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'xactive',
  linkExactActiveClass: 'xcurrent',
  routes: [
    // routes:share
    // --------------------------------------------------
    {
      path: '/',
      component: Home,
      meta: {
        type: 'home',
        keepAlive: true,
        title: '来米资讯',
        level: 1
      }
    },
    {
      path: '/artical-detail',
      name: 'articalDetail',
      component: ArticalDetail,
      meta: {
        type: 'home',
        title: '高价文',
        level: 2
      }
    },
    // routes:follower
    // --------------------------------------------------
    {
      path: '/student',
      component: Student,
      meta: {
        type: 'follower',
        title: '邀请好友',
        level: 1
      }
    },
    {
      path: '/invite',
      component: Invite,
      meta: {
        type: 'follower',
        level: 2
      }
    },
    // routes:me
    // --------------------------------------------------
    {
      path: '/me',
      component: Me,
      meta: {
        type: 'me',
        level: 1
      }
    },
    {
      path: '/income-list',
      component: IncomeList,
      meta: {
        type: 'me',
        title: '收入明细',
        level: 2
      }
    },
    {
      path: '/withdraw',
      component: Withdraw,
      meta: {
        type: 'me',
        title: '提现',
        level: 2
      }
    },
    {
      path: '/withdraw-list',
      component: WithdrawList,
      meta: {
        type: 'me',
        title: '提现记录',
        level: 2
      }
    },
    {
      path: '/ranking-list',
      component: RankingList,
      meta: {
        type: 'me',
        title: '排行榜',
        level: 2
      }
    },
    {
      path: '/guide',
      component: Guide,
      meta: {
        type: 'me',
        title: '新手指南',
        level: 2
      }
    },
    {
      path: '/guide-detail',
      component: GuideDetail,
      meta: {
        type: 'me',
        title: '指南详情',
        level: 3
      }
    },
    {
      path: '/service',
      component: Service,
      meta: {
        type: 'me',
        title: '客服',
        level: 2
      }
    },
    {
      path: '/business',
      component: Business,
      meta: {
        type: 'me',
        title: '商务合作',
        level: 2
      }
    },
    {
      path: '/business-form',
      component: BusinessForm,
      meta: {
        type: 'me',
        title: '申请合作',
        level: 3
      }
    }
  ]
})

// count script src
const count = {
  home: 'https://s13.cnzz.com/z_stat.php?id=1274516840&web_id=1274516840',
  follower: 'https://s22.cnzz.com/z_stat.php?id=1274516842&web_id=1274516842',
  me: 'https://s19.cnzz.com/z_stat.php?id=1274516849&web_id=1274516849'
}

router.beforeEach((to, from, next) => {
  // append a count script to the corresponding page
  const scriptEl = document.createElement('script')
  scriptEl.id = `${to.meta.type}-count-script`
  scriptEl.src = count[to.meta.type]
  document.body.appendChild(scriptEl)

  // remove the count script of the prev page
  const prevScriptEl = document.getElementById(`${from.meta.type}-count-script`)
  if (prevScriptEl) document.body.removeChild(prevScriptEl)

  next()
})

export default router
