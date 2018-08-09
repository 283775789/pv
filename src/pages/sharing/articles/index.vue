<template>
  <div class="pv-body xheader xfooter" id="sharing-articles">
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
                  slide1
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
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper/dist/js/swiper.js'

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
    this.swiper = new Swiper('.swiper-container', {
      on: {
        slideChange: this.changeCategoryPage
      }
    })
  }
}
</script>
