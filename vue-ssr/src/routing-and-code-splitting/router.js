import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// loading just what is needed.
const routes = [
  {
    path: '/',
    component: () => import('./components/Home.vue'),
  },
  {
    path: '/item/:id',
    component: () => import('./components/Item.vue'),
  },
];

export function createRouter() {
  return new Router({
    mode: 'history',
    routes,
  });
}
