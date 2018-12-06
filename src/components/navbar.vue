<style lang="scss">
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
}
</style>

<template>
  <div class="base-navbar">
    <img class="navbar__name-logo" src="@/assets/logo_up_navigation.png" alt>
    <div class="navbar__right">
      <el-menu class="el-menu-demo navbar__nav" mode="horizontal" text-color="#000">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2" popper-class="nav__submenu">
          <template slot="title">产品服务</template>
          <el-menu-item index="2-1">跨界通</el-menu-item>
          <el-menu-item index="2-2">效易达</el-menu-item>
          <el-menu-item index="2-3">好易卖</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">合作品牌</el-menu-item>
      </el-menu>
      <base-button class="navbar__login-btn">客户登录</base-button>
    </div>
  </div>
</template>

<script>
import { Menu, Submenu, MenuItem } from 'element-ui';
export default {
  name: 'base-navbar',
  components: {
    elMenu: Menu,
    elSubmenu: Submenu,
    elMenuItem: MenuItem
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
