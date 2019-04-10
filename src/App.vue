<style lang="scss">
@import '~@/styles/var';
.login-box {
  .el-dialog {
    font-weight: $weight_regular;
    border-radius: 2px;
  }
  .el-dialog__body {
    padding: 49px 40px;
  }
  &__header{
    padding: 0;
  }
  &__headerbtn{
    top: 14px;
    right: 14px;
  }
  &__title {
    display: flex;
    font-size: 14px;
    color: #000000;
    letter-spacing: 1.08px;
    span {
      position: relative;
      bottom: -6px;
      margin-left: 13px;
    }
    img{
      width: auto;
      height: auto;
    }
  }
  &__body {
    margin-top: 40px;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0.9px;
  }
  &__label {
    color: #000;
    font-size: 14px;
  }
  .el-input {
    margin-top: 17px;
  }
  .el-input__inner {
    height: 35px;
    line-height: 35px;
    font-size: 12px;
  }
  &__tips {
    font-size: 12px;
    color: #888888;
    letter-spacing: 0.9px;
    margin-top: 17px;
    a {
      color:#4b9efe
    }
  }
  &__btn {
    margin-top: 18px;
    background-image: linear-gradient(-143deg, #ff9600 0%, #ff9600 94%);
    font-weight: $weight_medium;
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 1.08px;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    line-height: 35px;
  }
}
.pop__back-btn {
  display: inline-block;
  margin-top: 72px;
  padding: 0 30px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  // border-radius: 31px;
  border: 1px solid #333;
  cursor: pointer;
}
.el-icon-account{
    background: url('assets/account.png') center no-repeat;
}
.el-icon-account:before{
    content: "";
    font-size: 16px;
    visibility: hidden;
}
.el-icon-keyword{
    background: url('assets/keyword.png') center no-repeat;
}
.el-icon-keyword:before{
    content: "";
    font-size: 16px;
    visibility: hidden;
}
</style>

<template>
  <div id="app">
    <router-view/>
    <el-dialog
      :visible="$store.state.showLogin"
      :modal-append-to-body="true"
      class="login-box"
      :before-close="onClose"
      width="405px"
    >
      <div class="login-box__title">
        <img class="navbar__name-logo" src="@/assets/login_logo.png" alt>
        <span>专注IP的创新经纪营销平台</span>
      </div>
      <div class="login-box__body">
        <div class="login-box__label">账号密码登录</div>
        <el-input placeholder="请输入您的账号" v-model="nickname" prefix-icon="el-icon-account"></el-input>
        <el-input type="password" placeholder="请输入您的密码" v-model="password" prefix-icon="el-icon-keyword"></el-input>
        <div class="login-box__tips">
          <span>还没有账号？请先发布需求将获得邀请</span>
          <a @click="jmpIssue" href="javascript:;">立即发布需求</a>
        </div>
      </div>
      <div class="login-box__btn" @click="loginHandler">登录</div>
    </el-dialog>
  </div>
</template>

<script>
import { login } from '@/services/account';
export default {
  data() {
    return {
      nickname: '',
      password: ''
    };
  },
  mounted(){
    if(this.$route.name == 'Plan'){
      let getWidth = document.querySelector('#app')
      getWidth.style.minWidth = 0
    }
  },
  methods: {
    onClose() {
      this.$store.commit('toggleLogin', false);
      return true;
    },
    jmpIssue() {
      this.$store.commit('toggleLogin', false);
      this.$router.push('/issue?type=kuajietong');
    },
    loginHandler() {
      login(this.nickname, this.password)
        .then(data => {
          this.$store.commit('login', { token: data.token, nickname: this.nickname });
          this.$store.commit('toggleLogin', false);
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    }
  }
};
</script>
