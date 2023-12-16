<script setup>
import { ref } from 'vue';
import { useBooks } from '../../composable/index';
import axios from 'axios';

const {
  showAddModal,
  showDeleteModal,
  showUpdateModal,
  onDeleteItem,
} = useBooks();

const title = ref(props.title);
const pages = ref(props.pages);
const year = ref(props.year);
const price = ref(props.price);
const category_id = ref(props.category_id);
const country = ref(props.country);
const author = ref(props.author);
const description = ref(props.description);
const photo = ref(props.photo);

const storeUpdateData = async () => {
  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('pages', pages.value);
  formData.append('year', year.value);
  formData.append('price', price.value);
  formData.append('country', country.value);
  formData.append('author', author.value);
  formData.append('category_id', category_id.value);
  formData.append('description', description.value);
  formData.append('photo', photo.value);

  try {
    const response = await axios.put(`${url}/api/book/${props.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
  location.reload();
};

function uploadFile(e) {
  photo.value = e.target.files[0];
}
</script>


<template>
  <nav style="display: flex; align-items: center; padding-bottom: 20px;">
    <h1>Products</h1>
    <div>
      <button style="margin-left: 50px;" class="btn" @click="showDeleteModal = !showDeleteModal">Delete item</button>
    </div>
  </nav>
  <div
      v-if="showUpdateModal"
      style="border: 1px solid gray; width: 800px;"
  >
    <div class="text-right mb-6">
      <button style="color: red; margin-left:780px" @click="showUpdateModal = false">X</button>
    </div>
    <form @submit.prevent="storeUpdateData" style="overflow: scroll; width: 820px; height: 400px; display: flex;">
      <div>
        <input v-model="title" class="input11" type="text" id="title" placeholder="Title">
        <input v-model="category_id" class="input11" type="text" id="cat" placeholder="Category">
        <input v-model="price" class="input11" type="text" id="price" placeholder="Price">
        <input v-model="pages" class="input11" type="text" id="count" placeholder="Pages">
        <input v-model="author" class="input11" type="text" id="count" placeholder="Author">
        <button class="btn" style="margin-left: 250px; margin-top: 50px;" @click="storeUpdateData">Update</button>
      </div>
      <div>
        <input v-model="year" class="input11" type="text" id="count" placeholder="Year">
        <textarea v-model="description" class="input11" id="desc" cols="30" rows="5"></textarea>
        <input v-model="country" class="input11" type="text" id="count" placeholder="Country">
        <input type="file" class="buttn" placeholder="File" required @change="uploadFile">
      </div>
    </form>
  </div>
  <div
    v-if="showDeleteModal"
    style="width: 510px; height: 400px; background-color: gray; justify-content: space-between; overflow: scroll;;"
  >
    <div class="text-right mb-6">
      <button style="color:red; margin-left:480px" @click="showDeleteModal = false">X</button>
    </div>
    <div
      v-for="item of products"
      :key="item.id"
      style="display: flex; justify-content: space-between; padding-left: 10px; padding-right: 20px; background-color: lightcoral; margin-bottom: 10px; border-radius:10px"
      @click="onDeleteItem(item.id)"
    >
      <p>{{ item.title }}</p>
      <img :src="item.image" width="30" height="30" alt="">
    </div>
  </div>
  <div v-if="showAddModal" class="absolute w-[50%] bg-gray-400 h-auto left-[20%] p-3">
    <div class="text-right">
      <button class="p-1 px-2 bg-red-700" @click="showAddModal = false">X</button>
    </div>
  </div>
  <div  class="mx-auto">
    <div class="flex items-center justify-between flex-wrap">
      <div v-for="product of products" :key="product.id">
        <div style="margin: 20px; width: 300px; border: 1px solid black; padding-bottom: 10px; border-radius:15px">
          <img :src="product.image" width="300" height="350" alt="">
          <h5 class="my-2 text-lg hover:text-blue-500">{{ product.title }}</h5>
          <p class="truncate text-gray-500 ttext-end">{{ product.description }}</p>
          <div style="display: flex; justify-content:space-between; align-items:center">
            <span class="font-semibold text-lg my-1">{{ product.price }}</span>
            <button style="margin-right: 10px;" @click="onShowUpdateModal(product)"><img src="../../assets/images/ikonka2.png" alt=""></button>
          </div>
          <div class="flex items-center justify-between">
            <span class="bg-green-500 p-0.5 text-white rounded-lg shadow">{{ product.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
/* .bg-wrapper {
  background-image: url('./assets/images/bg-wrap.png');
  background-repeat: no-repeat;
  background-size: cover;
} */
</style>
