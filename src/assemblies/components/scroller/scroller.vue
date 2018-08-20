<template>
  <div class="pv-scroller"
       @scroll="scrollHandler">
       <div ref="top-loading"
            v-if="refreshDistance > 0"
            class="pv-scroller-loading xlatest"
            :class="{xloading: isLoading && loadType === 'latest'}">
            <i class="pv-font xloading"
              :class="{'ROTATING': isLoading}">
            </i>
            <slot name="loading-latest-text">
              <span>{{isLoading ? '更新中...' : "下拉更新"}}</span>
            </slot>
       </div>
       <div ref="inner"
            class="pv-scroller-inner">
            <slot></slot>
       </div>
       <div v-if="isLoading && loadType === 'more'"
            class="pv-scroller-loading xmore">
            <i class="pv-font xloading ROTATING"></i>
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
    loadDistance: {
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
    },
    uid: {
      type: [Number, String],
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
      loadType: '',
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

      if (!scrollerInner || !topLoadingIcon) return

      scrollerInner.style.webkitTransform = `translateY(${value}px)`
      scrollerInner.style.transform = `translateY(${value}px)`
      topLoadingIcon.style.webkitTransform = `scale(${1 + value / (this.refreshDistance * 6)})`
      topLoadingIcon.style.transform = `scale(${1 + value / (this.refreshDistance * 6)})`
    },

    startPulldown (event) {
      this.loadType = 'latest'
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
      if (this.offset.distanceY >= this.refreshDistance && !this.isLoading) {
        this.$emit('update:isLoading', true)
        this.$emit('refresh')
      }

      const vm = this
      tween({value: this.offset.distanceY}, {value: 0}, 150, function (update) {
        vm.setPulldownStyle(update.value)
      })
    },

    scrollHandler () {
      this.loadType = 'more'
      const scroller = this.$el

      // remove all the pulldown events when the scroll event is triggered.
      if (this.hasPulldownEvent) {
        this.hasPulldownEvent = false
        this.setPulldownStyle(0)

        scroller.removeEventListener('touchstart', this.startPulldown)
        scroller.removeEventListener('touchmove', this.updatePulldown)
        scroller.removeEventListener('touchend', this.endPulldown)
      }

      // disable scroll to load more data if the loadDistance less than 0
      if (this.loadDistance < 0) return

      const height = scroller.offsetHeight
      const scrollHeight = scroller.scrollHeight
      const scrollTop = scroller.scrollTop
      const distance = scrollHeight - scrollTop - height

      if (scrollTop === 0) {
        setTimeout(this.initPulldown, 600)
      }

      if (distance <= this.loadDistance && !this.isLoading) {
        this.$emit('update:isLoading', true)
        this.$emit('load')
      }

      // save scroll postion
      window.sessionStorage.setItem(`${this.uid}`, JSON.stringify({scrollTop, path: this.$route.path}))
    }
  },

  mounted () {
    // disable pulldown to refresh if the refreshDistance is 0.
    if (this.refreshDistance > 0) this.initPulldown()
  },

  watch: {
    $route (to, from) {
      // scroll to the last postion
      let scrollSession = window.sessionStorage.getItem(`${this.uid}`)

      if (scrollSession) {
        scrollSession = JSON.parse(scrollSession)
        if (to.path === scrollSession.path) {
          this.$el.scrollTop = scrollSession.scrollTop
        }
      }
    }
  }
}
</script>
