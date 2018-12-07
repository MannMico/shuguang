<template>
  <div class="home-page">
    <swiper class="home__header" :options="swiperOption">
      <swiper-slide class="header-slide header-slide1">
        <div class="header-slide__text-container">
          <img src="@/assets/logo.png" alt class="header-slide__name-logo">
          <div class="header-slide__decs1">专注IP的创新经济营销平台</div>
          <div class="header-slide__decs2">做IP营销，找束光；专业IP经纪人对接更专业，更省事，更有效。</div>
          <button class="header-slide__btn">开启营销新增长</button>
        </div>
      </swiper-slide>
      <swiper-slide class="header-slide header-slide2">
        <div class="header-slide__text-container">
          <img src="@/assets/logo.png" alt class="header-slide__name-logo">
          <div class="header-slide__decs1">专注IP的创新经济营销平台</div>
          <div class="header-slide__decs2">做IP营销，找束光；专业IP经纪人对接更专业，更省事，更有效。</div>
          <button class="header-slide__btn">开启营销新增长</button>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="home__body">
      <base-navbar></base-navbar>
      <div class="home__business-container">
        <bussiness-module>
          <template slot="title">IP跨界通：基于实战营销的订制化方案</template>
          <template slot="desc">
            如果普通的“甩手掌柜式授权”已经无法解决您的痛点，这是专
            门为您订制的“IP授权2.0”升级方案。我们强调门当户对、定
            向赋能，从需求分析、策略定位，到ip精准匹配、跨界战术、
            联动执行绝非简单的“IP买卖”，而是解决问题无论是传播声
            量，品牌表达，人群沟通，效果转化。缺什么补什么，要什么
            来什么。
          </template>
          <template slot="img">
            <img src="@/assets/bussiness-kjt.png" alt>
          </template>
        </bussiness-module>
        <bussiness-module negative>
          <template slot="title">IP效易达：小快灵的［IP＋空间体验］新模式</template>
          <template slot="desc">
            针对餐饮、零售、连锁、文娱量身打造的效果导向型IP跨界模式。将
            IP有效贯穿线下消费场景的“空间轴”，重新优化线下消费行为的“体
            验链”同时，高聚焦，轻启动，低负担，短平快让每一个合作伙伴都
            能量力而为、有效而归。
          </template>
          <template slot="img">
            <img src="@/assets/bussiness-xyd.png" alt>
          </template>
        </bussiness-module>
        <bussiness-module>
          <template slot="title">IP好易卖：多元竞争时代，更简单有效的［IP＋产品］</template>
          <template slot="desc">
            按国际经典范式打造的［IP＋产品］的授权合作服务。从产品
            视觉、产品卖点、内容营销等多个维度，用IP为您有效加持更
            重要的是：以合理的资源，解决刀刃上的问题。让亟需提升产
            品力的企业，用得起IP、会用IP
          </template>
          <template slot="img">
            <img src="@/assets/bussiness-hym.png" alt>
          </template>
        </bussiness-module>
        <div class="business__extra">
          <div class="extra-item">
            <img class="extra-item__img" src="@/assets/option1.png" alt>
            <div class="extra-item__text">专业IP经纪人为品牌匹配门当户对的IP，给予品牌真赋能</div>
          </div>
          <div class="extra-item">
            <img class="extra-item__img" src="@/assets/option2.png" alt>
            <div class="extra-item__text">IP为品牌赋予人格化属性，增加亲近感，让品牌传递更有温度</div>
          </div>
          <div class="extra-item">
            <img class="extra-item__img" src="@/assets/option3.png" alt>
            <div class="extra-item__text">IP赋能品牌营销，构建立体画传播内容，不再是固化的广告露出</div>
          </div>
          <div class="extra-item">
            <img class="extra-item__img" src="@/assets/option4.png" alt>
            <div class="extra-item__text">IP深度参与餐饮，零售，酒旅，快销品等行业，提升产业互联网的消费体验</div>
          </div>
        </div>
      </div>
      <div class="home__partner">
        <div class="partner__title">全球众多合作伙伴，值得信赖</div>
        <div class="partner__items">
          <partner></partner>
          <partner></partner>
        </div>
        <div class="partner__items">
          <slider ref="slider" :options="options" @slide="slide" @tap="onTap" @init="onInit">
            <slideritem>
              <div class="partner-slider">
                <partner></partner>
                <partner></partner>
              </div>
            </slideritem>
            <slideritem>
              <div class="partner-slider">
                <partner></partner>
                <partner></partner>
              </div>
            </slideritem>
            <div slot="loading">
              <div class="loadingDot">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </slider>
        </div>
      </div>
    </div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import './home.scss';

import { slider, slideritem } from 'vue-concise-slider';
// import { Menu, Submenu, MenuItem } from 'element-ui';
import BussinessModule from './business-module.vue';
import Partner from './partner.vue';
export default {
  components: {
    slider,
    slideritem,
    // elMenu: Menu,
    // elSubmenu: Submenu,
    // elMenuItem: MenuItem,
    BussinessModule,
    Partner
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      someList: [],
      options: {
        pagination: true,
        thresholdDistance: 100, // 滑动距离阈值判定
        thresholdTime: 300, // 滑动时间阈值判定
        grabCursor: true, // 抓标样式
        speed: 300 // 滑动速度
        // timingFunction: 'ease',
        // 滑动方式
        // loop: false, // 无限循环
        // autoplay: 0 // 自动播放:时间[ms]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
