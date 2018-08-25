<template>
  <div id="app">
    <!-- header -->
    <pv-header v-if="$store.state.pageTitle">
      <pv-back
        v-show="$route.meta.level>1"
        slot="left"
        class="pv-header-backbtn">
      </pv-back>
      {{ $store.state.pageTitle }}
    </pv-header>
    <!-- /header -->

    <!-- content -->
    <pv-router-view include="sharing-home" />
    <!-- /content -->

    <!-- footer -->
    <div v-if="footerVisible"
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
      activeIndex: 3,
      footerVisible: true
    }
  },

  created () {
    this.footerVisible = this.$route.meta.level === 1
  },

  watch: {
    $route (to, from) {
      if (this.$route.meta.level === 1) {
        setTimeout(() => {
          this.footerVisible = true
        }, 300)
      } else {
        this.footerVisible = false
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@style/main.scss";
</style>
