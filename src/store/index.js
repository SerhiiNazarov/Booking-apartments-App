import authModule from "./modules/auth";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState({
  paths: ["auth.token"],
});

const store = createStore({
  modules: {
    auth: authModule,
  },
  plugins: [dataState],
});

export default store;
