<template>
  <div class="pv-body xscroll xheader" id="me-withdrew-list">
    <ul class="pv-card">
      <li class="pv-flexrow xsavespacing"
        v-for="(withdrawal,index) in Withdrawals"
        :key="index">
        <div class="pv-flexrow-cell" style="width: 40%;">
          <div class="TEXT_MEDIUM">提现金额：￥{{withdrawal.amount|liToYuan}}</div>
          <div class="TEXT_SMALL COLOR_WEAKING">{{withdrawal.createtime|unixTimeToDatetime}}</div>
        </div>
        <div class="pv-flexrow-cell FLEX1">
          <!-- 1-待审核 2-提现成功 3-审核不通过 4-提现失败 5-已回滚 -->
          <i class="pv-tag">{{statusList[withdrawal.status]}}</i>
          <div class="COLOR_WEAKING TEXT_RIGHT TEXT_SMALL">{{withdrawal.reason}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'me-withdrew-list',

  data () {
    return {
      statusList: ['待审核', '提现成功', '审核不通过', '提现失败', '已回滚'],
      Withdrawals: []
    }
  },

  methods: {
    getWithdrawals () {
      const vm = this
      this.axios.post('/withdraw/list').then(function (response) {
        if (response.data.code === 0) {
          vm.Withdrawals = response.data.data
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  created () {
    this.getWithdrawals()
  }
}
</script>
