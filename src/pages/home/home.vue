<template>
  <div class="home-page">
    <swiper class="home__header">
      <swiper-slide class="header-slide1">
        <div class="header-slide1__text-container">
          <img src="@/assets/logo.png" alt class="header-slide1__name-logo">
          <div class="header-slide1__decs1">专注IP的创新经济营销平台</div>
          <div class="header-slide1__decs2">做IP营销，找束光；专业IP经纪人对接更专业，更省事，更有效。</div>
          <button class="header-slide1__btn">开启营销新增长</button>
        </div>
      </swiper-slide>
    </swiper>
    <div class="home__body">
      <div class="home__topbar">
        <img class="topbar__name-logo" src="@/assets/logo_up_navigation.png" alt>
        <div class="topbar__nav"></div>
        <div class="topbar__login-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import './home.scss';
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
