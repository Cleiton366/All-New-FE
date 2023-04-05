<script setup>
import CreateAccountForm from '../components/CreateAccountForm.vue';
</script>

<template>
  <CreateAccountForm />
  <router-link :to="{ path: '/' }">
    <p id="log-in">already have an account?</p>
  </router-link>
</template>

<style scoped>
#log-in {
  margin-top: 20px;
}
</style>
