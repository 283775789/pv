<template>
  <form class="pv-body xheader" id="me-business-form">
    <div class="pv-body-inner xscroll xfooter">
      <div class="PY_TINY PX_MEDIUM COLOR_SECONDARY">加入我们掌握平台一手的内容及合作信息</div>
      <div class="pv-form">
        <div class="pv-form-row">
          <label class="pv-form-label">姓名</label>
          <div class="pv-form-body">
            <input type="text" placeholder="请输入姓名" />
          </div>
        </div>
        <div class="pv-form-row">
          <label class="pv-form-label">公司</label>
          <div class="pv-form-body">
            <input type="text" placeholder="请输入公司全称" />
          </div>
        </div>
        <div class="pv-form-row">
          <label class="pv-form-label">邮箱</label>
          <div class="pv-form-body">
            <input type="text" placeholder="请输入邮箱" />
          </div>
        </div>
        <div class="pv-form-row">
          <label class="pv-form-label">手机</label>
          <div class="pv-form-body">
            <input type="text" placeholder="请输入手机号" />
          </div>
        </div>
        <div class="pv-form-row">
          <label class="pv-form-label">微信</label>
          <div class="pv-form-body">
            <input type="text" placeholder="请输入微信号" />
          </div>
        </div>
        <div class="pv-form-row">
          <label class="pv-form-label">产品</label>
          <div class="pv-form-body">
            <input type="text" placeholder="请输入产品" />
          </div>
        </div>
      </div>

      <div class="pv-checklist" style="padding-left: 3.2rem;">
        <label><input type="checkbox" />我已阅读并同意《投放规范》</label>
        <label><input type="checkbox" />我已阅读并同意《电子合作协议》</label>
      </div>
    </div>

    <!-- footer button -->
    <div class="pv-btnfooter">
      <a class="pv-btn xmain xfull">
        <span>提&nbsp;&nbsp;交</span>
      </a>
    </div>
    <!-- /footer button-->
  </form>
</template>

<script>
export default {
  name: 'pv-me-business-form'
}
</script>

<style lang="scss">
  @import "style"
</style>
