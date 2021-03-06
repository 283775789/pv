<template>
  <div v-if="list.length !== 0" class="pv-xsl">
    <ul ref="body" class="pv-xsl-body">
      <li ref="item"
          v-for="(item, index) in list"
          class="pv-xsl-item"
          :class="{xactive: currentIndex === index}"
          :key="index"
          @click="clickItem(index)">
          <slot :item="item"></slot>
      </li>
      <li ref="marker-line" class="pv-xsl-line"></li>
    </ul>
  </div>
</template>

<script>
import tween from '@utils/tween.js'

export default {
  name: 'pv-xscroll-list',

  props: {
    list: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    uid: {
      type: [Number, String]
    }
  },

  data () {
    return {
      currentIndex: this.activeIndex
    }
  },

  methods: {
    // hide scroll bar for ios;
    hideScrollBar () {
      const scrollBarSize = 8
      const listBody = this.$refs.body
      const markLine = this.$refs['marker-line']
      const listHeight = listBody.offsetHeight
      this.$el.style.height = listHeight + 'px'
      listBody.style.height = listHeight + scrollBarSize + 'px'
      markLine.style.bottom = scrollBarSize + 'px'
    },

    // set the offset and width for the marker line.
    setMarkerLineStyle (itemIndex) {
      const activeItem = this.$refs.item[itemIndex]
      const activeTarget = activeItem.querySelector(':first-child')
      const markLine = this.$refs['marker-line']
      markLine.style.left = activeItem.offsetLeft + (activeItem.clientWidth - activeTarget.clientWidth) / 2 + 'px'
      markLine.style.width = activeTarget.clientWidth + 'px'
    },

    // scroll the list to the position of the clicked item.
    scrollToClickItem (itemIndex) {
      const listBody = this.$refs.body
      const curentScrollLeft = listBody.scrollLeft
      const clickItem = this.$refs.item[itemIndex]
      const clickItemWidth = clickItem.offsetWidth
      const clickItemLeft = clickItem.offsetLeft
      const listWidth = this.$el.offsetWidth
      const centerDiff = clickItemWidth / 2 + clickItemLeft - listWidth / 2

      // return directly when the distance is less than 10 px,
      if (Math.abs(centerDiff - curentScrollLeft) < 10) return

      // save scroll postion
      if (this.uid) window.sessionStorage.setItem(`${this.uid}`, JSON.stringify({scrollLeft: centerDiff, path: this.$route.path}))

      // move the scroll bar with animation.
      tween({x: curentScrollLeft}, {x: centerDiff}, 200, function (update) {
        listBody.scrollLeft = update.x
      })
    },

    // update all statuses at the same time
    updateStates (itemIndex) {
      this.scrollToClickItem(itemIndex)
      this.setMarkerLineStyle(itemIndex)
    },

    clickItem (index) {
      if (index === this.currentIndex) return

      this.currentIndex = index
      this.updateStates(index)
      this.$emit('change', index)
    }
  },

  mounted () {
    if (this.list.length === 0) return

    this.hideScrollBar()
    this.updateStates(this.activeIndex)
  },

  watch: {
    list () {
      if (this.list.length === 0) return

      this.$nextTick(() => {
        this.hideScrollBar()
        this.updateStates(this.activeIndex)
      })
    },

    activeIndex (val) {
      this.currentIndex = val
      this.updateStates(val)
    },

    $route (to, from) {
      if (!this.uid) return

      // scroll to the last postion
      let scrollSession = window.sessionStorage.getItem(`${this.uid}`)

      if (scrollSession) {
        scrollSession = JSON.parse(scrollSession)
        if (to.path === scrollSession.path) {
          this.$nextTick(() => {
            const listBody = this.$refs.body
            listBody.scrollLeft = scrollSession.scrollLeft
          })
        }
      }
    }
  }
}
</script>
