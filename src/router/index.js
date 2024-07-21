import { createRouter, createWebHistory } from "vue-router";
import Home from "../Views/Home.vue";
import About from "../Views/About.vue";
import Todos from "../Views/todos.vue";
import Login from "../Views/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todos,
  },
  {
    path: "/sign-in",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
