import { computed } from 'vue';
import { useBooksStore } from '../store/modules/Book.js';

export function useHome() {
  const booksStore = useBooksStore();

  const loading = computed(() => booksStore.loading);
  const books = computed(() => booksStore.books);

  return {
    books,
    loading
  };
}
