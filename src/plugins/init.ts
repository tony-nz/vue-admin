import { App } from "vue";
import { initVueAdmin } from "./vueAdmin";
import { initVueFormGenerator } from "./vueFormGenerator";

/**
 * Initialize plugins
 * @param app vue instance
 */
export const initPlugins = async function (app: App<Element>, router) {
  initVueFormGenerator(app);
  initVueAdmin(app, router);
};
