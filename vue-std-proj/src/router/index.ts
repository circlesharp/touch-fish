import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  // Not to worry: To fix the issue, all you need to do is add a simple catch-all fallback route to your server.
  // If the URL doesn't match any static assets, it should serve the same index.html page that your app lives in.
  // Beautiful, again!
  // For example: `http-server dist --proxy http://localhost:8080?`
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
