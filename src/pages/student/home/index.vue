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
          <div class="pv-title">
            <span>通过以下方式邀请</span>
          </div>
          <div>
            <i class="pv-ico xweixin"></i>
            <i class="pv-ico xmoments"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- /活动海报 -->
  </div>
</template>

<script>
export default {
  name: 'pv-me-guide-detail',

  data () {
    return {
      swiper: null
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
