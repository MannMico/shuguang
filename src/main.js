import Vue from 'vue';
import './styles/index.scss';

import router from './router/index';
import store from './store/index';
import inject from './inject';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(inject);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
