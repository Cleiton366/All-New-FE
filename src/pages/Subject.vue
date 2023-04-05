<script setup>
import router from "../routes"
import axios from 'axios'
import { ref } from 'vue'
import Navbar from "../components/Navbar.vue";

var subjects = ref([])
var subject = ref({})
var newSubject = ref("")

async function updateSubject() {
    axios({
        method: 'put',
        url: `http://localhost:8080/subject/${subject._links.self.href.split("subject/")[1]}`,
        data: {
            email: localStorage.getItem("user_id"),
            keyword: newSubject.value
        }
    })
    router.push({
        path: "/dashboard"
    })
}

async function deleteSubject() {
    axios({
        method: 'delete',
        url: `http://localhost:8080/subject/${subject._links.self.href.split("subject/")[1]}`
    })
    router.push({
        path: "/dashboard"
    })
}

async function getSubjects() {
    const response = await axios({
        method: 'get',
        url: `http://localhost:8080/subject/search/findByEmail?email=${localStorage.getItem("user_id")}`
    })

    subjects.value = response.data._embedded.subject
    subjects.value.forEach(sub => {
        if (sub.keyword == window.location.href.split("subject/")[1]) {
            subject = sub
        }
    });
}

getSubjects()

</script>

<template>
    <Navbar/>
    <v-sheet width="300" class="mx-auto">
        <v-form id="form" @submit.prevent>
            <v-text-field v-model="newSubject" label="New name" />
            <v-btn class="submit-btn" type="submit" @click="updateSubject" block>Update</v-btn>
            <v-btn class="submit-btn" type="submit" @click="deleteSubject" block >Delete</v-btn>
        </v-form>
    </v-sheet>
</template>

<style scoped>
#form {
    background-color: rgb(34, 34, 34);
    color: white;
}
.submit-btn {
    background-color: rgb(34, 34, 34);
    color: white;
}
</style>
