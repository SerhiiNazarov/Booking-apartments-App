import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store";
import "./assets/scss/index.scss";
import Notifications from "@kyvg/vue3-notification";

createApp(App).use(router).use(store).use(Notifications).mount("#app");
