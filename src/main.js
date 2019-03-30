import Vue from 'vue';
import './styles/index.scss';
import 'amfe-flexible'
import './assets/js/flex.js';
import router from './router/index';
import store from './store/index';
import inject from './inject';

import App from './App.vue';

import Button from './components/button.vue';
import Footer from './components/footer.vue';
import Navbar from './components/navbar.vue';
import DataBase from './components/database.vue';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

router.beforeEach((to, from, next) => {
  /*移动端页面添加meta */
  if (to.meta.content) {
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /*修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
Vue.config.productionTip = false;

Vue.use(inject);
Vue.use(VueAwesomeSwiper);

Vue.component(Button.name, Button);
Vue.component(Footer.name, Footer);
Vue.component(Navbar.name, Navbar);
Vue.component(DataBase.name, DataBase);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
