<template>
  <div class="pv-nodata">
    <img src="@images/nodata.png" />
    <p><slot>无数据...</slot></p>
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
