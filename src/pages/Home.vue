<style lang="scss">
.home-page {
  .home {
    &__header {
      width: 100%;
      height: 56vw; // 800/1440*100
    }
  }
  .header-slide1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('~@/assets/bg_top_banner.png');
    background-size: cover;
    color: #fffce8;
    &__text-container {
      margin-top: 4vw;
      text-align: center;
    }
    &__name-logo {
      display: inline-block;
      width: 80px;
      height: 42px;
    }
    &__decs1 {
      margin-top: 12px;
      font-size: 30px;
      lighting-color: 42px;
    }
    &__decs2 {
      margin-top: 52px;
      font-size: 20px;
      line-height: 28px;
    }
  }
}
</style>

<template>
  <div class="home-page">
    <swiper class="home__header">
      <swiper-slide class="header-slide1">
        <div class="header-slide1__text-container">
          <img src="./../assets/logo.png" alt class="header-slide1__name-logo">
          <div class="header-slide1__decs1">专注IP的创新经济营销平台</div>
          <div class="header-slide1__decs2">做IP营销，找束光；专业IP经纪人对接更专业，更省事，更有效。</div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="home__body"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
