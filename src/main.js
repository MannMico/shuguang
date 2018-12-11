import Vue from 'vue';
import './styles/index.scss';

import router from './router/index';
import store from './store/index';
import inject from './inject';

import App from './App.vue';
import { Input } from 'element-ui';
import Button from './components/button.vue';
import Footer from './components/footer.vue';
import Navbar from './components/navbar.vue';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;

Vue.use(inject);
Vue.use(VueAwesomeSwiper);

Vue.use(Input);

Vue.component(Button.name, Button);
Vue.component(Footer.name, Footer);
Vue.component(Navbar.name, Navbar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
