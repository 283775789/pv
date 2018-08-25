<template>
  <div class="pv-nodata">
    <img src="@images/nodata.png" />
    <div><slot>无数据...</slot></div>
  </div>
</template>

<script>
export default {
  name: 'pv-nodata'
}
</script>

<style lang="scss">
  @import "style"
</style>
