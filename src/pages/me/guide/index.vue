<template>
  <div class="pv-body xheader" id="me-guide">
    <div class="pv-body-inner xscroll xfooter">
      <div class="pv-card">
        <a class="pv-flexrow xsavespacing" @click="gotoGuidDetail">
          <div class="pv-flexrow-cell FLEX1 TEXT_MEDIUM">快速获取收益攻略</div>
          <div class="pv-flexrow-cell"><i class="pv-ico xar"></i></div>
        </a>
      </div>
      <div class="pv-card">
        <a class="pv-flexrow xsavespacing">
          <div class="pv-flexrow-cell FLEX1 TEXT_MEDIUM">申请提现什么时候打款</div>
          <div class="pv-flexrow-cell"><i class="pv-ico xar"></i></div>
        </a>
      </div>
      <div class="pv-card">
        <a class="pv-flexrow xsavespacing">
          <div class="pv-flexrow-cell FLEX1 TEXT_MEDIUM">什么情况会出现打款失败</div>
          <div class="pv-flexrow-cell"><i class="pv-ico xar"></i></div>
        </a>
      </div>
      <div class="pv-card">
        <a class="pv-flexrow xsavespacing">
          <div class="pv-flexrow-cell FLEX1 TEXT_MEDIUM">作弊会员的处理方法通告</div>
          <div class="pv-flexrow-cell"><i class="pv-ico xar"></i></div>
        </a>
      </div>
      <div class="pv-card">
        <a class="pv-flexrow xsavespacing">
          <div class="pv-flexrow-cell FLEX1">为什么有时文章分享后打不开</div>
          <div class="pv-flexrow-cell"><i class="pv-ico xar"></i></div>
        </a>
      </div>
      <div class="pv-card">
        <a class="pv-flexrow xsavespacing">
          <div class="pv-flexrow-cell FLEX1 TEXT_MEDIUM">徒弟未激活是什么意思</div>
          <div class="pv-flexrow-cell"><i class="pv-ico xar"></i></div>
        </a>
      </div>
      <div class="pv-card">
        <a class="pv-flexrow">
          <div class="pv-flexrow-cell FLEX1 TEXT_MEDIUM">为什么不能打开网页，不能做任务</div>
          <div class="pv-flexrow-cell"><i class="pv-ico xar"></i></div>
        </a>
      </div>
      <div class="pv-card">
        <a class="pv-flexrow xsavespacing">
          <div class="pv-flexrow-cell FLEX1 TEXT_MEDIUM">为什么邀请了好友缺不成功</div>
          <div class="pv-flexrow-cell"><i class="pv-ico xar"></i></div>
        </a>
      </div>
    </div>

    <!-- footer button -->
    <div class="pv-btnfooter">
      <a class="pv-btn xmain xfull">
        <span>开始赚钱</span>
      </a>
    </div>
    <!-- /footer button-->
  </div>
</template>

<script>
export default {
  name: 'pv-me-guide',

  methods: {
    gotoGuidDetail () {
      this.$router.push({
        path: '/guide-detail'
      })
    }
  }
}
</script>
