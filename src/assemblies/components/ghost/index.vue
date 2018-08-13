<template>
  <div class="pv-ghost">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pv-ghost',

  props: {
    contract: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      firstElement: null,
      contractElement: null
    }
  },

  mounted () {
    // like a ghost element
    // move the first child node to the contract element
    this.firstElement = this.$el.querySelector(':first-child')
    this.contractElement = document.querySelector(this.contract)

    this.contractElement.appendChild(this.firstElement)
  },

  beforeDestroy () {
    // move the ghost element to its original element
    this.$el.appendChild(this.firstElement)
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
