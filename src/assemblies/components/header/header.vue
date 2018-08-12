<template>
  <div class="pv-header">
    <div class="pv-header-left">
      <slot name="left"></slot>
    </div>
    <div class="pv-header-body">
      <h1 slot="body" class="pv_ellipsis">
        <slot></slot>
      </h1>
    </div>
    <div class="pv-header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'pv-header'
}
</script>
