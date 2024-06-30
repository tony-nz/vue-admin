import { App } from "vue";

import VueAvatar from "@webzlodimir/vue-avatar";
import "@webzlodimir/vue-avatar/dist/style.css";

/**
 * Initialize VueAvatar component
 * @param app vue instance
 */
export function initVueAvatar(app: App<Element>) {
  /**
   * Register VueAvatar
   */
  app.component("vue-avatar", VueAvatar);
}
