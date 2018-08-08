<template>
  <div class="pv-body xheader xfooter" id="sharing-home">
    <!-- navigation -->
    <pv-xscroll-list
      class="pv-nav"
      :number="10"
      :currentIndex="5">
      <a class="pv-nav-link" slot-scope="scope">导航项{{scope.index}}</a>
    </pv-xscroll-list>
    <!-- /navigation -->

    <!-- swiper -->
    <div class="pv-body-inner xnav">
      <div class="pv-swiper swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <pv-scroller class="xswiper" :isLoading="isLoading" @refresh="demo">
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
                  <p>从手机的前面板图片来看，三款新iPhone都采用“刘海屏”设计，与在售的 iPhone X 一致。换言之，2018年苹果iPhone极有可能全面拥抱全面屏。</p>
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
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper/dist/js/swiper.js'

export default {
  name: 'pv-page-sharing-home',

  data () {
    return {
      isLoading: false
    }
  },

  methods: {
    demo () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    }
  },

  mounted () {
    new Swiper('.swiper-container')
  }
}
</script>
