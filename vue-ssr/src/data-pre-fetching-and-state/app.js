import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';

export function createApp() {
  const router = createRouter();
  const store = createStore();

  // sync so that route state is available as part of the store
  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });

  return { app, router, store };
}
