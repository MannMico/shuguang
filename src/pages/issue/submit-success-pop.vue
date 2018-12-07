<template>
  <div class="submit-success-pop">
    <img class="pop__icon" src="@/assets/icon_ok.png" alt>
    <div class="pop__success-tips">需求提交成功</div>
    <div>IP经纪人将为您分析需求并尽快与您联系，请保持电话畅通~</div>
    <base-button @click="backToHome()">返回首页</base-button>
  </div>
</template>

<style lang="scss">
@import '~@/styles/var';
.submit-success-pop {
  padding: 68px 0;
  min-width: 900px;
  height: 500px;
  background-color: #fff;
  border: 1px solid #979797;
  border-radius: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .pop {
    &__icon {
      display: block;
      width: 180px;
      height: 180px;
    }
    &__success-tips {
      font-weight: $weight_medium;
      font-size: 30px;
      color: #000000;
      letter-spacing: 1.35px;
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
