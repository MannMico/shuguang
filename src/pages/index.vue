<style lang="scss">
@import '~@/styles/var';

html,
body {
  height: 100%;
  width: 100%;
}
.demo {
  height: 100%;
  width: 100%;
  .swiper-container {
    height: 100%;
  }
}

.text-wrap {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  color: #fff;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header-slide {
  background-size: cover;
  background-position: center center;

  &__text-container {
    margin-top: 8vw;
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
    font-weight: $weight_light;

    color: #fffce8;
    letter-spacing: 1.35px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  &__decs2 {
    margin-top: 44px;
    font-size: 20px;
    font-weight: $weight_regular;
    line-height: 28px;

    color: #fffce8;
    letter-spacing: 0.9px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  &__btn {
    margin-top: 5.6vw;
    padding: 15px 40px;
    font-size: 24px;
    border: 1px solid #fff;
    border-radius: 31px;
    background-color: rgba($color: #fff, $alpha: 0.1);
  }
}
.header-slide1 {
  background-image: url('~@/assets/bg_top_banner1.png');
}

.header-slide2 {
  background-image: url('~@/assets/bg_top_banner2.png');
}
</style>

<template>
  <div class="demo">
    <swiper class="home__header" :options="swiperOption">
      <swiper-slide class="header-slide header-slide1"></swiper-slide>
      <swiper-slide class="header-slide header-slide2"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="text-wrap">
      <div class="header-slide__text-container">
        <img src="@/assets/logo.png" alt class="header-slide__name-logo">
        <div class="header-slide__decs1">专注IP的创新经济营销平台</div>
        <div class="header-slide__decs2">做IP营销，找束光；专业IP经纪人对接更专业，更省事，更有效。</div>
        <button class="header-slide__btn">开启营销新增长</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: true,
        delay: 3000,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  }
};
</script>
