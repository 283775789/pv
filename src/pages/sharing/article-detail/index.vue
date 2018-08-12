<template>
    <div class="pv-body xheader" id="sharing-article-detail">
      <div class="pv-body-inner xfooter xscroll">
        <!-- artical -->
        <div class="pv-card">
          <div class="pv-artical">
            <div class="pv-artical-header">
              <div class="pv-artical-title">标题标题标题标题标题标题标题标题标题标题</div>
              <div class="pv-artical-props">
                <div class="pv-artical-date">2018-07-08</div>
                <div class="pv-artical-price">0.15元/阅读</div>
                <div class="pv-artical-pv">浏览 3000</div>
              </div>
            </div>
            <div class="pv-artical-body">
              <p>近期，国家发改委、国家统计局等多部门发声，贸易摩擦对国内价格影响有限，下半年物价保持平稳具备坚实的基础，仍将会在温和区间运行。</p>
              <p>“主要是进口大豆的价格可能会有一定的上升，会带来豆制品及相关产品价格的一些变化。”毛盛勇认为，总的来看，第一，大豆及豆类相关品在CPI的权重比较小。第二，豆类的下游产品，主要是豆粕饲料可能会推高一点像猪肉或者鸡蛋类的价格，还有豆类会影响食用油。</p>
              <img src="" />
              <p>商务部研究院国际市场研究所副所长白明对中新网记者表示，中美贸易摩擦会对物价运行有一定影响，由于自美大豆进口减少，对物价的影响主要通过食用油、饲料、豆制品等价格来体现。不过，这一影响有限，缺乏大幅推高物价的基础。</p>
            </div>
          </div>
        </div>
        <!-- /artical -->
      </div>

      <!-- footer-->
      <div class="pv-btnfooter">
        <a class="pv-btn xmain xfull" @click="sharePopup.visible = true">立即分享<small>(0.15元/阅读)</small></a>
      </div>
      <!-- /footer-->

      <mt-popup
        class="pv-popup"
        v-model="sharePopup.visible"
        position="bottom">
          <div class="pv-popup-title">分享到</div>
          <div class="pv-popup-body">
            <div class="pv-flex xavg">
              <a class="pv-flex-item xshare animated bounceInUp fast">
                <i class="pv-ico xweixi"></i>
                <div>微信好友</div>
              </a>
              <a class="pv-flex-item xshare animated bounceInUp normal">
                <i class="pv-ico xmoments"></i>
                <div>朋友圈</div>
              </a>
            </div>
          </div>
      </mt-popup>
    </div>
</template>

<script>
export default {
  name: 'pv-page-sharing-article-detail',
  data () {
    return {
      sharePopup: {
        visible: false
      }
    }
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
