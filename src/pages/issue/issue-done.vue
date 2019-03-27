
<style lang="scss">
@import '~@/styles/var';
.submit-success-pop {
  font-weight: $weight_regular;
  padding: 62px 0 64px 0;
  width: 1200px;
  height: 590px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(151, 151, 151, 0.3);
  margin: 0 auto;
  transform: translate(0, -90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  .pop {
    &__icon {
      display: block;
      width: 204px;
      height: 126px;
    }
    &__result-text {
      margin-top: 56px;
      font-weight: $weight_medium;
      font-size: 30px;
      color: #000000;
      letter-spacing: 1.35px;
    }
    &__result-tip {
      margin-top: 24px;
      font-size: 20px;
      color: #000000;
      letter-spacing: 0.9px;
    }
  }
}
</style>
<template>
  <div class="issue-page">
    <base-navbar></base-navbar>
    <div class="issue__header">
      <div class="header__title content">发布您的授权任务</div>
      <div class="header__desc content">提交后系统立即匹配专业IP经纪人为您定制方案</div>
    </div>
    <div class="submit-success-pop">
      <img class="pop__icon" src="@/assets/icon_ok.png" alt>
      <div class="pop__result-text">需求提交成功</div>
      <div class="pop__result-tip">IP经纪人将为您分析需求并尽快与您联系，请保持电话畅通~</div>
      <p class="pop__back-btn" @click="backToHome()">返回首页</p>
    </div>
    <base-footer></base-footer>
  </div>
</template>
<script>
import './issue.scss';
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    backToHome() {
      this.$router.push({ path: '/' });
    }
  }
};
</script>
