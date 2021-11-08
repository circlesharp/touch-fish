// 是真正的入口
// app.vue 只是一个组件

import Vue from 'vue';
import App from './app.vue';

import './assets/styles/index.css';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(App),
}).$mount(root);
