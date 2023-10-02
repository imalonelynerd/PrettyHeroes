<script setup>
import LoadInfo from "@/assets/json/loadInfo.json";
import {useRoute} from "vue-router";

const routeObj = useRoute();
const userTag = routeObj.params.user;
</script>

<template>
  <div class="loading">
    <div>
      <img :src="LoadInfo.imgSource"/>
      <h1>{{ LoadInfo.loadTitle }}</h1>
      <p>Fetching <b>{{ userTag }}</b>'s Hero...</p>
    </div>
  </div>
</template>

<style scoped>
.loading {
  margin: 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: Blur ease-out 0.5s;
}

.loading > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--wi);
  padding: 32px;
  border-radius: 32px;
  filter: var(--shadow);
}

.loading > div > * {
  margin: 0;
}

.loading > div > img {
  height: 128px;
}

.loading > div > h1 {
  margin-bottom: 8px;
}

.loading > div > p {
  text-align: center;
  width: 400px;
}

.loading > div > *:not(:last-child) {
  margin-bottom: 16px;
}
</style>