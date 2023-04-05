<script setup>

import router from "../routes"
import axios from 'axios'
import { reactive } from 'vue'

var subject = reactive({
    keyword: "",
})

async function submit() {
    if (subject.keyword != "") {
        const response = await axios({
            method: 'post',
            url: `http://localhost:8080/subject`,
            data: {
                email: localStorage.getItem("user_id"),
                keyword: subject.keyword
            }
        })

        if (response.status === 201) {
            router.push({
                path: "/manage-news"
            })
        }
    }
}
</script>

<template>
    <v-sheet id="search-bar" width="80%" class="mx-auto">
        <v-form @submit.prevent>
            <v-text-field label="Search for a keyword to get some news" v-model="subject.keyword"/>
            <v-btn id="search-btn" type="submit" @click="submit" block class="mt-2">Search</v-btn>
        </v-form>
    </v-sheet>
</template>

<style scoped>
#search-bar {
    height: fit-content;
    margin-top: 50px;
    background-color: rgb(34, 34, 34);
    color: white;
}

#search-btn {
    background-color: rgb(34, 34, 34);
    color: white;
}
</style>
