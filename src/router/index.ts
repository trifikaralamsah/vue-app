import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/Home.vue";
import AboutView from "../views/AboutUs.vue";
import NotFoundView from "../views/NotFound.vue";
import LoginView from "../views/Login.vue";
import RegisterView from "../views/Register.vue";
import AdminLayout from "../components/layouts/AdminLayout.vue";
import DashboardView from "../views/Admin/Dashboard.vue";
import { TRoutes } from "@/types/utils";
import Layout from "../components/layouts/Layout.vue";

const routes: TRoutes[] = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", component: HomeView, name: "home" },
      { path: "/about", component: AboutView },
    ],
  },
  {
    path: "/login",
    component: LoginView,
    name: "login",
  },
  {
    path: "/register",
    component: RegisterView,
    name: "register",
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [{ path: "", component: DashboardView, name: "admin" }],
    name: "admin",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
