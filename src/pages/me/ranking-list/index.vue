<template>
  <div class="pv-body xheader" id="me-ranking-list">
    <pv-profile class="xranking" />

    <!-- tab -->
    <pv-xscroll-list
      class="xseparator pv-nav xtab"
      :number="2">
      <a class="pv-nav-link" slot-scope="scope">{{tabs[scope.index-1]}}</a>
    </pv-xscroll-list>
    <!-- /tab -->

    <!-- swiper -->
      <div class="pv-body-inner BG_WHITE" style="top:7.2rem;">
        <div class="pv-swiper swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <pv-scroller class="xswiper" :isLoading="isLoading">
                  <!-- list -->
                  <ul class="pv-card">
                    <li class="pv-flexrow xsavespacing">
                      <div class="pv-flexrow-cell xfull">
                        <i class="pv-ico xno1"></i>
                        <img class="pv-avatar" src="" />
                        <span class="TEXT_MEDIUM">李晓晓</span>
                      </div>
                      <div class="pv-flexrow-cell FLEX1">
                        <span class="TEXT_MEDIUM COLOR_PRICE">100元</span>
                      </div>
                    </li>
                  </ul>
                  <!-- /list -->
                </pv-scroller>
              </div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
          </div>
      </div>
    </div>
    <!-- /swiper -->
  </div>
</template>

<script>
import Profile from '@comps/profile'

export default {
  name: 'me-ranking-list',

  components: {
    'pv-profile': Profile
  },

  data () {
    return {
      tabs: ['收入排名', '收徒排名']
    }
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
