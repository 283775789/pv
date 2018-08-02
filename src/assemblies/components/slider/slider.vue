<template>
  <transition-group
    :tag = "tag"
    :name="name">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: 'pv-slider',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeIndex: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      name: 'pv-slider'
    }
  },
  watch: {
    activeIndex (newValue, oldValue) {
      if (newValue < oldValue) {
        this.name = 'pv-sliderprev'
      } else {
        this.name = 'pv-slider'
      }
    }
  }
}
</script>
