<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useBooksStore } from "../../store/modules/Book.js";

const bst = useBooksStore();

onMounted(async () => {
  await bst.fetchBooks();
});
</script>
