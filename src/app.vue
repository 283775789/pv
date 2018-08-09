<template>
  <div id="app">
    <!-- header -->
    <pv-header>
      <pv-back
        slot="left"
        class="pv-header-backbtn">
      </pv-back>
      {{ $route.meta.title }}
    </pv-header>
    <!-- /header -->

    <!-- content -->
    <pv-router-view />
    <!-- /content -->

    <!-- footer -->
    <div class="pv-footer">
      <router-link to="/">
        <i class="pv-ico xshare"></i>
        <span>分享赚钱</span>
      </router-link>
      <router-link to="/p2">
        <i class="pv-ico xstudent"></i>
        <span>收徒赚钱</span>
      </router-link>
      <a @click="activeIndex=3">
        <i class="pv-ico xme"></i>
        <span>个人中心</span>
      </a>
    </div>
    <!-- /footer -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: 3
    }
  }
}
</script>

<style lang="scss">
  @import "@style/main.scss";
</style>
