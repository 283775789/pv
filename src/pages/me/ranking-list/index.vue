<template>
  <div class="pv-body xheader" id="me-ranking-list">
    <pv-profile class="xranking" />

    <!-- tab -->
    <pv-xscroll-list
      class="xseparator pv-nav xtab x2"
      :list="categories"
      :activeIndex="activeTabIndex"
      @change="changeTab">
      <a class="pv-nav-link" slot-scope="scope">{{scope.item.type}}</a>
    </pv-xscroll-list>
    <!-- /tab -->

    <!-- swiper -->
      <div class="pv-body-inner BG_WHITE" style="top:7.2rem;">
        <div class="pv-swiper swiper-container" id="me-ranking-list-swiper">
          <div class="swiper-wrapper">
              <div class="swiper-slide"
                  v-for="(category, index) in categories"
                  :key="index">
                  <pv-scroller
                    class="xswiper"
                    :uid="index"
                    :refreshDistance='0'
                    :loadDistance='-1'
                    :isLoading.sync="category.isLoading">
                  <!-- list -->
                  <ul class="pv-card">
                    <li class="pv-flexrow xsavespacing"
                      v-for="(item,index) in category.list"
                      :key="item.uid">
                      <div class="pv-flexrow-cell xfull">
                        <i v-if="index<3" class="pv-ico" :class="[`xno${index+1}`]"></i>
                        <i v-else class="pv-no"><span>{{index}}</span></i>
                        <img class="pv-avatar ML_SMALL" :src="item.headimg" />
                        <span class="TEXT_MEDIUM">{{item.nickname}}</span>
                      </div>
                      <div class="pv-flexrow-cell FLEX1">
                        <span v-if="activeTabIndex === 0" class="TEXT_MEDIUM COLOR_PRICE">{{item.income|liToYuan}}元</span>
                        <span v-else class="TEXT_MEDIUM COLOR_PRICE">{{item.invite}}个</span>
                      </div>
                    </li>
                  </ul>
                  <!-- /list -->
                </pv-scroller>
              </div>
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
      activeTabIndex: 0,
      categories: [
        {
          type: '收入排名',
          apiUrl: '/top/income/list',
          isLoading: false,
          list: []
        },
        {
          type: '收徒排名',
          apiUrl: '/top/invite/list',
          isLoading: false,
          list: []
        }
      ]
    }
  },

  methods: {
    /**
     * action: get ranking list
     * @param {String} type 0-income ranking 1-follower ranking
     */
    getRanking (type) {
      const ranking = this.categories[type]

      if (ranking.list.length > 0) {
        ranking.isLoading = false
        return
      }

      this.axios.post(ranking.apiUrl).then(function (response) {
        if (response.data.code === 0) {
          ranking.list = response.data.data
        }
        ranking.isLoading = false
      }).catch(function (error) {
        ranking.isLoading = false
        console.log(error)
      })
    },

    initSwiper () {
      this.swiper = new window.Swiper('#me-ranking-list-swiper', {
        on: {
          slideChange: this.slidePage
        }
      })
    },

    changeTab (navIndex) {
      this.swiper.slideTo(navIndex)
    },

    slidePage () {
      this.activeTabIndex = this.swiper.activeIndex

      this.getRanking(this.activeTabIndex)
    }
  },

  created () {
    this.getRanking(0)
  },

  mounted () {
    this.initSwiper()
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
