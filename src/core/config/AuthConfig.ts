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
    login: "/api/auth/login",
    logout: "/api/auth/logout",
    register: "/api/auth/register",
    update: "/api/auth/update",
    verify: "/api/refresh",
    permissions: "/api/auth/ability",
  },
  oauth: {
    provider: "google",
    login: "/api/oauth/google",
    callback: "/api/oauth/google/callback",
  },
};

export default config;
