<style lang="scss">
@import '~@/styles/var';

.nav__submenu {
  .el-menu-item {
    font-size: 18px;
    text-align: center;
  }
  .is-active {
    color: #496ed6 !important;
  }
}
.base-navbar {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  overflow: hidden;

  .el-menu-item,
  .el-submenu {
    color: #fe992a;
  }
  &__container {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar {
    // &__name-logo {
      // width: 404px;
      // height: 102px;
    // }
    &__slogan{
      position: absolute;
      bottom: 9px;
      left: 52px;
      font-size: 12px;
    }
    &__right {
      display: flex;
      align-items: center;
    }
    &__nav {
      display: inline-block;
      border-bottom: none!important;

      .el-menu-item,
      .el-submenu__title {
        font-size: 19px;
        // width: 200px;
        text-align: center;
        padding: 0 30px;
      }
      .el-menu-item:hover,
      .is-opened .el-submenu__title,
      .is-active .el-submenu__title {
        color: #fe992a;
      }
    }

    &__login-btn {
      margin-left: 103px;
    }
    &__nickname {
      font-size: 20px;
      color: #0654d6;
      cursor: pointer;
    }
    &__logout {
      margin-left: 20px;
      font-size: 20px;
      color: #0d1014;
      cursor: pointer;
    }
  }

  .nav {
    &__submenu {
      .el-menu--popup {
        min-width: 0;
      }
    }
  }
  .el-menu--horizontal>.el-menu-item{
    &:hover{
      color:#fe992a!important;
    }
    &.is-active{
      border-bottom: none;
    }
  }
}
</style>

<template>
  <div>
    <div class="base-navbar">
      <div class="base-navbar__container width-fixed padding-fixed">
        <img class="navbar__name-logo" src="@/assets/logo_top.png" alt>
        <p class="navbar__slogan">找IP授权，就上我正版</p>
        <div class="navbar__right">
          <el-menu
            :default-active="`${$route.path}`"
            class="el-menu-demo navbar__nav"
            mode="horizontal"
            text-color="#000"
            router
            active-text-color="#fe992a"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/case-list">成功案例</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
          </el-menu>
          <base-button
            class="navbar__login-btn"
            @click="loginBtnClicked"
            v-if="!$store.state.loginValid"
          >登录</base-button>
          <div class="navbar__user-info" v-else>
            <span class="navbar__nickname" @click="toPlanPage">{{$store.state.nickname}}</span>
            <span class="navbar__logout" @click="logoutBtnClicked">退出</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-navbar',
  data() {
    return {
      recommendId: this.$route.query.recommendid
    };
  },
  created() {
    // token存在 && 未验证 :  验证token是否有效
    if (!this.$store.state.loginValid && this.$store.state.token) {
      this.$store
        .dispatch('checkUser')
        .then(() => {
          console.log('已登录');
        })
        .catch(err => {
          console.log('未登录');
        });
    }
  },
  mounted() {},
  methods: {
    loginBtnClicked() {
      this.$store.commit('toggleLogin', true);
    },
    logoutBtnClicked() {
      this.$store.commit('logout', true);
    },
    toPlanPage() {
      if (this.recommendId) {
        this.$router.push({
          path: `/plan?recommendid=${this.recommendId}`
        });
      }
    },
    selectMenu(index) {
      const hash = index.split('/')[1];
      console.log('selectMenu: ' + hash);
      this.$emit('change', hash);
    }
  }
};
</script>
