<script setup>
import AddNewSubject from '../components/AddNewSubject.vue';
import CardsGrid from '../components/CardsGrid.vue';
import axios from 'axios'
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue';

var cards = ref([])
var subjects = ref([])

async function getSubjects() {
  var response = await axios({
    method: 'get',
    url: `http://localhost:8080/subject/search/findByEmail?email=${localStorage.getItem("user_id")}`
  })

  subjects.value = response.data._embedded.subject

  subjects.value.forEach(async function (sub) {
    var url = 'https://newsapi.org/v2/everything?' +
      `q=${sub.keyword}&`+
      'apiKey='+import.meta.env.VITE_NEWS_API;
    response = await axios({
      method: 'get',
      url: url
    })

    const aux = cards.value
    const newArr = aux.concat(response.data.articles.slice(0, 10))
    cards.value = newArr
  });
}

getSubjects()
</script>

<template>
  <Navbar/>
  <AddNewSubject/>
  <CardsGrid :cards="cards" />
</template>

<style scoped>
</style>
