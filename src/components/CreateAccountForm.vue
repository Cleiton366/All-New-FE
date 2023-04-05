<script setup>
import { reactive, ref } from 'vue'
import router from "../routes"
import axios from 'axios'

var user = reactive({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
})

var userExist = ref(false)

async function submit() {
    if (user.email != ""
        && user.password != "") {
        
        userExist.value = false
        if (await verifyUser()) {
            userExist.value = true
            return
        }

        const response = await axios({
            method: 'post',
            url: `http://localhost:8080/usuario`,
            data: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password
            }
        })

        if (response.status === 201) {
            localStorage.setItem("user_id", user.email)
            router.push({
                path: "/dashboard"
            })
        }
    }
}

async function verifyUser() {
    const response = await axios({
        method: 'get',
        url: `http://localhost:8080/usuario/search/findByEmail?email=${user.email}`
    })

    if (response.data._embedded.usuario.length > 0) {
        return true
    } else return false
}

</script>

<template>
    <p style="color: red;" v-if="userExist">Email already being used</p>
    <v-sheet id="form" width="300" class="mx-auto">
        <v-form @submit.prevent="submit">
            <v-text-field v-model="user.firstName" label="First Name" />
            <v-text-field v-model="user.lastName" label="Last Name" />
            <v-text-field v-model="user.email" label="Email" />
            <v-text-field v-model="user.password" label="Password" />
            <v-btn id="submit-btn" type="submit" block class="mt-2">Create Account</v-btn>
        </v-form>
    </v-sheet>
</template>

<style scoped>
#form {
    background-color: rgb(34, 34, 34);
    color: white;
}

#submit-btn {
    background-color: rgb(34, 34, 34);
    color: white;
}
</style>
