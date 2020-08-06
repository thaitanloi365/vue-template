import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

import Login from '@/views/login';

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },

    { path: '*', redirect: '/404', hidden: true },
  ],
});
