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
    <div class="ip-part4 clearfix">
      <div class="content">
        <p class="ip-title white-text">
          <span>一站式授权解决方案</span>
          <span class="title-small white-text">给客户省心省力  实现真赋能</span>
        </p>
        <div class="ip-introduce">
          <div class="ip-detail clearfix">
            <dl class="ip-detail-title clearfix">
              <dt><img src="../../assets/qa.png" alt=""></dt>
              <dd>
                <p>传统IP授权：</p>
                <span>1、大部分所谓IP只限于“有一个形象”，立不了人设；2、简单粗暴，把IP形象直接用在产品／推广上</span>
                <span>3、没有利用好IP特点，突出不了产品卖点，传达不了品牌价值，甚至带动不了营销推广；......</span>
              </dd>
            </dl>
            <dl class="detail-produce">
              <dt>
                <img src="../../assets/detail.png" alt="">
              </dt>
              <dd>
                <span class="detail-line"></span>
                <p class="detail-big">束光IP授权方案</p>
                <p class="detail-list">需求分析、IP策略定位到跨界战术输出</p>
                <p class="detail-list">在海量的正版IP资源池中为你匹配到“门当户对”的IP</p>
                <p class="detail-list">海量媒体资源匹配投放，专业IP产品创新设计能力</p>
                <p class="detail-list">运用IP解决品牌声量放大、人群沟通到位的实际问题</p>
                <p class="detail-list">实打实帮助企业“选好IP，用好IP”</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div class="ip-part5 clearfix">
      <div class="content">
        <p class="part5-title">合作伙伴这样评价束光</p>
        <p class="part5-line"></p>
        <div class="part5-eval clearfix">
          <p class="quot-left"><img src="../../assets/quot-left.png" alt="" /></p>
          <p class="quot-text hide" :class="profileIndex==index?'show':''" v-for="(item, index) in profileLists" :key="index" v-text="item.eval"></p>
          <p class="quot-right"><img src="../../assets/quot-right.png" alt="" /></p>
        </div>
        <ul class="clearfix">
          <li class="profile-list" @click="profileIndex=index" :class="profileIndex==index?'active':''" v-for="(item, index) in profileLists" :key="index">
            <img class="profile-img" :src="item.headImg" alt="" />
            <p class="profile-name" v-text="item.name"></p>
            <p class="profile-label" v-for="(v, k) in item.labels" :key="k" v-text="v"></p>
          </li>
        </ul>
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
      profileLists: DataChose.ipPart5,
      profileIndex: 0,
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
