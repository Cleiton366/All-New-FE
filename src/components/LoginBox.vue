<script setup>
import { reactive } from 'vue'
import router from "../routes"
import axios from 'axios'

var user = reactive({
    email: "",
    password: ""
})

async function submit() {
    if (user.email != ""
        && user.password != "") {
        const response = await axios({
            method: 'get',
            url: `http://localhost:8080/usuario/search/findByUser?email=${user.email}&password=${user.password}`
        })

        if (response.status === 200) {
            localStorage.setItem("user_id", user.email)
            router.push({
                path: "/dashboard"
            })
        }
    }
}

</script>

<template>
    <v-sheet id="form" width="300" class="mx-auto">
        <v-form @submit.prevent>
            <v-text-field v-model="user.email" label="Email" required />
            <v-text-field v-model="user.password" label="Password" required />
            <v-btn id="submit-btn" @click="submit" type="submit" block class="mt-2">Login</v-btn>
        </v-form>
    </v-sheet>
</template>

<style scoped>
#form {
    background-color: rgb(34, 34, 34);
    color: white;
    margin: 30px;
}
#submit-btn {
    background-color: rgb(34, 34, 34);
    color: white;
}
</style>
