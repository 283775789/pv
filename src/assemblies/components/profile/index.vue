<template>
  <!-- profile -->
  <div class="pv-card">
    <div class="pv-card-title">
      <div class="pv-flex">
        <div class="pv-flex-item xfull">
          <span class="TEXT_LARGE TEXT_BOLD COLOR_PRICE">余额: {{userData.balance}}元</span>
          <span class="COLOR_SECONDARY">(总收入:{{userData.income}}元)</span>
        </div>
        <div class="pv-flex-item TEXT_RIGHT">
          <a class="pv-btn xmain">我要提现</a>
        </div>
      </div>
    </div>
    <div class="pv-card-body">
      <div class="pv-flex xavg">
        <div class="pv-flex-item">
          <div class="TEXT_LARGE TEXT_BOLD">{{userData.todayincome}}</div>
          <div class="COLOR_WEAKING">今日收入</div>
        </div>
        <div class="pv-flex-item">
          <div class="TEXT_LARGE TEXT_BOLD">{{userData.todayinvite}}</div>
          <div class="COLOR_WEAKING">今日收徒</div>
        </div>
        <div class="pv-flex-item">
          <div class="TEXT_LARGE TEXT_BOLD">{{userData.stucount}}</div>
          <div class="COLOR_WEAKING">我的徒弟</div>
        </div>
        <div class="pv-flex-item">
          <div class="TEXT_LARGE TEXT_BOLD">{{userData.studivide}}</div>
          <div class="COLOR_WEAKING">徒弟分成</div>
        </div>
      </div>
    </div>
  </div>
  <!-- /profile -->
</template>

<script>
export default {
  name: 'pv-profile',
  computed: {
    userData () {
      return this.$store.state.userData
    }
  }
}
</script>
