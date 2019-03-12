<template>
  <div class="home-page">
    <base-navbar @change="scrollToDOM" :style="{visibility: showFixed ? 'hidden' : 'visible'}"></base-navbar>
    <base-navbar class="base-navbar--fixed" @change="scrollToDOM" v-show="showFixed"></base-navbar>
    <swiper class="home__header" :options="swiperOption">
      <swiper-slide class="header-slide" :class="`header-slide1${isMobile?'-m':''}`"></swiper-slide>
      <swiper-slide class="header-slide" :class="`header-slide2${isMobile?'-m':''}`"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <base-data :dataChose="homeIpList"/>
    <div class="ip-part2">
      <div class="content">
        <p class="ip-title">
          <span>IP授权营销产品方案</span>
          <span class="title-small">行业专业IP经济团队 提供定制化服务</span>
        </p>
        <ul class="partTwo-ul clearfix">
          <li class="partTwo-li" v-for="(item, index) in ipPartTwoList" :key="index" :style="{ background: 'url(' + item.bg + ') no-repeat' }">
            <span v-text="item.title"></span>
            <span v-text="item.desc"></span>
          </li>
        </ul>
        <p class="ip-btn">提交跨界授权合作</p>
      </div>
    </div>
    <div class="ip-part3 clearfix">
      <div class="content">
        <p class="ip-title">
          <span>IP版权资源</span>
          <span class="title-small">部分已入驻的热门IP</span>
        </p>
        <ul class="clearfix">
          <li class="ip-resource" v-for="(item, index) in ipPartThreeList" :key="index" 
          :class="index > 0 ? 'resource-other' : 'resource-main'" 
          :style="{ background: 'url(' + item.bg + ') no-repeat' }">
          <div class="resource-wrap">
            <p v-text="item.bigTitle"></p>
            <p v-text="item.smallTitle"></p>
          </div>
          </li>
        </ul>
        <ul class="clearfix">
          <li class="resouce-type" @click="typeIndex=index" v-for="(items, index) in ipPartThreeType" :key="index" :class="typeIndex==index?'active':''">
            <span v-text="items.name" :style="{ background: 'url(' + items.bg + ') no-repeat' }"></span>
          </li>
        </ul>
        <div v-for="(items, index) in ipPartThreeType" :key="index">
          <ul class="hide" v-for="(item, key) in items.lists" :key="key" :class="typeIndex==index?'show':''">
            <li class="type-img">
              <img :src="item.img" :alt="item.alt" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import './home.scss';
import { throttle } from '@/libs/util';
// import { slider, slideritem } from 'vue-concise-slider';
// import BussinessModule from './business-module.vue';
import DataChose from '@/assets/js/homeData.js';
export default {
  // components: {
  //   slider,
  //   slideritem,
  //   BussinessModule,
  //   Partner
  // },
  data() {
    return {
      homeIpList: DataChose.ipPart1,
      ipPartTwoList: DataChose.ipPart2,
      ipPartThreeList: DataChose.ipPart3.resourceList,
      ipPartThreeType: DataChose.ipPart3.resourceType,
      typeIndex: 0,
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
      someList: [],
      options: {
        pagination: false,
        thresholdDistance: 100, // 滑动距离阈值判定
        thresholdTime: 300, // 滑动时间阈值判定
        grabCursor: true, // 抓标样式
        speed: 300 // 滑动速度
        // timingFunction: 'ease',
        // 滑动方式
        // loop: false, // 无限循环
        // autoplay: 0 // 自动播放:时间[ms]
      },
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
    },
    leftArrowClicked() {
      this.$refs.slider.$emit('slidePre');
    },
    rightArrowClicked() {
      this.$refs.slider.$emit('slideNext');
    },
    toIssuePage(query) {
      this.$router.push({ path: `/issue?type=${query}` });
    }
  }
};
</script>
