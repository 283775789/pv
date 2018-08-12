<template>
  <div class="pv-body xheader" id="me-withdraw">
    <div class="pv-card MB_SMAlL">
      <!-- avatar -->
      <div class="BORDER_BOTTOM PY_LARGE TEXT_CENTER">
        <img class="pv-avatar xlarge MB_SMAlL" />
        <div class="COLOR_WEAKING">可提现金额</div>
        <em class="TEXT_HUGE">￥589</em>
      </div>
      <!-- /avatar -->

      <!-- withdraw info -->
      <div class="pv-flexrow TEXT_MEDIUM">
        <div class="pv-flexrow-cell">微信昵称：王娜娜</div>
      </div>
      <div class="pv-flexrow TEXT_MEDIUM">
        <div class="pv-flexrow-cell">提现金额：10</div>
      </div>
      <div class="pv-flexrow xavg">
        <div class="pv-flexrow-cell">
          <a class="pv-btn xsmall xsecondary">
            <span>￥10</span>
            <i class="pv-tip xtop">秒到账</i>
          </a>
        </div>
        <div class="pv-flexrow-cell">
          <a class="pv-btn xsmall xborder">￥20</a>
        </div>
        <div class="pv-flexrow-cell">
          <a class="pv-btn xsmall xborder">￥50</a>
        </div>
        <div class="pv-flexrow-cell">
          <a class="pv-btn xsmall xborder">￥100</a>
        </div>
      </div>
      <!-- /withdraw info -->
    </div>

    <a class="pv-btn xmain xfull">确&nbsp;&nbsp;定</a>

    <!-- withdraw explain -->
    <div class="pv-note">
      <p>1. 提现申请提交后，会在三天内打款，打款后您会受到微信钱包发送的到账消息，可以在微信钱包零钱明细中查看。</p>
      <p>2. 本平台提现申请为系统自动审核，账号信息正常即可通过审核，系统会自动打款到对应账号。如果账号信息存在异常（如作弊等）情况，会安排人工复审。提现人数较多，人工复审所需时间较长，还请您耐心等待。如有任何疑问，请到【客服】页面联系客服解答，谢谢您的支持和理解。</p>
    </div>
    <!-- /withdraw explain -->

    <!-- weixin note -->
    <mt-popup
      style="width: 85%;"
      v-model="weixin"
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
export default {
  name: 'pv-page-me-withdraw',

  data () {
    return {
      weixin: {
        visibale: true
      }
    }
  }
}
</script>

<style lang="scss">
  .pv-flexrow-cell .pv-btn {
    width: 100%;
  }
</style>
