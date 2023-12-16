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
import { ref, defineProps } from 'vue';
import { useBookDetails } from '../../composable/book.js';
import axios from 'axios';

const {
  showAddModal,
  showDeleteModal,
  showUpdateModal,
  onDeleteItem,
} = useBookDetails();

const props = defineProps([
  'id',
  'title',
  'pages',
  'year',
  'price',
  'category_id',
  'country',
  'author',
  'description',
  'photo',
  'data',
]);

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
    const response = await axios.put(`${url}book/${props.id}`, formData, {
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