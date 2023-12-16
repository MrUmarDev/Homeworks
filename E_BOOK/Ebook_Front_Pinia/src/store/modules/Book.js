import { defineStore } from 'pinia';
import axios from 'axios';
import { errorToast } from '../../utils/toast.js';

const url = import.meta.env.VITE_BASE_URL;

export const useBooksStore = defineStore('books', {
  state: () => ({
    loading: false,
    books: [],
    currentBook: null,
  }),

  getters: {
    books: (state) => state.books,
    currentBook: (state) => state.currentBook,
  },

  actions: {
    async fetchBooks() {
      this.SET_LOADING(true);
      try {
        const res = await axios.get(url + 'book');
        if (!res.data && res.status !== 200) {
          return;
        }

        this.SET_LOADING(false);
        this.SET_BOOKS(res.data);
      } catch (error) {
        errorToast('Sorry! We have some problems with the server');
      }
    },

    async fetchBookDetails(bookId) {
      try {
        const res = await axios.get(url + `book/${bookId}`);
        if (!res.data && res.status !== 200) {
          return null;
        }

        return res.data;
      } catch (error) {
        errorToast(`Sorry! Unable to fetch details for book with ID ${bookId}`);
        return null;
      }
    },

    async createBook(bookData) {
      try {
        const res = await axios.post(url + 'book', bookData);
        if (!res.data && res.status !== 201) {
          return;
        }

        this.ADD_BOOK(res.data);

      } catch (error) {
        errorToast('Error creating book');
      }
    },

    async updateBook({ bookId, updatedData }) {
      try {
        const res = await axios.put(url + `book/${bookId}`, updatedData);
        if (!res.data && res.status !== 200) {
          return;
        }

        this.UPDATE_BOOK({ bookId, updatedData });

      } catch (error) {
        errorToast('Error updating book');
      }
    },

    async deleteBook(bookId) {
      try {
        await axios.delete(url + `book/${bookId}`);

        this.REMOVE_BOOK(bookId);

      } catch (error) {
        errorToast('Error deleting book');
      }
    },

  },

  mutations: {
    SET_LOADING: (payload) => (state.loading = payload),
    SET_BOOKS: (payload) => (state.books = payload),
    SET_CURRENT_BOOK: (payload) => (state.currentBook = payload),

    ADD_BOOK: (newBook) => state.books.push(newBook),
    UPDATE_BOOK: ({ bookId, updatedData }) => {
      const index = state.books.findIndex((book) => book.id === bookId);
      if (index !== -1) {
        state.books.splice(index, 1, updatedData);
      }
    },
    REMOVE_BOOK: (bookId) => {
      state.books = state.books.filter((book) => book.id !== bookId);
    },
  },
});
