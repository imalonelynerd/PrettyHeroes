<script setup>
import LoadingPage from "@/components/Transition/LoadingPage.vue";
import Navbar from "@/components/Home/navbarComponements/Navbar.vue";
import MobileNavbar from "@/components/Home/navbarComponements/MobileNavbar.vue";
</script>

<template>
  <Navbar v-if="$route.name !== undefined && !$route.name.startsWith('HeroPage')"/>
  <MobileNavbar v-if="$route.name !== undefined && !$route.name.startsWith('HeroPage')"/>
  <Suspense>
    <template #fallback>
      <LoadingPage/>
    </template>
    <router-view>
    </router-view>
  </Suspense>
</template>

<style scoped>
</style>