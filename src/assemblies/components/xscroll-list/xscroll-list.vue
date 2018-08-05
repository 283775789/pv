<template>
  <div class="pv-xsl">
    <ul ref="body" class="pv-xsl-body">
      <li ref="item"
          v-for="index in number"
          class="pv-xsl-item"
          :class="{xactive: activeIndex === index -1}"
          :key="index"
          @click="clickItem(index)">
          <slot :index="index"></slot>
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
    number: {
      type: Number,
      required: true
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      activeIndex: this.currentIndex
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
      const markLine = this.$refs['marker-line']
      markLine.style.width = activeItem.clientWidth + 'px'
      markLine.style.left = activeItem.offsetLeft + 'px'
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

      // don't to do anything and return directly when the distance is less than 10 px,
      if (Math.abs(centerDiff - curentScrollLeft) < 10) return

      // move the scroll bar with animation.
      tween({x: curentScrollLeft}, {x: centerDiff}, 150, function (update) {
        listBody.scrollLeft = update.x
      })
    },

    // update all statuses at the same time
    updateStates (itemIndex) {
      this.scrollToClickItem(itemIndex)
      this.setMarkerLineStyle(itemIndex)
    },

    clickItem (index) {
      const itemIndex = index - 1
      if (itemIndex === this.activeIndex) return

      this.activeIndex = itemIndex
      this.updateStates(itemIndex)
      this.$emit('change', itemIndex)
    }
  },

  mounted () {
    this.hideScrollBar()
    this.updateStates(this.currentIndex)
  },

  watch: {
    currentIndex (val) {
      this.activeIndex = val
      this.updateStates(val)
    }
  }
}
</script>
