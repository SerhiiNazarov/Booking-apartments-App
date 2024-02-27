import { createRouter, createWebHistory } from "vue-router";

import ErrorPage from "./pages/ErrorPage";
import store from "./store";

const Homepage = () => import("./pages/AppHomepage.vue");
const Apartment = () => import("./pages/ApartmentPage.vue");
const LoginPage = () => import("./pages/LoginPage.vue");
const RegistrationPage = () => import("./pages/RegistrationPage.vue");
const MyOrdersPage = () => import("./pages/MyOrders.vue");

const routes = [
  {
    path: "/",
    component: Homepage,
    name: "homepage",
    meta: { requiresAuth: true },
  },
  {
    path: "/apartments/:id",
    component: Apartment,
    name: "apartment",
    meta: { requiresAuth: true },
  },
  {
    path: "/my-orders",
    component: MyOrdersPage,
    name: "my-orders",
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login-page" });
      return;
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "homepage" });
      return;
    }
  }

  next();
});

export default router;
