<template>
  <div class="pv-header">
    <div class="pv-header-left">
      <slot name="left"></slot>
    </div>
    <div class="pv-header-body">
      <h1 slot="body" class="_ellipsis">
        <slot></slot>
      </h1>
    </div>
    <div id="header-right" class="pv-header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import rgbToHex from '@utils/rgbToHex'

export default {
  name: 'pv-header',

  mounted () {
    // pass the header background color to pad
    const rootStyle = window.getComputedStyle(this.$el)
    const color = rgbToHex(rootStyle.backgroundColor)
    this.pad.setStatusBarColor.call(this, color)
  }
}
</script>
