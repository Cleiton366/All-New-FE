<script setup>
import LoginBox from '../components/LoginBox.vue';
</script>

<template>
  <div>
    <div id="tittle-container">
      <h1>All News</h1>
      <p>All the news you're interested in one place</p>
    </div>
    <LoginBox/>
    <router-link :to="{ path: '/create-account' }">create an account</router-link>
  </div>
</template>

<style scoped>
#tittle-container {
  margin-bottom: 50px;
}
</style>
