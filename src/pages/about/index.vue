<template>
  <div class="home-page">
    <base-navbar @change="scrollToDOM" :style="{visibility: showFixed ? 'hidden' : 'visible'}"></base-navbar>
    <base-navbar class="base-navbar--fixed" @change="scrollToDOM" v-show="showFixed"></base-navbar>
    <div class="about-top"></div>
    <div class="content clearfix">
      <img class="about-logo" :src="aboutAllData.topImgLogo" />
      <div v-for="(item,ckey) in aboutAllData.topText" :key="ckey+'a'">
        <p class="about-title" v-text="item.bigTitle"></p>
        <p class="about-desc" v-text="item.content"> </p>
      </div>
      <p class="about-manage"><img src="~@/assets/manage.png" alt=""></p> 
      <ul class="magage-list clearfix">
        <li v-for="(item,index) in aboutAllData.centerCeo" :key="index" 
        @mousemove="isIndex = index" 
        @mouseout="isIndex=-1">
          <div class="ceo-produce" :class="isIndex==index?'show':'hide'">
            <p class="ceo-name" v-text="item.bigProduce"></p>
            <p v-text="item.mediumProduce"></p>
            <div class="ceo-profile">
              <p  v-for="(v,k) in item.smallProduce" :key="k" v-text="v"></p>
            </div>
          </div>
          <img :src="item.bgImg" alt="">
        </li>
      </ul>
      <div v-for="(item,bkey) in aboutAllData.bottomText" :key="bkey+'b'">
        <p class="about-title" v-text="item.bigTitle"></p>
        <p class="about-desc" v-text="item.content"></p>
      </div>
      <p class="about-manage"><img src="~@/assets/contact.png" alt=""></p>
      <div class="contact-detail">
        <p v-for="(item,cindex) in aboutAllData.contactText" :key="cindex+'c'" v-text="item"></p>
        <p class="pop__back-btn" @click="toThisRoute('issue')">发布跨界授权合作</p>
      </div>
    </div>
    <base-footer></base-footer>
    <fix-btn :isIssue="false"/>
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
    position: relative;
    float: left;
    margin-right: 16px;
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
.ceo-produce{
  position: absolute;
  left: 0;
  width: 285px;
  height: 460px;
  float: left;
  background: #242a36;
  color: #fff;
  font-size: 14px;
  padding-left: 20px;
  line-height: 14px;
  .ceo-name{
    margin-top: 109px;
    margin-bottom: 11px;
    font-size: 18px;
  }
  .ceo-profile{
    width: 248px;
    margin-top: 135px;
    line-height: 24px;
  }
}
</style>

<script>
import { throttle } from '@/libs/util';
import aboutData from '@/assets/js/aboutData.js';
export default {
  data() {
    return {
      isIndex: -1,
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
      showFixed: false,
      aboutAllData:aboutData.aboutData,
      ceoList:[
        {
          bigProduce:'李晗 Hamlee',
          mediumProduce:'束光文化创始人  CEO',
          smallProduce:['前“脉脉”创始团队员工','产品经理 前“陪我”APP创始人','前“同道大叔”联合创始人、COO'],
          bgImg:require('../../assets/p1.png')
        },
        {
          bigProduce:'sad',
          mediumProduce:'sad',
          smallProduce:['sadasd','sadasdas','sdadas'],
          bgImg:require('../../assets/p2.png')
        },
        {
          bigProduce:'sad',
          mediumProduce:'sad',
          smallProduce:['sadasd','sadasdas','sdadas'],
          bgImg:require('../../assets/p3.png')
        },
        {
          bigProduce:'sad',
          mediumProduce:'sad',
          smallProduce:['sadasd','sadasdas','sdadas'],
          bgImg:require('../../assets/p4.png')
        }
      ]
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
