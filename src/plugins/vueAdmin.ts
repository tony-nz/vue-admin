import { App } from "vue";
import { createPinia } from "pinia";
import { upperCaseFirst } from "@tony-nz/vue-admin-core";

/**
 * Import VueAdmin
 */
import VueAdminPlugin from "@tony-nz/vue-admin-core";
import "@tony-nz/vue-admin-core/dist/style.css";

/**
 * Import all configuration files
 */
import AuthConfig from "@/core/config/AuthConfig";
import LayoutConfig from "@/core/config/LayoutConfig";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import UserAppsConfig from "@/core/config/UserAppsConfig";
import UserMenuConfig from "@/core/config/UserMenuConfig";

/**
 * PrimeVue presets
 */
// import Lara from "@/assets/presets/lara";
import Wind from "@/assets/presets/wind";

/**
 * Import all locales and resource
 */
import * as LocaleConfig from "@/core/locales";
import * as resources from "@/resources";

/**
 * Setup config param for VueAdmin
 */
const config = {
  auth: AuthConfig,
  layout: LayoutConfig,
  locales: Object.assign({}, LocaleConfig),
  menu: {
    apps: UserAppsConfig,
    main: MainMenuConfig,
    user: UserMenuConfig,
  },
  resources: Object.assign({}, resources),
};

/**
 * Create pinia instance
 */
const pinia = createPinia();

/**
 * Initialize VueAdmin component
 * @param app vue instance
 */
export function initVueAdmin(app: App<Element>, router) {
  const options = {
    app,
    config,
    router,
    pinia,
    primevue: {
      preset: Wind,
      zIndex: {
        transition: 1000, //transition
        modal: 1000, //dialog, sidebar
        overlay: 1000, //dropdown, overlaypanel
        menu: 1000, //overlay menus
        tooltip: 1100, //tooltip
        dropdown: 1200, //dropdown
      },
    },
  };

  /**
   * Register all components in resources folder
   */
  const requireComponent = require.context(
    "@/resources",
    true,
    /^(?!.*(?:components)).*\.vue$/
  );
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName
      .replace("views/", "")
      .replace(/^\.\//, "")
      .replace(/\//, "")
      .replace(/\.\w+$/, "");
    app.component(
      upperCaseFirst(componentName),
      componentConfig.default || componentConfig
    );
  });

  /**
   * Register VueAdmin
   */
  app.use(VueAdminPlugin, options);
}
