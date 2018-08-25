<template>
  <div class="pv-body xheader" id="me-service">
    <div class="pv-service">
      <img src="@images/logo.png" alt="来米" style="height: 5rem; margin-bottom: 1rem;">
      <div style="display: inline-block;">
        <div v-if="service" class="pv-form xservice xreadonly">
          <div class="pv-form-row">
            <label class="pv-form-label">工作时间：</label>
            <div class="pv-form-body">{{service.srvtime}}</div>
          </div>
          <div class="pv-form-row">
            <label class="pv-form-label">客服QQ：</label>
            <div class="pv-form-body">{{service.srvqq}}</div>
          </div>
          <div class="pv-form-row">
            <label class="pv-form-label">客服微信：</label>
            <div class="pv-form-body">{{service.srvwechat}}（问题咨询）</div>
          </div>
          <div class="pv-form-row">
            <label class="pv-form-label">VIP客服微信：</label>
            <div class="pv-form-body">{{service.srvwechat}}（收徒20人以上）</div>
          </div>
          <div class="pv-form-row">
            <label class="pv-form-label">商务QQ：</label>
            <div class="pv-form-body">{{service.bizqq}}（不咨询问题）</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me-service',
  title: '客服',

  data () {
    return {
      service: null
    }
  },

  methods: {
    getServiceInfo () {
      const vm = this
      this.axios.post('/customsrv/info').then(function (response) {
        if (response.data.code === 0) {
          vm.service = response.data.data
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  created () {
    this.getServiceInfo()
  }
}
</script>

<style lang="scss">
  .pv-service {
    padding: 3rem 0;
    text-align: center;
  }

  .pv-form.xservice .pv-form-label {
    width: 7.5em;
    font-size: .7rem;
    font-weight: bold;
  }
</style>
