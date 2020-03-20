import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Networking from '../views/Networking.vue'
import Connect from '../views/Connect.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Networking',
    name: 'Networking',
    component: Networking
  },
  {
    path: '/Connect',
    name: 'Connect',
    component: Connect
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
