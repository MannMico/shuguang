<template>
  <div class="submit-success-pop">
    <img class="pop__icon" src="@/assets/icon_ok.png" alt>
    <div class="pop__result-text">需求提交成功</div>
    <div class="pop__result-tip">IP经纪人将为您分析需求并尽快与您联系，请保持电话畅通~</div>
    <base-button class="pop__back-btn" @click="backToHome()">返回首页</base-button>
  </div>
</template>

<style lang="scss">
@import '~@/styles/var';
.submit-success-pop {
  font-weight: $weight_regular;
  padding: 62px 0 64px 0;
  width: 1120px;
  height: 590px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(151, 151, 151, 0.3);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  .pop {
    &__icon {
      display: block;
      width: 180px;
      height: 180px;
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
    &__back-btn {
      margin-top: 72px;
      width: 256px;
      height: 62px;
      text-align: center;
      line-height: 62px;
      padding: 0;
      border-radius: 31px;
    }
  }
}
</style>

<script>
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
