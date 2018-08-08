// 注册通用的全局组件
import Vue from 'vue'
import Header from '@comps/header/header'
import XScrollList from '@comps/xscroll-list/xscroll-list'
import Back from '@comps/back/back'
import Slider from '@comps/slider/slider'
import RouterView from '@comps/router-view/router-view'
import Scroller from '@comps/scroller/scroller'

const components = [
  Header,
  XScrollList,
  Back,
  Slider,
  RouterView,
  Scroller
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})