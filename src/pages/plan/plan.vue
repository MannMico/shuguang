<template>
  <div class="plan-page">
    <div class="plan-bar">
      <div class="plan-bar__container width-fixed padding-fixed">
        <router-link to="/">
          <img class="bar__name-logo" src="@/assets/logo_up_navigation_white.png" alt>
        </router-link>
        <div class="bar__tail">
          <div class="bar__user">
            <img class="user__avator" src="@/assets/user_login.png" alt>
            <div class="user__name">{{ $store.state.nickname}}</div>
          </div>
          <div class="bar__logout" @click="logoutHandler">退出</div>
        </div>
      </div>
    </div>
    <div class="plan__body width-fixed padding-fixed">
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
            <div class="case__title">相关案例</div>
            <div class="case__container">
              <div class="case__l1">
                <img class="case__img" src="@/assets/case1.png" alt>
                <img class="case__img" src="@/assets/case2.png" alt>
              </div>
              <div class="case__l2">
                <img class="case__img" src="@/assets/case3.png" alt>
                <img class="case__img" src="@/assets/case4.png" alt>
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
      <div class="plan__part2" v-if="basic">
        <div class="part__title">推荐IP：星座狗主页</div>
        <div class="part2__item-group">
          <div class="part2-item">
            <!-- 简介及定位 -->
            <plan-module :images="basic.front_images_introduction"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 人设介绍 -->
            <plan-module :images="basic.front_images_character"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 粉丝画像 -->
            <plan-module :images="basic.front_images_portrait"></plan-module>
          </div>

          <div class="part2-item">
            <!-- 基础图库 -->
            <plan-module :images="basic.front_images_basic_resource"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 主题图库 -->
            <plan-module :images="basic.front_images_theme_resource"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 合作案例 -->
            <plan-module :images="basic.front_images_case"></plan-module>
          </div>
        </div>
      </div>
    </div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import PlanModule from './plan-module.vue';
import { getPlanDetail } from '@/services/demand';
import './plan.scss';
export default {
  components: {
    PlanModule
  },
  data() {
    return {
      demandId: parseInt(this.$route.query.demandid || 0, 10),
      ipId: parseInt(this.$route.query.ipid || 0, 10),
      basic: null
    };
  },
  created() {
    if (this.$store.state.token) {
      this.fetchData();
    } else {
      this.$router.push({
        path: '/'
      });
    }
  },
  mounted() {},
  methods: {
    fetchData() {
      getPlanDetail(this.demandId, this.ipId)
        .then(data => {
          console.log(data);
          this.basic = data.ip_basic;
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    },
    logoutHandler() {
      this.$router.push({
        path: '/'
      });
      this.$store.commit('logout');
    }
  }
};
</script>
