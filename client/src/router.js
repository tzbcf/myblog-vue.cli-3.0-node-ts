import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Inexistence from './views/404.vue'
import Index from './components/index.vue'
import About from './components/about.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: '404',
      component: Inexistence
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/',
          name: 'About',
          component: About
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
