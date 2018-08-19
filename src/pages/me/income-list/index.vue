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
          requestUrl: '/income/detail/page',
          isLoading: false,
          pageno: 1,
          pagesize: 10,
          list: []
        },
        {
          type: '其他收入',
          requestUrl: '/income/detail/page',
          isLoading: false,
          pageno: 1,
          pagesize: 10,
          list: []
        },
        {
          type: '收徒明细',
          requestUrl: '/student/detail/page',
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
     * action: get the content detail of the current tab page
     * @param {String} type 0-reading income 1-other income 2-follower list
     * @param {Boolean} isLoadMore true-the load event is triggered by the scroller
     */
    getContentDetail (type, isLoadMore) {
      let content = this.categories[type]

      if (isLoadMore) {
        // return directly if the last page has been loaded.
        if (content.pageno >= content.totalpage) {
          content.isLoading = false
          return
        }

        content.pageno++
      } else {
        if (content.list.length > 0) return
      }

      let requestParams = {
        pageno: content.pageno,
        pagesize: content.pagesize
      }

      if (type < 2) requestParams.type = type

      this.axios.post(content.requestUrl, this.qs.stringify(requestParams)).then(function (response) {
        if (response.data.code === 0) {
          if (isLoadMore) {
            content.list = content.list.concat(response.data.data.list)
          } else {
            content.totalsize = response.data.data.totalsize
            content.totalpage = response.data.data.totalpage
            content.list = response.data.data.list
          }
        }

        content.isLoading = false
      }).catch(function (error) {
        content.isLoading = false
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
      this.getContentDetail(this.activeTabIndex)
    }
  },

  created () {
    this.getContentDetail(0)
  },

  mounted () {
    this.initSwiper()
  }
}
</script>
