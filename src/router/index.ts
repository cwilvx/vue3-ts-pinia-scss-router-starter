import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const HomeView = () => import("@/views/Home");

const HomeRoute = {
  path: "/",
  name: "Home",
  component: HomeView,
};

const routes: RouteRecordRaw[] = [HomeRoute];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const Routes = {
  Home: HomeRoute.name,
};

export { router, Routes };
