<template>
  <div class="pv-body xheader xfooter" id="sharing-artical-list">
    <!-- navigation -->
    <pv-xscroll-list
      class="pv-nav"
      :list="categories"
      :activeIndex="activeCategoryIndex"
      @change="changeNav">
      <a class="pv-nav-link"
          slot-scope="scope">
          {{scope.item.dictname}}
      </a>
    </pv-xscroll-list>
    <!-- /navigation -->

    <!-- swiper -->
    <div class="pv-body-inner xnav">
      <div class="pv-swiper swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"
                v-for="category in categories"
                :key="category.dictvalue">
                <pv-scroller
                  class="xswiper"
                  :isLoading.sync="category.isLoading"
                  :uid="category.dictvalue"
                  @refresh="getArticals('refresh')"
                  @load="getArticals('load')">

                  <!-- artical list -->
                  <ul class="pv-card">
                    <!-- single image -->
                    <li class="pv-introl"
                      v-for="artical in category.articals"
                      :key="artical.aid"
                      @click="$router.push(`/artical-detail/${artical.aid}`)">
                      <div class="pv-introl-body">
                        <h3 class="pv-introl-title">
                          <i v-if="artical.isoverbid" class="pv-tag">高价文</i>
                          {{artical.title}}
                        </h3>
                        <div class="pv-introl-props">
                          <em class="pv-introl-price">{{artical.readprice/1000}}元/阅读</em>
                          <span class="pv-introl-pv">浏览 {{artical.readnum}}</span>
                        </div>
                      </div>
                      <div class="pv-introl-imgbox">
                        <img :src="artical.picurl" />
                      </div>
                    </li>
                    <!-- /single image -->

                    <!-- multiple images -->
                    <!-- <li class="pv-introl">
                      <div class="pv-introl-body">
                        <h3 class="pv-introl-title">
                          <i class="pv-tag">高价文</i>
                          标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题？
                        </h3>
                        <div class="pv-introl-imgbox">
                          <img src="" />
                        </div>
                        <div class="pv-introl-props">
                          <em class="pv-introl-price">价格/阅读</em>
                          <span class="pv-introl-pv">浏览 2302</span>
                        </div>
                      </div>
                    </li> -->
                    <!-- /multiple images -->
                  </ul>
                  <!-- /artical list -->
                </pv-scroller>
              </div>
          </div>
      </div>
    </div>
    <!-- /swiper -->
  </div>
</template>

<script>
export default {
  name: 'sharing-home',

  data () {
    return {
      swiper: null,
      categories: [],
      activeCategoryIndex: 0
    }
  },

  methods: {
    initSwiper () {
      this.swiper = new window.Swiper('.swiper-container', {
        on: {
          slideChange: this.slidePage
        }
      })
    },

    // get the list of all categories
    getCategories () {
      const vm = this

      this.axios.post('/category/list').then(function (response) {
        if (response.data.code === 0) {
          // extend each category object to be get the artical list conveniently.
          vm.categories = response.data.data.map((item) => {
            return {...item, isLoading: false, pageno: 1, pagesize: 10, totalsize: 0, totalpage: 0, articals: []}
          })

          vm.$nextTick(() => {
            vm.initSwiper()
          })

          vm.getArticals('nav')
        }
      }).catch(function (error) {
        console.log(error)
      })
    },

    /**
     *  @param {String} type
     * 'nav': click a navigation or slide a swiper
     * 'load': scroll the page
     * 'refresh': pulldown the page
     */
    getArticals (type) {
      const activeCategory = this.categories[this.activeCategoryIndex]

      // return directly, if the artical list is not empty.
      if (type === 'nav' && activeCategory.articals.length > 0) return

      if (type === 'load') {
        // return directly, when it is the last page.
        if (activeCategory.pageno >= activeCategory.totalpage) {
          this.isLoading = false
          return
        }

        activeCategory.pageno++
      }

      // reset pageno, when refreshed.
      if (type === 'refresh') activeCategory.pageno = 1

      const vm = this
      const queryParams = this.qs.stringify({
        category: activeCategory.dictvalue,
        pageno: activeCategory.pageno,
        pagesize: activeCategory.pagesize
      })

      vm.axios.post(`/article/page`, queryParams).then(function (response) {
        if (response.data.code === 0) {
          if (type === 'load') {
            activeCategory.articals = activeCategory.articals.concat(response.data.data.list)
          } else {
            activeCategory.totalsize = response.data.data.totalsize
            activeCategory.totalpage = response.data.data.totalpage
            activeCategory.articals = response.data.data.list
          }

          activeCategory.isLoading = false
        }
      }).catch(function (error) {
        activeCategory.isLoading = false
        console.log(error)
      })
    },

    changeNav (navIndex) {
      this.swiper.slideTo(navIndex)
    },

    slidePage () {
      this.activeCategoryIndex = this.swiper.activeIndex
      this.getArticals('nav')
    }
  },

  mounted () {
    this.getCategories()
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
