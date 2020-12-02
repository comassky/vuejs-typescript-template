import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PostsView from '@/views/PostsView.vue'
import UsersView from '@/views/UsersView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Posts',
    component: PostsView
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
