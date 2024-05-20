import type { AuthConfig } from "@tony-nz/vue-admin-core";

const config: AuthConfig = {
  api: {
    baseURL: process.env.VUE_APP_API_BASE_URL,
    csrfCookie: "/sanctum/csrf-cookie",
    login: "/login",
    logout: "/logout",
    register: "/register",
    update: "/api/auth/update",
    verify: "/api/auth/verify",
    permissions: "/api/auth/ability",
    settings: "/api/settings",
  },
  oauth: {
    provider: "google",
    login: "/api/oauth/google",
    callback: "/api/oauth/google/callback",
  },
};

export default config;
