<template>
  <div class="pv-body xheader" id="me-guide">
    <div class="pv-body-inner xscroll xfooter">
      <div class="pv-card"
        v-for="(guide,index) in guides"
        :key="index">
        <a class="pv-flexrow xsavespacing"
           @click="gotoGuidDetail(guide)">
           <div class="pv-flexrow-cell FLEX1 TEXT_MEDIUM">{{guide.title}}</div>
           <div class="pv-flexrow-cell"><i class="pv-ico xar"></i></div>
        </a>
      </div>
    </div>

    <!-- footer button -->
    <div class="pv-btnfooter">
        <router-link to="/" class="pv-btn xmain xfull">
          <span>开始赚钱</span>
        </router-link>
    </div>
    <!-- /footer button-->
  </div>
</template>

<script>
export default {
  name: 'pv-me-guide',
  title: '新手指南',

  data () {
    return {
      guides: []
    }
  },

  methods: {
    getGuides () {
      const vm = this

      this.axios.get(`${this.staticUrl}/docs/guides.json`).then(function (response) {
        vm.guides = response.data
      }).catch(function (error) {
        console.log(error)
      })
    },

    gotoGuidDetail (guide) {
      this.$router.push({
        path: `/guide-detail/${guide.markdown}`
      })
    }
  },

  created () {
    this.getGuides()
  }
}
</script>
