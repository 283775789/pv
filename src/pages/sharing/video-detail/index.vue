<template>
    <div class="pv-body xheader" id="sharing-video-detail">
      <iframe v-if="video.url.indexOf('v.qq.com')!==-1" :src="$route.params.videoUrl" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
  name: 'sharing-video-detail',

  data () {
    return {
      video: null
    }
  },

  created () {
    this.video.url = this.$route.params.video
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
