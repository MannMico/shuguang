import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dayjs from 'dayjs';

Vue.use(ElementUI);
Vue.prototype.$dayjs = dayjs;
export default {
  install(Vue, options) {}
};
