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
      <div class="pv-swiper swiper-container" id="share-home-swiper">
          <div class="swiper-wrapper">
              <div class="swiper-slide"
                v-for="category in categories"
                :key="category.dictvalue">
                <pv-scroller
                  class="xswiper"
                  :isLoading.sync="category.isLoading"
                  :uid="category.dictvalue"
                  :loadDistance = "300"
                  @refresh="getArticals('refresh')"
                  @load="getArticals('load')">

                  <!-- artical list -->
                  <ul class="pv-card">
                    <!-- single image -->
                    <li class="pv-introl"
                      v-for="artical in category.articals"
                      :key="artical.aid"
                      @click="gotoArticalDetail(artical)">
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
                        <i v-if="artical.type==='2'" class="pv-ico xplay"></i>
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

                  <!-- nodata -->
                  <pv-nodata v-if="category.articals.length === 0" style="top: 4rem;" />
                  <!-- /nodata -->
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
      this.swiper = new window.Swiper('#share-home-swiper', {
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

          if (!vm.swiper) {
            vm.$nextTick(() => {
              vm.initSwiper()
            })
          }

          vm.getArticals('nav')
        }
      }).catch(function (error) {
        console.log(error)
      })
    },

    /**
     * action: preload next page data
     * @param {String} type
     * 'preload': preload the data of next page
     * 'nav': click a navigation or slide a swiper
     * 'load': scroll the page
     * 'refresh': pulldown the page
     */
    getArticals (type) {
      let category = this.categories[this.activeCategoryIndex]

      if (type === 'preload') {
        category = this.categories[this.activeCategoryIndex + 1]

        // return directly, if the artical list is not empty.
        if (category.articals.length > 0) return
      }

      if (type === 'nav' && category.articals.length > 0) {
        if (this.activeCategoryIndex < this.categories.length - 1) {
          this.getArticals('preload')
        }

        // return directly, if the artical list is not empty.
        return
      }

      if (type === 'load') {
        // return directly, when it is the last page.
        if (category.pageno >= category.totalpage) {
          category.isLoading = false
          return
        }
        category.pageno++
      }

      // reset pageno, when refreshed.
      if (type === 'refresh') category.pageno = 1

      const vm = this
      const queryParams = this.qs.stringify({
        category: category.dictvalue,
        pageno: category.pageno,
        pagesize: category.pagesize
      })

      vm.axios.post(`/article/page`, queryParams).then(function (response) {
        if (response.data.code === 0) {
          if (type === 'load') {
            category.articals = category.articals.concat(response.data.data.list)
          } else {
            category.totalsize = response.data.data.totalsize
            category.totalpage = response.data.data.totalpage
            category.articals = response.data.data.list
          }
        }

        if (type === 'nav') {
          // preload the next page data.
          if (vm.activeCategoryIndex < vm.categories.length - 1) {
            vm.getArticals('preload')
          }
        }

        category.isLoading = false
      }).catch(function (error) {
        category.isLoading = false
        console.log(error)
      })
    },

    /**
     * action: view artical detail
     * @param {Object} artical
     */
    gotoArticalDetail (artical) {
      this.$router.push({
        name: 'articalDetail',
        params: {
          artical
        }
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
