/**
 * 页面路由，路由元信息说明:
 * title: 页面的标题内容，显示在页面头部中间的文字
 * level: 标识是1级页面还是2级页面，依此内推，不同级页面间切换有滑过动效
 */

import Vue from 'vue'
import Router from 'vue-router'

// 分享
import Home from '@pages/sharing/home'
import ArticalDetail from '@pages/sharing/article-detail'

// 收徒
import Student from '@pages/student/home'

// 个人中心
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
    // 路由:分享
    // --------------------------------------------------
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
    },
    // 路由:收徒
    // --------------------------------------------------
    {
      path: '/student',
      component: Student,
      meta: {
        title: '邀请好友',
        level: 1
      }
    },
    // 路由:个人中心
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
        level: 2
      }
    }
  ]
})
