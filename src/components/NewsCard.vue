<script setup>
import { ref } from 'vue'

defineProps({
    card: ref()
})

</script>

<template>
    <v-card id="card" class="mx-auto" max-width="344">

        <v-img v-if="this.card.urlToImage != null" :src="this.card.urlToImage" height="200px" cover />
        <v-img v-else src="./src/assets/default-image.jpeg" height="200px" cover />

        <v-card-title>
            {{ this.card.title }}
        </v-card-title>

        <v-card-text>
            <p>{{ this.card.description }}</p>
        </v-card-text>

        <v-card-actions>
            <a :href="this.card.url">
                Read
            </a>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
#card {
    margin: 10px;
    background-color: rgb(34, 34, 34);
    min-height: 450px;
    color: white;
}

a {
    margin-bottom: 5px;
    position: absolute;
    bottom: 0;
}
</style>
