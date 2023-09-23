<script setup>
import HeroLinks from "@/components/HeroLinks.vue";

defineProps(["name1", "name2", "age", "pronouns", "desc", "links"])
</script>

<template>
  <div class="desc">
    <div>
      <h1>{{ name1 }} <span>{{ name2 }}</span></h1>
      <h2>{{ age + " y.o. , " + pronouns.join(' - ') }}</h2>
      <p v-html="desc"></p>
    </div>
    <HeroLinks :links="links"/>
  </div>
</template>

<style scoped>
.desc {
  padding: 32px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: var(--cwi);
}

.desc > * {
  margin: 0;
}

.desc > *:not(:last-child){
  margin-bottom: 16px;
}

.desc > div > h1 > span {
  opacity: 0.75;
}

.desc > div > h2 {
  opacity: 0.5;
  font-size: 1.25em;
}

.desc > div > *:not(:last-child) {
  margin-bottom: 8px;
}
</style>