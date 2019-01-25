import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Doctor from './components/doctor/Doctor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/doc_finder/doc_finder',
      name: 'home',
      component: Home
    },
    { 
      path: '/doctor',
      name: 'doctor',
      props: true,
      component: Doctor
    },
    {
      path: '/doc_finder/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 }
  }
})
