import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "bootstrap";
import "./assets/all.scss";
createApp(App).use(router).use(createPinia()).mount("#app");
