<template>
  <div class="pv-body xheader" id="me-business">
    <div class="pv-body-inner xscroll xfooter">
      <img src="@images/b-banner.jpg" style="width:100%; height:7.5rem;" />
      <!-- 平台优势 -->
      <div class="pv-card xpy">
        <div class="pv-title">
          <span>平台优势</span>
        </div>
        <div class="pv-flex xavg xbusiness MB_SMAlL">
          <div class="pv-flex-item">
            <div class="pv-media">
              <div class="pv-media-imgbox">
                <img src="@images/b-user.jpg" />
                <i class="pv-ico xuser"></i>
              </div>
              <div class="pv-media-body">
                <h4 class="pv-media-title">用户</h4>
                <div class="pv-media-des">微转生态满足不同用户群体在每天一个场景每一刻的需求</div>
              </div>
            </div>
          </div>
          <div class="pv-flex-item">
            <div class="pv-media">
              <div class="pv-media-imgbox">
                <img src="@images/b-content.jpg" />
                <i class="pv-ico xcontent"></i>
              </div>
              <div class="pv-media-body">
                <h4 class="pv-media-title">内容</h4>
                <div class="pv-media-des">微转拥有多远化的内容产品矩阵让用户所需即所得</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pv-flex xavg xbusiness MB_SMAlL">
          <div class="pv-flex-item">
            <div class="pv-media">
              <div class="pv-media-imgbox">
                <img src="@images/b-data.jpg" />
                <i class="pv-ico xdata"></i>
              </div>
              <div class="pv-media-body">
                <h4 class="pv-media-title">数据</h4>
                <div class="pv-media-des">微转多年的数据沉淀精准洞察、高效触达用户</div>
              </div>
            </div>
          </div>
          <div class="pv-flex-item">
            <div class="pv-media">
              <div class="pv-media-imgbox">
                <img src="@images/b-technology.jpg" />
                <i class="pv-ico xtechnology"></i>
              </div>
              <div class="pv-media-body">
                <h4 class="pv-media-title">技术</h4>
                <div class="pv-media-des">以领先数据技术及广告技术让广告优质呈现达到更加营销效果</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /平台优势 -->

      <!-- 营销资源 -->
      <div class="pv-card">
        <div class="pv-title">
          <span>营销资源</span>
        </div>
        <div class="pv-flex xavg xbgbox">
          <div class="pv-flex-item">
            <i class="pv-ico xbrand"></i>
            <div>品牌曝光</div>
          </div>
          <div class="pv-flex-item">
            <i class="pv-ico xcooperation"></i>
            <div>数据合作</div>
          </div>
          <div class="pv-flex-item">
            <i class="pv-ico xuser2"></i>
            <div>高品质用户</div>
          </div>
        </div>
      </div>
      <!-- /营销资源 -->
    </div>

    <!-- footer button -->
    <div class="pv-btnfooter">
      <router-link
        class="pv-btn xmain xfull"
        to="/business-form">
        <span>申请合作</span>
      </router-link>
    </div>
    <!-- /footer button-->
  </div>
</template>

<script>

export default {
  name: 'pv-me-business',
  title: '商务合作'
}
</script>

<style lang="scss">
  @import "style"
</style>
