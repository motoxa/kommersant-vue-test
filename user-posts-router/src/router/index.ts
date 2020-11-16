import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/users',
    alias: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
  },
  {
    path: '/users/:username/posts/:postId?',
    alias: [
      '/users/:username',
    ],
    name: 'Posts',
    component: () => import('@/views/Posts.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
