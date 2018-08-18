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

  data () {
    return {
      activeTabIndex: 0,
      isLoading: false,
      readingIncome: {
        pageno: 1,
        pagesize: 10,
        list: []
      },
      otherIncome: {
        pageno: 1,
        pagesize: 10,
        list: []
      }
    }
  },

  components: {
    'pv-profile': Profile
  },

  methods: {
    /**
     * @param {String} type 1-reading income 2-other income
     * @param {Boolean} isLoadMore equal to true when the load event is triggered by the scroller
     */
    getIncomeDetail (type, isLoadMore) {
      /* eslint-disable no-unused-vars */
      let requestParams
      let incomeList

      if (type === 1) {
        if (isLoadMore) this.readingIncome.pageno++
        requestParams = {
          type,
          pageno: this.readingIncome.pageno,
          pagesize: this.readingIncome.pagesize
        }
        incomeList = this.readingIncome.list
      } else if (type === 2) {
        if (isLoadMore) this.otherIncome.pageno++
        requestParams = {
          type,
          pageno: this.otherIncome.pageno,
          pagesize: this.otherIncome.pagesize
        }
        incomeList = this.readingIncome.list
      }

      requestParams = this.qs.stringify(requestParams)

      this.axios.post('/income/detail/page', requestParams).then(function (response) {
        if (response.data.code === 0) {
          if (isLoadMore) {

          } else {
            incomeList = response.data.data.list
          }
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  created () {
    this.getIncomeDetail(1)
  }
}
</script>
