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
      this.$router.back()
    }
  }
}
</script>
