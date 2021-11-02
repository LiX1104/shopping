import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
     {
      path: '',
      name: 'sy',
      component: () => import('../views/sy/index.vue'),
     },
     {
      path: 'todoList',
      name: 'todoList',
      component: () => import('../views/todoList/index.vue'),
     },
     {
      path: 'shopping',
      name: 'shopping',
      component: () => import('../views/shopping/index.vue'),
     },
     {
      path: '/Gwc',
      name: 'Gwc',
      component: () => import('../views/shopping/index.vue'),
     },
     {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/shopping/cart.vue'),
     },
     {
      path: 'personal',
      name: 'personal',
      component: () => import('../views/personal/index.vue'),
     }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
