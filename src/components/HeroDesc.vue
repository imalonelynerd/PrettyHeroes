<script setup>
defineProps(["name1", "name2", "age", "pronouns", "desc"])
</script>

<template>
  <div class="desc">
    <h1>{{ name1 }} <span>{{ name2 }}</span></h1>
    <h2>{{ age + " y.o. , " + pronouns.join(' - ') }}</h2>
    <p>{{ desc }}</p>
  </div>
</template>

<style scoped>
.desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.desc > * {
  margin: 0;
}

.desc > h1 > span {
  opacity: 0.75;
}

.desc > h2 {
  opacity: 0.5;
}

.desc > *:not(:last-child) {
  margin-bottom: 8px;
}
</style>