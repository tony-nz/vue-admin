import { createApp } from "vue";
import { initPlugins } from "./plugins/init";
import App from "@/App.vue";
import router from "@/router";

import "@/assets/styles.scss";

/**
 * Load Tailwind CSS
 */
import "./assets/tailwind.css";

const app = createApp(App);

/**
 * Initialize plugins
 * @param app vue instance
 * @param router vue router
 */
initPlugins(app, router);
app.use(router);

app.mount("#app");

export default app;
