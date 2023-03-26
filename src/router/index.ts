import { createRouter, createWebHistory } from "vue-router";
import { authRoutes } from "./auth";
import { defaultRoutes } from "./default";
import { errorRoutes } from "./error";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/loginTest",
      name: "loginTest",
      component: () => import("@/views/auth/Login.vue"),
    },
    ...authRoutes,
    ...defaultRoutes,
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { left: 0, top: 0 };
  },
});

export default router;
