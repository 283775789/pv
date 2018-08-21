<template>
  <div class="pv-body xfooter xscroll" id="me-home">
    <pv-profile class="xhome" />

      <!-- banner -->
      <div class="pv-card xbanner">
        <img src="@images/banner1.png" />
      </div>
       <!-- /banner -->

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
      <div class="pv-card" style="height:11.2rem;">
         <div class="pv-swiper swiper-container swiper-no-swiping" id="me-home-swiper">
            <div ref="swiperWrapper" class="swiper-wrapper">
                <div class="swiper-slide"
                  ref="slide"
                  v-for="(item,index) in liveWithdrawal"
                  :key="index">
                  <div class="pv-flexrow xborder">
                    <div class="pv-flexrow-cell">
                      <img class="pv-avatar" :src="item.headimg" />
                    </div>
                    <div class="pv-flexrow-cell">
                      <div class="TEXT_MEDIUM">{{item.nickname}}</div>
                      <div class="TEXT_SMALL COLOR_WEAKING">{{item.withdrawtime}}</div>
                    </div>
                    <div class="pv-flexrow-cell FLEX1">
                      <span class="TEXT_MEDIUM">提现{{item.withdrawmoney|liToYuan}}元</span>
                    </div>
                  </div>
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
  name: 'me-home',

  components: {
    'pv-profile': Profile
  },

  data () {
    return {
      liveWithdrawal: []
    }
  },

  methods: {
    getLiveWithdrawal () {
      const vm = this
      this.axios.post('/carousel/withdraw').then(function (response) {
        if (response.data.code === 0) {
          vm.liveWithdrawal = response.data.data

          vm.$nextTick(() => {
            const swiperHeight = vm.$refs.swiperWrapper.offsetHeight
            const slideHeight = vm.$refs.slide[0].firstChild.offsetHeight

            vm.swiper = new window.Swiper('#me-home-swiper', {
              autoplay: {
                delay: 3000,
                disableOnInteraction: false
              },
              slidesPerView: swiperHeight / slideHeight,
              loopedSlides: vm.liveWithdrawal.length,
              direction: 'vertical'
            })
          })
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  created () {
    this.getLiveWithdrawal()
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
