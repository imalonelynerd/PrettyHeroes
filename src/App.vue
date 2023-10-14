<script setup>
import LoadingPage from "@/components/Transition/LoadingPage.vue";
</script>

<template>
  <Suspense>
    <template #fallback>
      <LoadingPage />
    </template>
    <router-view>
    </router-view>
  </Suspense>
</template>

<style scoped>
</style>
