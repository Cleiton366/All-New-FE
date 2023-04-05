<script setup>
import { ref } from 'vue'
import NewsCard from './NewsCard.vue';

defineProps({
    cards: ref()
})

</script>

<template>
    <div id="grid" v-if="this.cards.length > 0">
        <h2 style="margin-bottom: 30px;">Check out some of your news</h2>
        <v-container>
            <v-row no-gutters>
                <v-col v-for="(card, index) in this.cards" :key="index" cols="12" sm="4">
                    <NewsCard :card="card" />
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div v-if="this.cards.length == 0">
        <h2 style="margin-top: 50px;">Search for some news using the search bar above</h2>
    </div>
</template>

<style scoped>
#grid {
    margin-top: 50px;
}
</style>
