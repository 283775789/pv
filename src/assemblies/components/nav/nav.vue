<template>
  <div class="pv-nav">
    <div class="pv-nav-body">
      <div class="pv-nav-links">
        <slot v-for="nav in navs" :nav="nav">
          <router-link class="pv-nav-link" :to="nav.path">{{nav.name}}</router-link>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
// const TWEEN = require('@tweenjs/tween.js')

export default {
  name: 'pv-nav',
  props: {
    navs: {
      type: Array,
      required: true
    }
  },
  methods: {
    name () {

    }
  }
}
</script>
