<template>
  <div class="pv-body xheader" id="me-service">
    <div class="pv-service">
      <img src="" alt="">
      <div style="display: inline-block;">
        <div class="pv-form xservice xreadonly">
          <div class="pv-form-row">
            <label class="pv-form-label">工作时间：</label>
            <div class="pv-form-body">周一至周五10：00~18：00</div>
          </div>
          <div class="pv-form-row">
            <label class="pv-form-label">客服QQ：</label>
            <div class="pv-form-body">3380173429</div>
          </div>
          <div class="pv-form-row">
            <label class="pv-form-label">客服微信：</label>
            <div class="pv-form-body">LM9712S（问题咨询）</div>
          </div>
          <div class="pv-form-row">
            <label class="pv-form-label">VIP客服微信：</label>
            <div class="pv-form-body">zdqlvip（收徒20人以上）</div>
          </div>
          <div class="pv-form-row">
            <label class="pv-form-label">商务QQ：</label>
            <div class="pv-form-body">928901973（不咨询问题）</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me-service'
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
