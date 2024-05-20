import { createApp } from "vue";
import { initPlugins } from "./plugins/init";
import App from "@/App.vue";
import router from "@/router";
import ToastService from "primevue/toastservice";

/**
 * Load CSS
 */
import "./assets/style.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(ToastService);

/**
 * Initialize plugins
 * @param app vue instance
 * @param router vue router
 */
initPlugins(app, router);

app.use(router);
app.mount("#app");

export default app;
