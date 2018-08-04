<template>
  <div class="pv-xsl">
    <ul ref="body" class="pv-xsl-body">
      <li ref="item" class="pv-xsl-item"
          v-for="index in number"
          :key="index"
          @click="scrollToClickItem(index)">
          <slot :index="index"></slot>
      </li>
      <li class="pv-xsl-line"></li>
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
    time: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    // hide scroll bar for ios
    hideScrollBar () {
      const listBody = this.$refs.body
      const listHeight = listBody.offsetHeight
      this.$el.style.height = listHeight + 'px'
      listBody.style.height = listHeight + 8 + 'px'
    },
    scrollToClickItem (index) {
      const listWidth = this.$el.offsetWidth
      const listBody = this.$refs.body
      const clickItem = this.$refs.item[index - 1]
      const clickItemWidth = clickItem.offsetWidth
      const clickItemLeft = clickItem.offsetLeft
      const centerDiff = clickItemWidth / 2 + clickItemLeft - listWidth / 2

      tween(listBody.scrollLeft, centerDiff, this.time, function (update) {
        listBody.scrollLeft = update.value
      })
    }
  },
  mounted () {
    this.hideScrollBar()
  }
}
</script>
