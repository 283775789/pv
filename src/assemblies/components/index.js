// register global component
import Vue from 'vue'
import Header from '@comps/header/header'
import XScrollList from '@comps/xscroll-list/xscroll-list'
import Back from '@comps/back/back'
import Slider from '@comps/slider/slider'
import RouterView from '@comps/router-view/router-view'
import Scroller from '@comps/scroller/scroller'
import Ghost from '@comps/ghost'
import Nodata from '@comps/nodata'

let components = [
  Header,
  XScrollList,
  Back,
  Slider,
  RouterView,
  Scroller,
  Ghost,
  Nodata
]

components.forEach(function (component) {
  Vue.component(component.name, component)
})
