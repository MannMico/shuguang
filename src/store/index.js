import Vue from 'vue';
import Vuex from 'vuex';
import { setItem, getItem } from '@/libs/borwer';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getItem('token'),
    showLogin: false
  },
  mutations: {
    login(state, { token }) {
      setItem('token', token);
      state.token = token;
    },
    toggleLogin(state, value) {
      state.showLogin = value;
    }
  },
  actions: {}
});
