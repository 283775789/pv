<template>
  <div class="pv-body xscroll xheader xfooter" id="student-home">
    <!-- 滚动通知区 -->
    <div class="pv-notice">
      <div class="pv-flex">
        <div class="pv-flex-item">
          <i class="pv-ico xnotice"></i>
        </div>
        <div class="pv-flex-item xfull">
          <div class="pv-swiper swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  通知1
                </div>
                 <div class="swiper-slide">
                  通知2
                </div>
                 <div class="swiper-slide">
                  通知3
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /滚动通知区 -->

    <!-- 活动海报 -->
    <div class="pv-bill xstudent">
      <div class="pv-card xqrcode">
        <div class="pv-card-body">
          <img class="xqrcode" src="xxx.png" />
          <div class="TEXT_SMALL COLOR_WEAKING">（收徒二维码）</div>
          <div class="pv-title xweaking" style="width:100%;">
            <span>通过以下方式邀请</span>
          </div>
          <div class="pv-flex xavg TEXT_CENTER">
            <div class="pv-flex-item">
              <i class="pv-ico xweixin"></i>
            </div>
            <div class="pv-flex-item">
              <i class="pv-ico xmoments"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /活动海报 -->

    <!-- 活动说明 -->
    <div class="pv-card">
      <div class="pv-note">
        <h3 class="TEXT_CENTER MB_SMAlL">活动说明</h3>
        <h3>邀请规则</h3>
        <div class="pv-note-group">
          <p>1.通过微信/QQ分享给好友，好友下载并安装注册后，即成为你的徒弟；</p>
          <p>2.每个徒弟奖励1.5元现金。</p>
        </div>
        <h3>奖励发放</h3>
        <div class="pv-note-group">
          <p>1.好友（徒弟）注册，并完成第一个任务后，奖励立即发放。</p>
        </div>
        <h3>收徒的好处</h3>
        <div class="pv-note-group">
          <p>1.除了收徒立即获取奖励外，还可获得徒弟阅读奖励的20%分成；</p>
          <p>2.除了收徒立即获取奖励外，还可获得徒弟阅读奖励的20%分成；</p>
        </div>
      </div>
    </div>
    <!-- /活动说明 -->

    <div class="TEXT_CENTER TEXT_MEDIUM">
      <div class="pv-card xpy xnobg">
        如有疑问请参考
        <router-link class="COLOR_LINK" to="/guide">赚钱攻略</router-link>
      </div>
    </div>

    <!-- 活动说明 -->
    <pv-ghost contract="#header-right">
      <a @click="activityPopup.visible = true">活动说明</a>
    </pv-ghost>

    <mt-popup
      style="width: 85%;"
      v-model="activityPopup.visible"
      popup-transition="popup-fade">
      <div class="pv-card xpy">
        <div class="pv-note xlarge">
          <h4 class="TEXT_CENTER">活动说明</h4>
          <p>1. 每邀请一位新用户使用（即：收徒），奖励1.5元现金（可提现）。徒弟完成第一个任务（如分享文章、获得阅读收益）后，奖励立刻发放；</p>
          <p>2.将页面分享给好友，好友下载并按照注册后，即成为你的徒弟。徒弟之后分享分享文章获得的阅读收益，可以获得20%的分成收益。</p>
          <a class="pv-btn xmain xfull"  @click="activityPopup.visible = false">知道了</a>
        </div>
      </div>
    </mt-popup>
    <!-- /活动说明 -->
  </div>
</template>

<script>
export default {
  name: 'pv-student-detail',

  data () {
    return {
      swiper: null,
      activityPopup: {
        visible: false
      }
    }
  },

  mounted () {
    this.swiper = new window.Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      direction: 'vertical'
    })
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
