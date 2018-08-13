<template>
  <div class="pv-body xfooter" id="me-home">
    <pv-profile class="xhome" />

    <!-- navigation -->
    <div class="pv-card xpy">
      <div class="pv-flex xavg MB_SMAlL">
        <router-link
          class="pv-flex-item"
          to="/income-list">
          <i class="pv-ico xincome"></i>
          <div>收入明细</div>
        </router-link>
        <router-link
           class="pv-flex-item"
           to="/withdraw-list">
          <i class="pv-ico xwithdraw"></i>
          <div>提现记录</div>
        </router-link>
        <router-link
           class="pv-flex-item"
           to="/ranking-list">
          <i class="pv-ico xrank"></i>
          <div>排行榜</div>
        </router-link>
      </div>
      <div class="pv-flex xavg">
        <router-link
           class="pv-flex-item"
           to="/guide">
          <i class="pv-ico xguide"></i>
          <div>新手指南</div>
        </router-link>
        <router-link
           class="pv-flex-item"
           to="/service">
          <i class="pv-ico xservice"></i>
          <div>客服</div>
        </router-link>
        <router-link
           class="pv-flex-item"
           to="/business">
          <i class="pv-ico xbusiness"></i>
          <div>商务合作</div>
        </router-link>
      </div>
    </div>
    <!-- navigation -->

    <!-- withdraw list -->
    <div class="pv-body-inner xscroll BG_WHITE" style="top: 20rem;">
      <div class="pv-card">
        <div class="pv-flexrow">
          <div class="pv-flexrow-cell">
            <img class="pv-avatar" src="" />
          </div>
          <div class="pv-flexrow-cell">
            <div class="TEXT_MEDIUM">名字</div>
            <div class="TEXT_SMALL COLOR_WEAKING">2018-01-01</div>
          </div>
          <div class="pv-flexrow-cell FLEX1">
            <span class="TEXT_MEDIUM">提现100元</span>
          </div>
        </div>
      </div>
    </div>
    <!-- /withdraw list -->
  </div>
</template>

<script>
import Profile from '@comps/profile'

export default {
  name: 'pv-page-me-home',

  components: {
    'pv-profile': Profile
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
