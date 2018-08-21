<template>
  <div class="pv-body xheader" id="me-withdraw">
    <div class="pv-card MB_SMAlL">
      <!-- avatar -->
      <div class="BORDER_BOTTOM PY_LARGE TEXT_CENTER">
        <img class="pv-avatar xlarge MB_SMAlL" :src="userData.headimg" />
        <div class="COLOR_WEAKING">可提现金额</div>
        <em class="TEXT_HUGE">￥{{userData.balance|liToYuan}}</em>
      </div>
      <!-- /avatar -->

      <!-- withdraw info -->
      <div class="pv-flexrow TEXT_MEDIUM">
        <div class="pv-flexrow-cell">{{userData.nickname}}</div>
      </div>
      <div class="pv-flexrow TEXT_MEDIUM">
        <div class="pv-flexrow-cell">提现金额：{{amount}}</div>
      </div>
      <div class="pv-flexrow xavg">
        <div class="pv-flexrow-cell"
             v-for="value in moneyOptions"
             :key="value">
             <a class="pv-btn xsmall"
              :class="[amount === value ? 'xsecondary':'xborder']"
              @click="amount=value">
              <span>￥{{value}}</span>
              <i v-if="value===10" class="pv-tip xtop">秒到账</i>
            </a>
        </div>
      </div>
      <!-- /withdraw info -->
    </div>

    <a class="pv-btn xmain xfull" @click="withdraw">确&nbsp;&nbsp;定</a>

    <!-- withdraw explain -->
    <div class="pv-note">
      <p>1. 提现申请提交后，会在三天内打款，打款后您会受到微信钱包发送的到账消息，可以在微信钱包零钱明细中查看。</p>
      <p>2. 本平台提现申请为系统自动审核，账号信息正常即可通过审核，系统会自动打款到对应账号。如果账号信息存在异常（如作弊等）情况，会安排人工复审。提现人数较多，人工复审所需时间较长，还请您耐心等待。如有任何疑问，请到【客服】页面联系客服解答，谢谢您的支持和理解。</p>
    </div>
    <!-- /withdraw explain -->

    <!-- weixin note -->
    <mt-popup
      style="width: 85%;"
      v-model="weixin.visibale"
      popup-transition="popup-fade">
      <div class="pv-card PY_LARGE TEXT_CENTER">
        <div class="TEXT_LARGE">提现前需要关注微信公众号</div>
        <p class="COLOR_WEAKING">提现公众号:qumeiwen</p>
        <img src="" style="width:9rem;" />
        <a class="pv-btn xmain xfull">点击发二维码到自己微信</a>
        <div class="pv-note">
          <h4>首次提现流程：</h4>
          <p>1. 首次提现需要关注微信公众号。您可以发送以上二维码到微信，然后长按二维码，识别二维码后关注公众号；</p>
          <p>2. 关注公众号后，再次进入APP（刷新页面），即可进行提现；</p>
          <p>3. 如有任何疑问，请到【客服】页面联系客服解答，谢谢您的支持和理解。</p>
        </div>
      </div>
    </mt-popup>
    <!-- weixin note -->
  </div>
</template>

<script>
import profile from '@mixins/profile'
import { Toast } from 'mint-ui'

export default {
  name: 'me-withdraw',

  mixins: [profile],

  data () {
    return {
      amount: 10,
      moneyOptions: [10, 20, 50, 100],
      weixin: {
        visibale: false
      }
    }
  },

  methods: {
    withdraw () {
      this.axios.post(`/withdraw/apply?amount=${this.amount * 1000}`).then(function (respose) {
        if (respose.data.code === 0) {
          Toast('我们会尽快审批，请耐心等待。')
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  watch: {
    $route (to, from) {

    }
  }
}
</script>

<style lang="scss">
  .pv-flexrow-cell .pv-btn {
    width: 100%;
  }
</style>
