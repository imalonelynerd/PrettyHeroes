<script setup>

defineProps(["name1", "name2", "age", "pronouns", "desc"])
</script>

<template>
  <div class="desc">
    <h1 v-if="name1 !== '' || name2 !== ''">{{ name1 }} <span>{{ name2 }}</span></h1>
    <h2 v-if="age !== '' || pronouns !== []">{{ age + ", " + pronouns.join(' - ') }}</h2>
    <p v-if="desc !== ''" v-html="desc"></p>
  </div>
</template>

<style scoped>
.desc {
  color: var(--ctxt);
  padding: 32px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: var(--cwi);
  filter: var(--shadow);
}

.desc > h1 > span {
  opacity: 0.66;
}

.desc > h2 {
  opacity: 0.5;
  font-size: 1.25em;
}

.desc > *:not(:last-child) {
  margin-bottom: 16px;
}

tab {
  width: 5em;
}
</style>