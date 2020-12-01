import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PostsView from '@/views/PostsView.vue'
import UsersViews from '@/views/UsersView.vue'
import AlbumsView from '@/views/AlbumsView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: PostsView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsView
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersViews
  },
  {
    path: '/albums',
    name: 'Albums',
    component: AlbumsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
