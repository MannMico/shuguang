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

.header-slide {
  background-size: cover;
  background-position: center center;

  &__text-container {
    // margin-top: -9vw;
    position: absolute;
    z-index: 1;
    padding: 0 20px;
    color: #fff;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
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
.header-slide1-m {
  background-image: url('~@/assets/mobie1.jpg');
}

.header-slide2 {
  background-image: url('~@/assets/bg_top_banner2.png');
}
.header-slide2-m {
  background-image: url('~@/assets/mobie2.jpg');
}
.swiper-pagination {
  bottom: 20px !important;
  z-index: 999;
}
.swiper-pagination-bullet {
  opacity: 0.5 !important;
  background: #fff !important;
}
.swiper-pagination-bullet-active {
  opacity: 1 !important;
  background: #fff !important;
  width: 30px !important;
  border-radius: 8px !important;
}
.qrcode {
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>

<template>
  <div class="demo">
    <swiper class="home__header" :options="swiperOption">
      <swiper-slide class="header-slide" :class="`header-slide1${isMobile?'-m':''}`"></swiper-slide>
      <swiper-slide class="header-slide" :class="`header-slide2${isMobile?'-m':''}`"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="header-slide__text-container">
      <img src="@/assets/logo.png" alt class="header-slide__name-logo">
      <div class="header-slide__decs1">专注IP的创新经纪营销平台</div>
      <div class="header-slide__decs2">做IP营销，找束光；专业IP经纪人对接更专业，更省事，更有效。</div>
      <button class="header-slide__btn">内测邀请中</button>
      <img class="qrcode" v-if="isMobile" src="@/assets/qrcode.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMobile: false,
      swiperOption: {
        autoplay: true,
        delay: 4000,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  },
  created() {
    const ua = window.navigator.userAgent;

    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    const isMobile = isIphone || isAndroid;
    this.isMobile = isMobile;
  }
};
</script>
