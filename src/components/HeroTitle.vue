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
.herotitle {
  padding: 64px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--cwi);
}

.herotitle > * {
  margin: 0;
}

.herotitle > h1 {
  color: var(--ctt);
}

.herotitle > img {
  border-radius: 999px;
  height: 128px;
}

.herotitle > *:not(:last-child) {
  margin-bottom: 16px;
}
</style>