<template>
  <div class="plan-page">
    <div class="plan__bar">
      <img class="bar__name-logo" src="@/assets/logo_up_navigation_white.png" alt>
      <div class="bar__tail">
        <div class="bar__user">
          <img class="user__avator" src="@/assets/user_login.png" alt>
          <div class="user__name">xxxxx</div>
        </div>
        <div class="bar__logout">退出</div>
      </div>
    </div>
    <div class="plan__body">
      <div class="plan__part1">
        <div class="part__title">经纪人May为您匹配的IP营销方案</div>
        <div class="part1__main">
          <div class="part1__left">
            <div class="part1__manager">
              <img class="manager__avatar" src="@/assets/agent.png" alt>
              <div class="manager__info">
                <div class="manager-info__title">您的IP经纪人</div>
                <div class="manager-info__name">May Zhao</div>
                <div class="manager-info__level">等级: 金牌经纪人</div>
                <div class="manager-info__school">中山大学传播学院</div>
              </div>
            </div>
          </div>
          <div class="part1__case">
            <div>相关案例</div>
            <div class="case__container">
              <div class="case__l1">
                <img class="case__img" src alt>
                <img class="case__img" src alt>
              </div>
              <div class="case__l2">
                <img class="case__img" src alt>
                <img class="case__img" src alt>
              </div>
            </div>
          </div>
        </div>
        <div class="part1__desc">
          十年营销公司经验，曾任对接联合利华项目经理，深耕快消品行业，洞悉快销品市场的授权合作；对新文旅、新酒店行业有
          丰富的授权经验。深耕快消品行业，洞悉快销品市场的授权合作。
        </div>
        <div class="part1__suggestion">
          <div class="suggestion__title">来自金牌经纪人May的建议:</div>
          <div class="suggestion__content">
            五芳斋是中华传统品牌，具备传统节日的天然大流量；但是新生代人群对于传统食品关注度下降；需要从新生代
            关注点去切入兴趣点，星座狗是网生第一个团体IP，有丰富的人设故事。在加班场景里有天然的契合度；五芳
            斋新推出的营养外包套餐，恰恰也是这个人群需要的产品，加班狗好好吃饭，90后开始养生，都很好的切入了
            这个话题。
          </div>
        </div>
      </div>
      <div class="plan__part2">
        <div class="part__title">推荐IP：星座狗主页</div>
        <img class="part2__img" src alt>
      </div>
      <div style="width:70%;margin:20px auto;height:400px">
        <slider ref="slider" :options="options" @slide="slide" @tap="onTap" @init="onInit">
          <slideritem
            v-for="(item,index) in someList"
            :key="index"
            :style="item.style"
          >{{item.html}}</slideritem>
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
    <base-footer></base-footer>
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
import './plan.scss';
export default {
  components: {
    slider,
    slideritem
  },
  data() {
    return {
      someList: [],
      //Sliding configuration [obj]
      options: {
        pagination: true,
        thresholdDistance: 100, // 滑动距离阈值判定
        thresholdTime: 300, // 滑动时间阈值判定
        grabCursor: true, // 抓标样式
        speed: 300 // 滑动速度
        // timingFunction: 'ease', // 滑动方式
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
