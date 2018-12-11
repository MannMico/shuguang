<template>
  <div class="base-footer">
    <div class="base-footer__container width-fixed">
      <div class="footer__container">
        <div class="footer__left">
          <img class="footer__name-logo" src="@/assets/logo_up_navigation.png" alt>
          <div class="footer__desc">专注IP的创新经纪营销平台</div>
        </div>
        <div class="footer__mid">
          <div class="footer__main-text">IP授权营销</div>
          <div class="footer__sub-text">
            <div>邮箱：may@shujiguang.com</div>
            <div>电话：13537520823</div>
          </div>
        </div>
        <div class="footer__right">
          <div class="footer__main-text">IP版权入驻</div>
          <div class="footer__sub-text">邮箱：crater@shujiguang.com</div>
        </div>
      </div>
      <div class="footer__copyright">
        COPYRIGHT © 2018 深圳市束光文化科技有限公司
        <a href="http://www.miit.gov.cn/">粤ICP备18071035号-1</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~@/styles/var';
.base-footer {
  background: #f6f6f6;
  height: 300px;

  box-sizing: border-box;
  color: #000;
  position: relative;
  &__container {
    padding: 60px 200px;
  }
  .footer {
    &__container {
      display: flex;
      justify-content: space-between;
    }
    &__name-logo {
      display: block;
      width: 68px;
      height: 36px;
    }
    &__desc {
      margin-top: 26px;
      font-size: 24px;
      font-weight: $weight_light;
      letter-spacing: 1.08px;
    }
    &__main-text {
      font-size: 22px;
      font-weight: $weight_medium;
      letter-spacing: 0.99px;
    }
    &__sub-text {
      margin-top: 30px;
      font-size: 18px;
      font-weight: $weight_regular;
      letter-spacing: 0.81px;
    }
    &__copyright {
      position: absolute;
      bottom: 35px;
      left: 50%;
      transform: translate(-50%, 0);
      text-align: center;
      font-size: 16px;
      font-weight: $weight-light;

      letter-spacing: 0.72px;
      text-align: center;
    }
  }
}
</style>


<script>
export default {
  name: 'base-footer',
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
