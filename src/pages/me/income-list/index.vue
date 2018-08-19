<template>
  <div class="pv-body xheader" id="me-income-list">
    <pv-profile class="MB_TINY" separator />

    <!-- tab -->
    <pv-xscroll-list
      class="xseparator pv-nav xtab x3"
      :list="categories"
      :activeIndex="activeTabIndex"
      @change="changeTab">
      <a class="pv-nav-link"
         slot-scope="scope">
         {{scope.item.type}}
      </a>
    </pv-xscroll-list>
    <!-- /tab -->

    <!-- swiper -->
      <div class="pv-body-inner BG_WHITE" style="top:9.48rem;">
        <div class="pv-swiper swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                  v-for="(category, index) in categories"
                  :key="index">
                  <pv-scroller
                    class="xswiper"
                    :uid="index"
                    :refreshDistance='0'
                    :isLoading.sync="category.isLoading">
                    <!-- category list -->
                    <div>{{category.type}}</div>
                    <ul class="pv-card">
                      <li class="pv-flexrow xsavespacing"
                        v-for="item in category.list"
                        :key="item.pid">
                        <div class="pv-flexrow-cell" style="width: 40%;">
                          <div class="TEXT_MEDIUM">{{item.typedesc}}</div>
                          <div class="TEXT_SMALL COLOR_WEAKING">{{item.createtime|unixTimeToDatetime}}</div>
                        </div>
                        <div class="pv-flexrow-cell" style="width: 20%;">
                          <div class="TEXT_MEDIUM COLOR_PRICE">+{{item.amount|liToYuan}}</div>
                        </div>
                        <div class="pv-flexrow-cell FLEX1">
                          <span class="TEXT_MEDIUM COLOR_PRICE">{{item.afterbalance|liToYuan}}</span>
                        </div>
                      </li>
                    </ul>
                    <!-- /category list -->
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
  name: 'me-income-list',

  data () {
    return {
      activeTabIndex: 0,
      swiper: null,
      categories: [
        {
          type: '阅读收入',
          isLoading: false,
          pageno: 1,
          pagesize: 10,
          list: []
        },
        {
          type: '其他收入',
          isLoading: false,
          pageno: 1,
          pagesize: 10,
          list: []
        },
        {
          type: '收徒明细',
          isLoading: false,
          pageno: 1,
          pagesize: 10,
          list: []
        }
      ]
    }
  },

  components: {
    'pv-profile': Profile
  },

  methods: {
    /**
     * action: get the reading income detail or other income detail
     * @param {String} type 0-reading income 1-other income
     * @param {Boolean} isLoadMore true-the load event is triggered by the scroller
     */
    getIncomeDetail (type, isLoadMore) {
      let incomeData = this.categories[type]

      if (isLoadMore) {
        // return directly if the last page has been loaded.
        if (incomeData.pageno >= incomeData.totalpage) {
          incomeData.isLoading = false
          return
        }

        incomeData.pageno++
      } else {
        if (incomeData.list.length > 0) return
      }

      const requestParams = this.qs.stringify({
        type,
        pageno: incomeData.pageno,
        pagesize: incomeData.pagesize
      })

      this.axios.post('/income/detail/page', requestParams).then(function (response) {
        if (response.data.code === 0) {
          if (isLoadMore) {
            incomeData.list = incomeData.list.concat(response.data.data.list)
          } else {
            incomeData.totalsize = response.data.data.totalsize
            incomeData.totalpage = response.data.data.totalpage
            incomeData.list = response.data.data.list
          }
        }

        incomeData.isLoading = false
      }).catch(function (error) {
        incomeData.isLoading = false
        console.log(error)
      })
    },

    /**
     * action: get the folloer list
     * @param {Boolean} isLoadMore true-the load event is triggered by the scroller
     */
    getFollowers (isLoadMore) {
      const followerData = this.categories[2]

      if (isLoadMore) {
        // return directly if the last page has been loaded.
        if (followerData.pageno >= followerData.totalpage) {
          followerData.isLoading = false
          return
        }

        followerData.pageno++
      } else {
        if (followerData.list.length > 0) return
      }

      const requestParams = this.qs.stringify({
        pageno: followerData.pageno,
        pagesize: followerData.pagesize
      })

      this.axios.post('/student/detail/page', requestParams).then(function (response) {
        if (response.data.code === 0) {
          if (isLoadMore) {
            followerData.list = followerData.list.concat(response.data.data.list)
          } else {
            followerData.totalsize = response.data.data.totalsize
            followerData.totalpage = response.data.data.totalpage
            followerData.list = response.data.data.list
          }

          followerData.isLoading = false
        }
      }).catch(function (error) {
        followerData.isLoading = false
        console.log(error)
      })
    },

    initSwiper () {
      this.swiper = new window.Swiper('.swiper-container', {
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

      if (this.activeTabIndex < 2) {
        this.getIncomeDetail(this.activeTabIndex)
      } else {
        this.getFollowers()
      }
    }
  },

  created () {
    this.getIncomeDetail(0)
  },

  mounted () {
    this.initSwiper()
  }
}
</script>
