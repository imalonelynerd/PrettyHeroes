<script setup>
import LoadingPage from "@/App.vue";
import HeroPage from "@/views/HeroPage.vue";
</script>

<template>
  <Suspense>
    <template #fallback>
      <LoadingPage/>
    </template>
    <HeroPage/>
  </Suspense>
</template>

<style scoped>

</style>