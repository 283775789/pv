<template>
    <div class="pv-body xheader" id="sharing-article-detail">
      <template v-if="artical">
        <div class="pv-body-inner xfooter xscroll">
          <!-- artical -->
          <div class="pv-card">
            <div class="pv-artical">
              <div class="pv-artical-header">
                <div class="pv-artical-title">{{artical.title}}</div>
                <div class="pv-artical-props">
                  <div class="pv-artical-date">{{artical.createtime|unixTimeToDate}}</div>
                  <div class="pv-artical-price">{{artical.readprice/1000}}元/阅读</div>
                  <div class="pv-artical-pv">浏览 {{artical.readnum}}</div>
                </div>
              </div>
              <div class="pv-artical-body">
                <!-- artical: type 1-artical 2-video 3-overbid artical -->
                <template v-if="artical.type === '2'">
                  <!-- video body -->
                  <iframe class="pv-video" v-if="artical.videourl.indexOf('v.qq.com')!==-1"
                          :src="artical.videourl.replace(/&(width|height)=\d+/g,'')"
                          frameborder="0">
                  </iframe>
                  <!-- /iframe video -->

                  <!-- video body -->
                  <video v-else class="pv-video"
                         :src="artical.videourl">
                  </video>
                </template>
                <!-- video body -->

                <!-- artical body -->
                <div v-else v-html="artical.content"></div>
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
      </template>

      <mt-popup
        class="pv-popup"
        v-model="sharePopup.visible"
        position="bottom">
          <div class="pv-popup-title">分享到</div>
          <div class="pv-popup-body">
            <div class="pv-flex xavg">
              <a class="pv-flex-item xshare animated bounceInUp fast"
                @click="share(1)">
                <i class="pv-ico xweixin"></i>
                <div>微信好友</div>
              </a>
              <a class="pv-flex-item xshare animated bounceInUp normal"
                @click="share(2)">
                <i class="pv-ico xmoments"></i>
                <div>朋友圈</div>
              </a>
            </div>
          </div>
      </mt-popup>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui'

export default {
  name: 'sharing-article-detail',

  data () {
    return {
      sharePopup: {
        visible: false
      },
      artical: null
    }
  },

  methods: {
    getArticalDetail () {
      const vm = this
      const articalId = this.$route.params.aid

      Indicator.open()
      vm.axios.post(`/article/detail?aid=${articalId}`).then(function (response) {
        if (response.data.code === 0) {
          vm.artical = response.data.data
        }

        Indicator.close()
      }).catch(function (error) {
        Indicator.close()
        console.log(error)
      })
    },

    share (type) {
      const iconUrl = this.artical.picurl
      const title = this.artical.title
      const desc = ''

      const requestParams = this.qs.stringify({
        aid: this.artical.aid,
        sharetype: type,
        // type: 1-share artical 2-share high-priced artical
        type: this.artical.isoverbid ? 2 : 1
      })

      const vm = this
      this.axios.post('/article/share/url', requestParams).then(function (response) {
        if (response.data.code === 0) {
          const url = response.data.data
          vm.pad.share.call(this, type, url, iconUrl, title, desc)
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  created () {
    this.getArticalDetail()
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
