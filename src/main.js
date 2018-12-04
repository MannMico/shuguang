import Vue from 'vue';
import './styles/index.scss';

import router from './router/index';
import store from './store/index';
import inject from './inject';

import App from './App.vue';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;

Vue.use(inject);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
