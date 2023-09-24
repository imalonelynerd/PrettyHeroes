<script setup>
const props = defineProps(
    ["title", "catchphrase", "imgSrc", "bgImg"]
);
</script>

<template>
  <div class="herotitle"
       :style="`background: linear-gradient(180deg, #FFFFFF00, var(--cwi)), url('${props.bgImg}') no-repeat center, var(--cwi)`">
    <img :src="imgSrc" v-if="imgSrc !== undefined ">
    <div>
      <h1 v-if="title !== undefined">{{ title }}</h1>
      <p v-if=" catchphrase !== undefined">{{ catchphrase }}</p>
    </div>
  </div>
</template>

<style scoped>
.herotitle {
  color: var(--ctxt);
  padding: 32px;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-size: cover !important;
}

.herotitle > div {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}

.herotitle > div > * {
  margin: 0;
}

.herotitle > div > *:not(:last-child) {
  margin-bottom: 8px;
}

.herotitle > div > h1 {
  color: var(--ctt);
}

.herotitle > img {
  border-radius: 999px;
  height: 108px;
}

.herotitle > *:not(:last-child) {
  margin-right: 24px;
}
</style>