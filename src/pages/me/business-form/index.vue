<template>
  <form class="pv-body xheader" id="me-business-form">
    <div class="pv-body-inner xscroll xfooter">
      <div class="PY_TINY PX_MEDIUM COLOR_SECONDARY">加入我们掌握平台一手的内容及合作信息</div>
      <div class="pv-form">
        <div class="pv-form-row">
          <label class="pv-form-label">姓名</label>
          <div class="pv-form-body">
            <input type="text" v-model="form.name" placeholder="请输入姓名" />
          </div>
        </div>
        <div class="pv-form-row">
          <label class="pv-form-label">公司</label>
          <div class="pv-form-body">
            <input type="text" v-model="form.company" placeholder="请输入公司全称" />
          </div>
        </div>
        <div class="pv-form-row">
          <label class="pv-form-label">邮箱</label>
          <div class="pv-form-body">
            <input type="email" v-model="form.email" placeholder="请输入邮箱" />
          </div>
        </div>
        <div class="pv-form-row">
          <label class="pv-form-label">手机</label>
          <div class="pv-form-body">
            <input type="number" v-model="form.phone" placeholder="请输入手机号" />
          </div>
        </div>
        <div class="pv-form-row">
          <label class="pv-form-label">微信</label>
          <div class="pv-form-body">
            <input type="text" v-model="form.wechat" placeholder="请输入微信号" />
          </div>
        </div>
        <div class="pv-form-row">
          <label class="pv-form-label">产品</label>
          <div class="pv-form-body">
            <input type="text" v-model="form.product" placeholder="请输入产品" />
          </div>
        </div>
      </div>

      <div class="pv-checklist" style="padding-left: 3.2rem;">
        <div>
          <label><input type="checkbox" v-model="agreement1" />我已阅读并同意</label>
          <router-link to="/guide-detail/xy2.md" class="pv-link">《投放规范》</router-link>
        </div>
        <div>
          <label><input type="checkbox" v-model="agreement2" />我已阅读并同意</label>
          <router-link to="/guide-detail/xy1.md" class="pv-link">《电子合作协议》</router-link>
        </div>
      </div>
    </div>

    <!-- footer button -->
    <div class="pv-btnfooter">
      <a class="pv-btn xmain xfull"
        :class="{xdisabled: !agreement1 || !agreement2}"
        @click="submitForm">
        <span>提&nbsp;&nbsp;交</span>
      </a>
    </div>
    <!-- /footer button-->
  </form>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'pv-me-business-form',
  title: '申请合作',

  data () {
    return {
      form: {
        name: '',
        company: '',
        email: '',
        phone: '',
        wechat: '',
        product: ''
      },
      agreement1: false,
      agreement2: false
    }
  },

  methods: {
    validateForm () {
      let {name, company, email, phone, wechat} = this.form

      if (name.trim() === '') {
        Toast('姓名不能为空。')
        return false
      }

      if (company.trim() === '') {
        Toast('公司名称不能为空。')
        return false
      }

      if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
        Toast('请输入正确的邮箱地址。')
        return false
      }

      if (!/^1[3|4|5|7|8]\d{9}$/.test(phone)) {
        Toast('请输入正确的手机号码。')
        return false
      }

      if (wechat.trim() === '') {
        Toast('微信号码不能为空。')
        return false
      }

      return true
    },

    submitForm () {
      const vm = this
      if (!this.validateForm()) return

      // easy from validation
      this.axios.post('/business/apply', this.qs.stringify(this.form)).then(function (response) {
        if (response.data.code === 0) {
          Toast('谢谢关注，我们会尽快与您取得联系。')
          setTimeout(() => {
            vm.$router.push('/me')
          }, 600)
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">
  @import "style"
</style>
