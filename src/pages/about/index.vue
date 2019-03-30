<template>
  <div class="home-page">
    <base-navbar @change="scrollToDOM" :style="{visibility: showFixed ? 'hidden' : 'visible'}"></base-navbar>
    <base-navbar class="base-navbar--fixed" @change="scrollToDOM" v-show="showFixed"></base-navbar>
    <div class="about-top"></div>
    <div class="content clearfix">
      <img class="about-logo" src="~@/assets/about_logo.png" alt=""/>
      <p class="about-title">中国最大的全运营链IP经纪机构</p>
      <p class="about-desc"> 束光文化是中国IP行业新环境下应运而生的新型IP经纪、孵化、运营机构。是具备IP产业链驾驭能力，涵盖商业模式、策略、内容、
传播、设计、营销、商品、授权整个链条。</p>
      <p class="about-title">致力IP＋行业解决方案</p>
      <p class="about-desc">在成功合作400+品牌与企业，覆盖20+行业的经验之上。束光致力于有效链接IP与品牌，通过“筛选／评估／策动／创意／执行／管
控”的规范化流程，为各个行业提供IP的不同价值，包括流量、认知、场景、转化、产品力、视觉等等。</p>
      <p class="about-manage"><img src="~@/assets/manage.png" alt=""></p>
      <ul class="magage-list clearfix">
        <li><img src="~@/assets/p1.png" alt=""></li>
        <li><img src="~@/assets/p2.png" alt=""></li>
        <li><img src="~@/assets/p3.png" alt=""></li>
        <li><img src="~@/assets/p4.png" alt=""></li>
      </ul>
      <p class="about-title">具备成功经验的本土团队</p>
      <p class="about-desc">束光核心人马以原“同道大叔”IP运营团队建成，是一手打造中国新兴IP收入、估值、盈利的行业标杆，本土唯一一个从0开始，贯通
整个IP运营链，所有环节都有成功经验的团队。</p>
      <p class="about-manage"><img src="~@/assets/contact.png" alt=""></p>
      <div class="contact-detail">
        <p>公司全称：深圳市束光文化科技有限公司</p>
        <p>地址：广东省深圳市南山区软件产业园基地6栋801</p>
        <p>邮编：51800</p>
        <p>邮箱：bd@shujiguang.com</p>
        <p class="pop__back-btn">发布跨界授权合作</p>
      </div>
    </div>
    <base-footer></base-footer>
  </div>
</template>
<style lang="scss" scoped>
body, html{
  background: #fff;
}
.about-top {
  width: 100%;
  height: 240px;
  background: url(~@/assets/about_banner.png) center no-repeat;
  margin-bottom: 40px;
}
.about-logo {
  display: block;
  margin: 0 auto;
}
.about-title {
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 10px;
}
.about-desc {
  font-size: 18px;
  text-indent: 48px;
  line-height: 30px;
  letter-spacing: 1.5px;
}
.about-manage {
  text-align: center;
  margin-top: 90px;
  margin-bottom: 40px;
}
.magage-list {
  li {
    float: left;
    margin-right: 10px;
  }
}
.contact-detail {
  text-align: center;
  font-size: 16px;
  line-height: 28px;
}
.pop__back-btn{
  text-align: center;
  margin: 112px auto;
}
</style>

<script>
import { throttle } from '@/libs/util';
export default {
  data() {
    return {
      swiperOption: {
        autoplay: true,
        speed: 500,
        delay: 4000,
        loop: true,
        // pagination: true
        pagination: {
          el: '.swiper-pagination'
        }
      },
      isMobile: false,
      showLoginBox: false,
      showFixed: false
    };
  },
  created() {
    const ua = window.navigator.userAgent;

    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    const isMobile = isIphone || isAndroid;
    this.isMobile = isMobile;
  },
  mounted() {
    const dNavbar = document.querySelector('.base-navbar');
    var throttled = throttle(() => {
      if (dNavbar.getBoundingClientRect().top <= 0) {
        this.showFixed = true;
      } else {
        this.showFixed = false;
      }
    }, 60);
    window.onscroll = throttled;
    // 根据hash跳转到指定位置
    if (this.$route.hash) {
      this.scrollToDOM(this.$route.hash);
    }
  },
  methods: {
    scrollToDOM(select) {
      let offset = 60; // 偏移量
      const s = select || this.$route.hash;
      if (s === '#home') {
        offset = 0;
      }
      console.log('scrollToDOM: ' + s);
      // debugger;
      const destDOM = document.querySelector(s);
      const destTop =
        document.body.scrollTop +
        document.documentElement.scrollTop +
        destDOM.getBoundingClientRect().top -
        offset;
      window.scrollTo(0, destTop);
    }
  }
};
</script>
