import { createStore } from "vuex";
import books from './modules/Book.js'
import login from "./modules/login";

const store = createStore({
  state: {},

  getters: {},

  actions: {},

  mutations: {},

  modules: {
    books,
    login
  }
});

export default store;
