<template>
  <div id="app">
    <pv-header>
      <pv-back
        slot="left"
        class="pv-header-backbtn">
        <span>文字</span>
      </pv-back>
      <h1 slot="body" class="pv-cutoff">标题</h1>
      <div slot="right" class="pv-cutoff">操作</div>
    </pv-header>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "@style/main.scss";
</style>
