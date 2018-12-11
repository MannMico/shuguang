<style lang="scss">
@import '~@/styles/var';

.nav__submenu .el-menu-item {
  font-size: 18px;
  text-align: center;
}
.base-navbar {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  overflow: hidden;

  .el-menu-item,
  .el-submenu {
    border-bottom: 2px solid transparent;
  }
  &__container {
    position: relative;
    height: 100%;
    padding-right: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar {
    &__name-logo {
      width: 68px;
      height: 36px;
    }

    &__nav {
      display: inline-block;
      border-bottom: none;

      .el-menu-item,
      .el-submenu__title {
        font-size: 20px;
        width: 200px;
        text-align: center;
      }
      .el-menu-item:hover,
      .is-opened .el-submenu__title {
        border-bottom-color: rgb(73, 110, 214) !important;
      }
    }

    &__login-btn {
      position: absolute;
      display: block;
      top: 50%;
      right: -40px;
      transform: translateY(-50%);
    }
  }

  .nav {
    &__submenu {
      .el-menu--popup {
        min-width: 0;
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="base-navbar">
      <div class="base-navbar__container width-fixed padding-fixed">
        <img class="navbar__name-logo" src="@/assets/logo_up_navigation.png" alt>
        <el-menu
          class="el-menu-demo navbar__nav"
          mode="horizontal"
          text-color="#000"
          active-text-color="#496ED6"
          router
          :default-active="`/${$route.hash}`"
          @select="selectMenu"
        >
          <el-menu-item index="/#home">首页</el-menu-item>
          <el-submenu index="2" popper-class="nav__submenu">
            <template slot="title">产品服务</template>
            <el-menu-item index="/#kjt">跨界通</el-menu-item>
            <el-menu-item index="/#xyd">效易达</el-menu-item>
            <el-menu-item index="/#hym">好易卖</el-menu-item>
          </el-submenu>
          <el-menu-item index="/#partner">合作品牌</el-menu-item>
        </el-menu>
        <base-button class="navbar__login-btn" @click="loginBtnClicked">客户登录</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-navbar',
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    loginBtnClicked() {
      this.$store.commit('toggleLogin', true);
      this.cb();
    },
    selectMenu(index) {
      const hash = index.split('/')[1];
      console.log('selectMenu: ' + hash);
      this.$emit('change', hash);
    }
  }
};
</script>
