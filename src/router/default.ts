import { RouteRecordRaw } from "vue-router";
import { errorRoutes } from "./error";

export const defaultRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/main/dashboard",
    component: () => import("@/layouts/main/Layout.vue"),
    meta: {
      title: "Home",
      isCache: true,
      // requiresAuth: true,
      // middleware: roles,
      roles: ["admin", "teacher"],
    },
    children: [
      {
        path: "/main/dashboard",
        name: "dashboard",
        component: () => import("@/views/pages/dashboard/Index.vue"),
        meta: {
          title: "Dashboard",
          isCache: false,
          isNav: true,
          requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      {
        path: "/main/account",
        name: "account",
        component: () => import("@/views/pages/account/Index.vue"),
        meta: {
          title: "My Account",
          isCache: true,
          isNav: true,
          // requiresAuth: true,
          // middleware: roles,
          roles: ["admin", "teacher"],
        },
      },
      ...errorRoutes,
    ],
  },
];
