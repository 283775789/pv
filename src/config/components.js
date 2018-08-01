// 注册通用的全局组件
import Vue from 'vue'
import Header from '@comps/header/header'
import Back from '@comps/back/back'

const components = [
  Header,
  Back
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
