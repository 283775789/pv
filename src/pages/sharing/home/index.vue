<template>
  <keep-alive>
    <div class="pv-body xheader xfooter" id="sharing-artical-list">
      <!-- navigation -->
      <pv-xscroll-list
        class="pv-nav"
        :number="10"
        :activeIndex="currentCategoryIndex"
        @change="changeCategoryNav">
        <a class="pv-nav-link" slot-scope="scope">导航项{{scope.index}}</a>
      </pv-xscroll-list>
      <!-- /navigation -->

      <!-- swiper -->
      <div class="pv-body-inner xnav">
        <div class="pv-swiper swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <pv-scroller class="xswiper" :isLoading="isLoading">
                    <!-- artical list -->
                    <ul class="pv-card">
                      <li class="pv-introl" @click="$router.push('/artical-detail')">
                        <div class="pv-introl-body">
                          <h3 class="pv-introl-title">
                            <i class="pv-tag">高价文</i>
                            标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题？
                          </h3>
                          <div class="pv-introl-props">
                            <em class="pv-introl-price">价格/阅读</em>
                            <span class="pv-introl-pv">浏览 2302</span>
                          </div>
                        </div>
                        <div class="pv-introl-imgbox">
                          <img src="" />
                        </div>
                      </li>
                      <li class="pv-introl">
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
                      </li>
                    </ul>
                    <!-- /artical list -->
                  </pv-scroller>
                </div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
                <div class="swiper-slide">Slide 10</div>
            </div>
        </div>
      </div>
      <!-- /swiper -->
    </div>
  </keep-alive>
</template>

<script>
export default {
  name: 'pv-page-sharing-home',

  data () {
    return {
      swiper: null,
      isLoading: false,
      currentCategoryIndex: 0
    }
  },

  methods: {
    changeCategoryNav (navIndex) {
      this.swiper.slideTo(navIndex)
    },
    changeCategoryPage () {
      this.currentCategoryIndex = this.swiper.activeIndex
    }
  },

  mounted () {
    this.swiper = new window.Swiper('.swiper-container', {
      on: {
        slideChange: this.changeCategoryPage
      }
    })
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
