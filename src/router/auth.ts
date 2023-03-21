import { RouteRecordRaw } from "vue-router";

export const authRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/Register.vue"),
  },
  {
    path: "/forgot",
    name: "forgot",
    component: () => import("@/views/auth/Forgot.vue"),
  },
  {
    // OAuth Google callback route
    path: "/oauth/google/callback/:code?",
    name: "oauth-google-callback",
    component: () => import("@/views/auth/oauth/GoogleCallBack.vue"),
  },
];
