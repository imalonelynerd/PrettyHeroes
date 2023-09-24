<script setup>
import HomePage from "@/views/HomePage.vue";
import HeroCreator from "@/views/HeroCreator.vue";
import HeroPage from "@/views/HeroPage.vue";
import LoadingPage from "@/components/LoadingPage.vue";

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
    <template #fallback>
      <LoadingPage/>
    </template>
    <HeroPage/>
  </Suspense>
</template>

<style scoped>
</style>
