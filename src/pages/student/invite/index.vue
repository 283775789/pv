<template>
  <div class="pv-body xscroll xinvite">
    <!-- 活动海报 -->
    <div class="pv-bill xinvite">
      <div class="TEXT_CENTER">
        <img class="pv-avatar xinvite" :src="`${staticUrl}/img/avatars/0.jpg`" />
        <div class="COLOR_SECONDARY">来米</div>
        <a class="pv-btn xbgyellow">立刻下载</a>
      </div>

      <div class="pv-body-inner xnobg" style="min-height:12.5rem; top:20.4rem; bottom: .5rem;">
        <div class="pv-card xwithdraw" style="overflow: hidden;">
          <div class="pv-title xweaking">
            <span>平台提现动态</span>
          </div>

          <!-- withdraw list -->
          <div class="pv-card xwithdraw-swiperbox">
            <div class="pv-swiper swiper-container swiper-no-swiping" id="student-invite-swiper">
                <div ref="swiperWrapper" class="swiper-wrapper">
                    <div class="swiper-slide"
                      ref="slide"
                      v-for="(item,index) in liveWithdrawal"
                      :key="index">
                      <div class="pv-flexrow xsavespacing">
                        <div class="pv-flexrow-cell">
                          <img class="pv-avatar" :src="`${staticUrl}/img/avatars/${item.headimg}`" />
                        </div>
                        <div class="pv-flexrow-cell">
                          <div class="TEXT_MEDIUM">{{item.nickname}}</div>
                          <div class="TEXT_SMALL COLOR_WEAKING">{{item.withdrawtime}}</div>
                        </div>
                        <div class="pv-flexrow-cell FLEX1">
                          <span class="TEXT_MEDIUM">提现<em class="COLOR_PRICE">{{item.withdrawmoney|liToYuan}}</em>元</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        <!-- /withdraw list -->

          <!-- 平台提现动态:列表 -->
          <!-- <div class="pv-flexrow xsavespacing">
            <div class="pv-flexrow-cell">
              <img class="pv-avatar" src="" />
            </div>
            <div class="pv-flexrow-cell">
              <div class="TEXT_MEDIUM">名字</div>
              <div class="TEXT_SMALL COLOR_WEAKING">2018-01-01</div>
            </div>
            <div class="pv-flexrow-cell FLEX1">
              <span class="TEXT_MEDIUM">提现<em class="COLOR_PRICE">100</em>元</span>
            </div>
          </div>
          <div class="pv-flexrow xsavespacing">
            <div class="pv-flexrow-cell">
              <img class="pv-avatar" src="" />
            </div>
            <div class="pv-flexrow-cell">
              <div class="TEXT_MEDIUM">名字</div>
              <div class="TEXT_SMALL COLOR_WEAKING">2018-01-01</div>
            </div>
            <div class="pv-flexrow-cell FLEX1">
              <span class="TEXT_MEDIUM">提现<em class="COLOR_PRICE">100</em>元</span>
            </div>
          </div>
          <div class="pv-flexrow xsavespacing">
            <div class="pv-flexrow-cell">
              <img class="pv-avatar" src="" />
            </div>
            <div class="pv-flexrow-cell">
              <div class="TEXT_MEDIUM">名字</div>
              <div class="TEXT_SMALL COLOR_WEAKING">2018-01-01</div>
            </div>
            <div class="pv-flexrow-cell FLEX1">
              <span class="TEXT_MEDIUM">提现<em class="COLOR_PRICE">100</em>元</span>
            </div>
          </div> -->
          <!-- /平台提现动态:列表 -->
        </div>
      </div>
    </div>
    <!-- /活动海报 -->
  </div>
</template>

<script>
export default {
  name: 'pv-student-invite',

  data () {
    return {
      liveWithdrawal: [
        {
          nickname: 'hsin',
          headimg: '1.jpg',
          withdrawtime: '1小时前',
          withdrawmoney: 10000
        },
        {
          nickname: '极品玩家',
          headimg: '2.jpg',
          withdrawtime: '1小时前',
          withdrawmoney: 10000
        },
        {
          nickname: '声声慢',
          headimg: '3.jpg',
          withdrawtime: '1小时前',
          withdrawmoney: 10000
        },
        {
          nickname: '唐武',
          headimg: '4.jpg',
          withdrawtime: '1小时前',
          withdrawmoney: 10000
        },
        {
          nickname: '蓝离',
          headimg: '5.jpg',
          withdrawtime: '1小时前',
          withdrawmoney: 10000
        },
        {
          nickname: '阿头',
          headimg: '6.jpg',
          withdrawtime: '1小时前',
          withdrawmoney: 10000
        }
      ]
    }
  },

  mounted () {
    const vm = this
    const swiperHeight = vm.$refs.swiperWrapper.offsetHeight
    const slideHeight = vm.$refs.slide[0].firstChild.offsetHeight

    vm.swiper = new window.Swiper('#student-invite-swiper', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      slidesPerView: swiperHeight / slideHeight,
      loopedSlides: vm.liveWithdrawal.length,
      direction: 'vertical'
    })
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
