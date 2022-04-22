<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  
  <NavBar />
  <div class="container">
  <RouterView />
  </div>
</template>

<style>
</style>
