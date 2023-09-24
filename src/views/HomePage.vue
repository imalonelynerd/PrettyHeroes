<script setup>

import homeInfo from "@/assets/json/HomeInfo.json";
import {ref} from "vue";
import MainButtons from "@/components/MainButtons.vue";

const refHomeInfo = ref(homeInfo);

</script>

<template>
  <div class="home">
    <div>
      <img :src="refHomeInfo.imgSource"/>
      <h1>{{ refHomeInfo.appName }}</h1>
      <code>{{ refHomeInfo.version }}</code>
      <h2>{{ refHomeInfo.tagLine }}</h2>
      <p v-html="refHomeInfo.description"></p>
      <MainButtons/>
    </div>
  </div>
</template>

<style scoped>
.home {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.home > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home > div > * {
  margin: 0;
}

.home > div > img {
  height: 128px;
}

.home > div > h1 {
  margin-bottom: 8px;
}

.home > div > h2 {
  opacity: 0.5;
  font-style: italic;
}

.home > div > p {
  text-align: center;
  width: 400px;
}

.home > div > *:not(:last-child):not(h1) {
  margin-bottom: 32px;
}
</style>