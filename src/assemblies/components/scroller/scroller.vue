<template>
  <div class="pv-scroller"
       @scroll="scrollHandler">
       <div class="pv-scroller-pulldown">--往下拉刷新内容--</div>
       <div ref="inner"
            class="pv-scroller-inner">
            <slot></slot>
       </div>
  </div>
</template>

<script>
import tween from '@utils/tween.js'

export default {
  name: 'pv-scroller',

  props: {
    loadBottom: {
      type: Number,
      default: 100
    },
    updateDistance: {
      type: Number,
      default: 30
    }
  },

  data () {
    return {
      offset: {
        startX: 0,
        startY: 0,
        distanceX: 0,
        distanceY: 0
      },
      isLoading: false,
      hasPulldownEvent: false
    }
  },

  methods: {
    initPulldown () {
      const scroller = this.$el

      if (scroller.scrollTop === 0) {
        scroller.addEventListener('touchstart', this.startPulldown)
        scroller.addEventListener('touchmove', this.updatePulldown)
        scroller.addEventListener('touchend', this.endPulldown)
      }
    },

    setPulldownStyle (value) {
      const scrollerInner = this.$refs.inner
      scrollerInner.style.webkitTransform = `translateY(${value}px)`
      scrollerInner.style.transform = `translateY(${value}px)`
    },

    startPulldown (event) {
      this.hasPulldownEvent = true
      this.offset.startY = event.touches[0].pageY
    },

    updatePulldown (event) {
      const y = (event.touches[0].pageY - this.offset.startY)

      // easing the distance
      this.offset.distanceY = y / 3

      // call preventDefault to prevent ios bounce

      if (this.offset.distanceY > 0) event.preventDefault()

      if (this.offset.distanceY >= this.updateDistance && !this.isLoading) {
        this.isLoading = true
        this.$emit('update')
      }

      this.setPulldownStyle(this.offset.distanceY)
    },

    endPulldown (event) {
      const vm = this
      tween({value: this.offset.distanceY}, {value: 0}, 150, function (update) {
        vm.setPulldownStyle(update.value)
      })
    },

    scrollHandler () {
      const scroller = this.$el

      // remove all the pulldown events when the scroll event is triggered.
      if (this.hasPulldownEvent) {
        this.hasPulldownEvent = false
        this.setPulldownStyle(0)

        scroller.removeEventListener('touchstart', this.startPulldown)
        scroller.removeEventListener('touchmove', this.updatePulldown)
        scroller.removeEventListener('touchend', this.endPulldown)
      }

      const height = scroller.offsetHeight
      const scrollHeight = scroller.scrollHeight
      const scrollTop = scroller.scrollTop
      const distance = scrollHeight - scrollTop - height

      if (scrollTop === 0) {
        setTimeout(this.initPulldown, 600)
      }

      if (distance <= this.loadBottom && !this.isLoading) {
        this.isLoading = true
        this.$emit('load')
      }
    }
  },

  mounted () {
    this.initPulldown()
  }
}
</script>
