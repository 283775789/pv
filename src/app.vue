<template>
  <div id="app">
    <!-- header -->
    <pv-header v-if="$route.meta.title">
      <pv-back
        v-show="$route.meta.level>1"
        slot="left"
        class="pv-header-backbtn">
      </pv-back>
      {{ $route.meta.title }}
    </pv-header>
    <!-- /header -->

    <!-- content -->
    <pv-router-view include="sharing-home" />
    <!-- /content -->

    <!-- footer -->
    <div v-if="$route.meta.level === 1"
      class="pv-footer">
      <router-link to="/">
        <i class="pv-ico xshare"></i>
        <span>分享赚钱</span>
      </router-link>
      <router-link to="/student">
        <i class="pv-ico xstudent"></i>
        <span>收徒赚钱</span>
      </router-link>
      <router-link to="/me">
        <i class="pv-ico xme"></i>
        <span>个人中心</span>
      </router-link>
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
