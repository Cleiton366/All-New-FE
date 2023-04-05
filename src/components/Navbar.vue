<template>
    <v-toolbar id="navbar">
        <v-tabs>
            <router-link :to="{ path: '/dashboard' }">
                <v-tab class="tab">Home</v-tab>
            </router-link>
            <router-link :to="{ path: '/manage-news' }">
                <v-tab class="tab">Manage your news</v-tab>
            </router-link>
        </v-tabs>
    </v-toolbar>
</template>

<style scoped>
#navbar {
    position: fixed;

    top: 0;
    left: 0;
    
    width: 100%;
    overflow: hidden;
    z-index: 9;

    background-color: rgb(46, 46, 46);
}
</style>
