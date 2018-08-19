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

export default new Router({
  linkActiveClass: 'xactive',
  linkExactActiveClass: 'xcurrent',
  routes: [
    // routes:share
    // --------------------------------------------------
    {
      path: '/',
      component: Home,
      meta: {
        keepAlive: true,
        title: '来米资讯',
        level: 1
      }
    },
    {
      path: '/artical-detail/:aid',
      component: ArticalDetail,
      meta: {
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
        title: '邀请好友',
        level: 1
      }
    },
    {
      path: '/invite',
      component: Invite,
      meta: {
        level: 2
      }
    },
    // routes:me
    // --------------------------------------------------
    {
      path: '/me',
      component: Me,
      meta: {
        level: 1
      }
    },
    {
      path: '/income-list',
      component: IncomeList,
      meta: {
        title: '收入明细',
        level: 2
      }
    },
    {
      path: '/withdraw',
      component: Withdraw,
      meta: {
        title: '提现',
        level: 2
      }
    },
    {
      path: '/withdraw-list',
      component: WithdrawList,
      meta: {
        title: '提现记录',
        level: 2
      }
    },
    {
      path: '/ranking-list',
      component: RankingList,
      meta: {
        title: '排行榜',
        level: 2
      }
    },
    {
      path: '/guide',
      component: Guide,
      meta: {
        title: '新手指南',
        level: 2
      }
    },
    {
      path: '/guide-detail',
      component: GuideDetail,
      meta: {
        title: '指南详情',
        level: 3
      }
    },
    {
      path: '/service',
      component: Service,
      meta: {
        title: '客服',
        level: 2
      }
    },
    {
      path: '/business',
      component: Business,
      meta: {
        title: '商务合作',
        level: 2
      }
    },
    {
      path: '/business-form',
      component: BusinessForm,
      meta: {
        title: '申请合作',
        level: 3
      }
    }
  ]
})
