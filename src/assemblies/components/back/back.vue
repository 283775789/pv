<template>
  <a @click="back">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'pv-back',
  methods: {
    back () {
      // 从web页面返回到pad页面
      if (this.$route.meta.level === 1) {
        this.pad.backToPad()
      } else {
        this.$router.back()
      }
    }
  },
  mounted () {
    window.UI.back = this.back
  }
}
</script>
