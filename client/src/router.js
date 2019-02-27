import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/gateway/Home.vue'
// import Inexistence from './views/common/404.vue'
import Index from './components/gateway/index.vue'
// import About from './components/gateway/about.vue'
// import leaveWord from './components/gateway/leaveWord.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
    // {
    //   path: '*',
    //   name: '404',
    //   component: Inexistence
    // },
    // {
    //   path: '/',
    //   component: Home,
    //   children: [
    //     {
    //       path: '/',
    //       name: 'Index',
    //       component: Index
    //     },
    //     {
    //       path: '/about',
    //       name: 'About',
    //       component: About
    //     },
    //     {
    //       path: '/leaveWord',
    //       name: 'leaveWord',
    //       component: leaveWord
    //     }
    //   ]
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: () => import('./views/common/register.vue')
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('./views/common/login.vue')
    // },
    // {
    //   path: '/test',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/gateway/About.vue')
    // }
  ]
})
