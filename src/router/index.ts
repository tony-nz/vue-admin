import { createRouter, createWebHistory } from "vue-router";
import { authRoutes } from "./auth";
import { appRoutes } from "./app";

const router = createRouter({
  history: createWebHistory(),
  routes: [...authRoutes, ...appRoutes],
  scrollBehavior() {
    // always scroll to top
    return { left: 0, top: 0 };
  },
});

export default router;
