<template>
  <div class="pv-body xscroll xheader" id="me-guide-detail">
    <div class="pv-markdown" v-html="markdownHtml">
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'pv-me-guide-detail',
  title: '指南详情',

  data () {
    return {
      markdownHtml: ''
    }
  },

  methods: {
    getMarkdown () {
      const vm = this
      const markdownUrl = `${this.staticUrl}/docs/${this.$route.params.markdown}`

      this.axios.get(markdownUrl).then(function (response) {
        vm.markdownHtml = marked(response.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  created () {
    this.getMarkdown()
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
