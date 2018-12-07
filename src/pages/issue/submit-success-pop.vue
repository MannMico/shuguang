<template>
  <div class="submit-success-pop">
    <img class="pop__icon" src="@/assets/icon_ok.png" alt>
    <div>需求提交成功</div>
    <div>IP经纪人将为您分析需求并尽快与您联系，请保持电话畅通~</div>
    <base-button @click="backToHome()">返回首页</base-button>
  </div>
</template>

<style lang="scss">
.submit-success-pop {
  .pop {
    &__icon {
      display: block;
      width: 180px;
      height: 180px;
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
