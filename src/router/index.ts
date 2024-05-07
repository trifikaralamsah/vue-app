import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/Home.vue";
import AboutView from "../views/AboutUs.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
