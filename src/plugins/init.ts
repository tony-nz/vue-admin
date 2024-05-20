import { App } from "vue";
import { initVueAdmin } from "./vueAdmin";
import { initVueFormGenerator } from "./vueFormGenerator";

/**
 * Initialize plugins
 * @param app vue instance
 */
export const initPlugins = async function (app: App<Element>, router) {
  /**
   * Maintain the order here
   * 1. VueFormGenerator
   * 2. VueAdmin
   * 3. VueAvatar
   * Reason: VueAdmin uses VueFormGenerator and VueAvatar
   */
  initVueFormGenerator(app);
  initVueAdmin(app, router);
};
