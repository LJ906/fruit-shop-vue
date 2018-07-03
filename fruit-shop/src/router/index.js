import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('@/components/home/index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
