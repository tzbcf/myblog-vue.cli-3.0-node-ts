import Vue from 'vue';
import Router from 'vue-router';
import gatewayRouter from './router/gateway';
import adminRouter from './router/admin';
import Inexistence from './views/404.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    gatewayRouter,
    adminRouter,
    {
      path: '/',
      redirect: '/gateway',
    },
    {
      path: '*',
      name: '404',
      component: Inexistence,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue'),
    },
  ],
});
