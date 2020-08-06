import '@yzfe/vue-svgicon-polyfill';

import Vue from 'vue';
import Cookies from 'js-cookie';
import Element from 'element-ui';
import enLang from 'element-ui/lib/locale/lang/en';

import VueSvgIcon from 'vue-svgicon';
import 'vue-svgicon/dist/svgicon.css';

import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'; // global css

import App from './App';
import store from './store';
import router from './router';
import * as filters from './filters';

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.use(VueSvgIcon, {
  tagName: 'icon',
});

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  locale: enLang,
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
