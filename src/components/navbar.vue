<style lang="scss">
@import '~@/styles/var';
.base-navbar {
  padding: 0 40px 0 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #eee;
  .navbar {
    &__name-logo {
      width: 68px;
      height: 36px;
    }

    &__right {
      display: flex;
      align-items: center;
    }

    &__nav {
      display: inline-block;
      border-bottom: none;

      .el-menu-item,
      .el-submenu__title {
        font-size: 20px;
      }
    }

    &__login-btn {
      margin-left: 60px;
      display: inline-block;
    }
  }

  .nav {
    &__submenu {
      .el-menu--popup {
        min-width: 0;
      }
    }
  }

  .login-box {
    .el-dialog {
      font-weight: $weight_regular;
      border-radius: 2px;
    }
    .el-dialog__body {
      padding: 0 72px 72px 72px;
    }
    &__title {
      display: flex;
      justify-content: center;
      font-size: 24px;
      color: #000000;
      letter-spacing: 1.08px;
      span {
        margin-left: 6px;
      }
    }
    &__body {
      margin-top: 20px;
      font-size: 20px;
      color: #000000;
      letter-spacing: 0.9px;
    }
    &__label {
      color: #000;
      font-size: 20px;
      line-height: 50px;
      margin-top: 10px;
    }
    .el-input {
      margin-bottom: 24px;
    }
    .el-input__inner {
      height: 64px;
      line-height: 64px;
    }
    &__tips {
      font-size: 20px;
      color: #888888;
      letter-spacing: 0.9px;
    }
    &__btn {
      margin-top: 22px;
      background-image: linear-gradient(-143deg, #1068fa 0%, #3b23e6 94%);
      font-weight: $weight_medium;
      font-size: 24px;
      color: #ffffff;
      letter-spacing: 1.08px;
      text-align: center;
      border-radius: 4px;
      line-height: 64px;
    }
  }
}
</style>

<template>
  <div class="base-navbar">
    <el-dialog :visible.sync="showLoginBox" class="login-box" width="640px">
      <div class="login-box__title">
        <img class="navbar__name-logo" src="@/assets/logo_up_navigation.png" alt>
        <span>专注IP的创新经纪营销平台</span>
      </div>
      <div class="login-box__body">
        <div class="login-box__label">账号密码登录</div>
        <el-input placeholder="请输入您的账号"></el-input>
        <el-input type="password" placeholder="请输入您的密码"></el-input>
        <div class="login-box__tips">
          <span>还没有账号？请先发布需求将获得邀请</span>
          <router-link to="/issue?type=kuajietong">立即发布需求</router-link>
        </div>
      </div>
      <div class="login-box__btn">登录</div>
    </el-dialog>
    <img class="navbar__name-logo" src="@/assets/logo_up_navigation.png" alt>
    <div class="navbar__right">
      <el-menu class="el-menu-demo navbar__nav" mode="horizontal" text-color="#000" router>
        <el-menu-item index="/home#home">首页</el-menu-item>
        <el-submenu index="2" popper-class="nav__submenu">
          <template slot="title">产品服务</template>
          <el-menu-item index="/home#kjt">跨界通</el-menu-item>
          <el-menu-item index="/home#xyd">效易达</el-menu-item>
          <el-menu-item index="/home#hym">好易卖</el-menu-item>
        </el-submenu>
        <el-menu-item index="/home#partner">合作品牌</el-menu-item>
      </el-menu>
      <base-button class="navbar__login-btn" @click="loginBtnClicked">客户登录</base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-navbar',
  props: ['loginCb'],
  data() {
    return {
      showLoginBox: false
    };
  },
  created() {},
  mounted() {},
  methods: {
    loginBtnClicked() {
      this.showLoginBox = true;
      this.loginCb();
    }
  }
};
</script>
