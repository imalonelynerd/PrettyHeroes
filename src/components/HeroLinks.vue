<script setup>
defineProps(["links"])
</script>

<template>
  <div class="links">
    <a v-for="elem in links" :href="elem.url">
      <img src="/icons/create.png">
      <p>{{ elem.title }}</p>
    </a>
  </div>
</template>

<style scoped>
.links {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.links > a {
  padding: 16px 24px;
  border-radius: 999px;
  font-size: 1em;
  font-weight: bold;
  background: var(--clk);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
}

.links > a:hover {
  background: var(--cho);
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