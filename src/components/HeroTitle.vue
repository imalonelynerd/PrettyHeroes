<script setup>
defineProps(
    ["title", "catchphrase", "imgSrc"]
)
</script>

<template>
  <div class="herotitle">
    <img :src="imgSrc" v-if="imgSrc !== '!void' ">
    <h1 v-if="title !== '!void'">{{ title }}</h1>
    <p v-if=" catchphrase !== '!void'">{{ catchphrase }}</p>
  </div>
</template>

<style scoped>

</style>