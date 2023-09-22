<script setup>
defineProps(["links"])
</script>

<template>
  <div class="links">
    <a v-for="elem in links" :href="elem.url">
      <img src="/icons/create.png">
      <p>{{ elem.title}}</p>
    </a>
  </div>
</template>

<style scoped>
.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.links > a {
  margin: 0 4px;
  padding: 16px 24px;
  border-radius: 999px;
  font-size: 1em;
  font-weight: bold;
  background: var(--bg2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
}

.links > a:hover {
  background: var(--bg3);
}

.links > a > img {
  height: 1.25em;
}

.links > a > p {
  margin: 0 0 0 8px;
  padding: 0;
  transition: all 0.25s;
}
</style>