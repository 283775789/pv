<template>
  <div class="pv-body xheader" id="me-income-list">
    <pv-profile />
  </div>
</template>

<script>
import Profile from '@comps/profile'

export default {
  name: 'pv-page-me-income-list',
  components: {
    'pv-profile': Profile
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
