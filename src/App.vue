<script setup>
import HomePage from "@/views/HomePage.vue";
import HeroCreator from "@/views/HeroCreator.vue";
import HeroPage from "@/views/HeroPage.vue";

document.querySelector('html').dataset.theme = `theme-dark`;


function currentPage(route) {
  switch (route.path) {
    case '/':
      return "HOME";
    case '/creator':
      return "CREATOR";
    default:
      return "HERO";
  }
}

</script>

<template>
  <HomePage v-if="currentPage($route) === 'HOME'"/>
  <HeroCreator v-if="currentPage($route) === 'CREATOR'"/>
  <Suspense v-if="currentPage($route) === 'HERO'">
    <HeroPage/>
  </Suspense>
</template>

<style scoped>
</style>
