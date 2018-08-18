<template>
  <div class="pv-body xheader" id="me-income-list">
    <pv-profile class="MB_TINY" separator />

    <!-- tab -->
    <pv-xscroll-list
      class="xseparator pv-nav xtab"
      :list="['阅读收入', '其他收入', '收徒明细']"
      :activeIndex="activeTabIndex">
      <a class="pv-nav-link" slot-scope="scope">{{scope.item}}</a>
    </pv-xscroll-list>
    <!-- /tab -->

    <!-- swiper -->
      <div class="pv-body-inner BG_WHITE" style="top:9.48rem;">
        <div class="pv-swiper swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <pv-scroller
                    class="xswiper"
                    v-for="n in 3"
                    :key="n"
                    :uid="n"
                    :refreshDistance='0'
                    :isLoading="isLoading">
                    <!-- income list -->
                    <ul class="pv-card">
                      <li class="pv-flexrow xsavespacing">
                        <div class="pv-flexrow-cell" style="width: 40%;">
                          <div class="TEXT_MEDIUM">阅读文章</div>
                          <div class="TEXT_SMALL COLOR_WEAKING">2018-01-01 15:30:30</div>
                        </div>
                        <div class="pv-flexrow-cell" style="width: 20%;">
                          <div class="TEXT_MEDIUM COLOR_PRICE">+0.15</div>
                        </div>
                        <div class="pv-flexrow-cell FLEX1">
                          <span class="TEXT_MEDIUM COLOR_PRICE">100.525</span>
                        </div>
                      </li>
                    </ul>
                    <!-- /income list -->
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
  name: 'me-income-list',

  components: {
    'pv-profile': Profile
  },

  data () {
    return {
      activeTabIndex: 0,
      isLoading: false
    }
  }
}
</script>
