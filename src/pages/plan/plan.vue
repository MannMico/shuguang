<template>
  <div class="plan-page">
    <div class="plan-bar">
      <div class="plan-bar__container width-fixed padding-fixed">
        <router-link :to="`/?recommendid=${recommendId}`">
          <img class="bar__name-logo" src="@/assets/logo_up_navigation_white.png" alt>
        </router-link>
        <div class="bar__tail">
          <template v-if="$store.state.loginValid">
            <div class="bar__user">
              <img class="user__avator" src="@/assets/user_login.png" alt>
              <div class="user__name">{{ $store.state.nickname }}</div>
            </div>
            <div class="bar__logout" @click="logoutHandler">退出</div>
          </template>
        </div>
      </div>
    </div>
    <div class="plan__body width-fixed padding-fixed" v-if="detail">
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
          5年策划营销经验，曾任同道大叔品牌经理，实操过百丽、丽星邮轮、唯品会等几十个与同道大叔的IP授权整合营销项目，在
          美妆、食品、文旅、酒店等行业有丰富的授权经验。擅长挖掘IP价值，从IP营销策略到项目执行，为品牌实现真赋能。
        </div>
        <div class="part1__suggestion">
          <div class="suggestion__title">来自金牌经纪人May的建议:</div>
          <div class="suggestion__content">{{detail.recommendation}}</div>
        </div>
      </div>
      <div class="plan__part2">
        <div class="part__title">推荐IP：{{detail.ip_name}}</div>
        <div class="part2__item-group">
          <div class="part2-item">
            <!-- 简介及定位 -->
            <plan-module :images="detail.front_images_introduction"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 人设介绍 -->
            <plan-module :images="detail.front_images_character"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 传播数据 -->
            <plan-module :images="detail.front_images_platform"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 粉丝画像 -->
            <plan-module :images="detail.front_images_portrait"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 基础图库 -->
            <plan-module :images="detail.front_images_basic_resource"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 主题图库 -->
            <plan-module :images="detail.front_images_theme_resource"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 衍生品 -->
            <plan-module :images="detail.front_images_derivative"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 合作案例 -->
            <plan-module :images="detail.front_images_case"></plan-module>
          </div>
          <div class="part2-item">
            <!-- 内容创作计划 -->
            <plan-module :images="detail.front_images_creation"></plan-module>
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
      recommendId: parseInt(this.$route.query.recommendid || 0, 10),
      detail: null,
      hasFetch: false
    };
  },
  watch: {
    '$store.state.loginValid'(val, oldVal) {
      console.log('loginValid changed: ' + this.$store.state.loginValid);
      if (val) {
        this.fetchData();
        this.hasFetch = true;
      }
    }
  },
  created() {
    if (!this.$store.state.token) {
      // 弹出登录框
      console.log('没有token，弹出登录框');
      this.$store.commit('toggleLogin', true);
    } else {
      // 1. token过期 -> 弹出登录框   2. token有效 this.fetchData()
      if (!this.$store.state.loginValid) {
        this.$store
          .dispatch('checkUser')
          .then(() => {
            console.log('token有效');
            if (!this.hasFetch) {
              this.fetchData();
            }
          })
          .catch(err => {
            // token过期 -> 弹出登录框
            console.log('token失效 -> 弹出登录框');
            this.$store.commit('toggleLogin', true);
          });
      } else {
        console.log('token有效');
        if (!this.hasFetch) {
          this.fetchData();
        }
      }
    }
  },
  mounted() {},
  methods: {
    fetchData() {
      this.hasFetch = true;
      getPlanDetail(this.recommendId)
        .then(data => {
          console.log(data);
          this.detail = data;
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
