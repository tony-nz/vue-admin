interface API {
  csrfCookie: string;
  login: string;
  logout: string;
  register: string;
  update: string;
  verify: string;
  permissions: string;
}

interface OAuth {
  provider: string;
  login: string;
  callback: string;
}

export interface AuthConfig {
  api: API;
  oauth: OAuth;
}

const config: AuthConfig = {
  api: {
    csrfCookie: "/sanctum/csrf-cookie",
    login: "/login",
    logout: "/logout",
    register: "/register",
    update: "/api/auth/update",
    verify: "/api/auth/verify",
    permissions: "/api/auth/ability",
  },
  oauth: {
    provider: "google",
    login: "/api/oauth/google",
    callback: "/api/oauth/google/callback",
  },
};

export default config;
