<script setup>
import axios from 'axios'
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue';

var subjects = ref([])

async function getSubjects() {
  const response = await axios({
    method: 'get',
    url: `http://localhost:8080/subject/search/findByEmail?email=${localStorage.getItem("user_id")}`
  })

  subjects.value = response.data._embedded.subject
}

getSubjects()
</script>

<template>
  <Navbar/>
  <v-card class="mx-auto">
    <v-list id="container" v-for="subject in subjects">
      <v-list-item>
        <v-btn class="subject-btn" :to="`/subject/${subject.keyword}`">{{ subject.keyword }}</v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>

#container{
  width: 300px;
  background-color: rgb(34, 34, 34);
}

.subject-btn {
  width: 200px;
  align-items: center;

  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

.subject-btn:hover {
  color: #535bf2;
}

</style>
