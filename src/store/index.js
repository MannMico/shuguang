import Vue from 'vue';
import Vuex from 'vuex';
import { setItem, getItem, removeItem } from '@/libs/borwer';
import { getUser } from '@/services/account';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getItem('token'),
    nickname: getItem('nickname'),
    showLogin: false,
    loginValid: false
  },
  mutations: {
    login(state, { token, nickname }) {
      setItem('token', token);
      setItem('nickname', nickname);
      state.token = token;
      state.nickname = nickname;
      state.loginValid = true;
    },
    logout(state) {
      removeItem('token');
      removeItem('nickname');
      state.token = '';
      state.nickname = '';
      state.loginValid = false;
    },
    tokenValid(state, value) {
      state.loginValid = value;
    },
    toggleLogin(state, value) {
      state.showLogin = value;
    }
  },
  actions: {
    // 根据token获取用户信息
    checkUser(context) {
      return new Promise((resolve, reject) => {
        getUser()
          .then(data => {
            context.commit('tokenValid', true);
            resolve();
          })
          .catch(err => {
            context.commit('tokenValid', false);
            reject();
          });
      });
    }
  }
});
