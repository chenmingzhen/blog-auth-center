import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
  },
});

export default store;
