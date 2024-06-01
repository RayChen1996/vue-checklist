import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import "bootstrap";
import "./assets/all.scss";
createApp(App).use(createPinia()).mount("#app");
