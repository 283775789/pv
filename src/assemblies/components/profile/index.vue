<template>
  <div class="pv-profile">
    <!-- user -->
    <div class="pv-user">
      <img class="pv-user-avatar" :src="userData.headimg">
      <ul class="pv-user-body">
        <li>
          <div class="pv-user-label">用户名</div>
          <div class="pv-user-id">ID:88888888</div>
        </li>
        <li class="xlv2">
          <div class="pv-user-label">3507089</div>
          <div class="pv-user-id">累计收益</div>
        </li>
        <li class="xlv2">
          <div class="pv-user-label">5756</div>
          <div class="pv-user-id">累计收徒</div>
        </li>
      </ul>
    </div>
    <!-- /user -->

    <!-- profile -->
    <div class="pv-card xprofile">
      <div class="pv-card-title">
        <div class="pv-flex">
          <div class="pv-flex-item xfull">
            <span class="TEXT_LARGE TEXT_BOLD COLOR_PRICE">余额: {{userData.balance|liToYuan}}元</span>
            <span class="COLOR_SECONDARY">(总收入:{{userData.income|liToYuan}}元)</span>
          </div>
          <div class="pv-flex-item TEXT_RIGHT">
            <router-link
              class="pv-btn xmain xwithdraw"
              to="/withdraw">
              我要提现
            </router-link>
          </div>
        </div>
      </div>
      <div class="pv-card-body">
        <div class="pv-flex xavg"
          :class="{xseparator: separator}">
          <div class="pv-flex-item">
            <div class="TEXT_LARGE TEXT_BOLD">{{userData.todayincome|liToYuan}}</div>
            <div class="COLOR_WEAKING">今日收入</div>
          </div>
          <div class="pv-flex-item">
            <div class="TEXT_LARGE TEXT_BOLD">{{userData.todayinvite|liToYuan}}</div>
            <div class="COLOR_WEAKING">今日收徒</div>
          </div>
          <div class="pv-flex-item">
            <div class="TEXT_LARGE TEXT_BOLD">{{userData.stucount|liToYuan}}</div>
            <div class="COLOR_WEAKING">我的徒弟</div>
          </div>
          <div class="pv-flex-item">
            <div class="TEXT_LARGE TEXT_BOLD">{{userData.studivide|liToYuan}}</div>
            <div class="COLOR_WEAKING">徒弟分成</div>
          </div>
        </div>
      </div>
    </div>
    <!-- /profile -->
  </div>
</template>

<script>
import profile from '@mixins/profile'

export default {
  name: 'pv-profile',

  props: {
    separator: {
      type: Boolean,
      default: false
    }
  },

  mixins: [profile]
}
</script>

<style lang="scss">
  @import "style"
</style>
