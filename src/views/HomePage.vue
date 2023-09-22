<script setup>

import homeInfo from "@/assets/json/HomeInfo.json";
import {ref} from "vue";
import MainButtons from "@/components/MainButtons.vue";

const refHomeInfo = ref(homeInfo);

</script>

<template>
  <div class="home">
    <img :src="refHomeInfo.imgSource"/>
    <h1>{{ refHomeInfo.appName }}</h1>
    <code>{{ refHomeInfo.version }}</code>
    <h2>{{ refHomeInfo.tagLine }}</h2>
    <p v-html="refHomeInfo.description"></p>
    <MainButtons/>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home > * {
  margin: 0;
}

.home > img {
  height: 128px;
}

.home > h1 {
  margin-bottom: 8px;
}

.home > h2 {
  opacity: 0.5;
  font-style: italic;
}

.home > p {
  text-align: center;
  width: 33%;
}

.home > *:not(:last-child):not(h1) {
  margin-bottom: 32px;
}
</style>