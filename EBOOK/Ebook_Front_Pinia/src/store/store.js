import { defineStore } from 'pinia';
import { useBooksStore } from './modules/Book.js';
import { useLoginStore } from './modules/Login.js';

export const useRootStore = defineStore('root', {
    state: () => ({}),
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        books: useBooksStore,
        login: useLoginStore,
    },
});
