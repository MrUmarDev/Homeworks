<script setup></script>

<template>
  <aside class="h-screen bg-gray-900 px-4 py-6 flex flex-col">
    <h2 class="text-center uppercase text-xl font-semibold mb-4 text-white">
      Admin Panel
    </h2>
    <router-link to="/admin/main" class="sidebar_item">Products</router-link>
    <router-link to="/admin/create/product" class="sidebar_item">Add Product</router-link>
    <router-link to="/" class="sidebar_item">Main</router-link>
  </aside>
</template>

<style scoped>
.router-link-active {
  background-color: #fff;
  color: black;
}
</style>
