<style lang="scss">
body,html{
  background: #f5f5f5;
}
.ml30{
  margin-left: 30px;
}
.all-case {
  text-align: center;
}
.related-title{
  position: relative;
  font-size: 18px;
  &:before{
    position: absolute;
    left: -13px;
    top:50%;
    margin-top:-9px;
    content:'';
    width: 4px;
    height: 18px;
    background: #fe992a;
    border-radius: 2px;
  }
}
.detail-left{
  float: left;
  width: 895px;
}
.detail-right{
  width: 278px + 7;
  float: left;
  margin-left: 27px - 7;
  .detail-related{
    padding: 24px 39px;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 4px;
    &:last-child{
      width: 278px;
      margin-left: 7px;
      margin-top: 40px;
      padding: 24px 16px;
      .related-title{
        margin-left: 13px;
      }
    }
    .related-ul{
      margin-top: 14px;
      li{
        float: left;
        margin-right: 37px;
        font-size: 16px;
        line-height: 26px;
      }
    }
    .related-btn{
      width: 210px;
      height: 50px;
      margin: 23px 0 20px;
      font-size: 16px;
      border-radius: 3px;
      background: #fe992a;
      color: #fff;
      text-align: center;
      letter-spacing: 1px;
      line-height: 50px;
      cursor: pointer;
    }
    .related-person{
      font-size: 13px;
    }
    .related-dl{
      margin-top: 20px;
      dt{
        width: 246px;
        height: 246px;
        margin-bottom: 10px;
      }
      dd{
        font-size: 16px;
        padding: 0 6px;
      }
    }
  }
}
.detail-lists {
  width: 895px + 30;
  color: #fff;
  .detail-part {
    position: relative;
    float: left;
    width: 278px;
    height: 380px;
    margin-bottom: 40px;
    margin-right: 30px;
    background-size: contain;
    border-radius: 3px;
    cursor: pointer;
  }
}
.detail-list-name {
  width: 265px;
  margin: 5px auto 0;
  font-size: 16px;
  line-height: 36px;
  color: #333;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.detail-list-desc {
  width: 265px;
  margin: 0 auto;
  font-size: 13px;
  line-height: 23px;
  color: #999;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.detail-list-hover {
  &:hover {
    img {
      border-radius: 3px;
      position: relative;
      top: -2px;
      box-shadow: 0 5px 5px rgba($color: #000, $alpha: .3);
    }
    .detail-list-name {
      color: #fe992a;
    }
  }
}
.detail-title-big {
  font-size: 13px;
  color:#999;
  margin: 30px 0 20px;
}
.detail-content-txt {
  background: #fff;
  padding: 30px 25px 0;
  border-radius: 4px;
  h2{
    font-size: 20px;
    line-height: 20px;
  }
  .detail-content-paragraph {
    font-size: 14px;
    color: #333;
    padding-bottom: 30px;
    line-height: 24px;
    text-align: justify;
    .detail-bold {
      font-weight: bold;
    }
    img {
      width: 100%;
    }
  }
}
.case-more {
  margin: 30px 0 17px;
}
</style>

<template>
  <div class="home-page">
    <base-navbar @change="scrollToDOM" :style="{visibility: showFixed ? 'hidden' : 'visible'}"></base-navbar>
    <base-navbar class="base-navbar--fixed" @change="scrollToDOM" v-show="showFixed"></base-navbar>
    <div class="content clearfix">
      <p class="detail-title-big">全部授权案例  /案例详情</p>
      <div class="detail-left">
        <div class="detail-content-txt">
          <h2 v-text="caseDats.caseDetail.caseName"></h2>
          <p class="detail-title-big">案例详情</p>
          <div class="detail-content-paragraph" v-for="(v, index) in caseDats.caseDetail.caseTxt" :key="index">
            <p v-if="v.type=='p'" :class="v.isBold ? 'detail-bold' : ''" v-text="v.content"></p>
            <img v-else-if="v.type=='img'" :src="v.content"/>
          </div>
        </div>
        <p class="case-more">更多案例</p>
        <ul class="detail-lists clearfix">
          <li class="detail-part detail-list-hover" v-for="(item, k) in caseDats.caseDetail.caseMore" :key="k" @click="goToDetail(item.tid)" :data-tid="item.tid">
            <img :src="item.ctBg" alt="" width="278" height="278" />
            <p class="detail-list-name" v-text="item.name"></p>
            <p class="detail-list-desc" v-text="item.desc"></p>
          </li>
        </ul>
      </div>
      <div class="detail-right">
        <div class="detail-related">
          <p class="related-title">案例摘要</p>
          <ul class="related-ul clearfix">
            <li v-for="(l, i) in caseDats.caseDetail.caseLabel" :key="i" v-text="l"></li>
          </ul>
        </div>
        <div class="detail-related">
          <p class="related-title">有相似授权需求？</p>
          <p class="related-btn">发布授权任务</p>
          <p class="related-person">联系经纪人：May  18128857007 </p>
        </div>
        <div class="detail-related">
          <p class="related-title">相关案例</p>
          <dl class="related-dl" v-for="(caseThe, index) in caseDats.caseDetail.caseRelated" :key="index">
            <dt><img :src="caseThe.ctBg" alt="" width="246" height="246"></dt>
            <dd v-text="caseThe.name"></dd>
          </dl>
        </div>
      </div>
    </div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import caseData from '@/assets/js/caseData.js';
import { throttle } from '@/libs/util';
export default {
  data() {
    return {
      caseDats: caseData.caseList[0],
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
    }
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
    goToDetail(tid) {
      this.$router.push({ path: '/case-detail/' + tid });
    }
  }
};
</script>
