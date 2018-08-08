<template>
  <div class="pv-scroller"
       @scroll="scrollHandler">
       <div ref="top-loading"
            v-if="refreshDistance > 0"
            class="pv-scroller-loading xlatest"
            :class="{xloading: this.isLoadingLatest }">
            <i class="pv-font xloading"
              :class="{'XRotating': this.isLoadingLatest}">
            </i>
            <slot name="loading-latest-text">
              <span>{{this.isLoadingLatest ? '更新中...' : "下拉更新"}}</span>
            </slot>
       </div>
       <div ref="inner"
            class="pv-scroller-inner">
            <slot></slot>
       </div>
       <div v-if="isLoadingMore"
            class="pv-scroller-loading xmore">
            <i class="pv-font xloading XRotating"></i>
            <slot name="loading-more-text">
              <span>努力加载中...</span>
            </slot>
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
    refreshDistance: {
      type: Number,
      default: 30
    },
    isLoading: {
      type: Boolean,
      required: true
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
      isLoadingLatest: false,
      isLoadingMore: false,
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
      const topLoadingIcon = this.$refs['top-loading']
      scrollerInner.style.webkitTransform = `translateY(${value}px)`
      scrollerInner.style.transform = `translateY(${value}px)`
      topLoadingIcon.style.webkitTransform = `scale(${1 + value / (this.refreshDistance * 6)})`
      topLoadingIcon.style.transform = `scale(${1 + value / (this.refreshDistance * 6)})`
    },

    startPulldown (event) {
      this.hasPulldownEvent = true
      this.offset.startY = event.touches[0].pageY
    },

    updatePulldown (event) {
      const y = (event.touches[0].pageY - this.offset.startY)

      // easing the distance
      this.offset.distanceY = y / 4.5

      // call preventDefault to prevent ios bounce
      if (this.offset.distanceY > 0) event.preventDefault()

      this.setPulldownStyle(this.offset.distanceY)
    },

    endPulldown (event) {
      if (this.offset.distanceY >= this.refreshDistance && !this.isLoadingLatest) {
        this.isLoadingLatest = true
        this.$emit('refresh')
      }

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

      if (distance <= this.loadBottom && !this.isLoadingMore) {
        this.isLoadingMore = true
        this.$emit('load')
      }
    }
  },

  mounted () {
    // disable pulldown to refresh if the refreshDistance is 0.
    if (this.refreshDistance > 0) this.initPulldown()
  },

  watch: {
    isLoading (newVal) {
      if (!newVal) {
        this.isLoadingLatest = false
        this.isLoadingMore = false
      }
    }
  }
}
</script>
