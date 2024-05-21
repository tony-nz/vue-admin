import { App } from "vue";
import { VueFormGeneratorPlugin } from "@tony-nz/vue-form-generator";

/**
 * Initialize VueFormGenerator component
 * @param app vue instance
 */
export function initVueFormGenerator(app: App<Element>) {
  /**
   * Register VueFormGenerator
   */
  app.use(VueFormGeneratorPlugin, {});
}
