<template>
  <div style="display: flex;">
    <div class="box">
      <div style="margin-left:80px;">
        <img class="box-shadow: 10px 10px white;" src="../../assets/images/exampleB.png" alt="">
        <h1 style="margin-left:5px; margin-top:10px">Ulugbek hazinasi</h1>
        <input type="file" class="buttn" placeholder="File" required @change="uploadFile">
      </div>
    </div>
    <div class="box2">
      <h1 style="margin-left: 100px; margin-top:15px; font-size:30px">Add Book</h1>
      <div style="margin-left: 100px;">
        <input class="input11" v-model="title" type="text" placeholder="Title"><br>
        <input class="input11" v-model="pages" type="text" placeholder="Pages"><br>
        <input class="input11" v-model="year" type="text" placeholder="Year"><br>
        <input class="input11" v-model="price" type="text" placeholder="Price"><br>
        <input class="input11" v-model="country" type="text" placeholder="Country"><br>
        <input class="input11" v-model="author" type="text" placeholder="Author"><br>
        <input class="input11" v-model="category_id" type="text" placeholder="Category ID"><br>
        <input class="input22" v-model="description" type="text" placeholder="Description"><br>
        <button @click="storeData" class="buttn1">Create</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useBooksStore } from '../../store/modules/Book.js';
import { errorToast } from '../../utils/toast.js';

const booksStore = useBooksStore();

const title = ref('');
const pages = ref(0);
const year = ref(0);
const price = ref(0);
const category_id = ref(0);
const country = ref('');
const author = ref('');
const description = ref('');
const photo = ref(null);

function uploadFile(e) {
  photo.value = e.target.files[0];
}

const storeData = async () => {
  const formData = new FormData();
  formData.append('name', title.value);
  formData.append('pages', pages.value);
  formData.append('year', year.value);
  formData.append('price', price.value);
  formData.append('country', country.value);
  formData.append('authorId', author.value);
  formData.append('rating', 0);
  formData.append('description', description.value);
  formData.append('categoryId', category_id.value);
  formData.append('image', photo.value);

  try {
    await booksStore.createBook(formData);
    console.log('Book created successfully');
  } catch (error) {
    handleError(error);
  }
};

function handleError(error) {
  if (error.response) {
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
  } else if (error.request) {
    console.error(error.request);
  } else {
    console.error('Error:', error.message);
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box
}
h1{
    font-family: Arial Black;
    font-size: 24px;
    font-weight: 900;
}
.box{
    width: 550px;
    height: 650px;
    padding: 20px;
    padding-left: 50px;
    margin-top: 0px;
    background-color: #F3F3F3ED;
;
    }
    .buttn{
    width: 250px;
    margin-top: 20px;
    padding: 10px 50px;
    border-radius: 99px;
    background-color: #152540;
    font-family: Red Hat Display;
    font-size: 18px;
    font-weight: 500;
    color: white;
    }
    .buttn1{
    padding: 10px 100px;
    border-radius: 99px;
    background-color: #446721;
    font-family: Red Hat Display;
    font-size: 18px;
    font-weight: 500;
    color: white;
    }
.input11{
    border: 1px solid #B4B4BB;
    border-radius:10px;
    padding: 10px;
    width: 260px;
    margin-top: 20px;
    padding-left: 30px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
}
.input22{
    border: 1px solid #B4B4BB;
    width: 260px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    padding: 10px;
    padding-bottom: 50px;
    display: flex;
    margin-top: 20px;
    align-items: center;
    border-radius:10px
}
</style>