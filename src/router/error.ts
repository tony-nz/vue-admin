import { RouteRecordRaw } from "vue-router";

export const errorRoutes: Array<RouteRecordRaw> = [
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/error/Error403.vue"),
    meta: {
      isCache: false,
      requiresAuth: true,
      title: "Error 403",
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/Error404.vue"),
    meta: {
      isCache: false,
      requiresAuth: true,
      title: "Error 404",
    },
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/error/Error500.vue"),
    meta: {
      isCache: false,
      requiresAuth: true,
      title: "Error 500",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    meta: {
      isCache: false,
    },
  },
];
