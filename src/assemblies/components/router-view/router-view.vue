<template>
  <transition
    :enter-active-class="'pv-slider ' + direction"
    enter-class="xenter-from"
    enter-to-class="xenter-to"
    :leave-active-class="'pv-slider ' + direction"
    leave-class="xleave-from"
    leave-to-class="xleave-to">
    <keep-alive :include="include" :exclude="exclude">
      <router-view />
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'pv-router-view',

  props: ['include', 'exclude'],

  data () {
    return {
      direction: 'xnext'
    }
  },

  watch: {
    $route (to, from) {
      this.direction = to.meta.level < from.meta.level ? 'xprev' : 'xnext'

      // disable animation if the route level is the same.
      if (to.meta.level === from.meta.level) this.direction = 'xdisabled'
    }
  }
}
</script>
