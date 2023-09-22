<script setup>
import ErrInfo from "@/assets/json/ErrInfo.json"
import {ref} from "vue";

const refErrInfo = ref(ErrInfo);

</script>

<template>
  <div class="err">
    <img :src="refErrInfo.imgSource"/>
    <h1>{{ refErrInfo.errName }}</h1>
    <p v-html="refErrInfo.description"></p>
  </div>
</template>

<style scoped>
.err {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.err > * {
  margin: 0;
}

.err > img {
  height: 128px;
}

.err > h1 {
  margin-bottom: 8px;
}

.err > p {
  text-align: center;
  width: 33%;
}

.err > *:not(:last-child):not(h1) {
  margin-bottom: 32px;
}
</style>