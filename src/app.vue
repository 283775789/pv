<template>
  <div id="app">
    <!-- 头部 -->
    <pv-header>
      <pv-back
        slot="left"
        class="pv-header-backbtn">
        <span>文字</span>
      </pv-back>
      <h1 slot="body" class="pv-cutoff">标题</h1>
      <div slot="right" class="pv-cutoff">操作</div>
    </pv-header>
    <!-- /头部 -->

    <!-- 导航项 -->
    <pv-xscroll-list
      class="pv-nav"
      :number="10">
      <a class="pv-nav-link" slot-scope="scope">导航项{{scope.index}}</a>
    </pv-xscroll-list>
    <!-- /导航项 -->

    <!-- 页脚 -->
    <div class="pv-footer">
      <a @click="activeIndex=1">
        <i class="pv-ico xshare"></i>
        <span>菜单1</span>
      </a>
      <a @click="activeIndex=2">
        <i class="pv-ico xlearner"></i>
        <span>菜单2</span>
      </a>
      <a @click="activeIndex=3">
        <i class="pv-ico xme"></i>
        <span>菜单3</span>
      </a>
    </div>
    <!-- /页脚 -->

    <!-- 主体 -->

    <!-- /主体 -->
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
